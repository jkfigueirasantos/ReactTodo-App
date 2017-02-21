var React = require('react');

var TodoSearch = React.createClass({

  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render: function() {
    return (
      <div>
        <p><input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/></p>
        <p>
          <label htmlFor="completedTodos">
            <input type="checkbox" id="completedTodos" ref="showCompleted" onChange={this.handleSearch}/>
            <span className="text">Show completed todos</span>
          </label>
        </p>
      </div>
    );
  }

});

module.exports = TodoSearch;
