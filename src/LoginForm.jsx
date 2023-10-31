import React from "react";

function LoginForm() {

    const handleLogin = () => {
        setUser({
          id: 1,
          name: "John",
          email: "john.doe@gmail.com",
        });
    };

    return (
      <form className="login-form">
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );

}

export default LoginForm;