
import React from 'react';
import { render } from 'react-dom';
import App from './components/app.js';


// const store = createStore(
//     rootReduce,
//     compose(
//         applyMiddleware(thunk),
//         window.devToolsExtension ? window.devToolsExtension() : f => f
//     )
// )

// <Provider store={store}>

// render(
//     <Provider>
//         <landingPage />
//     </Provider>
//     , document.getElementById('app')
// );


render(
        <App />
    , document.getElementById('app')
);
