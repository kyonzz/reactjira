import React from 'react';
import Test from './Test'
import AllIssues from './AllIssues'
import IssueInfo from './IssueInfo'
import ParentIssueInfo from './ParentIssueInfo'
import CuteLoading from './CuteLoading'

class Jira extends React.Component {
  render() {
    return (
      <div>
        <div>
          <CuteLoading />
        </div>
        <div className="sup">
          <div className="issuespart">
            <AllIssues />
          </div>
          <div className="issueinfopart">
            <IssueInfo />
            <ParentIssueInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Jira;