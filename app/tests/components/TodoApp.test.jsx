var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('shoud add todo to the handleAddTodo prop', () => {
    var message = 'Test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(message);
    expect(todoApp.state.todos[0].text).toBe(message);
  });

});
