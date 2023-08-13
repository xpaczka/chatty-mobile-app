import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation sendMessage($roomId: String!, $body: String!) {
    sendMessage(roomId: $roomId, body: $body) {
      body
      user {
        id
      }
    }
  }
`;
