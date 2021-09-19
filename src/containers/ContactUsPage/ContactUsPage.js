import React, {useState} from 'react';

import {useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import {Form} from "react-bootstrap";

import bgImg from "../../assets/img_for_site_BackGround.jpg"
import {Header} from "../../components/Header/Header";
import {CONTACT_US, HOME} from "../../constants";
import API from "../../helper"

import "./ContactUsPage.scss"


const CN = "contactUsPage"
export const ContactUsPage = ({history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);
    const {user} = useSelector(state => state?.userCreate);

    const onSubmit = (e) => {
        e.preventDefault();

        if (user?.displayName !== name) {
            setError('Username is not correct!')
            setName('')
            setEmail('')
            setMessage('')
        } else if (user?.email !== email) {
            setError('Email is not correct!')
            setName('')
            setEmail('')
            setMessage('')
        } else {
            sendMail()
        }
    }

    const sendMail = () => {
        const data = {
            "name": name,
            "email": email,
            "message": message
        }

        API.post(`${CONTACT_US}`, data)
            .then(response => {
                history.push(HOME)
                console.log(response);
                console.log(response.data);
            })
    }

    const submitHandler = (e) => {
        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.preventDefault();
        }

        setValidated(true)

        onSubmit(e);
    }

    console.log(error);
    return (
        <div className={CN}>
            <Header/>
            <div className={`${CN}__container`} style={{backgroundImage: `url(${bgImg})`}}>
                <h1>
                    Have any problems on our site?
                </h1>
                <h2>
                    Write the problem below.
                </h2>
                <Form noValidate
                      validated={validated}
                      onSubmit={submitHandler}
                >
                    <Form.Control
                        value={name}
                        type="text"
                        placeholder="Name"
                        aria-label="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Form.Control
                        value={email}
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Form.Control
                        value={message}
                        type="text"
                        placeholder="Message"
                        aria-label="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    {
                        !!error && (
                            <span className={!!error ? `${CN}__error` : ''}>
                                {
                                    error
                                }
                            </span>
                        )
                    }
                    <Button variant="contained" type='submit'>
                        Send
                    </Button>
                </Form>
            </div>
        </div>
    );
};
