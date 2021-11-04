import React from "react";
class Change extends React.Component{
  
    constructor(props){
      super(props)
      this.state={
          msg:"Bonne découverte des composants React Components!!!"
         
      }
  }
 
  render(){
    return(
this.state.msg

    )
}}

export default Change;