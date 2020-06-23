import React, {FunctionComponent}  from 'react';
import Assignment                  from '@material-ui/icons/Assignment';
import {Button, Paper, Typography} from '@material-ui/core';
import {useSignInPopUp}           from '../Components/Containers/useSignInPopUp';
import loginPageTemplate
                                  from '../Components/Representation/Template/LoginPageTemplate';
import sectionTemplate
                                   from '../Components/Representation/Template/Container';

const LoginPage: FunctionComponent = () => {
  const [handleClick] = useSignInPopUp();
  const {containerLogin} = loginPageTemplate();
  const {sectionRoot} = sectionTemplate();

  return (
    <div className={sectionRoot}>
      <Paper square className={containerLogin}>
        <Typography variant={'h1'}>Not Youtube</Typography>
        <Button startIcon={<Assignment/>} onClick={handleClick}>
          Login with google
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
