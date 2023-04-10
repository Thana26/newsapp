// import React, { Component } from 'react'

// export class Newsitem extends Component {
//   render() {
//     let {title,description, iurl,newsurl}=this.props;
//     return (
//       <div className='my-3'>
//         <div className="card" style={{width:'18rem'}}>
//         <img src={iurl} className='card-img-top' alt="..."/>
//         <div className="card-body">s
//         <h5 className="card-title"><b>{title}....</b></h5>
//         <p className="card-text ">{description}....</p>
//         <a href={newsurl} target="_blank" rel='noreferrer' className='btn btn-sm btn-dark'>Read more</a>
//         </div>
//         </div>
        
//       </div>
//     )
//   }
// }

// export default Newsitem

import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width:"18rem"}}>
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
