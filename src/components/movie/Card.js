import React from "react"
import DVD from "../../DVD.png"
class Card extends React.Component{
render(){
const  {title,overview,poster_path,onClick=()=>{}, id}=this.props
const image=`https://image.tmdb.org/t/p/w300/${poster_path}`
return(
<div className="col-6  text-center col-md-4 card">
    <button  onClick={()=>onClick(id)} ><img className="img-fluid" src={poster_path==null?DVD:image} alt={title} /></button> 
  <div className="info">
    <h5>{title}</h5>
    {/* <p>{overview}</p> */}
  </div>
</div>
)
}

}
export default Card