import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItems from './NewsItems'
import Spinner from './Spinner';


 function Newscontainer(props) {
 const [articles,setArticles]=useState([]);
const [page,setPage]=useState(1);
const[totalResults,setTotalResults]=useState(0)






const fetchApi=async()=>{
  props.setProgress(10)
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6ec369fc1f594493852f886a6e9d9e64&page=${page}&pageSize=${props.pageSize}`
const res= await fetch(url);
props.setProgress(40)
const data=await res.json()
props.setProgress(70)
// console.log(data)

setArticles(data.articles)
// console.log(articles)
setTotalResults(data.totalResults)
props.setProgress(100)

}

useEffect(()=>{
    fetchApi()
    // eslint-disable-next-line
},[props.category])


// const nextPage=async ()=>{
//     setPage(page+1)
//     fetchApi()

// }
// const previousPage=async ()=>{
//     setPage(page+1)
//     fetchApi()

// }

const fetchMoreData=async()=>{
  
   
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6ec369fc1f594493852f886a6e9d9e64&page=${page+1}&pageSize=${props.pageSize}`
  setPage(page+1)
  const res= await fetch(url);
 
  const data=await res.json()
  
  // console.log(data)
  
  setArticles(articles.concat(data.articles))
  // console.log(articles)
  setTotalResults(data.totalResults)
 

}


const capatalize=(word)=>{
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
  
}


  



  return (
    <>
    <h1 className='container my-3 text-centre' style={{display:'flex',justifyContent:'center'}}>NewsManiac - Top {capatalize(props.category)} Headlines</h1>
    <div className="container my-4 "style={{display:'flex',justifyContent:'center'}}>

    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}
      
        >
          <div className="container">  
    <div className='row'>
      {
        articles.map((element)=>{
        return(  <div className='col-md-4' key={element.url}> 
            <NewsItems title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,80):''}  source={element.source.name?element.source.name:'unknown'}  newsUrl={element.url}  imageUrl={element.urlToImage} />  
            </div>) 

        })
      }

        
    </div>
    </div> 
    </InfiniteScroll>
    
    </div>
    
    {/* <div style={{display: 'flex',
    justifyContent: 'space-between',
    margin: '0 4rem 2rem 4rem'}}>
      <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={previousPage}>Previous</button>
      <button type="button" disabled={Math.ceil(page+1 > totalResults/pageSize)} className="btn btn-dark"onClick={nextPage}>Next</button>
      </div> */}
    
    </>
  )
}
export default Newscontainer