import {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";

import {setUser} from "./actions/userCreate.action";

import {AboutPage} from "./containers/AboutPage/AboutPage";
import {CheckoutPage} from "./containers/CheckoutPage/CheckoutPage";
import {ContactUsPage} from "./containers/ContactUsPage/ContactUsPage";
import {FilmDetailsPage} from "./containers/FilmDetailsPage/FilmDetailsPage";
import {FilmSearchDetailsPage} from "./containers/FilmSearchDetailsPage/FilmSearchDetailsPage";
import {FilmSearchPage} from "./containers/FilmSearchPage/FilmSearchPage";
import {FilmsList} from "./containers/FilmsPage/FilmsList";
import {ForgetPassword} from "./containers/ForgetPassword/ForgetPassword";
import {HomePage} from "./containers/HomePage/HomePage";
import {Landing} from "./components/Landing/Landing";
import {NotFound} from "./containers/NotFoundPage/NotFound";
import {SignIn} from "./containers/SignIn/SignIn";
import {SignUp} from "./containers/SignUp/SignUp";

import {
    ABOUT, CHECKOUT, CONTACT_US, FILMS, HOME, LANDING,
    NOT_FOUND, PASSWORD_FORGET, SEARCH, SIGN_IN, SIGN_UP
} from "./constants";

import {auth} from "./firebase/firebase";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                // user is logged in
                dispatch(setUser(authUser))
            } else {
                // user is logged out
                dispatch(setUser(null))
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path={LANDING} component={Landing}/>
                    <Route path={SIGN_IN} component={SignIn}/>
                    <Route path={SIGN_UP} component={SignUp}/>
                    <Route path={PASSWORD_FORGET} component={ForgetPassword}/>
                    <Route path={HOME} component={HomePage}/>
                    <Route path={ABOUT} component={AboutPage}/>
                    <Route exact path={FILMS} component={FilmsList}/>
                    <Route exact path={`${FILMS}/:id`} component={FilmDetailsPage}/>
                    <Route exact path={SEARCH} component={FilmSearchPage}/>
                    <Route exact path={`${SEARCH}/:id`} component={FilmSearchDetailsPage}/>
                    <Route path={CONTACT_US} component={ContactUsPage}/>
                    <Route path={CHECKOUT} component={CheckoutPage}/>
                    <Route path={NOT_FOUND} component={NotFound}/>
                    <Redirect from="*" to="/not-found"/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
