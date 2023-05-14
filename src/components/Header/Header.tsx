import Navbar from '@/components/Navbar/Navbar';
import getCurrentUser from '@/features/auth/utils/getCurrentSession';

const Header = async () => {
  const currentUser = await getCurrentUser();

  return (
    <header>
      <Navbar currentUser={currentUser} />
    </header>
  );
};

export default Header;
