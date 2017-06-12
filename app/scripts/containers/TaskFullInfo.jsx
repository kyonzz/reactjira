import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSingleIssue } from '../actions';
import DropZone from '../components/DropZone';
import { ActionTypes } from 'constants/index';
import { push } from 'react-router-redux';

const renameStatus = status => {
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
};

const formatDate = date => {
  return new Date(date).toLocaleString();
};

class TaskFullInfo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(requestSingleIssue(this.props.params.id));
  }

  deleteTask = e => {
    if (confirm('Delete this task')) {
      this.props.dispatch({
        type: ActionTypes.DELETE_ISSUE,
        payload: this.props.params.id
      });
    }
  };

  render() {
    const { issue } = this.props;

    return Object.keys(issue).length > 0
      ? <div style={{ margin: '0 20px' }}>
          <h3>TASK DETAIL</h3>
          <div className="sup">
            <div style={{ flex: 2, minWidth: '500px' }}>
              <hr className="style1 Details" />
              <div style={{ display: 'flex' }}>
                <div className="name" style={{ marginRight: 20 }}>
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
                  <p>{issue.priority}</p>
                  <p>None</p>
                  <p>None</p>
                  <p>None</p>
                  <p>None</p>
                  <p>None</p>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <hr className="style1 People" />
              <div style={{ display: 'flex' }}>
                <div className="name" style={{ marginRight: 20 }}>
                  <p>Reporter: </p>
                  <p>Assignee: </p>
                </div>
                <div className="value">
                  <p>{issue.reporter ? issue.reporter.name : 'None'}</p>
                  <p>{issue.assignee ? issue.assignee.name : 'None'}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr className="style1 Description" />
            <p>{issue.description ? issue.description : 'None'}</p>
          </div>
          <div>
            <hr className="style1 Attachments" />
            <DropZone />
          </div>
          <button onClick={this.deleteTask} className="btn btn-danger">
            Delete this task
          </button>
        </div>
      : <p>NOT FOUND THIS ISSUE</p>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issue: state.issue.issue
  };
};
export default connect(mapStateToProps)(TaskFullInfo);
