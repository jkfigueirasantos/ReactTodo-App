var React = require('react');

var TodoAdd = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function() {
    return (
      <div>
        <form id="form-addtodo" onSubmit={this.handleSubmit}>
          <p>
            <input type="text" ref="todoText" placeholder="What do you want to add ?" />
          </p>
          <p>
            <button type="submit" className="button expanded">Add Todo!</button>
          </p>
        </form>
      </div>
    );
  }

});

module.exports = TodoAdd;
