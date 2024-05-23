const API_KEY = '43967631-6112ded5daea5d7f1facaa737';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = (q = 'pug') => {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q,
        image_type: 'photo',         
        orientation: 'horizontal',   
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    });
};
