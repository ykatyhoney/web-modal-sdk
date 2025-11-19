import React, { useEffect, useRef, useState } from 'react';
// Note: TweenMax is a GSAP 2 API but still works in GSAP 3
// Consider migrating to gsap.to() for future GSAP 4 compatibility
import { TweenMax } from 'gsap';
import {
  Body,
  ButtonCommon,
  ButtonLink,
  Caption,
  Header,
  InputStyled,
  SubTitle,
  Title,
  WrapperAnimationIn
} from './modalContentStyles';
import { AnimationPageChange } from '../shared-components/AnimationPageChange';
import { ContentPage, IConfigWithAnswer, RedeemLaterType } from '../../shared/constants';
import { formatExpiryCaption } from '../../shared/utilities';
import validator from 'validator';
import { useCampaignImpressionRedeemLaterMutation } from '../../types/gqlReactTypings.generated.d';

interface IProps {
  config: IConfigWithAnswer;
  bgColor?: string;
  changePageDuration?: number;
  delay?: number;
  type: RedeemLaterType;
  setPage: React.Dispatch<React.SetStateAction<ContentPage>>;
  campaignImpressionId: string;
}

export const PageRedeemLaterInput: React.FC<IProps> = ({
  bgColor,
  changePageDuration,
  delay = 0,
  setPage,
  config,
  type,
  campaignImpressionId
}: IProps) => {
  const [campaignImpressionRedeemLaterMutation] = useCampaignImpressionRedeemLaterMutation();

  const pageRef = useRef<HTMLDivElement>(null);

  const [pageChange, setPageChange] = useState<ContentPage>();
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>();
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (!isPageLoaded && pageRef.current) {
      setIsPageLoaded(true);
      TweenMax.to(pageRef.current, 0.6, { x: 0, autoAlpha: 1, delay });
    }
  }, [isPageLoaded, delay]);

  const onSubmit = (): void => {
    if (type === RedeemLaterType.EMAIL && !validator.isEmail(inputValue)) {
      window.alert('Please enter a valid email address');
      return;
    }
    
    if (type === RedeemLaterType.SMS && !validator.isMobilePhone(inputValue)) {
      window.alert('Please enter a valid phone number');
      return;
    }

    const typeKey = type === RedeemLaterType.EMAIL ? 'email' : 'phoneNumber';

    campaignImpressionRedeemLaterMutation({ 
      variables: { 
        campaignImpressionId, 
        [typeKey]: inputValue 
      } 
    })
      .then(() => {
        setPageChange(ContentPage.REDEEM_LATER_CONFIRMATION);
      })
      .catch((err: Error) => {
        // eslint-disable-next-line no-console
        console.error('Error redeeming later:', err);
        // Still navigate to confirmation page even on error
        setPageChange(ContentPage.REDEEM_LATER_CONFIRMATION);
      });
  };

  const getNoun = (): string => {
    switch (type) {
      case RedeemLaterType.EMAIL:
        return 'email';
      case RedeemLaterType.SMS:
        return 'phone number';
      default:
        return 'contact information';
    }
  };

  return (
    <>
      {pageChange !== undefined && (
        <AnimationPageChange 
          bgColor={bgColor} 
          duration={changePageDuration} 
          callback={() => setPage(pageChange)} 
        />
      )}
      <WrapperAnimationIn ref={pageRef} className="page-content" theme={{ transform: '-100px,0,0' }}>
        <Header>
          <img src={config.logo} alt="Brand logo" />
        </Header>
        <Body>
          <Title theme={{ margin: '0 0 3.22px', color: config.theme.primaryColor }}>{config.reward.reward}</Title>
          <Caption theme={{ margin: '0 0 16.4px' }}>{formatExpiryCaption(undefined)}</Caption>
          <SubTitle theme={{ margin: '0 0 27.35px' }}>Enter your {getNoun()}</SubTitle>

          <InputStyled type="text"
            placeholder={`Your ${getNoun()}`}
            theme={{ margin: '0 auto 39.71px' }}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />

          <ButtonCommon theme={{ backgroundColor: config.theme.primaryColor }}
            onClick={onSubmit}
          >Accept</ButtonCommon>
          <ButtonLink variant="link" onClick={() => setPageChange(ContentPage.REWARD_DISPLAY)}>Back</ButtonLink>
        </Body>
      </WrapperAnimationIn>
    </>
  )
};
