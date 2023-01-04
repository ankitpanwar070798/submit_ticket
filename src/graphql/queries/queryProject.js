import { gql } from "@apollo/client";


export const USER_PROJECT= gql`
query project{
  projects{
    id
    title
  }
}
`