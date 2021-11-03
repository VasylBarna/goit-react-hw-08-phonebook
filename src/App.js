import { Suspense, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import AppBar from './components/AppBar';
import { PublicRoute } from './components/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute';
import * as authSelectors from './redux/Auth/auth-selectors';
import * as authOperations from './redux/Auth/auth-operation';
// import * as phonebookOperation from './redux/Phonebook/phonebook-operation';

// import styles from './App.module.scss';

const HomePage = lazy(() => import('./Pages/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const PhonebookPage = lazy(() => import('./Pages/PhonebookPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));

export default function App() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const handleFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser,
  );

  // useEffect(() => {
  //   async function refresh() {
  //     await dispatch(authOperations.fetchCurrentUser());
  //     if (isLoggedIn) {
  //       dispatch(phonebookOperation.useFetchContactsQuery());
  //     }
  //   }
  //   refresh();
  // }, [dispatch, isLoggedIn]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!handleFetchingCurrentUser && (
        <Container>
          <AppBar />
          <Suspense fallback={<h1>...Loading</h1>}>
            <Switch>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>

              <PublicRoute exact to="/register" restricted>
                <RegisterPage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <PhonebookPage />
                <ContactForm />
                <Filter />
                <ContactsList />
              </PrivateRoute>

              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </Container>
      )}
    </>
  );

  // return (
  //   <Container>
  //     <h1 className={styles.title}>Phonebook</h1>
  //     <ContactForm />
  //     <h2 className={styles.subtitle}>Contacts</h2>
  //     <Filter />
  //     <ContactsList />
  //   </Container>
  // );
}
