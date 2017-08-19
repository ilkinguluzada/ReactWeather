var React = require('react');


var Examples = (props) => {
  return (

<div clasName="row">
<div className="col-sm-6 col-sm-offset-3"  style={{color: 'white', textAlign: 'center', fontSize: '22px', background: 'rgba(0,0,0,0.5)', padding: '4%', borderRadius: '20px' }}>
  <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-2" for="email">Email:</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" placeholder="Enter email"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="pwd">Password:</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label><input type="checkbox"/> Remember me</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
    </form>
</div>
</div>

  );
}

module.exports = Examples;
