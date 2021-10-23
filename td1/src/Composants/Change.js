import React from "react";


class App1 extends React.Component{
    constructor(props){
      super(props)
      this.state={
          msg:"Bonne découverte des composants React Components!!!"
      }
  }

  Changement=()=>{
      this.setState(
          {
            msg:"Premier défi réussi"
          } 
      );
        }

  render(){
    return(
        
        <div>
        <p>{this.state.msg}</p>
        <div>
      
      <button onClick={this.Changement} class="btn no-outline btn-secondary" >
      
       <i  class="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
       
       <span  class="align-middle">J'aime</span>
     </button>
     </div>
  </div>

    )
}
}

export default App1;