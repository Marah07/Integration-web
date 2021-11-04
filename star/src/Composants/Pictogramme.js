import React from "react";
import Icone from "./Icone";
import App1 from "./Change";
import App2 from "./change2";
import Change from'./Composants/Change';
class Pictogramme extends React.Component{
     Changement=(Change)=>{
      this.setState(
          {
            msg:"Premier défi réussi"
          } 
      );
  }
    render(){
        return(
<div>
          {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
          <Icone />

          <hr />
        <div>
         <button onClick={App2} type="button" class="btn no-outline btn-secondary">
        
          <i class="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
          &nbsp;
          <span class="align-middle">J'aime</span>
        </button>
        </div>
    </div>
        )
    }
}

export default Pictogramme;