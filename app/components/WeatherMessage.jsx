var React = require('react');



var WeatherMessage = ({degree, city}) => {
  return (

      <div clasName="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div style={{padding: '4%'}} className="alert alert-success alert-dismissable">
            <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong style={{textTransform: "capitalize"}}>{city}</strong>da {degree}°C-dir!
          </div>
        </div>
      </div>

  );
}

module.exports = WeatherMessage;
