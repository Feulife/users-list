import { gql } from "@apollo/client";

export const CREATE_LIST_MUTATION = gql`
  mutation Mutation(
    $name: String
    $surname: String
    $email: String
    $telephone: String
    $birthday: String
  ) {
    create(
      name: $name
      surname: $surname
      email: $email
      telephone: $telephone
      birthday: $birthday
    ) {
      id
      name
      surname
      email
      telephone
      birthday
    }
  }
`