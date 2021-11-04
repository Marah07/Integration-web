import './App.css'
    import react from "react"
    class Star extends react.Component{
        constructor(props){
            super(props);
            this.state={on:false};
            this.handleClick=this.handleClick.bind(this);

                
     
   }
   handleClick(){
       this.setState({on:true});
   }
   render(){
       return(
           // eslint-disable-next-line jsx-a11y/alt-text
           <img className="star" style={{height:20, width:20}} src={ this.state.on ? process.env.PUBLIC_URL+'./star_on.png':
           process.env.PUBLIC_URL+'./star_off.png'}
           onClick={this.handleClick}
 />
          

       );
   }
    }
    export default Star;
    