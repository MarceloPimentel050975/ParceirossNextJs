import { Avatar, Box, Container, createStyles, CssBaseline, Grid, Link, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import { prisma } from '@prisma/client';
import { useFormik } from 'formik';
import NextLink from 'next/link';
import React from 'react';
import * as Yup from 'yup';
import CopyrightComponent from '../../../components/screen/Copyright/Copyright';
import FormLoadingComponent from '../../../components/screen/FormLoading/FormLoading';
import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.parceiross.com.br/">
        Parceiross
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface IFormData {
  email?: string;
  password?: string
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/assets/logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  name: {
    name: "MuiExample_Component"
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();

  const router = useRouter();

  const initialValues: IFormData = {
    email: '',
    password: ''
  };

  const formSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Obrigatório'),
    password: Yup.string().required('Obrigatório'),
  });


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
  
   console.log(values);
      
      setTimeout(() => {
        console.log(values);
        router.push('/main/main');
        
        
        /*fetch('http://localhost:3000/api/users?'+values.email+'%'+values.password+'), {
          method: 'GET'
        })
         .then(response => {
            router.push('/main/main');
           // console.log(response.json());
          })
          .catch(err => console.log(err));*/
        formik.setSubmitting(false);
      }, 2000);
    },
  });
  
  return (
    <Grid container component="main" className={classes.root} justify = "center">
      <CssBaseline />
       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <img width="130px" height="130px" alt="complex" src="/assets/logo.png" />
      
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate onSubmit={formik.handleSubmit}>
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            placeholder="Seu e-mail"
            name="email"
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            placeholder="Uma senha"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={ classes.submit }
              disabled={formik.isSubmitting}
            
            >
              Sign In
            </Button>
             {formik.isSubmitting && <FormLoadingComponent />}
          
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password/forgot-password" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register/register" variant="body2">
                  {"Não tem conta? Cria aqui."}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      </Grid>
   );
}