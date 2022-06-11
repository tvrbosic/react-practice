import React from 'react';

class SearchBar extends React.Component {
    state = { text: 'Hi there!' };

    render () {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Image search</label>
                        <input 
                            type='text' 
                            value={this.state.text}
                            onChange={(e) => this.setState({text: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;