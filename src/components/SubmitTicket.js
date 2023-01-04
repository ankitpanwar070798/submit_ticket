import React, { useState } from "react";
import "./SubmitTicketStyle.css";
import { useQuery } from "@apollo/client";
import { USER_QUEUE } from "../graphql/queries/queryQueue";
import { useMutation } from "@apollo/client";
import { CREATE_TICKET } from "../graphql/mutation/createMutation";
import { QUERY_OWNER } from "../graphql/queries/queryOwner";
import { USER_PROJECT } from "../graphql/queries/queryProject";

function SubmitTicket() {
  const [ticket, setTicket] = useState({
    queueId: "",
    projectId: "",
    title: "",
    description: "",  
    priority: "NORMAL",
    dueOn: "",
    submitterEmail: "",
    ticketType: "BUG",
    caseOwner: "",
  });
  const [createTicket, { data: createTicketData }] = useMutation(CREATE_TICKET);
console.log(createTicketData);
  const { data: userQueue} = useQuery( USER_QUEUE);
    console.log(userQueue);
    const { data: userProject} = useQuery( USER_PROJECT);
    console.log(userProject);
    const { data: userOwner} = useQuery(  QUERY_OWNER );
    console.log(userOwner);

  const handleChange = (event) => {
    setTicket({
      ...ticket,
      [event.target.name]: event.target.value,
    });
  };
  const infodata = (event) => {
    event.preventDefault();
    console.log(ticket);
    createTicket({ variables: ticket });
  };
  return (
    <>
      <main>
        <div className="main-container">
          <div className="main-header">Submit Ticket</div>
          <hr className="main-line" />
          <p className="paragraph">
            Unless otherwise stated, all fields are required. Please provide as
            descriptive a title and description as possible.
          </p>
          <div className="box">
            <div className="flex1">
              <div className="queue">
                <p className="para">
                  Select Queue<span>*</span>
                </p>
                <select name="queueId" id="queueId" onChange={handleChange}>
                  <option value="">-Select Queue-</option>
               
                  <option id="1" value="UXVldWVUeXBlOjE=">
                    Classmate
                  </option>
                  <option id="2" value="UXVldWVUeXBlOjI=">
                    GreenCell
                  </option>
                </select>
              </div>

              <div className="project">
                <p className="para">
                  Select Project<span>*</span>
                </p>
                <select name="projectId" id="projectId" onChange={handleChange}>
                  <option value="">-Select Project-</option>
               
                  <option id="1" value="UHJvamVjdE5vZGU6MQ==">
                    GreenCell-Phase1
                  </option>
                  <option id="2" value="UHJvamVjdE5vZGU6Mw==">
                    GreenCell-Phase2
                  </option>
                  <option id="3" value="UHJvamVjdE5vZGU6Mg==">
                    Classmate Customizer
                  </option>
                </select>
              </div>
            </div>

            <div className="title">
              <p className="para">
                Tittle of the Problem<span>*</span>
              </p>
              <input
                type="text"
                name="title"
                value={ticket.title}
                onChange={handleChange}
              />
            </div>

            <div className="desc">
              <p className="para">
                Description of your issue<span>*</span>
              </p>
              <textarea
                id=""
                name="description"
                onChange={handleChange}
                value={ticket.description}
                rows="4"
                cols="50"
                placeholder="Type your Message...."
              ></textarea>
            </div>

            <div className="Priority">
              <p className="para">
                Priority<span>*</span>
              </p>
              <div className="allButton">
                <button
                  name="priority"
                
                >
                  Critical
                </button>
                <button
                  name="priority"
                 
                >
                  High
                </button>
                <button
                  name="priority"
                  
                >
                  Normal
                </button>
                <button
                  name="priority"
                 
                >
                  Low
                </button>
                <button
                  name="priority"
               
                >
                  Very Low
                </button>
              </div>
            </div>

            <div className="date">
              <p className="para">Due on (Optional)</p>
              <input
                type="date"
                name="dueOn"
                placeholder="YYYY-MM-DD"
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                title="Enter a date in this formart YYYY-MM-DD"
                onChange={handleChange}
              />
            </div>

            <div className="attach">
              <p className="para">Add Attachments (Optional)</p>
            </div>

            <div className="input_file">
              <label htmlFor="file" className="file_label">
                Attach Files
              </label>
              <input id="file" type="file" name="file" />
            </div>

            <div className="flex2">
              <div className="emailAddress">
                <p className="para">Submitter E-Mail Address (Optional)</p>
                <input
                  type="text"
                  name="submitterEmail"
                  value={ticket.submitterEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="case">
                <p className="para">Case owner (Optional)</p>
                <select name="caseOwner" id="case" onChange={handleChange}>
                  <option value="">-Case owner-</option>
                
                  <option id="1" value="VXNlclR5cGU6Mg==">
                    Ashok
                  </option>
                  <option id="2" value="VXNlclR5cGU6MQ==">
                    Arun
                  </option>
                </select>
              </div>
            </div>
            <div className="lastButton">
              <button className="submitButton" type="Submit" onClick={infodata}>
                Submit Button
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SubmitTicket;
