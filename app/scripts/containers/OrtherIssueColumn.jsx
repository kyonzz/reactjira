import { connect } from 'react-redux'
import IssueColumn from '../components/IssueColumn'
import assert from 'assert'

const deepEqual = (object1, object2) => {
    try {
        assert.deepEqual(object1, object2)
    } catch (err) {
        return false;
    }
    return true;
}

const filterIssuesWithStatus = (issues, filter) => {
    return issues.filter(i => i.status === filter)
}

const getParentIssues = (issues) => {
    const parentIssues = [];
    issues.forEach(issue => {
        if (issue.hasOwnProperty('parent')) {
            let unique = true;
            parentIssues.map(i => {
                if (deepEqual(i, issue.parent)) {
                    unique = false;
                }
            })
            if (unique) {
                parentIssues.push(issue.parent);
            }
        }
    })
    return parentIssues;
}

const isContain = (issue, issues) => {
    var isContain = false;
    issues.forEach(i => {
        if (deepEqual(i, issue))
            isContain = true;
    })
    return isContain;
}

const mapStateToProps = (state, ownProps) => {
    return {
        issues: filterIssuesWithStatus(state.issue.issues.filter(issue => !issue.hasOwnProperty('parent') && !isContain(issue, getParentIssues(state.issue.issues))), ownProps.filter)
    }
}
export default connect(mapStateToProps)(IssueColumn)