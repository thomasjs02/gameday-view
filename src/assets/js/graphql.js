// graphql.js
import { gql } from '@apollo/client';

export const GET_PERSONAL = gql`
  query {
    thomas {
      title
      description
      icon
    }
  }
`;
