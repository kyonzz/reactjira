import { connect } from 'react-redux'
import AllIssues from '../components/AllIssues'
import assert from 'assert'

const deepEqual = (object1, object2) => {
    try {
        assert.deepEqual(object1, object2)
    } catch (err) {
        return false;
    }
    return true;
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

//orther issue ko co thuoc tinh parent va ko nam trong parrentIssues
// const isContain = (issue, issues) => {
//     var isContain = false;
//     issues.forEach(i => {
//         if (deepEqual(i, issue))
//             isContain = true;
//     })
//     return isContain;
// }

const mapStateToProps = (state) => {
    return {
        parentIssues: getParentIssues(state.issue.issues),
        // ortherIssues: state.issue.issues.filter(issue => !issue.hasOwnProperty('parent') && !isContain(issue, getParentIssues(state.issue.issues)))
        onChangeGroupId: state.issue.onChangeGroupId,
        isLoading: state.issue.isLoading
    }
}

export default connect(mapStateToProps)(AllIssues)