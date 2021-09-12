import React, { Component, useState } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import { Collapse, Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import theme from '../../../../src/theme';
const drawerWidth = 260;
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import router from 'next/dist/client/router';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import handle from '../../../../pages/api/user/[id]';


const myData = [
  {
    id: '1',
    nameHeader: 'Header1',
    subMenu: [{ id: '1', name: 'subMenu1' }, { id: '2', name: 'subMenu2' }]
  },
  {
    id: '2',
    nameHeader: 'Header2',
    subMenu: [{ id: '1', name: 'subMenu1' }, { id: '2', name: 'subMenu2' }]
  }
]


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
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
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }, 
  }),
);

class MyClass extends Component {
  stateCollapse = { settings: [{ id: "1", open: false }, { id: "2", open: false }] };

  handleClick = id => {
    this.setState(stateCollapse => ({
      //...stateCollapse,
      //settings: stateCollapse.settings.map(item =>
       // item.id === id ? { ...item, open: !item.open } : item
      //)
    }));
  }
}
export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = useState(false);
  
 
  const handleClick = id => {
    this.setState(stateCollapse => ({
      //...stateCollapse,
      //settings: stateCollapse.settings.map(item =>
       // item.id === id ? { ...item, open: !item.open } : item
      //)
    }));
  }
  
 
  
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleLogout = () => {
      router.push('/login');

    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={ anchorEl }
        anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
        id={ menuId }
        keepMounted
        transformOrigin={ { vertical: 'top', horizontal: 'right' } }
        open={ isMenuOpen }
        onClose={ handleMenuClose }
      >
        <MenuItem onClick={ handleLogout }>Logout</MenuItem>
      </Menu>
    );

    const renderLevelMenu = (
      <List>
        {myData.map(each => (
            <ListItem button onClick={ handleClick }/>
              <ListItemText inset primary={ each.nameHeader } />
              { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItem>
            <Divider />
            <Collapse in={ open } timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                { each.subMenu.map(subData => (
                  <ListItem key={ subData.id } button>
                    <ListItemText inset primary={ subData.name } />
                  </ListItem>
                )) }
              </List>
            </Collapse>
        )) }
      </List>
    );
  
    const renderSlideMenu = (
      <Drawer
        className={ classes.drawer }
        variant="persistent"
        anchor="left"
        open={ open }
        classes={ {
          paper: classes.drawerPaper,
        } }
      >
        <div className={ classes.drawerHeader }>
          <IconButton onClick={ handleDrawerClose }>
            { theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
          </IconButton>
        </div>
        <Divider />
        { renderLevelMenu }
      </Drawer>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={ mobileMoreAnchorEl }
        anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
        id={ mobileMenuId }
        keepMounted
        transformOrigin={ { vertical: 'top', horizontal: 'right' } }
        open={ isMobileMenuOpen }
        onClose={ handleMobileMenuClose }
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={ 4 } color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={ 11 } color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={ handleProfileMenuOpen }>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

  return (
    <div className={ classes.grow }>
       <AppBar position="fixed"
         className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
       })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Inventary Easy
          </Typography>
          <div className={classes.grow} />
          <div className={ classes.sectionDesktop }>
  
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderSlideMenu }
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}