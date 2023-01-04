import { gql } from "@apollo/client";

export const QUERY_OWNER = gql`
query owner{
  owners{
    id
 username
  }
}
`