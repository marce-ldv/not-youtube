import React, {FunctionComponent} from 'react';
import Button
                                  from '../Components/Representation/Atom/Button';
import firebase                   from 'firebase';

interface OwnProps {
}

type Props = OwnProps;

const LoginPage: FunctionComponent<Props> = (props) => {

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    try {
      const response = await firebase.auth().signInWithPopup(provider)
      console.log('response', response)
      console.log(`${response.user?.displayName} ha inciado sesion`)
    } catch (err) {
      console.log(`Error ${err.code}: ${err.message}`)
    }
  }

  return (
    <>
      <Button onClick={() => handleLogin()}>
        Login
      </Button>
    </>
  );
};

export default LoginPage;
