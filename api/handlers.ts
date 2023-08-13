import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  query getRooms {
    usersRooms {
      user {
        email
        firstName
        lastName
        id
        role
      }
      rooms {
        id
      }
    }
  }
`;

export const GET_ROOM = gql`
  query getRoom($id: ID!) {
    room(id: $id) {
      name
      messages {
        body
        insertedAt
      }
    }
  }
`;

export const GET_SINGLE_CHAT = gql`
  query getSingleChat($id: ID!) {
    room(id: $id) {
      name
      messages {
        id
        body
        insertedAt
        user {
          id
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    user {
      id
    }
  }
`;
