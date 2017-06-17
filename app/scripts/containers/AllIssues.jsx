import { connect } from 'react-redux';
import AllIssues from '../components/AllIssues';
import assert from 'assert';

const deepEqual = (object1, object2) => {
  try {
    assert.deepEqual(object1, object2);
  } catch (err) {
    return false;
  }
  return true;
};

const getParentIssues = issues => {
  const parentIssues = [];
  issues.forEach(issue => {
    if (issue.hasOwnProperty('parent')) {
      let unique = true;
      parentIssues.map(i => {
        if (deepEqual(i, issue.parent)) {
          unique = false;
        }
      });
      if (unique) {
        parentIssues.push(issue.parent);
      }
    }
  });
  return parentIssues;
};

const mapStateToProps = state => {
  return {
    parentIssues: getParentIssues(state.issue.issues),
    onChangeGroupId: state.issue.onChangeGroupId,
    isLoading: state.issue.isLoading,
    isLoadingSuccess: state.issue.isLoadingSuccess
  };
};

export default connect(mapStateToProps)(AllIssues);
