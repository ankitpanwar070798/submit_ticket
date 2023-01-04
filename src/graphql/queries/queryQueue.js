import { gql } from "@apollo/client";

export const USER_QUEUE = gql`
query queue{
  queues{
    id
    title
  }
}
`

