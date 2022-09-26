  import login from "../../images/login.svg";
  import { useState } from "react";
  import "./authStyles.css"
//   import Axios from "axios";
//   import { URL } from "../Home";
//   import { useNavigate } from "react-router-dom";
  
  
  
  // initializing login values
  const loginInitialValues = {
    username: "",
    password: ""
  };
  
  const Login = () => {
  
    const [logininfos, setLoginInfos] = useState(loginInitialValues);
    const [loading, setLoading] = useState(false);
  
    //used to redirect to home page
    // let navigate = useNavigate();
  
    // fucntion to get user details
    const setLoginDetails = async (e) => {
      setLoginInfos({ ...logininfos, [e.target.name]: e.target.value });
    };
  
    // function to submit registration form
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const result = await Axios.post(`${URL}/token/`, logininfos);
  
    //     if (result?.status === 200) {
    //       setLoading(false);
    //       onLoginSuccess()
    //       return navigate("/", { replace: true });
    //     }
    //   } catch {
    //     console.log("failed to login, wrong credentials");
    //   }
    //   setLoginInfos(loginInitialValues);
    // };
  
    return (
    //   <>
          <div className="backgroundCont">
            <form className="formWrapper">
              <div className="content">
                <h1>Login</h1>
                <div className="rightInput__field">
                  <label htmlFor="username">username:</label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="username"
                      value={logininfos.username}
                      onChange={setLoginDetails}
                  />
                  <label htmlFor="password">password:</label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                      value={logininfos.password}
                      onChange={setLoginDetails}
                  />
                </div>
  
                <div className="form__footer">
                  Don't have account? <button >Register</button>
                </div>
  
                <button>{loading ? "Submitting..." : "Submit"}</button>
              </div>
              <img src={login} alt="pic" className="formImage"/>
              {/* <CloseFormButton /> */}
            </form>
          </div>
    //   </>
    );
  };
  
  export default Login;
  