import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imagesGallery = document.querySelector(".gallery");

const markupImages = galleryItems
  .map((image) => {
    return (
      '<li class="gallery__item"><a class="gallery__link" href="' +
      image.original +
      '"><img class="gallery__image" src="' +
      image.preview +
      '" alt="' +
      image.description +
      '"/></a></li>'
    );
  })
  .join("");

imagesGallery.insertAdjacentHTML("beforeend", markupImages);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
    disableScroll: false,
    overlayOpacity: 0.9,
    captionPosition: 'top',
    navText: ['<<','>>'],
});
lightbox.on("show.lightbox", function (event) {
  event.preventDefault();
});