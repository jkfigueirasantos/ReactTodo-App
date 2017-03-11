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
  },

  // return filtered To Dos based on if it's completed or search
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by search text
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;

    });

    // Sort todos with non completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }

    });

    return filteredTodos;
  }

}
