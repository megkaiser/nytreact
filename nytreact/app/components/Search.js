var React = require("react");

var Search = React.createClass({

    getInitialState: function() {
        return { term: ""};
    },

    handleInput: function(event) {
        this.setState({ term: event.target.value });
    },

    handleSubmit: function(event) {
        event.preventDefault();
        this.props.setTerm(this.state.term);
        this.setState({ term: "" });
    },

    render: function () {
        return ( 
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Search Parameters</h3>
                </div>
                <div className="panel-body">
                    {/* <!-- Here we create an HTML Form for handling the inputs--> */}
                    <form onSubmit={this.handleSubmit}>
                        {/* <!-- Here we create the text box for capturing the search term--> */}
                        <div className="form-group">
                            <h4 className=""><strong>Search Term:</strong></h4>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Search;