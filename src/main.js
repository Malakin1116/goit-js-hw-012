import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotosByQuery } from "./js/pixabay-api";
import { createMarkupItem } from "./js/render-functions";

const galleryEl = document.querySelector('.js-gallery'); 
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('#loader'); 

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function onSearchFormSubmit(event) {
    event.preventDefault();

    const searchQuery = event.target.elements.searchKeyword.value.trim();
    if (searchQuery === '') {
        galleryEl.innerHTML = '';
        event.target.reset();
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation',
            position: 'topRight',
            timeout: 2000,
        });
        return;
    }
    galleryEl.innerHTML = '';
    loaderEl.classList.remove('hidden');

    fetchPhotosByQuery(searchQuery)
        .then(imagesData => {
            if (imagesData.totalHits === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    timeout: 2000,
                    color: 'red',
                });
            } else {
                galleryEl.innerHTML = createMarkupItem(imagesData.hits);
                lightbox.refresh();  
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            event.target.reset();
            loaderEl.classList.add('hidden');
        });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
