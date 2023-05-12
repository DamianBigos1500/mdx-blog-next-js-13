// import { NextAuthOptions } from 'next-auth';
// import { db } from '@/lib/server/db';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import GoogleProvider from 'next-auth/providers/google';
// import GithubProvider from 'next-auth/providers/github';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import prisma from '@/lib/server';
// import bcrypt from 'bcrypt';
// import { Validate } from '@/class/Validate';
// import { signInRules } from '@/utils/validationRules';


// function checkCredentialsExistance(id?: string, secret?: string) {
//   if (!id || id.length == 0) {
//     throw new Error('No clientId for google provider set');
//   }

//   if (!secret || secret.length == 0) {
//     throw new Error('No clientSecret for google provider set');
//   }
//   return;
// }

// function getGoogleCredentials() {
//   const clientId = process.env.GOOGLE_CLIENT_ID;
//   const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

//   checkCredentialsExistance(clientId, clientSecret);

//   if (!clientId || clientId.length == 0) {
//     throw new Error('No clientId for google provider set');
//   }

//   if (!clientSecret || clientSecret.length == 0) {
//     throw new Error('No clientSecret for google provider set');
//   }

//   return {
//     clientId,
//     clientSecret,
//   };
// }

// function getGithubCredentials() {
//   const clientId = process.env.GITHUB_CLIENT_ID;
//   const clientSecret = process.env.GITHUB_CLIENT_SECRET;

//   if (!clientId || clientId.length == 0) {
//     throw new Error('No clientId for google provider set');
//   }

//   if (!clientSecret || clientSecret.length == 0) {
//     throw new Error('No clientSecret for google provider set');
//   }

//   return {
//     clientId,
//     clientSecret,
//   };
// }

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(db),
//   session: {
//     strategy: 'jwt',
//     maxAge: 30 * 24 * 60 * 60,
//   },

//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         domain: {
//           label: 'Domain',
//           type: 'text ',
//           placeholder: 'CORPNET',
//           value: 'CORPNET',
//         },
//         email: { label: 'Username', type: 'text ', placeholder: 'jsmith' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         const formData = {
//           email: credentials?.email,
//           password: credentials?.password,
//         };

//         const validated = new Validate(formData, signInRules);

//         if (validated.hasError) {
//           console.log(validated.errors);
//           throw Error('Invalid credentials');
//         }

//         const user = await prisma.user.findFirst({
//           where: {
//             email: credentials?.email,
//           },
//         });

//         if (user && user.password) {
//           const isValid = bcrypt.compare(credentials?.password!, user.password);
//           console.log(user);
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//     GoogleProvider({
//       clientId: getGoogleCredentials().clientId,
//       clientSecret: getGoogleCredentials().clientSecret,
//       // allowDangerousEmailAccountLinking: true,
//     }),
//     GithubProvider({
//       clientId: getGithubCredentials().clientId,
//       clientSecret: getGithubCredentials().clientSecret,
//       // allowDangerousEmailAccountLinking: true,
//     }),
//   ],
//   callbacks: {
//     async session({ token, session }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.surname = token.surname;
//         session.user.email = token.email;
//         session.user.image = token.picture;
//       }

//       return session;
//     },
//     async jwt({ token, user }) {
//       const dbUser = await db.user.findFirst({
//         where: {
//           email: token.email,
//         },
//       });

//       if (!dbUser) {
//         token.id = user!.id;
//         return token;
//       }

//       return {
//         id: dbUser.id,
//         name: dbUser.name,
//         surname: dbUser.surname,
//         email: dbUser.email,
//         picture: dbUser.image,
//       };
//     },
//   },
// };
