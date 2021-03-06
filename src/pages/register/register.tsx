import { Box, createStyles, Link, makeStyles, Theme } from '@material-ui/core';
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap-reverse',
      minHeight: '100vh',
      gap: theme.spacing(5),
      padding: theme.spacing(2),
    },
    sloganTitle: {
      marginBottom: theme.spacing(2),
    },
    form: {
      padding: theme.spacing(4),
      maxWidth: '500px',
    },
    submit: {
      marginTop: theme.spacing(2),
    },
    divider: {
      margin: theme.spacing(4, 0),
    },
    name: {
      name: "MuiExample_Component"
  },
  })
);

interface IFormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword? :string
}

export default function register(props) {


  const classes = useStyles();

  const initialValues: IFormData = {
    name: '',
    email: '',
    password: ''
  };

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Obrigatório')
      .min(2, 'O nome deve ter pelo menos 2 caracteres'),
    email: Yup.string().email('E-mail inválido').required('Obrigatório'),
    password: Yup.string().required('Obrigatório'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'A senha não é igual a confirmação')
      .required('Obrigatório'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
   
      
      setTimeout(() => {
   
          console.log(values);
          
        fetch('http://localhost:3000/api/users', {
          method: 'POST',
          body: JSON.stringify({ ...values }),
        })
          .then(response => {
            alert('Usuario com Sucesso cadastrado.');
            console.log(response.json());
          })
          .catch(err => console.log(err));
        formik.setSubmitting(false);
      }, 2000);
    },
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.form} elevation={3}>
        <Box textAlign="center">
          <Typography component="h3" variant="h5">
            Crie sua conta
          </Typography>
      

        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="filled"
            margin="normal"
            fullWidth
            id="name"
            placeholder="Seu nome"
            name="name"
            autoComplete="name"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            variant="filled"
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
            variant="filled"
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
          <TextField
            variant="filled"
            margin="normal"
            fullWidth
            name="confirmPassword"
            placeholder="Confirme sua senha"
            type="password"
            id="confirmPassword"
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Button
            className={classes.submit}
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
          >
            Criar minha conta
          </Button>
          {formik.isSubmitting && <FormLoadingComponent />}
        
        </form>
      </Box>
       
        <p>
          Ao se registrar, você concorda com os{' '}
          <Link href="#">termos de uso</Link> e a{' '}
          <Link href="#">política de privacidade</Link> do app.
        </p>

          <Divider className={classes.divider} variant="fullWidth" />

        <Box mt={1} textAlign="center">
          <NextLink href="/">
            <Button color="primary" startIcon={<ArrowBackIcon />}>
              Voltar
            </Button>
          </NextLink>
        </Box>

        <CopyrightComponent />
      </Paper>
    </div>
  );
}