var expect = require('expect');

var TodoAPI = require('TodoAPI');


describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });


  describe('setTodos', () => {

    it('should set valid todos Array', () => {
      var todo = [{
        id: 23,
        text: 'Test Todo text',
        completed: false
      }];
      TodoAPI.setTodos(todo);
      var actualTodo = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodo).toEqual(todo);
    });

    it('should not set valid todos array', () => {
      var invalidTodo = {a:'b c d'};
      TodoAPI.setTodos(invalidTodo);
      expect(localStorage.getItem('todos')).toBe(null);
    });

  });


  describe('getTodos', () => {

    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if is valid array on localStorage', () => {
      var todo = [{
        id: 23,
        text: 'Test Todo text',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todo));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todo);
    });

  });

});
