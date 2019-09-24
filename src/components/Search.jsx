import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleSubmitSearch } = this.props;
        const { search } = this.state;
        handleSubmitSearch(search);
    }

    render() {
        const { search } = this.state;
        return (
            <form action="">
                <h3>Search Gif:</h3>
                <input type="text" name="" id="" value={search} onChange={this.handleChange} />
                <input className="submit" type="submit" value="search" name="" id="" onClick={this.handleSubmit} />
            </form>
        );
    }
}

export default Search;
