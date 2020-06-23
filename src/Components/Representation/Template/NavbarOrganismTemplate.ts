import {makeStyles}  from '@material-ui/styles';
import {fade, Theme} from '@material-ui/core';

type ClassKey =
  'root'
  | 'title'
  | 'search'
  | 'searchIcon'
  | 'inputRoot'
  | 'inputInput'
const navbarOrganismTemplate = makeStyles<Theme, ClassKey>((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#0e0f0d',
    },
    title: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: '4px',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      }
    }
  })
)

export default navbarOrganismTemplate;