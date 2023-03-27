import { FC } from 'react';
import Navigation from '../navigation/Navigation';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Navigation />
    </header>
  );
};

export default Header;
