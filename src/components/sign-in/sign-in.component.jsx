import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signAuthInWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirm_password } = formFields;

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await signAuthInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err.code);
    }
  }

  return (
    <div>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="">Email :</label>
          <input
            type="email"
            name="email"
            onChange={handleOnChange}
            value={email}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Password :</label>
          <input
            type="text"
            name="password"
            onChange={handleOnChange}
            value={password}
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
