import React, {FunctionComponent} from 'react';
import Button
                                  from '../Components/Representation/Atom/Button';
import {useAuthServicesPopUp}          from '../Components/Containers/useLoginPopUp';

interface OwnProps {
}

type Props = OwnProps;

const LoginPage: FunctionComponent<Props> = (props) => {

  // const handleLogin = async () => {
  //   const [authService] = useAuthServices();
  //   try {
  //     const response = await authService.signWithPopUp();
  //     console.log('response', response)
  //     console.log(`${response.user?.displayName} ha inciado sesion`)
  //   } catch (err) {
  //     console.log(`Error ${err.code}: ${err.message}`)
  //   }
  // }

  const [handleClick, userData] = useAuthServicesPopUp()


  return (
    <>
      <Button onClick={() => handleClick()}>
        Login
        {userData.user.displayName}
      </Button>
    </>
  );
};

export default LoginPage;
