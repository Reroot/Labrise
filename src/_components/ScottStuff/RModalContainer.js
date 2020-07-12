import { connect } from 'react-redux'
import RModal from './RModal'
import { rModalVis,RModalVisSt } from '../../_actions/modalActions'


const mapStateToProps = (state) => ({
  active: state.rModalReducer,
  data: state.data
})
const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(rModalVis(RModalVisSt.NONE))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RModal)