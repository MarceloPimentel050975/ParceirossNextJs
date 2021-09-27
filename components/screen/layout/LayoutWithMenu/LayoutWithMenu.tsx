import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import DesktopIcon from '@material-ui/icons/CheckCircleSharp';
import DesktopIcon1 from '@material-ui/icons/StoreMallDirectorySharp';
import DesktopIcon2 from '@material-ui/icons/Settings';
import DesktopIcon3 from '@material-ui/icons/Search';
import DesktopIcon4 from '@material-ui/icons/BusinessSharp';



import Link from 'next/link';



const drawerWidth = 240;

  const menu: Array<{ name: string; to: string; icon?: ReactNode }> = [
    { name: 'Principal', to: '/', icon: <DashboardIcon /> },
    { name: 'Usuários', to: '/users', icon: <PeopleIcon /> },
    { name: 'Equipamentos', to: '/equipaments', icon: <PeopleIcon /> },
    { name: 'Invetário', to: '/', icon: <DesktopIcon2 /> },
    { name: 'Localização', to: '/addresses', icon: <DesktopIcon1 /> },
    { name: 'Unidade Negócio', to: '/companys', icon: <DesktopIcon4 /> },
    
  ];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
    menuButton: {
      marginRight: theme.spacing(2),
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

export default function LayoutWithMenuComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const SliderBar = (
    <AppBar
      position="fixed"
      className={ clsx(classes.appBar, {
        [classes.appBarShift]: open,
      }) }
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={ handleDrawerOpen }
          edge="start"
          className={ clsx(classes.menuButton, open && classes.hide) }
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Invetário
          </Typography>
      </Toolbar>
    </AppBar>
  );
  
  
const SliderDrawerMenuItemDynamic = (
        <List>
          {menu.map((menuItem, index) => (
            <Link key={index} href={menuItem.to} passHref>
              <ListItem button component="a">
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItem>
            </Link>
          ))}
        </List>
  );


  const SliderDrawerMenu = (
     <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
      <Divider />
      { SliderDrawerMenuItemDynamic} 
        <Divider />
      </Drawer>
  );
  
  
 
  const ScreenMain = (
        <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
      </main>
  );


  return (
    <div className={classes.root}>
        <CssBaseline /> 
        { SliderBar}
        { SliderDrawerMenu}
        { ScreenMain } 
    </div>
  );
}