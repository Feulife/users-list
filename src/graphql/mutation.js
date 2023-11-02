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
`;

export const DELETE_LIST_MUTATION = gql`
  mutation Mutation($id: ID) {
    delete(id: $id)
  }
`;

export const EDIT_LIST_MUTATION = gql`
  mutation Mutation(
    $name: String
    $surname: String
    $email: String
    $telephone: String
    $birthday: String
  ) {
    edit(
      id: $id
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
`;
