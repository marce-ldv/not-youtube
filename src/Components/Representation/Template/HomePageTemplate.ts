import {makeStyles}     from '@material-ui/styles';
import {Theme} from '@material-ui/core';

type ClassKey = 'containerHome' | 'card'
const homePageTemplate = makeStyles<Theme, ClassKey>(() => ({
    containerHome: {
      margin: 'auto',
      width: '100%',
      height: '100vh',
      backgroundColor: '#3c3e3e',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    card: {
      width: '450px',
      height: '300px',
      margin: '10px',
    },
  })
)

export default homePageTemplate;