import React, { Component } from 'react'

export default class Chap4A1 extends Component {

    constructor(props) {
        super(props);
        this.state={name:'',
              opt:"",
              commentaire:""
    };
    this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name:event.target.value})
       
    }
    handleChange3(event) {
        this.setState({commentere:event.target.value})
       
    }
    handleChange2(event) {
        
        this.setState({opt:event.target.value})
    }


    handleSubmit(event) {
        alert('Nom: '+ this.state.name);
        alert('Saveur: '+ this.state.opt);
        alert('commentaire: '+ this.state.commentaire);
    }

  render() {
   
    return (
      <form onSubmit={this.handleSubmit}>
       <label>
           Nom: <input type = "text" value={this.state.name} onChange={this.handleChange} placeholder="Veuillez saisir votre nom"/>
       </label><br/><br/>
       <label>
           choisssez votre saveur paréférée: <select onChange={this.handleChange2} >
           <option   >saveur</option>
           <option  value={"Noix de coco"}  >Noix de coco</option>
           <option  value={"Pamplemousse"} >Pamplemousse</option>
           <option value={"Mangue"}  >Mangue</option>
           </select>
       </label><br/><br/>
       <label>
       commentaire: <textarea onChange={this.handleChange3} />
       </label><br/><br/>
       <input type="submit" value="Afficher" />
          
        
      </form>
    )
  }
}
