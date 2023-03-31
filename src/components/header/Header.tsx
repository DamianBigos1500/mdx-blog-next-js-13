'use client';

import Navigation from '../navigation/Navigation';

const Header = ({ currentUser }: any) => {
  return (
    <header>
      <Navigation  currentUser={currentUser}/>
    </header>
  );
};

export default Header;
