import React from "react"
import DVD from "../../DVD.png"
class Card extends React.Component{
render(){
const  {title,description,image,onClick=()=>{}, id}=this.props
return(
<div className="col-6 col-md-6">
    <button className="img-fluid" 
         onClick={() => onClick(id)}       
    >

    <img className="img-fluid" src={image==null?DVD:image} alt={title} />
    <h5>{title}</h5>
    <p>{description}</p>
    </button>



</div>
)
}

}
export default Card