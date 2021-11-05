import './App.css'
    import react from "react"

    class Star extends react.Component{
        constructor(props){
            super(props);
            this.state={on:false};
            this.handleClick=this.handleClick.bind(this);
 
 this.x=0;
         
     
   }
   handleClick(x){
       if (this.x%2==0){
           this.x=1;
       this.setState({on:true});
   }
else
{  this.x=0;
this.setState({on:false});
}}
  
   render(){
       return(
        
           // eslint-disable-next-line jsx-a11y/alt-text
           <img className="star" style={styles} src={ this.state.on ? process.env.PUBLIC_URL+'./star_on.png':
           process.env.PUBLIC_URL+'./star_off.png'}
           onClick={this.handleClick} 
 />
          

       );
   }
    }
    const styles={
        
        
        
    }
    export default Star;
    