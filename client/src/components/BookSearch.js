import React from "react";

function BookSearch(props) {
    return (
        <div>
            <div className="card rounded-0">
                <div className="card-body">
                    <h5 className="card-title">Book Search</h5>
                    <form>
                        <div className="form-group">
                            <label for="bookSearchInput">Title or Author</label>
                            <input type="text" className="form-control" id="bookSearchInput"
                            name="bookSearchInput"
                            onChange={props.handleInputChange}
                            value={props.value}></input>
                        </div>
                        <div className="text-right">
                        <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookSearch;