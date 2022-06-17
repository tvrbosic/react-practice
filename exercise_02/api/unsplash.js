import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID p9G7Ibfugm2v6mORms8j8dYgdTqASYYgnv9hvbwq2rM',
    },
});
