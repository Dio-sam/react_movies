import React from "react";
import Card from "./movie/Card"

class MyList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      movieIds : this.getFromLocalStorage()
    };

    this.itemsURL=this.itemsURL.bind(this)
    this.getFromLocalStorage=this.getFromLocalStorage.bind(this)
  }
  getFromLocalStorage(){
    const my_list=localStorage.getItem('my_list');
    const idMovies=JSON.parse(my_list)
    console.log(idMovies)
    return idMovies
  }
  componentDidMount(){ 
    
    const itemsURL=this.itemsURL()
    Promise.all(itemsURL.map((url,index)=>{
      return(
        fetch(url)
        .then(res=>res.json())
        .then(json=>json)
        )}))
    .then((movies) => {
      this.setState({
        movies
      })
      console.log(movies)
  })
  }
  itemsURL(){
   let itemsId=this.state.movieIds;
   let URLs=[]
   console.log('ID', itemsId) 
   console.log('ID.lenth', itemsId.length) 
   
   const API_KEY='2396dc7a5b886d921e033a6f87d94ad4'
   for(let i=0;i< itemsId.length;i++){
    URLs.push(`http://api.themoviedb.org/3/movie/${itemsId[i]}?api_key=${API_KEY}`)  
  }
   console.log('urls',URLs)
   return URLs
  }
  render(){
  let {movies}=this.state
    return(

      <div className='col-12'>
        <div className='row'>
         {movies.map((movie,index)=>{
           return(
            <Card 
            isSlected={false}
              key={index}
              title={movie.title}
              description={movie.overview} 
              image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}   
            />
           )
         })} 

        </div>
      </div>
    )
  }

}
export default MyList