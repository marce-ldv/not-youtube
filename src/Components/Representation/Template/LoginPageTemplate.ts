import {StyleRules} from '@material-ui/styles';

type ClassKey = 'containerLogin';

const loginPageTemplate: StyleRules<any, ClassKey> = {
  containerLogin: {
    padding: '10px',
    margin: 'auto',
    minHeight: '200px',
    marginTop: '200px',
    // border: 'solid 1px black',
    // borderRadius: '10px',
  }
}

export default loginPageTemplate;