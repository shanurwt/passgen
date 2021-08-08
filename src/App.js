import './App.css';
import React, {useState} from 'react';
import {UppercaseLetters, LowercaseLetters, Symbols, Numbers} from './Components/Character'
import { BsGear } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';

function App() {

  const [password, setPassword] = useState('Password');
  const [alert, setAlert] = useState('Press Generate Button');
  const [strength, setStrength] = useState(16);
  const [up, setUp] = useState(false);
  const [low, setLow] = useState(true);
  const [sym, setSym] = useState(false);
  const [numb, setNumb] = useState(true);

// submit function
  const handlePass = (e) => {
    var characterList = '';
      if(up){
        characterList += UppercaseLetters;
      }
      if(low){
        characterList += LowercaseLetters;
      }
      if(sym){
        characterList += Symbols;
      }
      if(numb){
        characterList += Numbers;
      }
      setPassword(createPassword(characterList));
  }
//  createPassword function
  const createPassword = (characterList) => {
    let password = '';
    const CharacterListLength = characterList.length;

    for(let i=0; i <= strength; i++){
      const characterIndex = Math.floor(Math.random() * CharacterListLength+1);
      password += characterList.charAt(characterIndex);
    }
   
    return password;
  }
//  copy function 
  const copy = (e) => {
    navigator.clipboard.writeText(password)
    if (password.length > 0) {
      setAlert('Password is copied')
    }
    else{
      setAlert('Click to generate password')
    }
  }

  return (

      <div className="container">
        <div className="generator">
            <h1 className='generator-head'>Password <b className='gen'>Generator</b> </h1>

            {/* password generator and icon */}
            <div className="generator-password">
              <h3>{password}</h3>
              <button onClick={copy}>
                <FiCopy className='copy'/>
              </button>
            </div>

            {/* password length */}
            <div className="form-group">
              <label htmlFor="password-length" className='pass'>Password Length</label>
              <input type="number" name="password-strength" id="p-strength" defaultValue={strength} onChange={(e)=> setStrength(e.target.value)} max='20' min='8' />
            </div>

            {/* uppercase */}
            <div className="form-group">
              <label htmlFor="uppercase">Include Uppercase Letters</label>
              <input type="checkbox" name="" id="checkbox" checked={up} onChange={(e) => setUp(e.target.checked)} />
            </div>

            {/* lowercase */}
            <div className="form-group">
              <label htmlFor="lowercase">Include Lowercase Letters</label>
              <input type="checkbox" name="" id="checkbox" checked={low} onChange={(e) => setLow(e.target.checked)} />
            </div>

            {/* symbols */}
            <div className="form-group">
              <label htmlFor="symbols">Include Symbols</label>
              <input type="checkbox" name="" id="checkbox" checked={sym} onChange={(e) => setSym(e.target.checked)} />
            </div>

            {/* numbers */}
            <div className="form-group">
              <label htmlFor="numbers">Include Numbers</label>
              <input type="checkbox" name="" id="checkbox" checked={numb} onChange={(e) => setNumb(e.target.checked)} />
            </div>

            {/* Generate button */}
            <div className="generateBtn_Div">
              <button onClick={handlePass}>
                <BsGear />
                Generate button
                <BsGear />
              </button>
            </div>
            {/* alert */}
            <p className='alert'>{alert}</p>
        </div>
      </div>
  );
}

export default App;