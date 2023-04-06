import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import MdxComponents from '../mdxComponents';

interface MdxContentProps extends MDXRemoteProps {
  data: any;
}

const MdxContent = ({ data, ...props }: MdxContentProps) => {
  return (
    <div id="mdx-content">
      {/* @ts-expect-error Async Server Component Workaround */}
      <MDXRemote {...props} components={MdxComponents} />;
    </div>
  );
};

export default MdxContent;
