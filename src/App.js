import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
            <h1 className='generator_header'>Password Generator</h1>
            {/* password generator and icon */}
            <div className="generator-password">
              <h3>Password</h3>
              <button>
                <i>lo</i>
              </button>
            </div>
            {/* password length */}
            <div className="form-group">
              <label htmlFor="">Password Length</label>
              <input type="number" name="" id="" />
            </div>
            {/* uppercase */}
            <div className="form-group">
              <label htmlFor="">Include Uppercase Letters</label>
              <input type="checkbox" name="" id="" />
            </div>
            {/* lowercase */}
            <div className="form-group">
              <label htmlFor="">Include Lowercase Letters</label>
              <input type="checkbox" name="" id="" />
            </div>
            {/* symbols */}
            <div className="form-group">
              <label htmlFor="">Include Symbols</label>
              <input type="checkbox" name="" id="" />
            </div>
            {/* numbers */}
            <div className="form-group">
              <label htmlFor="">Include Numbers</label>
              <input type="checkbox" name="" id="" />
            </div>
            {/* Generate button */}
            <div className="generateBtn_Div">
              <button>
                <i>sym </i>
                Generate button
              </button>
            </div>
            <p>alert</p>
        </div>
      </div>
    </div>
  );
}

export default App;
