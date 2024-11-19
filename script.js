document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
      const mainImage = document.getElementById('displayed-image');
      mainImage.src = this.src; // Update the main image source
    });
  });
  