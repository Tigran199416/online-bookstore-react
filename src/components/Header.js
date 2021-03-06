import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import { Button, useMediaQuery } from '@material-ui/core'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import logo from '../components/images/Logo.png'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  NEWS_ROUTE,
  BOOK_ROUTE,
  SIGN_IN_ROUTE,
} from './constantes/constants'
import fire from '../fire'
import { useDispatch, useSelector } from 'react-redux'
import { editHasAccount, selectHasAccount } from '../redux/hasAccountSlice'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    justifyContentjustifyContent: 'space-between',
    background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
    border: 5,
    justifyContent: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 50,
    padding: '20px 50px',
    size: '200px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  collectionLinks: {
    color: 'white',
    padding: 15,
    fontSize: 'initial',
    marginTop: 'auto',
    fontFamily: 'Roboto',
  },
  buttonsSide: {
    display: 'grid',
    marginTop: '445px',
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerHeader: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    justifyContentjustifyContent: 'space-between',
    background: 'linear-gradient(10deg, #FE6B8B 0%, #FF8E53  0%)',
    border: 5,

    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '25px 50px',
    size: '400px',
  },
  buttonStile: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContentjustifyContent: 'space-between',
    background: 'linear-gradient(60deg, #ff895c 40%, #FF8E53 90%)',
    border: 5,
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    marginTop: 10,
    size: '200px',

    margin: theme.spacing(0, 0, 1),
  },

  logo: {
    height: '100px',
    width: '300px',
    marginInlineEnd: 'auto',
  },
  logo2: {
    marginTop: '20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  text: {
    alignSelf: 'center',
    fontSize: 'revert',
    fontFamily: 'initial',
    color: '#fca49a',
    borderBottom: 'double',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  linksAndLogin: {
    display: 'flex',

    marginLeft: 'auto',
  },
}))

function Header() {
  const classes = useStyles()

  const history = useHistory()
  const hasAccount = useSelector(selectHasAccount)
  const dispatch = useDispatch()
  const matches = useMediaQuery('(min-width: 730px)')
  const onSignout = () => {
    fire.auth().signOut()
    dispatch(editHasAccount(false))
  }

  const onSignin = () => {
    history.push(SIGN_IN_ROUTE)
  }

  const logoClick = () => {
    history.push(HOME_ROUTE)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          // [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          <a href={HOME_ROUTE}>
            {' '}
            {matches ? (
              <img
                className={classes.logo}
                cursor="pointer"
                onClick={logoClick}
                alt=""
                src={logo}
              />
            ) : undefined}
          </a>
          <div className={classes.linksAndLogin}>
            <Link className={classes.collectionLinks} to={HOME_ROUTE}>
              Home
            </Link>
            <Link className={classes.collectionLinks} to={BOOK_ROUTE}>
              Books
            </Link>
            <Link className={classes.collectionLinks} to={NEWS_ROUTE}>
              News
            </Link>
            <Link className={classes.collectionLinks} to={ABOUT_ROUTE}>
              About
            </Link>{' '}
            {hasAccount === false && (
              <Button
                onClick={onSignin}
                variant="contained"
                className={classes.buttonStile}
              >
                Log In
              </Button>
            )}
            {hasAccount === true && (
              <Button>
                <ExitToAppOutlinedIcon
                  style={{ color: 'white' }}
                  onClick={onSignout}
                >
                  Sign Out
                </ExitToAppOutlinedIcon>{' '}
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <main className={clsx(classes.content, {})} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        // open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton></IconButton>
        </div>

        <Divider />
      </Drawer>
    </div>
  )
}

export default Header
