import React from "react";
import Jumbotron from "./Jumbotron";
import BookSearch from "./BookSearch";
import API from "../utils/API";

class SearchContainer extends React.Component {
    state = {
        result: {},
        bookinput: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        
        this.setState({
            bookinput: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();

        fetch("/api/booksearch?q=" + this.state.bookinput)
        .then(res=>res.json())
        .then((info) => {
            this.setState({result: info})})
        .catch(err=> console.log(err));
        
      };

    render() {
        return (
            <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Google Books</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Search <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/saved">Saved</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="container">
                <Jumbotron />
                <BookSearch value={this.state.bookinput} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
            </div>
            </div>
        );
    }

}

export default SearchContainer;