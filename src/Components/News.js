// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'


// export class News extends Component {
//     static defaultProps = {
       
//         category: 'general',
//       }

//       static propTypes = {
        
//         category: PropTypes.string,
//       }

//     constructor(){
//         super();
//         this.state={
//             articles:[],
//             loading:false,
//             page:1

//         }
//     }
// async componentDidMount(){
//     console.log("cdm");
//     let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=035f556a3a754d0685379316a2d42a77";
//     this.setState({loading: true});
//     let data=await fetch(url);
//     let parsedData= await data.json()
//     this.setState({
//          articles : parsedData.articles ,
//          totalResults:parsedData.totalResults,
//          loading:false
//         })
// }

//  Prev= async()=>{
//     let url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=035f556a3a754d0685379316a2d42a77&category=${this.props.category}&page=${this.state.page-1}&pageSize=5`;
//     this.setState({loading:true});
//     let data=await fetch(url);
//     let parsedData= await data.json()
    
//     this.setState({
//         page:this.state.page-1,
//         articles : parsedData.articles,
//         loading:false
//     })
    

// }

// Next= async()=>{

//     let url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=035f556a3a754d0685379316a2d42a77&category=${this.props.category}&page=${this.state.page+1}&pageSize=5`;
//     this.setState({loading: true});
//     let data=await fetch(url);
//     let parsedData= await data.json()
//     this.setState({
//         page:this.state.page+1,
//         articles : parsedData.articles,
//         loading:false
//     })
    
// }



//   render() {
//     return (
//       <div className="container my-3">
//         <h2 className='text-center'>Top Headlines</h2>
//         {this.setState.loading && <Spinner/>}
//         <div className="row">
//             {this.state.articles && this.state.articles.map((element)=>{
//                 return <div className="col-md-4" key={element.url}>
//                 <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} iurl={element.urlToImage} newsurl={element.url}/>
//             </div>
//             }
//             )}
            
//         </div>
//         <div className="d-flex justify-content-between">
//         <button type="button" disabled={this.state.page<=1} className="btn btn-outline-dark" onClick={this.Prev}> Previous</button>
//         <button type="button" className="btn btn-outline-dark" onClick={this.Next}>Next </button>
//         </div>

//       </div>
//     )
//   }
// }

// export default News

import React, { Component } from 'react'
import NewsItem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){ 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=035f556a3a754d0685379316a2d42a77&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false})
    }

     handlePrevClick = async ()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=035f556a3a754d0685379316a2d42a77&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }
    
     handleNextClick = async ()=>{
        console.log("Next"); 
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=035f556a3a754d0685379316a2d42a77&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json() 
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
    }
        }

    render() { 
        return (
            // <div className="container my-3">
            //     <h1 className="text-center" style={{margin: '35px 0px'}}>NewsApp</h1>
            <div className="container my-5">
                   <h2 className='text-center' style={{color:'white'}}>Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row"> 
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News

