//处理数组过滤


import { connect } from 'react-redux';

import Link from '../components/Link';

import {visibilityFilter} from '../reducers/index';

import {setVisibilityFilter} from '../actions/index';

// const mapStateToProps=(state,ownProps)=>({
//     active:ownProps.filter===state.visibilityFilter
// })
function mapStateToProps(state,ownProps){
    return {
        active:ownProps.filter===state.visibilityFilter
    }

}

// const mapDispatchToProps=(dispatch,ownProps)=>({
//     onClick:()=>{
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
// })
function mapDispatchToProps(dispatch,ownProps){
  // onClick:()=>{
  //      dispatch(setVisibilityFilter(ownProps.filter))
  // }
    return {
      onClick:()=>{
           dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
}
const FilterLink=connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;
