import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirm_password } = formFields;

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const reponse = await createUserDocumentFromAuth(user, { displayName });
      console.log(reponse);
    } catch (err) {
      if (err.code == "auth/email-already-in-use") {
        alert("email already in use");
      }
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="">Display Name :</label>
          <input
            type="text"
            name="displayName"
            onChange={handleOnChange}
            value={displayName}
          />
        </div>
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
        <div className="input-group">
          <label htmlFor="">Confirm Password :</label>
          <input
            type="text"
            name="confirm_password"
            onChange={handleOnChange}
            value={confirm_password}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
