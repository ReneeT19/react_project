import React from 'react';  
import { Button } from 'react-bootstrap';


class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
<Button onClick={this.props.closePopup}>close me</Button>  
</div>  
</div>  
);  
}  
}  

export default Popup;