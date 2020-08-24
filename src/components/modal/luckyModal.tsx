import React from 'react';
import { Modal } from 'react-bootstrap';
import { SvgCloseButton } from '../../icons/SvgCloseButton';
import { CloseBtn, ModalStyled } from './luckyModalStyles';
import { Colors, ILuckyConfig } from '../../shared/constants';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';
import { createApolloClient } from '../../shared/gqlClient';
import { ModalContent } from '../../components/modal-content/modalContent';
import { CampaignImpressionRequestComponent } from '../../types/gqlReactTypings.generated.d';

interface IProps {
  apiKey: string;
  show?: boolean;
  config: ILuckyConfig;

  // Todo: reduce
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

export const LuckyModal: React.FC<IProps> = ({
  apiKey,
  config,
  headerContent,
  footerContent,
  onHide,
  onShow,
  // show,
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
  closeColor = !!config.darkMode ? Colors.WHITE : Colors.BLANK,
  closeFixed = true
}: IProps) => {

  const apolloClient: ApolloClient<any> = React.useMemo(() => {
    return createApolloClient(apiKey);
  }, [apiKey]);

  return (
    <ApolloProvider client={apolloClient}>
      <CampaignImpressionRequestComponent
        skip={false}
        variables={{ request: {}, campaignId: config.momentId }}
        onError={(err) => console.error(err)}
      >
        {({ data }) => {

          if (data == null) {
            return null;
          }

          return (
            <>
              {/* {closeFixed &&
                <CloseBtn
                  variant="link"
                  type="button"
                  onClick={onHide}
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
              } */}
              <ModalStyled
                show={data != null}
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
                {
                  <CloseBtn
                    variant="link"
                    type="button"
                    onClick={onHide}
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
                }
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

          )

        }}


      </CampaignImpressionRequestComponent>

    </ApolloProvider >
  )
};
