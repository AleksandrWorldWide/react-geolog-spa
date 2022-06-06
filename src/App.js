
import { useEffect, } from 'react';
import './App.css';


import  { Main } from './components/Main/Main';
import { Catalog } from './components/Catalog/Catalog';
import { Pattern } from './components/Pattern/Pattern'

const App = ({title}) => {

		useEffect(() => {
			document.title = title
		}
			,[title])



  return (
    <div className="App">
		 
		 {/* <Main/> */}
		 {/* <Catalog/> */}
		 <Pattern WrappedComponent={<Main/>}/>
		 {/* <Pattern WrappedComponent={<Catalog/>}/> */}
    </div>
  );
}

export default App;
