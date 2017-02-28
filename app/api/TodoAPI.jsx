var $ = require('jQuery');

module.exports = {

  // set
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      // localStorage only store string data, so convert array to string type
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  // get
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      // try to parse the string value stored on localStorage to a valid array
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    // There's always a chance to, on converting the string, the array have a invalid value
    // so check if the todos variable are really an array type, if not, return a empty array
    return $.isArray(todos) ? todos : []

  }

}
