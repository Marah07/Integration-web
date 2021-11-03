import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard';

function App(){


  return (

    <div className="contacts">

    <ContactCard 
    name="Mr. Whiskerson"
    imgUrl="http://placekitten.com/300/200"
    phone="(212) 555-1234"
    email="Email: mr.whiskaz@catnap.meow"
     />
     
    <ContactCard 
    name="Fluffykins" 
    imgUrl="http://placekitten.com/400/200"
    phone="(212) 555-2345"
    email="Email: Email: fluff@me.com"
    />

    <ContactCard 
    name="Destroyer"
    imgUrl="http://placekitten.com/400/300"
    phone="(212) 555-2345"
    email="Email: mofworlds@yahoo.com"
     />

    <ContactCard 
    name="Felix" 
    imgUrl="http://placekitten.com/200/100"
    phone="(212) 555-4567"
    email="Email:  thecat@hotmail.com"
    />

  
    

        </div>
  );
}

export default App;
