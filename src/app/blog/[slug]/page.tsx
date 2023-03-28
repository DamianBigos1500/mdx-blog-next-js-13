import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = (props) => {
  console.log(props);
  return <div>page</div>;
};

export default page;
