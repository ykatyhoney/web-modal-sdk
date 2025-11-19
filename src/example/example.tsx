import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { showLuckyModal } from '../luckyWebSdk';

export const Example: React.FC = () => {

  return (
    <Container style={{ paddingTop: 50 }}>
      <div className="pb-2">
        <Button onClick={() => showLuckyModal('123admin53!a', { darkMode: false })}>Open Modal Light</Button>
      </div>

      <div className="pb-2">
        <Button onClick={() => showLuckyModal('123admin53!a', { darkMode: true })}>Open Modal Dark</Button>
      </div>

      <div id='lucky' />

    </Container >
  )
};
