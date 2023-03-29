import postsService from 'src/services/posts.service';
import MdxContent from '@/components/mdxContent/MdxContent';

export const generateMetadata = async ({ params }: any) => {
  const { data } = postsService.getPostBySlug(params.slug);
  return { title: data.title };
};

const page = async ({ params }: { params: { slug: string } }) => {
  const { data, content } = postsService.getPostBySlug(params.slug);

  return (
    <div className={"styles.pd"}>
      <MdxContent source={content} data={data} />
    </div>
  );
};

export default page;
