
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography, Container } from '@material-ui/core';
import { signin, signup } from '../../actions/auth';

import Input from './Input';

const initialState = { name: '', email: '', password: '' };

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword: Boolean) => !prevShowPassword)

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };
    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const switchMode = () => {
        setIsSignup((prevIsSignup: Boolean) => !prevIsSignup);
        setShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            Auth
            <Typography>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {isSignup && (
                        <>
                            <Input name="name" label="Name" handleChange={handleChange} autoFocus half />
                        </>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container alignItems="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign up'}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};


export default Auth;