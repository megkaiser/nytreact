var React = require("react");

var Results = React.createClass({

    render: function () {
        return ( 
        <div className="panel panel-primary">
            {/* <!-- Panel Heading for the retrieved articles box --> */}
            <div className="panel-heading">
                <h3 className="panel-title">Top Articles</h3>
            </div>
            {/* <!-- This main panel will hold each of the resulting articles --> */}
            <div className="panel-body">
            </div>
        </div>
        );
    }
  });

  module.exports = Results;
