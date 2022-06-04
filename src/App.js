
import { useEffect, } from 'react';
import './App.css';

import { Main } from './components/Main/Main';


const App = ({title}) => {

		useEffect(() => {
			document.title = title
		}
			,[title])



  return (
    <div className="App">
		 
		 <Main/>

		 
    </div>
  );
}

export default App;
