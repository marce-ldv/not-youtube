import React, {FunctionComponent}  from 'react';
import {useAuthServicesPopUp}      from '../Components/Containers/useAuthServicesPopUp';
import {makeStyles}                from '@material-ui/styles';
import loginPageTemplate
                                   from '../Components/Representation/Template/LoginPageTemplate';
import sectionTemplate
                                   from '../Components/Representation/Template/Container';
import {Button, Paper, Typography} from '@material-ui/core';
import Google                      from '@material-ui/icons/Assignment';

const useStyles = makeStyles(loginPageTemplate);
const useStylesSection = makeStyles(sectionTemplate);

const LoginPage: FunctionComponent = () => {
  const [handleClick] = useAuthServicesPopUp();
  const {containerLogin} = useStyles();
  const {sectionRoot} = useStylesSection();

  return (
    <div className={sectionRoot}>
      <Paper square className={containerLogin}>
        <Typography variant={'h1'}>Not Youtube</Typography>
        <Button startIcon={<Google/>} onClick={() => handleClick()}>
          Login with google
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
