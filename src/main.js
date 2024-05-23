import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotosByQuery } from "./js/pixabay-api";
import { createMarkupItem } from "./js/render-functions";

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtn = document.querySelector('.load-more');
const loaderEl = document.querySelector('#loader');

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

let searchQuery = '';
let currentPage = 1;
let totalHits = 0;

searchFormEl.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
    event.preventDefault();

    searchQuery = event.target.elements.searchKeyword.value.trim();
    currentPage = 1;
    totalHits = 0;

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
    loadMoreBtn.classList.add('hidden');

    fetchPhotosByQuery(searchQuery, currentPage)
        .then(imagesData => {
            totalHits = imagesData.totalHits;
            if (totalHits === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    timeout: 2000,
                    color: 'red',
                });
            } 
            else {
                galleryEl.innerHTML = createMarkupItem(imagesData.hits);
                lightbox.refresh();
                if (imagesData.hits.length < totalHits) {
                    loadMoreBtn.classList.remove('hidden');
                }
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            event.target.reset();
            loaderEl.classList.add('hidden');
        });
}

loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

function onLoadMoreBtnClick() {
    currentPage += 1;
    loadMoreBtn.classList.add('hidden');
    loaderEl.classList.remove('hidden');

    fetchPhotosByQuery(searchQuery, currentPage)
        .then(imagesData => {
            const { height: cardHeight } = galleryEl.firstElementChild.getBoundingClientRect();
            galleryEl.insertAdjacentHTML('beforeend', createMarkupItem(imagesData.hits));
            lightbox.refresh();

            window.scrollBy({
                top: cardHeight * 2,
                behavior: 'smooth'
            });

            if (galleryEl.children.length >= totalHits) {
                loadMoreBtn.classList.add('hidden');
                iziToast.show({
                    message: "We're sorry, but you've reached the end of search results.",
                    position: 'topRight',
                    timeout: 2000,
                    color: 'blue',
                });
            } else {
                loadMoreBtn.classList.remove('hidden');
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            loaderEl.classList.add('hidden');
        });
}



