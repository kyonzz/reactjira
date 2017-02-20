import React from 'react';
import Test from './Test'
import AllIssues from './AllIssues'
import IssueInfo from './IssueInfo'
import CuteLoading from './CuteLoading'

class Jira extends React.Component {
  render() {
    return (
      <div>
        <div>
          <CuteLoading />
        </div>
        <div className="sup">
          <div className="statuscolumn">
            <AllIssues />
          </div>
          <div className="issueinfo">
            <IssueInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Jira;