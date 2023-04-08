import { FC, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from '../ui/Dialog';
import SignInProviders from '../authButtons/signInGoogle/SignInProviders';
import styles from '@/styles/components/signInModal/signInModal.module.scss';
import SignInForm from '../signInForm/SignInForm';

interface SignInModalProps {
  getOpenValue: ((e: boolean) => void) | null;
}

const SignInModal: FC<SignInModalProps> = ({ getOpenValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (getOpenValue) {
      getOpenValue(isOpen);
    }
  }, [isOpen]);

  return (
    <Dialog onOpenChange={(isOpened) => setIsOpen(isOpened)} open={isOpen}>
      <DialogTrigger className={styles.dialog__triger}>Sign in</DialogTrigger>
      <DialogPortal className={styles.dialog__portal}>
        <DialogOverlay className={styles.dialog__overlay} />
        <DialogContent className={styles.dialog__content}>
          <SignInForm />
          <SignInProviders />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default SignInModal;
