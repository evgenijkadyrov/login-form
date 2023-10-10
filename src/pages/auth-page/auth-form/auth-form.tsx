import React from 'react';

import { Button, TextField, Typography } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import styles from './auth-form.module.css';

import {
  loginValidation,
  passwordValidation,
} from 'pages/auth-page/auth-form/validation';

interface IFormInput {
  login: string;
  password: string;
}

export const AuthForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  return (
    <div className={styles.authForm}>
      <Typography variant="h4" component="div">
        Login form
      </Typography>

      <form className={styles.authForm_item} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="login"
          control={control}
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              id="outlined-required"
              label="login"
              onChange={e => field.onChange(e)}
              value={field.value}
              fullWidth
              size="small"
              margin="normal"
              className="auth-form__input"
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            >
              Login
            </TextField>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Password"
              type="password"
              onChange={e => field.onChange(e)}
              value={field.value}
              fullWidth
              size="small"
              margin="normal"
              className="auth-form__input"
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            >
              Login
            </TextField>
          )}
        />

        <Button type="submit" variant="contained" disableElevation fullWidth>
          Log in
        </Button>
      </form>
    </div>
  );
};
