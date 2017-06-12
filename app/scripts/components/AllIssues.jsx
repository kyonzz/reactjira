import React, { Component } from 'react';
import IssueColumn from '../containers/IssueColumn';
import OrtherIssueColumn from '../containers/OrtherIssueColumn';
import { requestIssues, selectParentIssue } from '../actions';
import Collapsible from 'react-collapsible';
import { Scrollbars } from 'react-custom-scrollbars';

class AllIssues extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(requestIssues());
  }

  render() {
    return (
      <div className="issueboard">
        <div className="sup">
          <div className="onethird">
            <p style={{ textAlign: 'center' }}>NEW</p>
          </div>
          <div className="onethird">
            <p style={{ textAlign: 'center' }}>IN PROGRESS</p>
          </div>
          <div className="onethird">
            <p style={{ textAlign: 'center' }}>DONE</p>
          </div>
        </div>

        <div className="sup">
          <div className="blockline" />
          <div className="blockline" />
          <div className="blockline" />
        </div>
        <div className="allissues">
          <Scrollbars autoHide style={{ height: 835, width: 1415 }}>
            {this.props.parentIssues
              ? this.props.parentIssues.map(issue => (
                  <div
                    key={issue.id}
                    style={{
                      visibility: issue.id !== this.props.onChangeGroupId &&
                        this.props.onChangeGroupId !== null
                        ? 'hidden'
                        : 'visible'
                    }}
                  >
                    <Collapsible
                      className="what"
                      key={issue.id}
                      open={true}
                      trigger={
                        <span className="inline">
                          <h5>TASK-{issue.id} &gt; &gt; &gt; {issue.name}</h5>
                          {' '}
                          number of child issues &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {' '}
                          <p
                            className="class"
                            onClick={() =>
                              this.props.dispatch(selectParentIssue(issue.id))}
                          >
                            Action creation
                          </p>
                        </span>
                      }
                      antiTriggerClass="class"
                      transitionTime={200}
                    >
                      <div className="sup">
                        <div className="newcolumn">
                          <IssueColumn filter="new" parent={issue.id} />
                        </div>
                        <div className="inProgresscolumn">
                          <IssueColumn filter="inProgress" parent={issue.id} />
                        </div>
                        <div className="donecolumn">
                          <IssueColumn filter="done" parent={issue.id} />
                        </div>
                      </div>
                    </Collapsible>
                  </div>
                ))
              : null}

            {/*orther issue*/}
            <div
              style={{
                display: this.props.isLoading ? 'none' : 'block',
                visibility: 'superscretidforanotherissuegroup' !==
                  this.props.onChangeGroupId &&
                  this.props.onChangeGroupId !== null
                  ? 'hidden'
                  : 'visible'
              }}
            >
              {/*{this.props.ortherIssues ?*/}
              <Collapsible
                open={true}
                trigger="Orther Issues"
                transitionTime={200}
              >
                <div className="sup">
                  <div className="newcolumn">
                    <OrtherIssueColumn
                      filter="new"
                      parent="superscretidforanotherissuegroup"
                    />
                  </div>
                  <div className="inProgresscolumn">
                    <OrtherIssueColumn
                      filter="inProgress"
                      parent="superscretidforanotherissuegroup"
                    />
                  </div>
                  <div className="donecolumn">
                    <OrtherIssueColumn
                      filter="done"
                      parent="superscretidforanotherissuegroup"
                    />
                  </div>
                </div>
              </Collapsible>
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default AllIssues;
