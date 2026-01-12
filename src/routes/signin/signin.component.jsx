import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Signin = () => {
    const logGoogleResponse = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log(response);
        createUserDocumentFromAuth(user);

    }

    return (
        <>
            <h1>Sign In Component</h1>
            <button onClick={logGoogleResponse}>Sign In With Google Popup</button>
        </>
    )
}

export default Signin;