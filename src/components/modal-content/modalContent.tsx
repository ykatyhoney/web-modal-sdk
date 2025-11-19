import React, { useEffect, useRef, useState } from 'react';
import { Content, BottomLogo } from './modalContentStyles';
import { PageRewardDisplay } from './pageRewardDisplay';
import { ContentPage, IConfig, IConfigWithAnswer, ILuckyConfig, ModalAnswer, ModalReward, RedeemLaterType } from '../../shared/constants';
import { PageRedeemLaterInput } from './pageRedeemLaterInput';
import { PageRedeemLaterConfirmation } from './pageRedeemLaterConfirmation';
// Note: TweenMax is a GSAP 2 API but still works in GSAP 3
// Consider migrating to gsap.to() for future GSAP 4 compatibility
import { Back, TweenMax } from 'gsap';
import classNames from 'classnames';
import { PageQuestion } from './pageQuestion';
import { PageRedeemNow } from './pageRedeemNow';
import { CampaignImpressionRequestQuery, useCampaignImpressionSelectionMutation } from '../../types/gqlReactTypings.generated.d';

interface IProps {
  config: ILuckyConfig;
  data: CampaignImpressionRequestQuery;
}

export const ModalContent: React.FC<IProps> = ({ config, data }: IProps) => {
  const bgColor = config.darkMode ? 'black' : 'white';
  const contentRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<ContentPage>(ContentPage.REWARD_DISPLAY);
  const [selectedAnswer, setSelectedAnswer] = useState<ModalAnswer>();
  const [reward, setReward] = useState<ModalReward>();

  const [campaignImpressionSelectionMutation] = useCampaignImpressionSelectionMutation();

  useEffect(() => {
    if (contentRef.current) {
      TweenMax.to(
        contentRef.current,
        0.5,
        {
          scale: 1,
          backgroundColor: bgColor,
          autoAlpha: 1,
          ease: Back.easeOut
        }
      );
    }
  }, [bgColor]);

  const { campaignImpressionRequest: { branding, campaign, campaignAnswers, campaignImpression } } = data;


  const brandConfig: IConfig = {
    logo: branding.imageUrl,
    theme: {
      primaryColor: branding.primaryColorHex
    },
    question: campaign.question,
    answers: campaignAnswers
  };

  const selectAnswer = (answer: ModalAnswer): void => {
    setSelectedAnswer(answer);
    campaignImpressionSelectionMutation({ 
      variables: { 
        campaignImpressionId: campaignImpression.id, 
        campaignAnswerId: answer.id 
      } 
    })
      .then(({ data: rewardData }) => {
        if (!rewardData?.campaignImpressionSelection?.campaignImpressionReward) {
          // eslint-disable-next-line no-console
          console.error('No reward data received from mutation');
          config.onFinish?.(false);
          return;
        }

        setReward(rewardData.campaignImpressionSelection.campaignImpressionReward);
      })
      .catch((err: Error) => {
        // eslint-disable-next-line no-console
        console.error('Error selecting answer:', err);
        config.onFinish?.(false);
      });
  };

  const renderCurrentPage = () => {
    if (!selectedAnswer || !reward) {
      return (
        <PageQuestion setPage={setPage} bgColor={bgColor}
          config={brandConfig}
          setSelectedAnswer={selectAnswer}
        />
      )
    }

    const configWithAnswer: IConfigWithAnswer = {
      ...brandConfig,
      selectedAnswer,
      reward
    }
    switch (page) {
      case ContentPage.REWARD_DISPLAY:
        return (
          <PageRewardDisplay setPage={setPage} bgColor={bgColor}
            config={configWithAnswer}
          />
        );
      case ContentPage.REDEEM_NOW:
        return (
          <PageRedeemNow setPage={setPage} bgColor={bgColor}
            config={configWithAnswer}
            onFinish={() => config.onFinish?.(true)}
          />
        )
      case ContentPage.REDEEM_LATER_EMAIL:
        return (
          <PageRedeemLaterInput setPage={setPage} bgColor={bgColor}
            type={RedeemLaterType.EMAIL}
            config={configWithAnswer}
            campaignImpressionId={campaignImpression.id}
          />
        );
      case ContentPage.REDEEM_LATER_SMS:
        return (
          <PageRedeemLaterInput setPage={setPage} bgColor={bgColor}
            type={RedeemLaterType.SMS}
            config={configWithAnswer}
            campaignImpressionId={campaignImpression.id}
          />
        );
      case ContentPage.REDEEM_LATER_CONFIRMATION:
        return (
          <PageRedeemLaterConfirmation
            onFinish={() => config.onFinish?.(true)}
            config={configWithAnswer}
          />
        );
      default:
        throw new Error("Attempting to show page that doesn't exist");
    }
  }

  return (
    <Content 
      ref={contentRef} 
      className={classNames({ 'dark': config.darkMode })} 
      style={{ 
        fontFamily: 'Poppins, Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' 
      }}
    >
      <link href="https://fonts.googleapis.com/css?family=Poppins:400;500;600" rel="stylesheet" />
      {renderCurrentPage()}
      <BottomLogo>
        <span>Partnering with</span>
        <img 
          src={`https://s3.us-east-2.amazonaws.com/www.luckymobility.com/images/lucky-${config.darkMode ? 'white' : 'black'}.png`} 
          alt="Lucky Labs logo" 
        />
      </BottomLogo>
    </Content>
  );
};
