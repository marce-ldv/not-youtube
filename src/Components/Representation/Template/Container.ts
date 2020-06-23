import {Styles} from '@material-ui/styles';
import {Theme}                from '@material-ui/core';

type ClassKey = 'sectionRoot';

const sectionTemplate: Styles<Theme, any, ClassKey> = (theme) => ({
  sectionRoot: {
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.only('md')]: {
      width: `900px`,
    },
    [theme.breakpoints.up('lg')]: {
      width: `1200px`,
    },
  }
})

export default sectionTemplate;