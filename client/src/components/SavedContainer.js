import React from "react";
import Jumbotron from "./Jumbotron";
import SavedCard from "./SavedCard";

class SavedContainer extends React.Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        this.loadBooks();
      }

    

    loadBooks = () => {
        fetch("/api")
            .then(res => res.json())
            .then((books) => {
                console.log(books);
                this.setState({ savedBooks: books })
            })
            .catch(err => console.log(err));
    };

    handleBookDelete = event => {
        event.preventDefault();

        let currentID = event.target.dataset.id;

        fetch("/api", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id:currentID})
        })
            .then(result => {
                console.log(result);
                this.loadBooks();
            })
            .catch(err => console.log(err));

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
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Search</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/saved">Saved <span className="sr-only">(current)</span></a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <Jumbotron />

                    <div className="card rounded-0 my-3">
                        <div className="card-body">
                            <h5 className="card-title">Saved Books</h5>
                            {this.state.savedBooks.map((book, index) => (
                                <SavedCard author={book.author} description={book.description} id={book.id} image={book.image} title={book.title} infoLink={book.infoLink} index={index} handleBookDelete={this.handleBookDelete} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default SavedContainer;