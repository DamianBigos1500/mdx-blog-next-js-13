import { FC } from 'react';

interface CredentialProviderFormProps {}

const CredentialProviderForm: FC<CredentialProviderFormProps> = ({}) => {
  return (
    <form>
      <label />
      <input name="email" placeholder="email" />

      <label />
      <input name="password" placeholder="password" />

      <button type="submit"></button>
    </form>
  );
};

export default CredentialProviderForm;
