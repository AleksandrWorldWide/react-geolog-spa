
import { useEffect, } from 'react';
import './App.css';


import  Main  from './components/Main/Main';
import { Catalog } from './components/Catalog/Catalog';


const App = ({title}) => {

		useEffect(() => {
			document.title = title
		}
			,[title])



  return (
    <div className="App">
		 
		 {/* <Main/> */}
		 <Catalog/>
		 
    </div>
  );
}

export default App;
