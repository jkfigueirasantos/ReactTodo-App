var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoAdd = require('TodoAdd');

describe('TodoAdd', () => {

  it('should exist', () => {
    expect(TodoAdd).toExist();
  });

  it('should call newTodo if entered valid value', () => {
    var todoTextTest = 'Test message';
    var spy = expect.createSpy();
    var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(todoAdd));
    todoAdd.refs.todoText.value = todoTextTest;
    TestUtils.Simulate.submit( $el.find('form')[0] );
    expect(spy).toHaveBeenCalledWith(todoTextTest);
  });

  it('should not call newTodo if entered invalid value', () => {
    var todoTextTest = '';
    var spy = expect.createSpy();
    var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(todoAdd));
    todoAdd.refs.todoText.value = todoTextTest;
    TestUtils.Simulate.submit( $el.find('form')[0] );
    expect(spy).toNotHaveBeenCalled(todoTextTest);
  });

});
