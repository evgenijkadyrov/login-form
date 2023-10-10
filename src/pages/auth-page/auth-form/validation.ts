const REQUIRED = 'Required field';
const LENGTHPASSWORD = 6;

export const loginValidation = {
  required: REQUIRED,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Login invalid. Content kirilica letters.';
    }

    return true;
  },
};
export const passwordValidation = {
  required: REQUIRED,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Password invalid. Content kirilica letters.';
    }
    if (value.length < LENGTHPASSWORD) {
      return 'Password shoul be more 6 letters';
    }

    return true;
  },
};
