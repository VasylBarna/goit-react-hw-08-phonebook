import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';

export function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <Navigation children={isLoggedIn ? <UserMenu /> : <AuthNavigation />} />
    </div>
  );
}