import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class TextName extends Component{
constructor(props){
  super(props);
    this.state = {}
  }
  render(){
    return(
      <div>
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
    )
  }
}
export default TextName
