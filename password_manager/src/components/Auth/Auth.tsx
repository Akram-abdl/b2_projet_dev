
import {useState} from 'react';
import {Button, Grid, Typography, Container} from '@material-ui/core';

import Input from './Input'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword:Boolean)=> !prevShowPassword)

    const handleSubmit = () => {

    };
    const handleChange = () => {

    };
    const switchMode = () => {
        setIsSignup((prevIsSignup:Boolean)=>!prevIsSignup);
        setShowPassword(false);
    };

    return(
        <Container component="main" maxWidth = "xs">
            Auth
            <Typography>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing= {2}>
                    {isSignup && (
                         <>
                         <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                         <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                       </>
                    )}
                    <Input name ="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name= "password" label="Password" handleChange={handleChange} type= {showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword}/>
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange= {handleChange} type="password"/>}
                    <Button type = "submit" fullWidth variant="contained" color= "primary">
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