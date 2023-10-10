import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();

    //validates the email
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //tests if email is valid
    if (regex.test(email) === false) {
      setErrors({ email: "This is not a valid email" });
    } else {
      if (password === confirmPassword) {
        setErrors({});
        return dispatch(
          sessionActions.signup({
            email,
            username,
            firstName,
            lastName,
            password,
          })
        )
          .then(closeModal)
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
              setErrors(data.errors);
            }
          });
      }
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }
  };
  //sets errror styling or keep it normal
  const emailErrorsClass = errors.email ? "email-login-errors" : "";
  const firstNameErrorsClass = errors.firstname ? "email-login-errors" : "";
  const lastNameErrorsClass = errors.lastname ? "email-login-errors" : "";
  const userNameErrorsClass = errors.username ? "email-login-errors" : "";
  const passwordErrorsClass = errors.password || errors.confirmPassword ? "email-login-errors" : "";

  //disables the button if the username or password is too short
  let signUpButtonDisable = false
  if (
    email.length === 0 ||
    password.length < 8
  ) {
    signUpButtonDisable = true;
  }

  return (
    <div className="signup-form-modal">
      <h1>Sign Up</h1>
      <form  className='signup-form' onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            className={emailErrorsClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="text"
            className={userNameErrorsClass}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
        </label>
        {errors.username && <p>{errors.username}</p>}
        <label>
          <input
            type="text"
            className={firstNameErrorsClass}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First Name"
          />
        </label>
        {errors.firstName && <p>{errors.firstName}</p>}
        <label>
          <input
            type="text"
            className={lastNameErrorsClass}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Last Name"
          />
        </label>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label>
          <input
            type="password"
            value={password}
            className={passwordErrorsClass}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <label>
          <input
            type="password"
            className={passwordErrorsClass}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
          />
        </label>
        <button className='submit-button' type="submit" disabled={signUpButtonDisable}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
