import axios from '@/lib/axios';

const postService = {
  likePost: async (postSlug: string) => {
    return axios.post('/api/post/like-post', {
      postSlug: postSlug,
    });
  },
  unlikePost: async (pinnedId: any) => {
    return axios.post('/api/post/unlike-post', {
      pinnedId: pinnedId,
    });
  },
};

export default postService;
