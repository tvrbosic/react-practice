import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

// Action Creator
export const fetchPosts = () => {
	return async (dispatch, getState) => {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response.data });
	};
};

export const fetchUser = id => dispatch => {
	_fetchUser(id, dispatch);
};

const _fetchUser = _.memoize((id, dispatch) => {
	return async (dispatch, getState) => {
		const response = await jsonPlaceholder.get(`/users/${id}`);

		dispatch({ type: `FETCH_USER`, payload: response.data });
	};
});
