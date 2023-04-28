import logo from './logo.svg';
import './App.css';
import  Header from './components/Header';
import Main from './components/Main';
import avatar from './images.png'
import Button from "./components/Button";
import ModeToggle from "./components/ModeToggler";

function Logo(props) {
    const userPic = <img src={avatar}/>
    return userPic;
}

function App(){
    return(
        <div>
            <Header name="Abdikadir" color="red"/>
            <Main greetings="Morning"/>
            <Logo/>
            <Button/>
            <ModeToggle/>

        </div>
    );
}


export default App;

// props.title=Child component