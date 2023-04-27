import logo from './logo.svg';
import './App.css';
import  Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar'

function App(){
    return(
        <div>
            <Header name="Abdikadir" color="red"/>
            <Main greetings="Morning"/>

        </div>
    );
}


export default App;

// props.title=Child component