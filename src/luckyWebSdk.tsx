import ReactDOM from 'react-dom';
import React from 'react';
import { LuckyModal } from './components/modal/luckyModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ILuckyConfig } from 'shared/constants';

const LUCKY_ELEMENT_NAME = 'lucky';
const getLuckyElement = () => {
  return document.getElementById(LUCKY_ELEMENT_NAME) as HTMLElement
}


export const showLuckyModal = (authKey: string, config: ILuckyConfig = {}) => {
  console.log("Showing lucky modal with config", config);
  const { onFinish } = config;
  const handleOnFinish = (result: boolean) => () => {
    hideLuckyModal();
    onFinish?.(result);
  }

  ReactDOM.render(<LuckyModal apiKey={authKey} config={config} onHide={handleOnFinish(false)} />,
    getLuckyElement());
};

export const hideLuckyModal = () => {
  ReactDOM.unmountComponentAtNode(getLuckyElement())
};