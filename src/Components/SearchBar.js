import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onSearchSubmit = (event) => {
        event.preventDefault();

        //callback from parent component
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        // onSearchSubmit = async(tst) =>{
        //     pre
        // }


        return (
            <div className="search-bar ui segment" style={{ marginTop: '10px' }}>
                <form onSubmit={this.onSearchSubmit} className="ui form" >
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text" placeholder="Search Video..."
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>


            </div>
        )
    }
}

export default SearchBar