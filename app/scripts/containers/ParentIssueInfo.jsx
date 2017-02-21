import { connect } from 'react-redux'
import ParentIssueInfo from '../components/ParentIssueInfo'


const mapStateToProps = (state, ownProps) => {
    return {
        issues: state.issue.issues.filter(issue => issue.id === state.issue.selectedParentIssue)
    }
}
export default connect(mapStateToProps)(ParentIssueInfo)

