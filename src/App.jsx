import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { authOperations } from './redux/Auth';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from './components/AppBar/AppBar';
import { PublicRoute } from './components/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute';

const HomePage = lazy(() =>
  import('./Pages/HomePage'),
);
const RegistrationPage = lazy(() =>
  import('./Pages/RegisterPage'),
);
const SignInPage = lazy(() =>
  import('./Pages/LoginPage'),
);
const CreateContactsPage = lazy(() =>
  import('./Pages/AddContactPage'),
);
const ContactsPage = lazy(() =>
  import('./Pages/PhonebookPage'),
);
const LogoutPage = lazy(() =>
  import('./Pages/LogOutPage'),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <AppBar />
        <Suspense
          fallback={
            <Loader
              type="Hearts"
              color="#ff8400"
              height={75}
              width={75}
              timeout={2500}
            />
          }
        >
          <Switch>
                <PublicRoute path="/" exact restricted>
              <HomePage/>
            </PublicRoute>
            <PublicRoute exact path="/registration" restricted>
              <RegistrationPage />
            </PublicRoute>
            <PublicRoute exact path="/autorization" restricted>
              <SignInPage />
            </PublicRoute>
            <PrivateRoute path="/create-contact" exact>
              <CreateContactsPage />
            </PrivateRoute>
            <PrivateRoute path="/contacts" redirect exact>
              <ContactsPage />
            </PrivateRoute>
            <PrivateRoute path="/logout" exact>
              <LogoutPage />
              <Redirect to="/autorization" />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
      <ToastContainer />
    </>
  );
}
