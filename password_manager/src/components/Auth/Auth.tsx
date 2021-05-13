
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography, Container, Box, Avatar, TextField, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signin, signup } from '../../actions/auth';

import useStyles from './styles';

const initialState = { name: '', email: '', password: '' };

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    // const handleShowPassword = () => setShowPassword((prevShowPassword: Boolean) => !prevShowPassword)

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(formData)

        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };
    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const switchMode = () => {
        setIsSignup((prevIsSignup: Boolean) => !prevIsSignup);
        // setShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box className={classes.BoxContainer}>
                <Avatar className={classes.Icon}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>

                <Box component="form" onSubmit={handleSubmit} className={classes.BoxForm} noValidate>
                    {isSignup && <TextField id="name" name="name" label="Name" autoComplete="name" margin="normal" onChange={handleChange} required fullWidth autoFocus/>}
                    <TextField id="email" name="email" label="Email Address" autoComplete="email" margin="normal" onChange={handleChange} required fullWidth autoFocus/>
                    <TextField id="password" name="password" label="Password" type="password" autoComplete="current-password" margin="normal" onChange={handleChange} required fullWidth />
                    {isSignup && <TextField id="confirmPassword" name="confirmPassword" label="Repeat Password" type="password" autoComplete="current-password" margin="normal" onChange={handleChange} required fullWidth />}
                    
                    <Button type="submit" fullWidth variant="contained" className={classes.ButtonSubmit}>
                        {isSignup ? 'Sign up' : 'Sign In'}
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='#' variant='body2' onClick={() => {switchMode()}}>
                                {isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign up'}
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
};


export default Auth;