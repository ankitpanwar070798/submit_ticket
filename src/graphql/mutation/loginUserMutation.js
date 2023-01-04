import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation LoginUser($email: String!){
user: login(email: $email){
 token
}
}
`


