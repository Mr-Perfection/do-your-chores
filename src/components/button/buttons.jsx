import React from 'react';
import Button from 'antd/lib/button';

import './styles/buttons.css';

export function SignInButton({ buttonName, onClick }) {
  return (
    <div className={buttonName}>
      <Button onClick={() => onClick()}>
        { buttonName }
      </Button>
    </div>
  );
};
