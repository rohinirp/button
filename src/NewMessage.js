import React, {Component} from 'react'
import SnackbarContent from '@material-ui/core/SnackbarContent';

class NewMessage extends Component{
  constructor(props){
    super(props);
this.state = {}
  }
  render(){
    return(
<div>
<SnackbarContent message="Am a student" />
  </div>
    )
  }
}
export default NewMessage