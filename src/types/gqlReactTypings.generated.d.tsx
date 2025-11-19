/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
/* NOTE: This file has been updated to use @apollo/client. Regenerate with latest codegen for full compatibility. */
import { gql, useQuery, useLazyQuery, useMutation, QueryHookOptions, LazyQueryHookOptions, MutationHookOptions, QueryResult, MutationResult, BaseMutationOptions, MutationFunction } from '@apollo/client';
import * as React from 'react';

// Compatibility namespaces for old Apollo packages structure
namespace ApolloReactCommon {
  export type QueryResult<TData, TVariables> = import('@apollo/client').QueryResult<TData, TVariables>;
  export type MutationResult<TData> = import('@apollo/client').MutationResult<TData>;
  export type BaseMutationOptions<TData, TVariables> = import('@apollo/client').BaseMutationOptions<TData, TVariables>;
  export type MutationFunction<TData, TVariables> = import('@apollo/client').MutationFunction<TData, TVariables>;
}

namespace ApolloReactHooks {
  export const useQuery = useQuery;
  export const useLazyQuery = useLazyQuery;
  export const useMutation = useMutation;
  export type QueryHookOptions<TData, TVariables> = QueryHookOptions<TData, TVariables>;
  export type LazyQueryHookOptions<TData, TVariables> = LazyQueryHookOptions<TData, TVariables>;
  export type MutationHookOptions<TData, TVariables> = MutationHookOptions<TData, TVariables>;
}

// For components and HOC - these are deprecated in Apollo Client v3
// Components using CampaignImpressionRequestComponent should be migrated to use hooks
namespace ApolloReactComponents {
  export interface QueryComponentOptions<TData, TVariables> {
    query: any;
    variables?: TVariables;
    skip?: boolean;
    [key: string]: any;
  }
  export interface MutationComponentOptions<TData, TVariables> {
    mutation: any;
    variables?: TVariables;
    [key: string]: any;
  }
  export const Query: React.ComponentType<any> = ((props: any) => {
    // Fallback implementation - should use hooks instead
    const { query, variables, children, ...rest } = props;
    const { data, loading, error } = useQuery(query, { variables, ...rest });
    return children({ data, loading, error });
  }) as any;
  export const Mutation: React.ComponentType<any> = ((props: any) => {
    // Fallback implementation - should use hooks instead
    const { mutation, children, ...rest } = props;
    const [mutate, { data, loading, error }] = useMutation(mutation, rest);
    return children(mutate, { data, loading, error });
  }) as any;
}

namespace ApolloReactHoc {
  export interface DataValue<TData, TVariables> {
    data?: TData;
    loading: boolean;
    error?: any;
  }
  export interface OperationOption<TProps, TData, TVariables, TChildProps, TDataName extends string> {
    alias?: TDataName;
    [key: string]: any;
  }
  export function withQuery<TProps, TData, TVariables, TChildProps, TDataName extends string>(
    document: any,
    operationOptions?: OperationOption<TProps, TData, TVariables, TChildProps, TDataName>
  ): (component: React.ComponentType<TProps>) => React.ComponentType<TProps> {
    return (Component: React.ComponentType<TProps>) => Component;
  }
  export function withMutation<TProps, TData, TVariables, TChildProps, TDataName extends string>(
    document: any,
    operationOptions?: OperationOption<TProps, TData, TVariables, TChildProps, TDataName>
  ): (component: React.ComponentType<TProps>) => React.ComponentType<TProps> {
    return (Component: React.ComponentType<TProps>) => Component;
  }
}
export type Maybe<T> = T | undefined;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Date: any;
};

export type Brand = {
   __typename?: 'Brand';
  apiKey: Scalars['String'];
  name: Scalars['String'];
  imageUrl: Scalars['String'];
  primaryColorHex: Scalars['String'];
};

export type BrandConfig = {
   __typename?: 'BrandConfig';
  imageUrl: Scalars['String'];
  primaryColorHex: Scalars['String'];
};

export type Campaign = {
   __typename?: 'Campaign';
  id: Scalars['String'];
  brandId: Scalars['Int'];
  name: Scalars['String'];
  question: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  demo?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Gender>;
  ageMin?: Maybe<Scalars['Int']>;
  ageMax?: Maybe<Scalars['Int']>;
  answers: Array<CampaignAnswer>;
  impressionCount: Scalars['Int'];
  answerCount: Scalars['Int'];
};

export type CampaignAnswer = {
   __typename?: 'CampaignAnswer';
  id: Scalars['String'];
  campaignId: Scalars['String'];
  answer: Scalars['String'];
  reward: Scalars['String'];
  rewardCode: Scalars['String'];
  rewardType: RewardType;
  internalNotes?: Maybe<Scalars['String']>;
};

export type CampaignAnswerInput = {
  campaignId?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
  reward?: Maybe<Scalars['String']>;
  rewardCode?: Maybe<Scalars['String']>;
  rewardType?: Maybe<RewardType>;
  internalNotes?: Maybe<Scalars['String']>;
};

export type CampaignImpression = {
   __typename?: 'CampaignImpression';
  id: Scalars['String'];
  campaignId: Scalars['String'];
  campaignAnswerId?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type CampaignImpressionConfig = {
   __typename?: 'CampaignImpressionConfig';
  campaign: Campaign;
  campaignAnswers: Array<CampaignAnswer>;
  campaignImpression: CampaignImpression;
  branding: BrandConfig;
};

export type CampaignImpressionRequest = {
  consumerUuid?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
};

export type CampaignImpressionReward = {
   __typename?: 'CampaignImpressionReward';
  id: Scalars['String'];
  campaignImpressionId: Scalars['String'];
  reward: Scalars['String'];
  rewardCode: Scalars['String'];
  rewardExpiryDate?: Maybe<Scalars['Date']>;
};

export type CampaignImpressionRewardResult = {
   __typename?: 'CampaignImpressionRewardResult';
  campaignImpressionReward: CampaignImpressionReward;
  branding: BrandConfig;
};

export type CampaignImpressionSelectionResult = {
   __typename?: 'CampaignImpressionSelectionResult';
  campaignImpression: CampaignImpression;
  campaignImpressionReward: CampaignImpressionReward;
};

export type CampaignInput = {
  name?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  allocation?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  radius?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  active?: Maybe<Scalars['Boolean']>;
  demo?: Maybe<Scalars['Boolean']>;
  ageMin?: Maybe<Scalars['Int']>;
  ageMax?: Maybe<Scalars['Int']>;
  answers: Array<CampaignAnswerInput>;
  gender?: Maybe<Gender>;
};

export type DailyCampaignMetrics = {
   __typename?: 'DailyCampaignMetrics';
  date?: Maybe<Scalars['DateTime']>;
  impressionCount?: Maybe<Scalars['Int']>;
  answerCount?: Maybe<Scalars['Int']>;
};



export enum Gender {
  All = 'ALL',
  Male = 'MALE',
  Female = 'FEMALE'
}


export type ModifyCampaignInput = {
  name?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  allocation?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  radius?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  active?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  campaignImpressionRedeemLater?: Maybe<Scalars['Boolean']>;
  campaignImpressionSelection: CampaignImpressionSelectionResult;
  createCampaign: Campaign;
  login: User;
  modifyCampaign: Campaign;
  ping: Scalars['String'];
};


export type MutationCampaignImpressionRedeemLaterArgs = {
  campaignImpressionId: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationCampaignImpressionSelectionArgs = {
  campaignImpressionId: Scalars['String'];
  campaignAnswerId: Scalars['String'];
};


export type MutationCreateCampaignArgs = {
  campaignInput: CampaignInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationModifyCampaignArgs = {
  campaignId: Scalars['String'];
  modifyCampaignInput: ModifyCampaignInput;
};

export type Pagination = {
   __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  resultsPerPage: Scalars['Int'];
};

export type Query = {
   __typename?: 'Query';
  allCampaignsMetrics: Array<Maybe<DailyCampaignMetrics>>;
  campaign: Campaign;
  campaignImpressionRequest: CampaignImpressionConfig;
  campaignImpressionReward: CampaignImpressionRewardResult;
  campaignImpressions: Array<CampaignImpression>;
  campaignMetrics: Array<Maybe<DailyCampaignMetrics>>;
  campaigns: Array<Campaign>;
  me?: Maybe<User>;
  version: Scalars['String'];
};


export type QueryAllCampaignsMetricsArgs = {
  brandId?: Maybe<Scalars['Int']>;
  timeZoneOffset?: Maybe<Scalars['Int']>;
};


export type QueryCampaignArgs = {
  campaignId: Scalars['String'];
};


export type QueryCampaignImpressionRequestArgs = {
  request: CampaignImpressionRequest;
  campaignId?: Maybe<Scalars['String']>;
};


export type QueryCampaignImpressionRewardArgs = {
  campaignImpressionId: Scalars['String'];
};


export type QueryCampaignImpressionsArgs = {
  campaignId: Scalars['String'];
};


export type QueryCampaignMetricsArgs = {
  campaignId: Scalars['String'];
  timeZoneOffset?: Maybe<Scalars['Int']>;
};


export type QueryCampaignsArgs = {
  userId?: Maybe<Scalars['Int']>;
  brandId?: Maybe<Scalars['Int']>;
};

export enum RewardType {
  Constant = 'CONSTANT',
  Generated = 'GENERATED'
}

export type User = {
   __typename?: 'User';
  id: Scalars['Int'];
  brandId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Int']>;
  internalNotes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  brand?: Maybe<Brand>;
};

export type CampaignImpressionRequestQueryVariables = {
  request: CampaignImpressionRequest;
  campaignId?: Maybe<Scalars['String']>;
};


export type CampaignImpressionRequestQuery = (
  { __typename?: 'Query' }
  & { campaignImpressionRequest: (
    { __typename?: 'CampaignImpressionConfig' }
    & { campaign: (
      { __typename?: 'Campaign' }
      & Pick<Campaign, 'id' | 'question'>
    ), campaignAnswers: Array<(
      { __typename?: 'CampaignAnswer' }
      & Pick<CampaignAnswer, 'id' | 'answer'>
    )>, campaignImpression: (
      { __typename?: 'CampaignImpression' }
      & Pick<CampaignImpression, 'id'>
    ), branding: (
      { __typename?: 'BrandConfig' }
      & Pick<BrandConfig, 'primaryColorHex' | 'imageUrl'>
    ) }
  ) }
);

export type CampaignImpressionSelectionMutationVariables = {
  campaignImpressionId: Scalars['String'];
  campaignAnswerId: Scalars['String'];
};


export type CampaignImpressionSelectionMutation = (
  { __typename?: 'Mutation' }
  & { campaignImpressionSelection: (
    { __typename?: 'CampaignImpressionSelectionResult' }
    & { campaignImpressionReward: (
      { __typename?: 'CampaignImpressionReward' }
      & Pick<CampaignImpressionReward, 'reward' | 'rewardCode' | 'rewardExpiryDate'>
    ) }
  ) }
);

export type CampaignImpressionRedeemLaterMutationVariables = {
  campaignImpressionId: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type CampaignImpressionRedeemLaterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'campaignImpressionRedeemLater'>
);


export const CampaignImpressionRequestDocument = gql`
    query CampaignImpressionRequest($request: CampaignImpressionRequest!, $campaignId: String) {
  campaignImpressionRequest(request: $request, campaignId: $campaignId) {
    campaign {
      id
      question
    }
    campaignAnswers {
      id
      answer
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
    `;
export type CampaignImpressionRequestComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables>, 'query'> & ({ variables: CampaignImpressionRequestQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CampaignImpressionRequestComponent = (props: CampaignImpressionRequestComponentProps) => (
      <ApolloReactComponents.Query<CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables> query={CampaignImpressionRequestDocument} {...props} />
    );
    
export type CampaignImpressionRequestProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables>
    } & TChildProps;
export function withCampaignImpressionRequest<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CampaignImpressionRequestQuery,
  CampaignImpressionRequestQueryVariables,
  CampaignImpressionRequestProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables, CampaignImpressionRequestProps<TChildProps, TDataName>>(CampaignImpressionRequestDocument, {
      alias: 'campaignImpressionRequest',
      ...operationOptions
    });
};

/**
 * __useCampaignImpressionRequestQuery__
 *
 * To run a query within a React component, call `useCampaignImpressionRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useCampaignImpressionRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignImpressionRequestQuery({
 *   variables: {
 *      request: // value for 'request'
 *      campaignId: // value for 'campaignId'
 *   },
 * });
 */
export function useCampaignImpressionRequestQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables>) {
        return ApolloReactHooks.useQuery<CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables>(CampaignImpressionRequestDocument, baseOptions);
      }
export function useCampaignImpressionRequestLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables>(CampaignImpressionRequestDocument, baseOptions);
        }
export type CampaignImpressionRequestQueryHookResult = ReturnType<typeof useCampaignImpressionRequestQuery>;
export type CampaignImpressionRequestLazyQueryHookResult = ReturnType<typeof useCampaignImpressionRequestLazyQuery>;
export type CampaignImpressionRequestQueryResult = ApolloReactCommon.QueryResult<CampaignImpressionRequestQuery, CampaignImpressionRequestQueryVariables>;
export const CampaignImpressionSelectionDocument = gql`
    mutation CampaignImpressionSelection($campaignImpressionId: String!, $campaignAnswerId: String!) {
  campaignImpressionSelection(campaignImpressionId: $campaignImpressionId, campaignAnswerId: $campaignAnswerId) {
    campaignImpressionReward {
      reward
      rewardCode
      rewardExpiryDate
    }
  }
}
    `;
export type CampaignImpressionSelectionMutationFn = ApolloReactCommon.MutationFunction<CampaignImpressionSelectionMutation, CampaignImpressionSelectionMutationVariables>;
export type CampaignImpressionSelectionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CampaignImpressionSelectionMutation, CampaignImpressionSelectionMutationVariables>, 'mutation'>;

    export const CampaignImpressionSelectionComponent = (props: CampaignImpressionSelectionComponentProps) => (
      <ApolloReactComponents.Mutation<CampaignImpressionSelectionMutation, CampaignImpressionSelectionMutationVariables> mutation={CampaignImpressionSelectionDocument} {...props} />
    );
    
export type CampaignImpressionSelectionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CampaignImpressionSelectionMutation, CampaignImpressionSelectionMutationVariables>
    } & TChildProps;
export function withCampaignImpressionSelection<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CampaignImpressionSelectionMutation,
  CampaignImpressionSelectionMutationVariables,
  CampaignImpressionSelectionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CampaignImpressionSelectionMutation, CampaignImpressionSelectionMutationVariables, CampaignImpressionSelectionProps<TChildProps, TDataName>>(CampaignImpressionSelectionDocument, {
      alias: 'campaignImpressionSelection',
      ...operationOptions
    });
};

/**
 * __useCampaignImpressionSelectionMutation__
 *
 * To run a mutation, you first call `useCampaignImpressionSelectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCampaignImpressionSelectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [campaignImpressionSelectionMutation, { data, loading, error }] = useCampaignImpressionSelectionMutation({
 *   variables: {
 *      campaignImpressionId: // value for 'campaignImpressionId'
 *      campaignAnswerId: // value for 'campaignAnswerId'
 *   },
 * });
 */
export function useCampaignImpressionSelectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CampaignImpressionSelectionMutation, CampaignImpressionSelectionMutationVariables>) {
        return ApolloReactHooks.useMutation<CampaignImpressionSelectionMutation, CampaignImpressionSelectionMutationVariables>(CampaignImpressionSelectionDocument, baseOptions);
      }
export type CampaignImpressionSelectionMutationHookResult = ReturnType<typeof useCampaignImpressionSelectionMutation>;
export type CampaignImpressionSelectionMutationResult = ApolloReactCommon.MutationResult<CampaignImpressionSelectionMutation>;
export type CampaignImpressionSelectionMutationOptions = ApolloReactCommon.BaseMutationOptions<CampaignImpressionSelectionMutation, CampaignImpressionSelectionMutationVariables>;
export const CampaignImpressionRedeemLaterDocument = gql`
    mutation CampaignImpressionRedeemLater($campaignImpressionId: String!, $phoneNumber: String, $email: String) {
  campaignImpressionRedeemLater(campaignImpressionId: $campaignImpressionId, phoneNumber: $phoneNumber, email: $email)
}
    `;
export type CampaignImpressionRedeemLaterMutationFn = ApolloReactCommon.MutationFunction<CampaignImpressionRedeemLaterMutation, CampaignImpressionRedeemLaterMutationVariables>;
export type CampaignImpressionRedeemLaterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CampaignImpressionRedeemLaterMutation, CampaignImpressionRedeemLaterMutationVariables>, 'mutation'>;

    export const CampaignImpressionRedeemLaterComponent = (props: CampaignImpressionRedeemLaterComponentProps) => (
      <ApolloReactComponents.Mutation<CampaignImpressionRedeemLaterMutation, CampaignImpressionRedeemLaterMutationVariables> mutation={CampaignImpressionRedeemLaterDocument} {...props} />
    );
    
export type CampaignImpressionRedeemLaterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CampaignImpressionRedeemLaterMutation, CampaignImpressionRedeemLaterMutationVariables>
    } & TChildProps;
export function withCampaignImpressionRedeemLater<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CampaignImpressionRedeemLaterMutation,
  CampaignImpressionRedeemLaterMutationVariables,
  CampaignImpressionRedeemLaterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CampaignImpressionRedeemLaterMutation, CampaignImpressionRedeemLaterMutationVariables, CampaignImpressionRedeemLaterProps<TChildProps, TDataName>>(CampaignImpressionRedeemLaterDocument, {
      alias: 'campaignImpressionRedeemLater',
      ...operationOptions
    });
};

/**
 * __useCampaignImpressionRedeemLaterMutation__
 *
 * To run a mutation, you first call `useCampaignImpressionRedeemLaterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCampaignImpressionRedeemLaterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [campaignImpressionRedeemLaterMutation, { data, loading, error }] = useCampaignImpressionRedeemLaterMutation({
 *   variables: {
 *      campaignImpressionId: // value for 'campaignImpressionId'
 *      phoneNumber: // value for 'phoneNumber'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCampaignImpressionRedeemLaterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CampaignImpressionRedeemLaterMutation, CampaignImpressionRedeemLaterMutationVariables>) {
        return ApolloReactHooks.useMutation<CampaignImpressionRedeemLaterMutation, CampaignImpressionRedeemLaterMutationVariables>(CampaignImpressionRedeemLaterDocument, baseOptions);
      }
export type CampaignImpressionRedeemLaterMutationHookResult = ReturnType<typeof useCampaignImpressionRedeemLaterMutation>;
export type CampaignImpressionRedeemLaterMutationResult = ApolloReactCommon.MutationResult<CampaignImpressionRedeemLaterMutation>;
export type CampaignImpressionRedeemLaterMutationOptions = ApolloReactCommon.BaseMutationOptions<CampaignImpressionRedeemLaterMutation, CampaignImpressionRedeemLaterMutationVariables>;