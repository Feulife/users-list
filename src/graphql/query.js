import { gql } from "@apollo/client";

export const GET_LIST = gql`
  query Query {
    list {
      id
      name
      surname
      telephone
      birthday
    }
  }
`