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
      }
    }
  }
`;
