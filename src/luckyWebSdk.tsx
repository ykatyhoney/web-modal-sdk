import { createRoot, Root } from 'react-dom/client';
import React from 'react';
import { LuckyModal } from './components/modal/luckyModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ILuckyConfig } from 'shared/constants';

const LUCKY_ELEMENT_NAME = 'lucky';
let root: Root | null = null;

/**
 * Gets the DOM element where the modal should be rendered.
 * @returns The HTML element with id "lucky" or null if not found
 */
const getLuckyElement = (): HTMLElement | null => {
  return document.getElementById(LUCKY_ELEMENT_NAME);
};

/**
 * Shows the Lucky modal with the provided API key and configuration.
 * @param authKey - The API key for authentication
 * @param config - Optional configuration object for the modal
 * @throws Error if the required DOM element is not found
 */
export const showLuckyModal = (authKey: string, config: ILuckyConfig = {}): void => {
  if (!authKey) {
    // eslint-disable-next-line no-console
    console.warn('showLuckyModal called without an API key');
  }

  const { onFinish } = config;
  const handleOnFinish = (result: boolean) => (): void => {
    hideLuckyModal();
    onFinish?.(result);
  };

  const element = getLuckyElement();
  if (!element) {
    const errorMessage = `Element with id "${LUCKY_ELEMENT_NAME}" not found. Please ensure a div with id="${LUCKY_ELEMENT_NAME}" exists in your HTML.`;
    // eslint-disable-next-line no-console
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  if (!root) {
    root = createRoot(element);
  }

  root.render(<LuckyModal apiKey={authKey} config={config} onHide={handleOnFinish(false)} />);
};

/**
 * Hides and unmounts the Lucky modal.
 */
export const hideLuckyModal = (): void => {
  if (root) {
    root.render(null);
    root = null;
  }
};