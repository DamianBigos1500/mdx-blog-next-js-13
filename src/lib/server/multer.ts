import multer from 'multer';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req: any, file: any, cb: any): void {
      cb(null, path.join(process.cwd(), 'public', 'uploads'));
    },

    filename: function (req: any, file: any, cb: any): void {
      cb(null, new Date().getTime() + '-' + file.originalname);
    },
  }),
});

export default upload;
