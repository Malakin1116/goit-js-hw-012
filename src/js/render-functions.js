export const createMarkupItem = images => {
  return images
    .map(image => {
      const {
        webformatURL = '',
        largeImageURL = '',
        tags = '',
        likes = 0,
        views = 0,
        comments = 0,
        downloads = 0,
      } = image;

      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="small-content">
            <span class="text-body-likes"><strong>Likes:</strong> ${likes}</span>
            <span class="text-body-views"><strong>Views:</strong> ${views}</span>
            <span class="text-body-comments"><strong>Comments:</strong> ${comments}</span>
            <span class="text-body-downloads"><strong>Downloads:</strong> ${downloads}</span>
          </div>
        </li>
      `;
    })
    .join('');
};
