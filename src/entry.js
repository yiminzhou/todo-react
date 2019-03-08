// Import our top-level sass file.
import './styles/styles.scss';

// Import React.
import React from 'react';
import ReactDOM from 'react-dom';

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faCheck, faTrashAlt);

// Import our top-level component.
import Todo from 'components/todo';

// Create a single element for our app to live.
document.body.innerHTML = '<div id="app"></div>'

// Mount our app.
ReactDOM.render(
  <Todo />,
  document.querySelector('#app')
)
