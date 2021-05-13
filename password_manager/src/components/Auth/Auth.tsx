
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography, Container, Box, Avatar, TextField, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signin, signup } from '../../actions/auth';
import { useForm, Form } from '../Form/Form';
import Input from "../Controls/Input";

import useStyles from './styles';

interface ISignIn {
    email:string,
    password:string
}
interface ISignUp extends ISignIn {
    name:string,
    confirmPassword:string
}

const initialFValues: ISignUp = { name: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const validateForm = (fieldValues = formValues) => {
        let errors = { ...formErrors }

        if (isSignup) {
            if ('name' in fieldValues)
            {
                if (fieldValues.name === "") errors.name = "This field is required.";
                else errors.name="";
            }

            if ('confirmPassword' in fieldValues)
            {
                if (fieldValues.confirmPassword === "") errors.confirmPassword = "This field is required.";
                else if (fieldValues.confirmPassword.length < 10) errors.confirmPassword = "Minimum 10 characters required.";
                else if (fieldValues.confirmPassword !== (document.getElementById("password") as HTMLInputElement).value) errors.confirmPassword = "Confirm password don't match";
                else errors.confirmPassword = "";
            }
        } else {
            errors.confirmPassword = "";
            errors.name = "";
        }

        if ('email' in fieldValues)
        {
            if (fieldValues.email === "") errors.email = "This field is required.";
            else if ( !(/$^|.+@.+..+/).test(fieldValues.email) ) errors.email = "Email is not valid.";
            else errors.email = "";
        }
        if ('password' in fieldValues)
        {
            if (fieldValues.password === "") errors.password = "This field is required.";
            else if (fieldValues.password.length < 10) errors.password = "Minimum 10 characters required.";
            else errors.password = "";
        }

        setFormErrors({
            ...errors
        })

        if (fieldValues == formValues)
            return Object.values(errors).every(error => error == "")
    }

    const {
        formValues,
        setFormValues,
        formErrors,
        setFormErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validateForm);

    // const handleShowPassword = () => setShowPassword((prevShowPassword: Boolean) => !prevShowPassword)

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (validateForm()){
            if (isSignup) {
                dispatch(signup(formValues, history));
            } else {
                dispatch(signin(formValues, history));
            }
        }
    };

    const switchMode = () => {
        setIsSignup(!isSignup);
        resetForm();
        // setShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box className={classes.BoxContainer}>
                <Avatar className={classes.Icon}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>

                <Form onSubmit={handleSubmit}>

                    {isSignup && <Input id="name" name="name" label="Name" value={formValues.name} autoComplete="name" required={true} fullWidth={true} autofocus={true} onChange={handleInputChange} error={formErrors.name} />}
                    
                    <Input id="email" name="email" label="Email Address" value={formValues.email} autoComplete="email" required={true} fullWidth={true} onChange={handleInputChange} error={formErrors.email} />
                    <Input id="password" name="password" label="Password" type="password" value={formValues.password} autoComplete="current-password" required={true} fullWidth={true} onChange={handleInputChange} error={formErrors.password} />
                    {isSignup && <Input id="confirmPassword" name="confirmPassword" label="Repeat password" type="password" value={formValues.confirmPassword} autoComplete="current-password" required={true} fullWidth={true} onChange={handleInputChange} error={formErrors.confirmPassword} />}
                    
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

                </Form>
            </Box>
        </Container>
    );
};


export default Auth;