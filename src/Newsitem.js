import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description, iurl,newsurl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width:'18rem'}}>
        <img src={iurl} className='card-img-top' alt="..."/>
        <div className="card-body">
        <h5 className="card-title"><b>{title}....</b></h5>
        <p className="card-text ">{description}....</p>
        <a href={newsurl} target="_blank" rel='noreferrer' className='btn btn-sm btn-dark'>Read more</a>
        </div>
        </div>
        
      </div>
    )
  }
}

export default Newsitem
