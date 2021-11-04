import { Suspense, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import * as authSelectors from './redux/Auth/auth-selectors';
import * as authOperations from './redux/Auth/auth-operation';
import Loader from 'react-loader-spinner';
// import styles from './App.module.scss';

const HomePage = lazy(() => import('./Pages/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const PhonebookPage = lazy(() => import('./Pages/PhonebookPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));

function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Container>
          <AppBar />
          <Suspense
            fallback={
              <Loader
                type="Hearts"
                color="#ff6706"
                height={75}
                width={75}
                timeout={2500}
              />
            }
          >
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
              </PrivateRoute>
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
export default App;
