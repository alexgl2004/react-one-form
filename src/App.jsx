import { useState } from 'react'
import './App.css'

import {languages} from './data.js'

export function EngBlock() {
 return (<>

 </>)
}

function App() {

  const [count, setCount] = useState(0);
  
  const [lang, setLang] = useState("DE");
  const [login, setLogin] = useState('LOGIN');
  const [loginName, setLoginName] = useState("Guest");
/*  const [block, setBlockLang] = { EngBlock };????*/

  

  return (
    <>
      <div className="login-text-form">
        <div className="header">
          <div className="lang-show">
            {lang}
          </div>
        </div>
        <div className="textBlock">
          <h1>{languages[lang]['H1']}</h1>
          <div className="card">
              <div className="LoginText">
                {languages[lang][login]['Welcome_TEXT'].replace('#LOGIN#',loginName)}
              </div>
              <div className={login + " WarningText " + (login=='LOGIN' ? 'red' : 'green')}>
                {languages[lang][login]['Warning_TEXT']}
              </div>
          </div>
        </div>
        <div className="buttonBlock">
          <div className="blockLeft">
            <div>
              <button className={lang=='EN' ? 'green' : 'red'} onClick={() => setLang((lang) => 'EN' )}>
                Switch to Englisch
              </button>
            </div>
            <div>
              <button className={lang=='DE' ? 'green' : 'red'} onClick={() => setLang((lang) => 'DE' )}>
                Umschalten auf Deutch
              </button>
            </div>
          </div>
          <div className="blockRight">
            <button className={login=='LOGIN' ? 'red' : 'green'} onClick={() => { 
                if(login=='LOGIN'){
                  setLogin((login) => 'LOGOUT'); 
                  setLoginName((loginName) => 'Alex'); 
                }else{
                  setLogin((login) => 'LOGIN'); 
                  setLoginName((loginName) => '');
                }
              }
            }>
              {login=="LOGIN" ? 'Login':'Logout'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

/*          
  <button onClick={() => setLang((lang) => lang=='DE' ? 'EN' : 'DE' )}>
    {lang}
  </button>
*/          
