import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

// Action Creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	// Dispatch Action creator that will get invoked, wait for it to finish (update state with results)
	await dispatch(fetchPosts());

	// Map userIds to array and make it unique
	// const userIds = _.uniq(_.map(getState().posts, 'userId'));
	// For each user id, fetch user data
	// userIds.forEach((id) => dispatch(fetchUser(id)));

	// Improved code above code using lodash (value is like execute)
	_.chain(getState().posts)
		.map('userId')
		.uniq()
		.forEach((id) => dispatch(fetchUser(id)))
		.value();
};

// Action Creator
export const fetchPosts = () => {
	return async (dispatch, getState) => {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response.data });
	};
};

// Action Creator
export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: `FETCH_USER`, payload: response.data });
};

/**
#### Fetch user with memoize utility function #### 

import _ from 'lodash';

export const fetchUser = id => dispatch => {
	_fetchUser(id, dispatch);
};


const _fetchUser = _.memoize((id, dispatch) => {
	return async (dispatch, getState) => {
		const response = await jsonPlaceholder.get(`/users/${id}`);

		dispatch({ type: `FETCH_USER`, payload: response.data });
	};
});
 */
