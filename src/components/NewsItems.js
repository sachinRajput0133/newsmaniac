import React from 'react'
 function NewsItems(props) {
  return (
    <>
    
       
      <div className="card m-4" style={{width: '18rem'}}>
      <div>
        <span className="badge rounded-pill text-bg-danger" style={{display: 'flex',
    position: 'absolute',right: '10px'}} >{props.source}</span>
       </div>
  <img src={props.imageUrl?props.imageUrl:'https://images.hindustantimes.com/tech/img/2022/09/03/1600x900/austin-poon-JO_S6ewBqAk-unsplash_1662016338754_1662195600355_1662195600355.jpg'}  
  className="card-img-top" style={{display: 'flex',
    justifyContent:'center',
    maxHeight: '154px',
    objectFit: 'cover',
    objectPosition: 'top'
}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.description}...</p>
    <a href={props.newsUrl} target='_blank'  className="btn btn-primary">Read More</a>
  </div>
</div>

    
</>
  )
}



export default NewsItems