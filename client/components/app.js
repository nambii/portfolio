import React from 'react';

import Navigation from './navigation.js';
import Header from './header.js';
import Footer from './footer.js';
import Grid from './grid.js';
import Popup1 from './popup1.js';
import About from './about.js';
var VisibilitySensor = require('react-visibility-sensor');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
    this.onChange = this.onChange.bind(this);
}
onChange(isVisible) {
   console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
   this.setState({
    hidden: isVisible + '-floater'
});
 }
  render() {


    return (

<div>
<Navigation />
<Header />
<About />
<Grid />
  <VisibilitySensor onChange={this.onChange}>
 </ VisibilitySensor >
 <p className= {this.state.hidden}>email: <a href="mailto:ebinjoshy@gmail.com" className="bl"> ebinjoshy@gmail.com </a></p>
<Footer />



</div>

    );
  }
}

export default App;
