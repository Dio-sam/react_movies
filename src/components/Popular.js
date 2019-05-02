import React from "react"
import Card from "../components/movie/Card"
import Api from "../utils/Api"
import LocalStorage from "../utils/LocalStorage"
import config from '../config';
import { Link } from 'react-router-dom';

class Popular extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movies:[],
      currentPage: parseInt(props.match.params.page)||1  
    }
    this.onClickCard=this.onClickCard.bind(this)
  }


  onClickCard(movieId) {  
    // this.onClickNextMovie();
    LocalStorage.save('my-list',movieId) 
 }

  // onClickNextMovie(){
  //   this.setState({
  //     currentPage: this.state.currentPage + 1
  //   })
  // }
  componentDidMount(){
    Api.getPopularMovies()
      .then(movies=>{
        this.setState({
          movies 
        });
      });
  }
 

  shouldComponentUpdate(nextProps,nextState) {
    //  console.log('popular cnpmdDidUnextProps',nextProps);
    // console.log('popular cnpmdDidUnextState',nextState);    
    // console.log('popular  cmdDidU', this.props);
    // console.log('popular cmdDidU', this.state);
    const nextPage = parseInt(nextProps.match.params.page);
    if (nextPage !== this.state.currentPage) { 
      if (isNaN(nextPage) === true) {
      return true;
       }
      else{
        this.setState({
            currentPage: nextPage 
          });
        return false;
      }
          
    }
    return true;
  }

  renderPagination(){
    console.log(this.state)
    console.log(this.props)
    const {movies}=this.state
    const moviesTotal=movies.length;
    let moviePage = []
    for(let i=1;i<=moviesTotal/2;i++){
      moviePage.push(
        <Link key={i} 
          to={{
            pathname: `/popular/${i}`,
            state: { currentPage: i }
          }}>{i}
        </Link>
      );
    }
    return moviePage
  }
  
  renderList(){
    let newMovies=[]
    const {movies,currentPage}=this.state
    if (movies.length === 0) {
      return (
        <div>
          <h1>Popular</h1>
          <p>Loading...</p>
        </div>
      )
    }
    const nbrMovies=movies.length;
    const totalPage=nbrMovies/2;
    if(currentPage>totalPage){
      return(<h2>{config.MESSAGE}</h2>) 
    }
    let min=(currentPage-1)*2;
    let max=min+2; 
    newMovies=movies.slice(min,max);           
    const List=newMovies.map((movie)=>{
      return(
        <Card 
          {...movie}
          key={movie.id} 
          onClick={this.onClickCard}
        />
      )
    })
    return List;
  }


  render(){  
    return(
      <div className="col-12">
        <div className="row justify-content-between">
            {this.renderList()}
          <div className="col-12">
           {this.renderPagination()}
          </div> 
        </div>
      </div>
    )
  }
}
export default Popular