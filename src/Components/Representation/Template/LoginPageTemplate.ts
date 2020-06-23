import {makeStyles, StyleRules} from '@material-ui/styles';
import {Theme}                  from '@material-ui/core';

type ClassKey = 'containerLogin';

const loginPageTemplate = makeStyles<Theme, ClassKey>({
  containerLogin: {
    padding: '10px',
    margin: 'auto',
    minHeight: '200px',
    marginTop: '200px',
    // border: 'solid 1px black',
    // borderRadius: '10px',
  }
});

export default loginPageTemplate;