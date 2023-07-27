const swatches = document.querySelectorAll('.product__swatch');

// for each swatch, on hover, change the src of image with class product__swatch__variant-image to the swatch variant image attribute
swatches.forEach((swatch) => {
  swatch.addEventListener('mouseover', (event) => {
    const variantImage = event.target.dataset.swatchVariantImage;
    const product = event.target.dataset.swatchProduct;
    const variantImageElement = document.querySelector(
      `.product__swatch__variant-image[data-swatch-product="${product}"]`
    );
    variantImageElement.src = variantImage;
    variantImageElement.srcset = variantImage;
  });
});
