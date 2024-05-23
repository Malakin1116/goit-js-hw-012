import axios from 'axios';

const API_KEY = '43967631-6112ded5daea5d7f1facaa737';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = async (q = 'pug', page = 1, per_page = 15) => {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
    });

    try {
        const response = await axios.get(`${BASE_URL}?${searchParams}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.statusText : error.message);
    }
};
