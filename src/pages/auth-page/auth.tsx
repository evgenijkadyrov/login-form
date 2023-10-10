import React from 'react';

import styles from './auth.module.css';

import { AuthForm } from 'pages/auth-page/auth-form';

export const Auth: React.FC = () => {
  return (
    <div className={styles.authPage}>
      <AuthForm />
    </div>
  );
};
