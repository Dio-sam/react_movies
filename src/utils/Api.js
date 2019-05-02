
import config from '../config';

class Api {
  getLatestMovies(){
    
    const url=`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${config.TODAY}&primary_release_date.lte=${config.NEXT_WEEK}&api_key=${config.API_KEY}`
    return fetch(url)
      .then(res=>res.json())
      .then(json=>json.results)
  }
  getPopularMovies(){
    console.log(">>> componentDidMount")
   
    const url=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${config.API_KEY} `;
    return fetch(url)
      .then(res=>res.json())
      .then(json=>json.results) 
  }
  getMovie(id){
    
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}`)
      .then(res => res.json());
    }


}
export default new Api()