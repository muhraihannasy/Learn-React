import SignInForm from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      SignIn
      <button onClick={logGooglePopupUser}>Sign In With Google</button>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default SignIn;
