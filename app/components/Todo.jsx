var React = require('react');

var Todo = React.createClass({

  render: function() {

    var {id, text} = this.props;

    return (
      <div>
        <p>
          <strong>{'#' + id} - {text}</strong>
        </p>
      </div>
    );

  }

});

module.exports = Todo;
