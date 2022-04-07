import logo from './logo.svg';
import './App.css';
import {Logo} from "./components/Logo";
import {Button} from "./components/Button";
import {Links} from "./components/Links";
function App() {
  let navarr = ["services","projects","about"];
  return (
    <div className="App">
     <Logo /> 
     {navarr.map((e)=>{
       return <Links navl={e}/>
     })}
     <Button />
    </div>
  );
}

export default App;
