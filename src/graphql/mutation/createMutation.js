import { gql } from "@apollo/client";

export const CREATE_TICKET = gql`
mutation create($queueId:ID!, $projectId:ID!, $title:String!, $description:String!, $dueOn:String!,$submitterEmail:String, $caseOwner:String, $priority:TicketPriorityEnum!,$ticketType:TicketTypeEnum!){
  createTicket(description:$description, queueId:$queueId ,projectId:$projectId, title:$title,submitterEmail:$submitterEmail,caseOwner:$caseOwner,dueOn:$dueOn,priority:$priority, ticketType:$ticketType ){
    message
    status
  }
}
`