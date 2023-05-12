export const updateProfileRules = {
  name: ['required', 'min:3', 'max:255'],
  surname: ['required', 'min:3', 'max:255'],
};

export const signUpRules = {
  name: ['required', 'min:3', 'max:255'],
  email: ['required', 'email', 'max:255'],
  password: ['required', 'confirmed', 'min:8', 'max:255'],
};

export const signInRules = {
  email: ['required', 'email', 'max:255'],
  password: ['required', 'min:8', 'max:255'],
};