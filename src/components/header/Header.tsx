import getCurrentUser from '@/utils/getCurrentUser';
import Navigation from '../navigation/Navigation';

const Header = async () => {
  const currentUser = await getCurrentUser();

  return (
    <header>
      <Navigation currentUser={currentUser} />
    </header>
  );
};

export default Header;
