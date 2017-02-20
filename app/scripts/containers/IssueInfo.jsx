import { connect } from 'react-redux'
import IssueInfo from '../components/IssueInfo'


const mapStateToProps = (state, ownProps) => {
    return {
        issues: state.issue.issues.filter(issue => issue.id === state.issue.selected)
    }
}
export default connect(mapStateToProps)(IssueInfo)

