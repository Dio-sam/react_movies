import React from "react";
import Card from "../components/movie/Card"
import Api from "../utils/Api"
import LocalStorage from "../utils/LocalStorage"
import config from '../config';
class MyList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      movieIds : LocalStorage.get('my-list')!==null?LocalStorage.get('my-list'):[]
    };

  
  }

  componentDidMount(){
    console.log( "ids",this.state.movieIds)
    const itemsURL=this.state.movieIds.map(id=> Api.getMovie(id))
    Promise.all(itemsURL)
    .then((movies) => {
      this.setState({
        movies
      })  
    });
  }
  
  render(){
    
    let {movies}=this.state
    if (this.state.movieIds.length ===0) {
      return (
        <div>
          <h1>{config.MSG}</h1>
        </div>
      )}
   console.log(typeof this.state.movieIds)
    return(
      <div className='col-12'>
        <div className='row justify-content-between'>
         { 
           movies.map((movie)=>{
           return(
            <Card 
              {...movie}
              key={movie.id}    
            />
           )
         })} 
        </div>
      </div>
    )
  }

}
export default MyList