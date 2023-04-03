import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header>
      {/* @ts-expect-error Server Component */}
      <Navigation />
    </header>
  );
};

export default Header;
