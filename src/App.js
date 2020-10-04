import React from 'react';
import TweetComponent from './TweetComponent'
function App(){


  return (
  <div className="app">
      <TweetComponent name="Damilare" tweet="Leave Vue and start React" />
      <TweetComponent name="Janet" tweet="Before u know, U will reach our level" />
      <TweetComponent name="Tijani" tweet="Who Am I" />
      <TweetComponent name="Steven" tweet="Whisky and CSS" />
  </div>

  );
}

export default App;