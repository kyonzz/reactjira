import React, { Component } from 'react'
import IssueColumn from '../containers/IssueColumn'
import OrtherIssueColumn from '../containers/OrtherIssueColumn'
import { requestIssues, selectParentIssue } from '../actions'
import Collapsible from 'react-collapsible';

class AllIssues extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(requestIssues())
  }

  render() {
    return (
      <div className="issueboard">
        <div className="sup">
          <div className="onethird">
            <p>New</p>
          </div>
          <div className="onethird">
            <p>In progress</p>
          </div>
          <div className="onethird">
            <p>Done</p>
          </div>
        </div>

        <div className="sup">
          <div className="blockline"></div>
          <div className="blockline"></div>
          <div className="blockline"></div>
        </div>
        <div className="allissues">
          {this.props.parentIssues ? this.props.parentIssues.map(issue =>
            <div key={issue.id} style={{ visibility: issue.id !== this.props.onChangeGroupId && this.props.onChangeGroupId !== null ? 'hidden' : 'visible' }} >
              <Collapsible className="what" key={issue.id} open={true} trigger={<span className="inline"><h5>TASK-{issue.id} > > > {issue.name}</h5> number of child issues &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <p className="class" onClick={() => this.props.dispatch(selectParentIssue(issue.id))}>Action creation</p></span>} antiTriggerClass="class" transitionTime={200}>
                <div className="sup">
                  <div className="newcolumn">
                    <IssueColumn filter='new' parent={issue.id} />
                  </div>
                  <div className="inProgresscolumn">
                    <IssueColumn filter='inProgress' parent={issue.id} />
                  </div>
                  <div className="donecolumn">
                    <IssueColumn filter='done' parent={issue.id} />
                  </div>
                </div>
              </Collapsible>
            </div>
          ) : null}

          {/*orther issue*/}
          <div style={{ display: this.props.isLoading ? 'none' : 'block', visibility: "superscretidforanotherissuegroup" !== this.props.onChangeGroupId && this.props.onChangeGroupId !== null ? 'hidden' : 'visible' }}>
            {/*{this.props.ortherIssues ?*/}
            <Collapsible open={true} trigger="Orther Issues" transitionTime={200}>
              <div className="sup">
                <div className="newcolumn">
                  <OrtherIssueColumn filter='new' parent="superscretidforanotherissuegroup" />
                </div>
                <div className="inProgresscolumn">
                  <OrtherIssueColumn filter='inProgress' parent="superscretidforanotherissuegroup" />
                </div>
                <div className="donecolumn">
                  <OrtherIssueColumn filter='done' parent="superscretidforanotherissuegroup" />
                </div>
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    )
  }
}

export default AllIssues