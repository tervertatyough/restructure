import "../styles/login.css";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="loginContainer">
          <h4 className="heading">Login to Restructure</h4>
          <p>
            Enter your email address and the default password <br /> sent to
            your email address
          </p>

          <form className="formContainer">
            <div class="wrapper">
              <span class="icon">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              </span>
              <input class="input" type="text" placeholder="Email Address" />
            </div>
            <div class="wrapper">
              <span class="icon">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input class="input" type="text" placeholder="Password" />
            </div>
            <input class="button" type="button" value="Continue" />
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
