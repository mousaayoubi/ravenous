import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: '', location: '', sortBy:'best_match'};
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSearchEnter = this.handleSearchEnter.bind(this);
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    };

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    };

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    };

    handleTermChange(event) {
        this.setState({term: event.target.value});
    };

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    };

    handleSearch(event) {
        if (!this.state.term || !this.state.location) {
            alert("Enter cuisine and location.");
            window.location = '';
        }
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    };

    handleSearchEnter() {
        if (!this.state.term || !this.state.location) {
            alert("Enter cuisine and location.");
            window.location = '';
        }
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    };

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
        return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        })
    };

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.handleSearchEnter();
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Cuisines or Type of Food?" onChange={this.handleTermChange} type="search"/>
                    <input placeholder="Where?" onChange={this.handleLocationChange} type="search" onKeyDown={this.handleKeyDown}/>
                </div>
                <div className="SearchBar-submit">
                    <a href='http://www.ravenous.com' onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
};

export default SearchBar;