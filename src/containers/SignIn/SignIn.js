import React from 'react';

import {Button, FormControl, TextField, Card, CardContent, Typography} from "@material-ui/core";
import {NavLink, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

import {signIn} from '../../firebase/firebase'
import {HOME, PASSWORD_FORGET, SIGN_UP, signInValidationSchema} from "../../constants";
import "./SignIn.scss"


const CN = 'signIn'
export const SignIn = () => {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(signInValidationSchema)
    })

    const onSubmitHandler = async ({email, password}) => {
        try {
            await signIn(email, password)
            history.push(HOME);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={CN}>
            <Card className={`${CN}__card`}>
                <CardContent>
                    <Typography className={`${CN}__cardHeader`} variant="h4" component="h2">
                        Sign In
                    </Typography>
                    <Typography>
                        <form
                            className={`${CN}__form`}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit(onSubmitHandler)}
                        >
                            <FormControl>
                                <TextField
                                    className={`${CN}__email`}
                                    id="standard-email-input"
                                    name='email'
                                    type="email"
                                    label="email"
                                    {...register('email')}
                                />
                                {
                                    !!errors && (
                                        <span className={!!errors.email?.message ? `${CN}__error` : ''}>
                                                {
                                                    errors.email?.message
                                                }
                                        </span>
                                    )
                                }
                                <TextField
                                    className={`${CN}__password`}
                                    id="standard-password-input"
                                    name='password'
                                    label="Password"
                                    type="password"
                                    {...register('password')}
                                />
                                {
                                    !!errors && (
                                        <span className={errors.password?.message ? `${CN}__error` : ''}>
                                                {
                                                    errors.password?.message
                                                }
                                            </span>
                                    )
                                }
                                <Button
                                    className={`${CN}__button`}
                                    type="submit"
                                    variant="contained"
                                    disabled={errors.password?.message || errors.email?.message}
                                >
                                    Login
                                </Button>
                                <p className={`${CN}__signUpLink`}>
                                    <NavLink to={SIGN_UP}>Don't have an account? Create here </NavLink>
                                </p>
                            </FormControl>
                        </form>
                    </Typography>
                </CardContent>
            </Card>
            <p className={`${CN}__signUpLink`}>
                <NavLink to={PASSWORD_FORGET}>Forgot password?</NavLink>
            </p>
        </div>
    );
};
