import { FC, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from '@/components/UI/Dialog/Dialog';
import SignInButtons from '@/features/auth/components/SignInButtons/SignInButtons';
import SignInForm from '../SignInForm/SignInForm';
import styles from './signInModal.module.scss';

interface SignInModalProps {
  getOpenValue: ((e: boolean) => void) | null;
}

const SignInModal: FC<SignInModalProps> = ({ getOpenValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (getOpenValue) {
      getOpenValue(isOpen);
    }
  }, [isOpen, getOpenValue]);

  return (
    <Dialog onOpenChange={(isOpened: any) => setIsOpen(isOpened)} open={isOpen}>
      <DialogTrigger className={styles.dialog__triger}>Sign in</DialogTrigger>
      <DialogPortal className={styles.dialog__portal}>
        <DialogOverlay className={styles.dialog__overlay} />
        <DialogContent className={styles.dialog__content}>
          <SignInForm />
          <SignInButtons />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default SignInModal;
