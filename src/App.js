import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Portfolio from "./Components/Portfolio"
import ClipLoader from "react-spinners/ClipLoader";
import GridLoader from "react-spinners/ClipLoader";

import {useState , useEffect} from "react"


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);


  return (
    <div className="App">
    {loading?
      <div style = {{height : "100vh", margin : "3in"}}>
      <text className="display-2 text-light d-block">Welcome to My Portfolio</text>
      <ClipLoader color={"#FFFFFF"} loading={loading} size={150} />
      </div> 
       :
       <div>
       <Portfolio></Portfolio>
       </div>
      }
      </div>
  );
}
export default App;
