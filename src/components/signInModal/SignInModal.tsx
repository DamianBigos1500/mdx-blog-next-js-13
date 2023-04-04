import { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from '../ui/Dialog';
import SignInProviders from '../authButtons/signInGoogle/SignInProviders';
import styles from '@/styles/components/signInModal/signInModal.module.scss';

interface SignInModalProps {}

const SignInModal: FC<SignInModalProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger className={styles.dialog__triger}>Sign in</DialogTrigger>
      <DialogPortal className={styles.dialog__portal}>
        <DialogOverlay className={styles.dialog__overlay} />
        <DialogContent className={styles.dialog__content}>
          <SignInProviders />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default SignInModal;
