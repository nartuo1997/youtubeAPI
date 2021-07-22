import axios from 'axios';

const KEY = 'AIzaSyAfF6uDY0m6Op9Scbl_4Er-pT14yrBJZyI'   // youtube credetials key

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 20,
        key: KEY,
        type: 'video'
    }

})
