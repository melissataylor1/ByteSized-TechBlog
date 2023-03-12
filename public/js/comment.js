//retrieve post id
const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];
  
//event listeners
document
.querySelector('.newcomment-form')
.addEventListener('submit', newcommentFormHandler);
