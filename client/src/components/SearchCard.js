import React from "react";

function SearchCard(props) {
    return (
        <div>
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <h5 className="card-title">{props.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">By {props.author}</h6>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="text-sm-right">
                                <a className="btn btn-primary mr-2" href={props.infoLink} target="_blank">View</a>
                                <button className="btn btn-secondary">Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-4 mb-2">
                            <img src={props.image} className="img-fluid"></img>
                        </div>
                        <div className="col-sm-8">
                        <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchCard;