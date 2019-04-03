import React from "react"
import Card from "../components/movie/Card"
const message="It doesn't have more movies"
let newMovies=[]
let idMovies=[]; 

class Popular extends React.Component{
  constructor(props){
    super(props);
    this.onClickCard=this.onClickCard.bind(this)
    // this.saveToLocalStorage=this.saveToLocalStorage.bind(this)
    this.state={
      movies:[],
      currentPage:1,
      
    }
  }
  saveToLocalStorage(idMovie){
    idMovies.push(idMovie);
    localStorage.setItem('my_list',JSON.stringify(idMovies))
   
  }

  onClickCard(movieId) {
    this.onClickNextMovie();
    this.saveToLocalStorage(movieId);
  }

  onClickNextMovie(){
    console.log(">>> onClickNextMovie")
    // console.log("currentPage",currentPage)
    this.setState({
      currentPage: this.state.currentPage + 1
    })

    console.log("<<< onClickNextMovie")
  }
  componentDidMount(){
    console.log(">>> componentDidMount")
    const api_key='2396dc7a5b886d921e033a6f87d94ad4'
    const url=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key} `;
    fetch(url)
      .then(res=>res.json())
      .then(json=>{
        console.log("##1", url)
          const movies=json.results
          console.log(movies)
          this.setState({
            movies
          })
      }) 
     

      console.log("<<<< componentDidMount")
  }
  renderList(){
    const {movies,currentPage}=this.state
    console.log("movies", movies)
    const Movies=movies;
    const nbrMovies=movies.length
    const totalPage=nbrMovies/2;
    if(currentPage>totalPage){
      return(<h2>{message}</h2>) 
    }
    console.log("totalPage",totalPage)
    console.log("currentPage",currentPage)
  
      let min=(currentPage-1)*2;
      let max=min+2
      console.log("min",min) 
      newMovies=Movies.slice(min,max);  
      console.log("newMovies",newMovies)          
   
    const List=newMovies.map((movie,index)=>{return(
      <Card 
        isSelected={true}
        key={index}
        title={movie.title}
        description={movie.overview}
        id={movie.id}
        image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        onClick={this.onClickCard}
       
        
      />

    )})
      return List
  }
  render(){
    
    return(
      <div className="col-12">
        <div className="row">
          
          {this.renderList()}
 
        </div>
      </div>
    )
    
   
  }
}
export default Popular