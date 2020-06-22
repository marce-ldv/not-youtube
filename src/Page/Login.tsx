import React, {FunctionComponent} from 'react';
import Button
                              from '../Components/Representation/Atom/Button';
import {useAuthServicesPopUp} from '../Components/Containers/useAuthServicesPopUp';

const LoginPage: FunctionComponent = () => {
  const [handleClick, userData] = useAuthServicesPopUp();

  return (
    <>
      <Button onClick={() => handleClick()}>
        Login
        {userData?.user?.displayName}
      </Button>
    </>
  );
};

export default LoginPage;
