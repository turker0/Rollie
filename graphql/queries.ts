import gql from "graphql-tag";

export const register = gql`
  mutation($username: String!, $mail: String!, $password: String!) {
    register(input: { username: $username, mail: $mail, password: $password })
  }
`;

export const login = gql`
  mutation($mail: String!, $password: String!) {
    login(input: { mail: $mail, password: $password }) {
      username
      mail
      password
      movies {
        watched {
          Title
          Year
          Rated
          Released
          Runtime
          Genre
          Director
          Writer
          Actors
          Plot
          Language
          Country
          Awards
          Poster
          Ratings {
            Source
            Value
          }
          Metascore
          imdbRating
          imdbVotes
          imdbID
          Type
          DVD
          BoxOffice
          Production
          Website
          Response
        }
        later {
          Title
          Year
          Rated
          Released
          Runtime
          Genre
          Director
          Writer
          Actors
          Plot
          Language
          Country
          Awards
          Poster
          Ratings {
            Source
            Value
          }
          Metascore
          imdbRating
          imdbVotes
          imdbID
          Type
          DVD
          BoxOffice
          Production
          Website
          Response
        }
        declined {
          Title
          Year
          Rated
          Released
          Runtime
          Genre
          Director
          Writer
          Actors
          Plot
          Language
          Country
          Awards
          Poster
          Ratings {
            Source
            Value
          }
          Metascore
          imdbRating
          imdbVotes
          imdbID
          Type
          DVD
          BoxOffice
          Production
          Website
          Response
        }
        current {
          Title
          Year
          Rated
          Released
          Runtime
          Genre
          Director
          Writer
          Actors
          Plot
          Language
          Country
          Awards
          Poster
          Ratings {
            Source
            Value
          }
          Metascore
          imdbRating
          imdbVotes
          imdbID
          Type
          DVD
          BoxOffice
          Production
          Website
          Response
        }
      }
    }
  }
`;

export const update = gql`
  mutation($mail: String!, $movies: MoviesInput!) {
    update(input: { mail: $mail, movies: $movies })
  }
`;
