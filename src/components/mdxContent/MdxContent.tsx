import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import MdxComponents from '../mdxComponents';
import { BlogPost } from '@/utils/types';

interface MdxContentProps extends MDXRemoteProps {
  data: BlogPost['data'];
}

const MdxContent = ({ data, ...props }: MdxContentProps) => {
  console.log(props);
  return (
    <>
      {/* @ts-expect-error Async Server Component Workaround */}
      <MDXRemote {...props} components={MdxComponents} />;
    </>
  );
};

export default MdxContent;
