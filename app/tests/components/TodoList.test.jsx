var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {

  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render a Todo component for each todo item', () => {
    var todosTest = [
      {
        id: 1,
        text: 'Return something'
      }, {
        id: 2,
        text: 'Return something too'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todosTest} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todosTest.length);
  });

});
