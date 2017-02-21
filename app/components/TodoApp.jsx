var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({

  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk with the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Make coffee'
        }, {
          id: 4,
          text: 'Take a beer before the lunch'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    console.log('new todo: ' + text);
  },

  render: function() {

    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <TodoAdd onAddTodo={this.handleAddTodo} />
      </div>
    );
  }

});

module.exports = TodoApp;
