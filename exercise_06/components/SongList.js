import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div key={song.title} className='item'>
					<div className='right floated content'>
						<button
							className='ui button primary'
							onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>

					<div className='content'>{song.title}</div>
				</div>
			);
		});
	}

	render() {
		return <div className='ui divided list'>{this.renderList()}</div>;
	}
}

// Props object
const mapStateToProps = (state) => {
	return { songs: state.songs };
};

// Action creators passed to connect will be available on state
export default connect(mapStateToProps, { selectSong })(SongList);
