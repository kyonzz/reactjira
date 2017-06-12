import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Collapsible from "react-collapsible";
import Issue2 from "./Issue2";
import DropZone from "./DropZone";
import { Link } from "react-router";
import { push } from "react-router-redux";

const renameStatus = status => {
  switch (status) {
    case "new":
      return "New";
    case "inProgress":
      return "In progress";
    case "done":
      return "Done";
    default:
      return status;
  }
};

const formatDate = date => {
  return new Date(date).toLocaleString();
};

const arrows = {
  Hightest: <p style={{ color: "red" }}><span><b>↑</b> </span>Hightest</p>,
  Hight: <p style={{ color: "orange" }}><span><b>↗</b> </span>Hight</p>,
  Low: <p style={{ color: "blue" }}><span><b>→</b></span> Low</p>,
  Lowest: <p style={{ color: "black" }}><span><b>↓</b></span> Lowest</p>
};

class ParentIssueInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.issues.map(issue => (
          <div key={issue.id} className="issueinfo">
            <div>
              <div>
                <div>
                  <h5>
                    Projectname /
                    {" "}
                    <Link to={`/task/${issue.id}`}>TASK-{issue.id}</Link>
                  </h5>
                  <p>Item creation</p>
                </div>
              </div>
              <Scrollbars autoHide style={{ height: 830, width: 500 }}>
                <ul style={{ margin: "0 20px" }}>
                  <Collapsible
                    open={true}
                    trigger={<hr className="style1 Title" />}
                  >
                    <div className="name">
                      <p>Status: </p>
                      <p>Priority: </p>
                      <p>Component/s: </p>
                      <p>Labels: </p>
                      <p>Affects Version/s: </p>
                      <p>Fix Version/s: </p>
                      <p>Epic link: </p>
                    </div>
                    <div className="value">
                      <p>{renameStatus(issue.status)}</p>
                      {arrows[issue.priority]}
                      <p>None</p>
                      <p>None</p>
                      <p>None</p>
                      <p>None</p>
                      <p>None</p>
                    </div>
                  </Collapsible>
                  <Collapsible
                    open={true}
                    trigger={<hr className="style1 People" />}
                  >
                    <div className="name">
                      <p>Reporter: </p>
                      <p>Assignee: </p>
                    </div>
                    <div className="value">
                      <p>Not code yet</p>
                      <p>
                        <img
                          className="avatarImage"
                          src={
                            issue.assignee
                              ? issue.assignee.avatarURL
                              : "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/11224574_1178319498849092_1271740388789995686_n.jpg?oh=a2a319a10cf4e95454e595ce0e962a19&oe=592DE2F6"
                          }
                          alt={issue.assignee.name}
                        />
                        {issue.assignee.name}
                      </p>
                    </div>
                  </Collapsible>
                  <Collapsible
                    open={true}
                    trigger={<hr className="style1 Dates" />}
                  >
                    <div className="name">
                      <p>Created date: </p>
                      <p>Updated date: </p>
                    </div>
                    <div className="value">
                      <p>{formatDate(issue.createdAt)}</p>
                      <p>{formatDate(issue.updatedAt)}</p>
                    </div>
                  </Collapsible>
                  <Collapsible
                    open={true}
                    trigger={<hr className="style1 Description" />}
                  >
                    <div className="name" />
                    <div className="value">
                      <p>Item creation feature </p>
                    </div>
                  </Collapsible>
                  <Collapsible
                    open={true}
                    trigger={<hr className="style1 Comments" />}
                  >
                    <div className="value">
                      {issue.comment
                        ? issue.comment
                        : "There are no comments yet on this issue"}
                    </div>
                  </Collapsible>
                  <Collapsible
                    open={true}
                    trigger={<hr className="style1 Attachments" />}
                  >
                    <div>
                      <DropZone />
                    </div>
                  </Collapsible>
                  <Collapsible
                    open={true}
                    trigger={<hr className="style1 Sub-tasks" />}
                  >
                    {this.props.childIssues.map(
                      (
                        issue // <Link to={`/task/${issue.id}`}>
                      ) => (
                        <Issue2
                          onClick={() => {
                            this.props.dispatch(push(`/task/${issue.id}`));
                          }}
                          key={issue.id}
                          {...issue}
                        />
                      )
                      // </Link>
                    )}
                  </Collapsible>
                </ul>
              </Scrollbars>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ParentIssueInfo;
