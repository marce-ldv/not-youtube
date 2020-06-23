import {makeStyles, Styles} from '@material-ui/styles';
import {Theme}              from '@material-ui/core';

type ClassKey = 'containerHome' | 'card'
const homePageTemplate = makeStyles<Theme, ClassKey>((theme) => ({
    containerHome: {
      margin: 'auto',
      width: '100%',
      height: '100vh',
      backgroundColor: 'green',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    card: {
      width: '360px',
      height: '300px',
    },
  })
)

export default homePageTemplate;