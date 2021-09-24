import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import NextLink from 'next/link';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { Box, Container, createStyles, CssBaseline, Grid, Link, Theme } from '@material-ui/core';

const useStyles = makeStyles( ( theme ) => ( {
  root: {
    maxWidth: 535,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
   submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


interface IFormData {
  title?: string;
  type?: string
}


export default function Share ()
{
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const initialValues: IFormData = {
    title: '',
    type: ''
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
    },
  });

  return (
    <Container>
    <form noValidate onSubmit={formik.handleSubmit}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=""
        subheader="September 14, 2016"
      />
      <CardContent>
         <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="title"
            placeholder="Digite o Post para compartilhar."
            type="text"
            id="title"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
      </CardContent>
      <CardActions disableSpacing>
     <Grid container>
              <Grid item xs>
                   <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Demanada"
          labelPlacement="start"
        />
        <FormControlLabel
              value="Oferta"
              control={<Radio color="primary" />}
              label="Oferta"
              labelPlacement="start"
        />
      </RadioGroup>
              </Grid>
              <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={ classes.submit }
              disabled={formik.isSubmitting}
            
            >
              Compartilhar
            </Button>
              </Grid>
            </Grid>
          </CardActions>
      </Card>
      </form>
      </Container>
  );
}
