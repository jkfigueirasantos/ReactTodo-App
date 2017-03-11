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

  describe('filterTodos', () => {
    var testTodos = [
      {
        id: 1,
        text: 'Test todo',
        completed: true
      }, {
        id: 2,
        text: 'Other todo',
        completed: false
      }, {
        id: 3,
        text: 'Other todo',
        completed: true
      }
    ];

    it('should return all todos if showCompleted is checked', () => {
      var filteredTodos = TodoAPI.filterTodos(testTodos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return one todo when showCompleted is not checked', () => {
      var filteredTodos = TodoAPI.filterTodos(testTodos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return non-completed todo first', () => {
      var filteredTodos = TodoAPI.filterTodos(testTodos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return one todo with "Test" text', () => {
      var filteredTodos = TodoAPI.filterTodos(testTodos, true, 'test');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos with searchText empty', () => {
      var filteredTodos = TodoAPI.filterTodos(testTodos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

  });

});
