import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './SignUp.css';
import { NavLink, Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '883px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  glow: {
    width: "150px",
    borderRadius:"5px",
    marginLeft:"30%",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 5px 15px #e2405f",
    },
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [Password, setPassword] = React.useState(null);
  const [confPassword, setconfPassword] = React.useState(null);
  const [isSame, setisSame] = React.useState(true);

  function handlePasschange(event){
    setPassword(event.target.value);
   
  }

  function handleConfirmchange(event){
    setconfPassword(event.target.value);
    
    if(Password === event.target.value){
      setisSame(true);
    }else{
      setisSame(false);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {handlePasschange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Confirmpassword"
                label="Confirm Password"
                type="password"
                id="Confirmpassword"
                autoComplete="current-password"
                onChange = {handleConfirmchange}
              />
              <FormControl error>
              {
                isSame?null:<FormHelperText id="Confirmpassword">Passwords do not match!</FormHelperText>
              }
              </FormControl>
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            <NavLink to="/login" tag={Link} onClick={props.onLogin}>
            <Typography variant="body2" align="center">Already have an account? Login. </Typography>
            </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      <NavLink to="/home" tag={Link} onClick={props.onHome} style={{ textDecoration: 'none' }}>
      <Typography variant="h4" align="center" className={classes.glow}>CorVito</Typography>
      </NavLink>
      </Box>
    </Container>
  );
}