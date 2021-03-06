import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Commentaire from './Composants/Commentaire';
import Icone from './Composants/Icone';
//import Pictogramme from './Composants/Pictogramme';
import App1 from './Composants/Change';

function App(){

  return (
    <div className="App" id="root">
    <div class="col-6 offset-3">
    <div class="card">
      <div class="card-block">
        <div class="row">
          <div class="col-2">
          <img src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"  class="rounded float-left" class="img-thumbnail" width="80" height="70" />
          </div>
          <div class="col-10 profile-row">
            <div class="row">
            <a href="#"><h1> Débuter avec React </h1></a>
            </div>
          </div>
        </div>
        
        
        <div>
       {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
        <Icone />
        <App1/>
        <hr/>
        </div>
       
     
      </div>

      <div class="card-footer text-muted">
       <Commentaire />
      </div>

    </div>
  </div>
    </div>
    
  );
}

export default App;
