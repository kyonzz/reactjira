import { connect } from 'react-redux'
import CuteLoading from '../components/CuteLoading'

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.issue.isLoading
    }
}
export default connect(mapStateToProps)(CuteLoading)