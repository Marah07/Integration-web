import React from "react";
import App1 from "./Change";
class App2 extends React.Component{
  
    constructor(props){
      super(props)
      this.state={
        msg:"Premier défi réussi"
         
      }
  }

  render(){
    return(
<p>{this.state.msg}</p>

    )
}}

export default App2;