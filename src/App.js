
import './App.css';
import profile from "./Image/b.png";
import email from "./Image/email.jpg";
import pass from "./Image/pass.png";
import bank from "./Image/Green.jpg";

function App() {
  return (
    <div className = "main">
      <div className = "brand-image">
        <img src = {bank} alt = "bank" className = "bank"/>
      </div>
      <div className = "sub-main">
        <div>
          <div className = "imgs">
            <div className = "container-image">
              <img src = {profile} alt = "profile" className = "profile"/>
            </div> 


          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src = {email} alt = "email" className = "email"/>
              <input type = "text" placeholder = "user name" className = "name"/>
            </div>
            <div className = "second-input">
              <img src = {pass} alt = "pass" className = "email"/>
              <input type = "text" placeholder = "password" className = "name"/>
            </div>
            <div className = "login-button">
              <button>Login</button>
            </div>
            
              <p className = "link">
                <a href = "#">Forgot password ?</a> Or <a href = "#" >Sign Up</a> 
              </p>
            
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
