
import { useEffect } from 'react';
import './App.css';
import  { Main } from './components/Main/Main';
// import { Catalog } from './components/Catalog/Catalog';
// import { About } from './components/About/About';
import { CatalogItem } from './components/CatalogItem/CatalogItem';
import { Pattern } from './components/Pattern/Pattern'

const App = ({title}) => {

		useEffect(() => {
			document.title = title
		}
			,[title])



  return (
    <div className="App">	 
		 {/* <Pattern WrappedComponent={<Main/>}/> */}
		 {/* <Pattern WrappedComponent={<Catalog/>}/> */}
		 <Pattern WrappedComponent={<CatalogItem/>}/>
		 {/* <Pattern WrappedComponent={<About/>}/> */}
    </div>
  );
}

export default App;
