import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Routes,Route } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import PropagateLoader from "react-spinners/PropagateLoader";


const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'))

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

    return isRefreshing ? (
      <PropagateLoader color="#36d7b7" size={40} />
    ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              }
            />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
              }
            />
          </Route>
        </Routes>
    );
}