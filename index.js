import template from './template.hbs';
import { users } from './data.js';

document.getElementById('app').innerHTML = template({ users });
document.body.innerHTML = templateFunction();