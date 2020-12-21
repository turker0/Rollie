import gql from "graphql-tag";

export const register = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(input: { username: $username, email: $email, password: $password })
  }
`;
