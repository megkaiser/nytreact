var React = require("react");

var Search = require("./Search");
var Results = require("./Results");
// var Saved = require("Saved");

// var helpers = require("./utils/helpers");

var Main = React.createClass({

    getInitialState: function() {
        return { search: "", results: "", saved: [] };
    },

    render: function() {
        return (
            // <!-- Main Bootstrap Search -->
            <div className="container">
                {/* <!-- Jumbotron for Title --> */}
                <div className="jumbotron">
                    <h1 className="text-center">New York Times Search</h1>
                </div>
                <div className="col-md-6">
                    <Search Main={this.Main} />
                </div>
                <div className="col-md-6">
                    <Results Main={this.Main} />
                </div>
                {/* <div className="col-md-6">
                    <Saved Main={this.Main} />
                </div> */}
            </div>
        );
    }
});

module.exports = Main;