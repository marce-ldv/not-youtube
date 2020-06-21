import React, {FunctionComponent} from 'react';
import Button
                                  from '../Components/Representation/Atom/Button';
import {useLoginPopUp}            from '../Components/Containers/useLoginPopUp';

interface OwnProps {
}

type Props = OwnProps;

const LoginPage: FunctionComponent<Props> = (props) => {

  const handleLogin = async () => {
    const [authService] = useLoginPopUp();
    try {
      const response = await authService.signWithPopUp();
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
