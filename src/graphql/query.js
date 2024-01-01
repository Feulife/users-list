import { gql } from "@apollo/client";

// export const GET_LIST = gql`
//   query Query($cursor: String) {
//     users(cursor: $cursor) {
//       cursor
//       hasNextPage
//       lists {
//         id
//         name
//         surname
//         telephone
//         birthday
//       }
//     }
//   }
// `;

export const GET_LIST = gql`
  query Query {
    lists {
      id
      name
      surname
      email
      telephone
      birthday
    }
  }
`
