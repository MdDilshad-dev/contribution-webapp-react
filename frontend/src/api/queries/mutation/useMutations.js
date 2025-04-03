import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $password: String!) {
    insert_user(objects: { name: $name, email: $email, password: $password }) {
      returning {
        id
        name
        email
      }
    }
  }
`;
