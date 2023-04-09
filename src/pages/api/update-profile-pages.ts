import { updateProfileRules } from '@/data/validationRules/validationRules';
import prisma from '@/lib/server';
import upload from '@/lib/server/multer';
import rootDirectory from '@/utils/rootDirectory';
import fs from 'fs';
import { getSession } from 'next-auth/react';
import nextConnect from 'next-connect';
import { Validate } from 'src/class/Validate';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect({
  onError: (err, req: any, res: any, next) => {
    console.log(req.file.path);
    unlinkFile(req.file.path);

    res.status(500).end('something broke');
  },
  onNoMatch: (req, res: any) => {
    console.log(req);
    res.status(404).end('Page is not found');
  },
})
  .use(upload.single('image'))
  .patch(async (req: any, res: any) => {
    const { body } = req;

    const validated = new Validate(body, updateProfileRules);

    if (validated.hasError) {
      return res.status(422).json({
        errors: validated.errors,
      });
    }

    let session;
    try {
      session = await getSession({ req });
    } catch (error) {
      throw new Error('Cannot get user session');
    }

    if (!session?.user || session.user.email !== body.email) {
      throw new Error('This email does not belong to you');
    }

    let newData;

    if (req.file) {
      newData = { image: '/uploads/' + req.file.filename };
    }

    //update user
    try {
      const currentUser = await prisma.user.findUnique({
        where: {
          email: session.user.email!,
        },
      });

      await prisma.user.update({
        where: {
          email: session.user.email!,
        },
        data: {
          name: body.name,
          surname: body.surname,
          ...newData,
        },
      });

      // remove old image
      if (currentUser?.image) {
        console.log(rootDirectory + '/public/' + currentUser?.image);
        unlinkFile(rootDirectory + '/public/' + currentUser?.image);
      }
    } catch (error) {
      console.log(error);
    }
    // return NextResponse.json({ message: 'success', user: updatedUser });

    res.status(200).json({ message: 'success' });
  });

export default handler;

const unlinkFile = (fileDirectory: string) => {
  fs.unlink(fileDirectory, (err) => {
    if (err) console.log(err);
    else {
      console.log('\nDeleted file: example_file.txt');
    }
  });
};
