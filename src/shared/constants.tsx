import { CampaignAnswer, CampaignImpressionReward } from 'types/gqlReactTypings.generated.d';

export const BootstrapBGColors = ['bg-primary', 'bg-info', 'bg-success', 'bg-warning', 'bg-danger'];

export const test = 'test';

export interface ILuckyConfig {
  momentId?: string;
  darkMode?: boolean;
  onFinish?: (success: boolean) => void;
}

export enum ScreenWidth {
  EXTRA_SMALL = '576px',
  SMALL = '768px',
  MEDIUM = '992px',
  LARGE = '1200px'
}

export enum Colors {
  WHITE = '#FFFFFF',
  BLANK = '#000000'
}

export enum ContentPage {
  QUESTION_SELECTION,
  REWARD_DISPLAY,
  REDEEM_NOW,
  REDEEM_LATER_EMAIL,
  REDEEM_LATER_SMS,
  REDEEM_LATER_CONFIRMATION
}

export enum RedeemLaterType {
  EMAIL, SMS
}

interface ITheme {
  primaryColor: string;
}

interface ILocation {
  latitude: number;
  longitude: number;
  googlePlaceId?: string;
  locationFriendlyName?: string;
}

export type ModalAnswer = Pick<CampaignAnswer, 'answer' | 'id'>
export type ModalReward = Pick<CampaignImpressionReward, 'reward' | 'rewardCode' | 'rewardExpiryDate'>

export interface IConfig {
  logo: string;
  location?: ILocation;
  theme: ITheme;
  question: string;
  answers: ModalAnswer[];
  allowRedeemNow?: boolean;
  showMap?: boolean;
}


export interface IConfigWithAnswer extends IConfig {
  selectedAnswer: ModalAnswer;
  reward: ModalReward;
}

export const isDevEnvironment = () => {
  console.log(window.location.href);
  return window.location.href.toLowerCase().includes("localhost");
}