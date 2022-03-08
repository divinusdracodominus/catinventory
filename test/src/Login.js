import React from 'react';
import ReactDOM from 'react-dom';

function Login {
  return (
    <div id="LoginPage">
      <form action="login.php" method="post">
        <input type="text" name="username"/>
	<input type="password" name="password"/>
	<input type="submit"/>
      </form>
    </div>
  );
}

export default Login;
