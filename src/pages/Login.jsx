// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//   const [loginCredit, setLoginCredit]=useState({
//     email:"eve.holt@regres.in",
//     password:"cityslicka",
//   });
//   const { login } = useContext(AuthContext);
  
//   const handleChange=(e)=>{
//   const { name, value }=e.target;
//   setLoginCredit({
//     ...loginCredit,
//     [name]:value,
//   });
//   };
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     if(loginCredit.email && loginCredit.password)
//     {
//       login(loginCredit.email,loginCredit.password);
//     }
//   };
//   return (
//     <div>
//       Login 
//       <form onSubmit={handleSubmit}
//       style={{
//         display:"flex",
//         flexDirection:"column",
//         margin:"auto",
//         maxWidth:"200px",
//         gap:"10px",
//       }}
//       >
        
      
//       <input data-cy="login-email"
//       name="email"
//       type="email"
//       placeholder="enter email address"
//       value={loginCredit.email} 
//       onChange={handleChange}/>
//       <input data-cy="login-password"
//       name="password"
//       type="password"
//       placeholder="enter password..."
//       value={loginCredit.password}
//       onChange={handleChange} />
//       <button data-cy="login-submit"type="submit">
//         Login
//       </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [btn, setbtn] = useState({
        email: "eve.holt@reqres.in",
        password: "1234567890",
  });
  const { login } = useContext(AuthContext);
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setbtn({
      ...btn,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (btn.email && btn.password) {
      login(btn.email, btn.password);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <input data-cy="login-email"  name="email"
          type="email"
          placeholder="Enter Your Email"
          value={btn.email}
          onChange={hanldeChange} />
      <input data-cy="login-password"  name="password"
          type="password"
          placeholder="Enter Your Password..."
          value={btn.password}
          onChange={hanldeChange}/>
      <button data-cy="login-submit" type="submit" value="Login">Login</button>
      </form>
    </div>
  );
};

export default Login;