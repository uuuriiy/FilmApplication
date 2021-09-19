import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Card, CardContent, FormControl, TextField, Typography} from "@material-ui/core";
import {NavLink, useHistory} from "react-router-dom";

import {SIGN_IN, signUpValidationSchema,} from "../../constants";
import {auth} from "../../firebase/firebase";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../actions/userCreate.action";
import './SignUp.scss'

const CN = 'signUp'
export const SignUp = () => {
    const [userName, setUserName] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state?.userCreate?.user);
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(signUpValidationSchema)
    })


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                // user is logged in
                console.log(authUser);
                dispatch(setUser({
                    uid: authUser.uid,
                    email: authUser.email,
                    displayName: userName
                }))
            } else {
                // user is logged out
                dispatch(setUser(null))
            }
        })
        return () => {
            unsubscribe();
        }
    }, [user, userName])

    const onSubmitHandler = ({email, password}) => {
        try {
            auth.createUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    console.log(authUser);
                    history.push(SIGN_IN);
                    return authUser.user.updateProfile({
                        displayName: userName
                    })
                }).catch(error => {
                console.log(error);
            })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={CN}>
            <Card className={`${CN}__card`}>
                <CardContent>
                    <Typography className={`${CN}__cardHeader`} variant="h4" component="h2">
                        Sign Up
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
                                    className={`${CN}__name`}
                                    id="standard-email-input"
                                    name='name'
                                    type="name"
                                    label="Name"
                                    {...register('name')}
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                {
                                    !!errors && (
                                        <span className={errors.name?.message ? `${CN}__error` : ''}>
                                                {
                                                    errors.name?.message
                                                }
                                        </span>
                                    )
                                }
                                <TextField
                                    className={`${CN}__email`}
                                    id="standard-email-input"
                                    name='email'
                                    type="email"
                                    label="Email"
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
                                <TextField
                                    className={`${CN}__password`}
                                    id="standard-password-input"
                                    name='confirmPassword'
                                    label="Confirm Password"
                                    type="password"
                                    {...register('confirmPassword')}
                                />
                                {
                                    errors?.confirmPassword && (
                                        <span className={errors.confirmPassword?.message ? `${CN}__error` : ''}>
                                            Passwords should match
                                        </span>
                                    )
                                }
                                <Button
                                    className={`${CN}__button`}
                                    type="submit"
                                    variant="contained"
                                    disabled={
                                        errors.name?.message || errors.email?.message ||
                                        errors.password?.message || errors.confirmPassword?.message
                                    }
                                >
                                    Sign Up
                                </Button>
                                <p className={`${CN}__signUpLink`}>
                                    <NavLink to={SIGN_IN}>Already have an account? Log In </NavLink>
                                </p>
                            </FormControl>
                        </form>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};
