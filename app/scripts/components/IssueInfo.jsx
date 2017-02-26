import React, { Component } from 'react'
import Affix from 'react-overlays/lib/Affix'

const renameStatus = (status) => {
  switch (status) {
    case 'new':
      return 'New';
    case 'inProgress':
      return 'In progress';
    case 'done':
      return 'Done';
    default:
      return status;
  }
}

const formatDate = (date) => {
  return (new Date(date)).toLocaleString()
}

class IssueInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() 
  {
    return (
      <div>
        {this.props.issues.map(issue =>
          <div key={issue.id} className="issueinfo">
            <div>
              <Affix container={this}>
                <div className="issueinfo-header">
                  <h5>Projectname / <a href="#">TASK-{issue.id}</a></h5>
                  <p>Item creation</p>
                </div>
              </Affix>
              <div>
                <ul className="inline">
                  <li>
                    <h5>ID :</h5> <p>{issue.id}</p>
                  </li>
                  <li>
                    <h5>Name :</h5> <p>{issue.name}</p>
                  </li>
                  <li>
                    <h5>Issue Title :</h5> <p>{issue.title}</p>
                  </li>
                  <li>
                    <h5>Assignee :</h5> <p>{issue.assignee.name}</p>
                  </li>
                  <li>
                    <h5>Priority :</h5> <p>{issue.priority}</p>
                  </li>
                  <li>
                    <h5>Status :</h5> <p>{renameStatus(issue.status)}</p>
                  </li>
                  <li>
                    <h5>Created at :</h5> <p>{formatDate(issue.createdAt)}</p>
                  </li>
                  <li>
                    <h5>Updated at :</h5> <p>{formatDate(issue.updatedAt)}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default IssueInfo