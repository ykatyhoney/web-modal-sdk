import React, { useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { SvgCloseButton } from '../../icons/SvgCloseButton';
import { CloseBtn, ModalStyled } from './luckyModalStyles';
import { Colors, ILuckyConfig } from '../../shared/constants';
import { ApolloProvider, ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createApolloClient } from '../../shared/gqlClient';
import { ModalContent } from '../../components/modal-content/modalContent';
import { CampaignImpressionRequestComponent } from '../../types/gqlReactTypings.generated.d';

interface IProps {
  apiKey: string;
  show?: boolean;
  config: ILuckyConfig;
  onShow?: () => void;
  onHide?: () => void;
  animation?: boolean;
  centered?: boolean;
  keyboard?: boolean;
  backdrop?: boolean;
  overlayBgColor?: string;
  overlayBgAlpha?: number;
  contentFullWidth?: boolean;
  contentBgColor?: string;
  contentBorderRadius?: string;
  contentPadding?: string;
  closeLeft?: string;
  closeRight?: string;
  closeTop?: string;
  closeBottom?: string;
  closeColor?: string;
  closeFixed?: boolean;
  headerContent?: React.ReactNode;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

/**
 * LuckyModal component that displays a modal with campaign impression request.
 * Handles Apollo Client setup and renders modal content based on GraphQL data.
 */
export const LuckyModal: React.FC<IProps> = ({
  apiKey,
  config,
  headerContent,
  footerContent,
  onHide,
  onShow,
  animation = true,
  centered = true,
  keyboard = true,
  backdrop = false,
  overlayBgColor,
  overlayBgAlpha,
  contentBgColor,
  contentBorderRadius,
  contentPadding,
  closeLeft,
  closeRight,
  closeTop,
  closeBottom,
  closeColor = config.darkMode ? Colors.WHITE : Colors.BLANK,
  closeFixed = true
}: IProps) => {
  const apolloClient = useMemo<ApolloClient<NormalizedCacheObject>>(() => {
    return createApolloClient(apiKey);
  }, [apiKey]);

  const handleError = (error: Error) => {
    // eslint-disable-next-line no-console
    console.error('Campaign impression request error:', error);
    // Could integrate with error tracking service here
  };

  return (
    <ApolloProvider client={apolloClient}>
      <CampaignImpressionRequestComponent
        skip={false}
        variables={{ request: {}, campaignId: config.momentId }}
        onError={handleError}
      >
        {({ data, loading, error }) => {
          if (loading) {
            return null;
          }

          if (error || !data) {
            return null;
          }

          return (
            <>
              <ModalStyled
                show={Boolean(data)}
                onHide={onHide}
                onShow={onShow}
                animation={animation}
                centered={centered}
                keyboard={keyboard}
                backdrop={backdrop}
                theme={{
                  overlayBgColor,
                  overlayBgAlpha,
                  contentBgColor,
                  contentBorderRadius,
                  contentPadding
                }}
              >
                <CloseBtn
                  variant="link"
                  type="button"
                  onClick={onHide}
                  aria-label="Close modal"
                  theme={{
                    closeFixed,
                    closeLeft,
                    closeRight,
                    closeTop,
                    closeBottom
                  }}
                >
                  <SvgCloseButton color={closeColor} />
                </CloseBtn>
                {headerContent && <Modal.Header>{headerContent}</Modal.Header>}
                <Modal.Body>
                  <ModalContent
                    config={config}
                    data={data}
                  />
                </Modal.Body>
                {footerContent && <Modal.Footer>{footerContent}</Modal.Footer>}
              </ModalStyled>
            </>
          );
        }}
      </CampaignImpressionRequestComponent>
    </ApolloProvider>
  );
};
