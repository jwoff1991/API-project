import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

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

  let buttonDisable = false;
  if(credential.length < 4 || password.length < 6) {
    buttonDisable = true
  }

  return (
    <>
      <h1>Log In</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="username">
          Username or Email
          <input className="username-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className="passowrd">
          Password
          <input className="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && (
          <p>{errors.credential}</p>
        )}
        <button className='submit-button'type="submit" disabled={buttonDisable}>Log In</button>
      </form>
    </>
  );
}

export default LoginFormModal;
