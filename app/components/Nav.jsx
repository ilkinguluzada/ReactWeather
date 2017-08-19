var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">ReactHavaApp</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <IndexLink activeclassName="active" to="/">Havaya Bax</IndexLink>
                </li>
                <li>
                  <Link activeclassName="active" to="/about">Haqqımızda</Link>
                </li>
                <li>
                    <Link activeclassName="active" to="/examples">Əlaqə</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

module.exports = Nav;
