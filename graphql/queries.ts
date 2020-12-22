import gql from "graphql-tag";

export const register = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(input: { username: $username, email: $email, password: $password })
  }
`;

export const login = gql`
  mutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      username
      email
      password
      movies {
        watched {
          Title
        }
        later {
          Title
        }
        declined {
          Title
        }
      }
    }
  }
`;
