var React = require('react');



var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var city = this.refs.city.value;

    if(city.length > 0){
      this.refs.city.value = '';
      this.props.onNewCity(city);
    }
  },
  render: function(){
    return (

      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 text-center">
          <div className="jumbotron" style={{padding: '20px', marginTop: '10%'}}>
            <h2>Şəhəri Yaz, Havaya Bax!</h2>
            <form onSubmit={this.onFormSubmit}>

              <div className="form-group">
                <input type="text" ref="city" className="form-control" placeholder="Şəhər"/>
              </div>

              <button className="btn btn-default">Havanı Öyrən!</button>

            </form>
          </div>
        </div>
      </div>

    );
  }
});


module.exports = WeatherForm;
