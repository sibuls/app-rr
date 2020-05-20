import React from 'react';



const LoginPage = () => {
    return ( 

<div>
    <label htmlFor="loginName">Podaj login: <input type="text" id="loginName"/> </label><br/>
    <label htmlFor="loginPassword">Podaj hasło:<input type="password" id="loginPassword"/> </label> <br/>
    <button>Zaloguj</button>


</div>

     );
}
 
export default LoginPage;