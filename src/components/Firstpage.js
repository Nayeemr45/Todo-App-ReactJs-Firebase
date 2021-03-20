import React from 'react'
import '../asset/css/firstpage.css'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import { withStyles, makeStyles } from '@material-ui/core/styles';
export default function Firstpage() {
    const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

    const classes = useStyles();

    const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'var(--twitter-color)',
    },
    '& label.Mui-focused': {
      color: 'var(--twitter-color)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--twitter-color)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--twitter-color)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--twitter-color)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);
    return (
        
        <div className="firstpage">
            <div>
                <h2>Welcome to Todo App.</h2>
            </div>
            <div>
                <Card className="login" variant="outlined">
                    <CardContent>
                        <form action="" className="login-form">
                        <CssTextField
                            className={classes.margin}
                            label="Enter your Email"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            color="secondary"
                        />
                        <CssTextField
                            className={classes.margin}
                            label="Password"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            color="secondary"
                        />
                           {/*  <TextField className="login-textfield" id="outlined-secondary" label="Email" variant="outlined" color="secondary" />
                            <TextField className="login-textfield" id="outlined-basic" label="Password" variant="outlined" /> */}
                            <button className="login-btn"><Link to={`/home`}>Login</Link></button>
                        </form>
                        <div className="login-bottom">
                            <h5 className="">
                                <Link to={`/password_reset`} className="login-bottom">Forgot password?</Link>
                            </h5>
                            <h5 color="textSecondary" >
                                Don't have an account.<Link to={`/signup`} className="login-signup">Sign up.</Link>
                            </h5>
                        </div>
                    </CardContent>                
                </Card>  
            </div>
        </div>
    )
}
