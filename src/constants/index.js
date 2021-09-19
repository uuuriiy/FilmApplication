import * as yup from "yup";
import { v4 as uuidv4 } from "uuid"
import {Facebook, Twitter, LinkedIn, Instagram} from '@material-ui/icons';

import CarouselImg_1 from '../assets/img_for_carousel_1.jpg'
import CarouselImg_2 from '../assets/img_for_carousel_2.jpg'
import CarouselImg_3 from '../assets/img_for_carousel_3.jpg'

export const LANDING = '/';
export const SIGN_UP = '/signUp';
export const SIGN_IN = '/signIn';
export const PASSWORD_FORGET = '/pw-forget';
export const HOME = '/home';
export const FILMS = '/films';
export const SEARCH = '/search';
export const NOT_FOUND = '/not-found';
export const ABOUT = '/about'
export const CONTACT_US = '/contact-us'
export const CHECKOUT = '/checkout'

export const accessToken = '63a297d469a2f0958c22f0a185d4411f';

export const signInValidationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required()
})
export const signUpValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})
export const resetPassValidationSchema = yup.object().shape({
    email: yup.string().email().required()
})

export const links = [
    {
        id: uuidv4(),
        label: 'Home',
        to: '/home'
    },
    {
        id: uuidv4(),
        label: 'About',
        to: '/about'
    },
    {
        id: uuidv4(),
        label: 'Films',
        to: '/films'
    },
    {
        id: uuidv4(),
        label: 'Contact Us',
        to: '/contact-us'
    }
];

export const carousel = [
    {
        id: uuidv4(),
        img: CarouselImg_1,
        h3: 'Greyhound',
        p: 'A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2.\n' +
            'With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.'
    },
    {
        id: uuidv4(),
        img: CarouselImg_2,
        h3: 'Star Wars: The Rise of Skywalker',
        p: 'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues.\n' +
            'With the power and knowledge of generations behind them, the final battle begins.'
    },
    {
        id: uuidv4(),
        img: CarouselImg_3,
        h3: 'Inception',
        p: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\",' +
            'the implantation of another person`s idea into a target`s subconscious.'
    },
]

export const footerIconsList = [
    {
        id: uuidv4(),
        Icon: <Facebook fontSize='large' />
    },
    {
        id: uuidv4(),
        Icon: <Twitter fontSize='large' />
    },
    {
        id: uuidv4(),
        Icon: <LinkedIn fontSize='large' />
    },
    {
        id: uuidv4(),
        Icon: <Instagram fontSize='large' />
    },
]

export const jumbotronOptionLine = "Full Movie Online For Free";

export const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
};

export const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
