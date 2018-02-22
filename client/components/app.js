import React from 'react';

import Navigation from './navigation.js';
import Header from './header.js';
import Footer from './footer.js';
import Grid from './grid.js';
import Popup1 from './popup1.js';
import About from './about.js';

class App extends React.Component {
  render() {
    return (

<div>
<Navigation />
<Header />
<About />
<Grid />
<Footer />
</div>

    );
  }
}

export default App;
