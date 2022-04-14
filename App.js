
// ---- useContext+Reduce = Redux, truyen du lieu tu compA - compB - compC ----
// 1. Create context
// 2. Provider
// 3. Consumer
// ---- useContext hook, truyen du lieu tu compA - compB - compC ----

import { useContext } from 'react';
import { useStore } from './store'

function App() {

    const [ state, dispatch ] = useStore()    // nhan data tu may cai comp khac createContext tu cha, useContext tu con de lay lai bien truyen qua lai tu cac comp
  
    return (
        <div className="App" style={ { padding: '20px' } }>
            <h1> Hello world Setuping </h1>

           <input 
               
           />
        </div>
    );
}
export default App;

