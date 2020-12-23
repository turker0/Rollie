import gql from "graphql-tag";

// interface MoviesInput {
//   watched: [MovieInput];
//   later: [MovieInput];
//   declined: [MovieInput];
// }

// interface MovieInput {
//   Title: String;
//   Year: String;
//   Rated: String;
//   Released: String;
//   Runtime: String;
//   Genre: String;
//   Director: String;
//   Writer: String;
//   Actors: String;
//   Plot: String;
//   Language: String;
//   Country: String;
//   Awards: String;
//   Poster: String;
//   Ratings: [Ratings];
//   Metascore: String;
//   imdbRating: String;
//   imdbVotes: String;
//   imdbID: String;
//   Type: String;
//   DVD: String;
//   BoxOffice: String;
//   Production: String;
//   Website: String;
//   Response: String;
// }

// interface Ratings {
//   Source: String;
//   Value: String;
// }

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
      }
    }
  }
`;

export const update = gql`
  mutation($mail: String!, $movies: MoviesInput!) {
    update(input: { mail: $mail, movies: $movies })
  }
`;
