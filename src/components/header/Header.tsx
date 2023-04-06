import getCurrentUser from '@/utils/getCurrentUser';
import Navigation from '../navigation/Navigation';

const Header = async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser);

  return (
    <header>
      <Navigation currentUser={currentUser} />
    </header>
  );
};

export default Header;
