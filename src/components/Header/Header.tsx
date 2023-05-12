// import getCurrentUser from '@/utils/getCurrentUser';

import Navbar from '@/components/Navbar/Navbar';

const Header = async () => {
  // const currentUser = await getCurrentUser();
  const currentUser = null;

  return (
    <header>
      <Navbar currentUser={currentUser} />
    </header>
  );
};

export default Header;
