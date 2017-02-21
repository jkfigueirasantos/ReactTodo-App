var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {

  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch if entered valid value on input', () => {
    var testSearchMessage = 'testing search';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.searchText.value = testSearchMessage;
    TestUtils.Simulate.change( todoSearch.refs.searchText );
    expect(spy).toHaveBeenCalledWith(false, testSearchMessage);
  });

  it('should call onSearch if entered checkbox checked', () => {
    var checkedField = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.showCompleted.checked = checkedField;
    TestUtils.Simulate.change( todoSearch.refs.showCompleted );
    expect(spy).toHaveBeenCalledWith(true, '');
  });

});
