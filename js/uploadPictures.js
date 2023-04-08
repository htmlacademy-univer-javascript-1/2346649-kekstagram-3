const uploadFileInput = document.querySelector('#upload-file');
const editImageForm = document.querySelector('.img-upload__overlay');
const closeButton = editImageForm.querySelector('#upload-cancel');

function showEditImageForm() {
  editImageForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function hideEditImageForm() {
  editImageForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  editImageForm.reset();
  uploadFileInput.value = '';
}

uploadFileInput.addEventListener('change', () => {
  showEditImageForm();
});

closeButton.addEventListener('click', () => {
  hideEditImageForm();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !editImageForm.classList.contains('hidden')) {
    hideEditImageForm();
  }
});
