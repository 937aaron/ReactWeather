var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search Weather by City!"></input>
          <div>
            <button className="button hollow expanded">Get dat Weather!</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
