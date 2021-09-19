import React from 'react';

import {Button, Card, CardContent, FormControl, TextField, Typography} from "@material-ui/core";
import {NavLink, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {resetPassValidationSchema, SIGN_IN, SIGN_UP} from "../../constants";
import "./ForgetPassword.scss"
import {auth} from "../../firebase/firebase";

const CN = 'forgetPassword'
export const ForgetPassword = () => {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(resetPassValidationSchema)
    })

    const onSubmitHandler = ({email}) => {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                history.push(SIGN_IN)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className={CN}>
            <Card className={`${CN}__card`}>
                <CardContent>
                    <Typography className={`${CN}__cardHeader`} variant="h4" component="h2">
                        Reset Password
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
                                <Button
                                    className={`${CN}__button`}
                                    type="submit"
                                    variant="contained"
                                    disabled={errors.email?.message}
                                >
                                    Reset
                                </Button>
                                <Button
                                    className={`${CN}__buttonRoute`}
                                    type="submit"
                                    variant="outlined"
                                    disabled={errors.email?.message}
                                >
                                    <NavLink to={SIGN_IN}>
                                        Log In
                                    </NavLink>
                                </Button>
                                <p className={`${CN}__signUpLink`}>
                                    <NavLink to={SIGN_UP}>Need an account? Create here </NavLink>
                                </p>
                            </FormControl>
                        </form>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};
