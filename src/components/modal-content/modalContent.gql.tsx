
import { gql } from '@apollo/client';
gql`
  query CampaignImpressionRequest($request: CampaignImpressionRequest!, $campaignId: String) {
    campaignImpressionRequest(request: $request, campaignId: $campaignId) {
      campaign {
        id, question
      }

      campaignAnswers {
        id, answer
      }

      campaignImpression {
        id
      }

      branding {
        primaryColorHex
        imageUrl
      }
    }
  }

  mutation CampaignImpressionSelection($campaignImpressionId: String!, $campaignAnswerId: String!) {
    campaignImpressionSelection(campaignImpressionId: $campaignImpressionId, campaignAnswerId: $campaignAnswerId) {
      campaignImpressionReward {
        reward, rewardCode, rewardExpiryDate
      }
    }
  }

  mutation CampaignImpressionRedeemLater($campaignImpressionId: String!, $phoneNumber: String, $email: String) {
    campaignImpressionRedeemLater(campaignImpressionId: $campaignImpressionId, phoneNumber: $phoneNumber, email: $email)
  }
`;
