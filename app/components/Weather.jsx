var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');



var Weather = React.createClass({

  getInitialState: function () {
  return {
      isLoading: false
    };
  },

  handleNewCity: function (city) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(function(degree){
      that.setState({
        city: city,
        degree: degree,
        isLoading: false
      })
    }, function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },

  render: function(){
    var {isLoading, degree, city} = this.state;

    function renderMessage(){
      if(isLoading){
        
        return <h3> Processing... </h3>;
      } else if(degree && city){
        return <WeatherMessage city={city} degree={degree}/>;
      }
    }

    return (
      <div>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
      </div>
    );
  }
});


module.exports = Weather;
