import {loadRemoteEntry} from "@angular-architects/module-federation";

import('./bootstrap')
	.catch(err => console.error(err));

Promise.all([
  loadRemoteEntry('http://localhost:4004/productEntry.js', 'product'),
  // loadRemoteEntry('http://localhost:8008/mfAloneEntry.js', 'mfAlone'), // local
  loadRemoteEntry('http://localhost:8080/mfAloneEntry.js', 'mfAlone'), // build
  // loadRemoteEntry('http://localhost:5005/customerEntry.js', 'customer'),
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
