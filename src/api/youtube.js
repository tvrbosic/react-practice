import axios from "axios";

const KEY = 'AIzaSyB8ay9OaVc5ciRJnWoBbklw4pY0-xMWhgY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});