import Route from '@ember/routing/route';
import fetch from 'ember-fetch/ajax';

// when the user visits the root bath or / 
export default Route.extend({
  model() {
    return fetch("https://api.github.com/users/dawnabelle").then(function(response) {
      return response;
    });
  }
});
