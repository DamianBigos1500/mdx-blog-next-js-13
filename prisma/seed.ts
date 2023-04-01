// import postsService from 'src/services/posts.service';
// import prisma from '../src/lib/server';

// async function main() {
//   const posts = postsService.getPosts();

//   for (let post of posts) {
//     await prisma.blogPost.create({
//       data: {
//         content: post.content,
//         slug: post.slug,
//         data: {
//           create: {
//             title: post.data.title,
//             imageUrl: post.data.imageUrl,
//             secondImageUrl: post.data.secondImageUrl,
//             blurhash: post.data.blurhash,
//             preparationTime: String(post.data.preparationTime),
//             description: post.data.description,
//             ingredients: {
//               create: [{ name: 'adasd' }, { name: 'adasd' }],
//             },
//             publishedAt: String(post.data.publishedAt),
//           },
//         },
//       },
//     });
//   }
// }

// main().then();

