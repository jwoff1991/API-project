import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const history = useHistory('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const loginDemo = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({ credential: 'Demo', password: 'Demo1234' }))
    .then(closeModal)
    history.push('/')
  }

  let buttonDisable = false;
  if(credential.length < 4 || password.length < 6) {
    buttonDisable = true
  }

  return (
    <div className="login-form-modal">
      <h1>Log In</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="username">

          <input className="username-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            placeholder="Username or Email"
          />
        </label>
        <label className="password">
          <input className="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </label>
        {errors.credential && (
          <p>{errors.credential}</p>
        )}
        <button className='submit-button'type="submit" disabled={buttonDisable}>Log In</button>
      </form>
        <button className='demo-user' onClick={loginDemo}>Log In as Demo User</button>
    </div>
  );
}

export default LoginFormModal;
