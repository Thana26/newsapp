import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
       
        category: 'general',
      }

      static propTypes = {
        
        category: PropTypes.string,
      }

    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1

        }
    }
async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&apiKey=035f556a3a754d0685379316a2d42a77&page:1&pageSize=10";
    this.setState({loading: true});
    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({
         articles : parsedData.articles ,
         totalResults:parsedData.totalResults,
         loading:false
        })
}

 Prev= async()=>{
    let url=`https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&category=${this.props.category}&apiKey=035f556a3a754d0685379316a2d42a77&page=${this.state.page-1}&pageSize=10`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData= await data.json()
    
    this.setState({
        page:this.state.page-1,
        articles : parsedData.articles,
        loading:false
    })
    

}

Next= async()=>{

    let url=`https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&category=${this.props.category}&apiKey=035f556a3a754d0685379316a2d42a77&page=${this.state.page+1}&pageSize=10`;
    this.setState({loading: true});
    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({
        page:this.state.page+1,
        articles : parsedData.articles,
        loading:false
    })
    
}



  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center'>Top Headlines</h2>
        {this.setState.loading && <Spinner/>}
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} iurl={element.urlToImage} newsurl={element.url}/>
            </div>
            }
            )}
            
        </div>
        <div className="d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-outline-dark" onClick={this.Prev}> Previous</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.Next}>Next </button>
        </div>

      </div>
    )
  }
}

export default News

