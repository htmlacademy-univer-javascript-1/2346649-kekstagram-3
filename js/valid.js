import { closeImgUpload } from './openPict.js';
import {sendData} from './server.js';

const form = document.querySelector('.img-upload__form');
const regex = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,19}$');

const pristineComment  = new Pristine (form, {
  classTo: 'img-upload__text',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const pristineHashTag  = new Pristine (form, {
  classTo: 'img-upload__text',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function validateComment (value) {
  return value.length >= 20 && value.length <= 140;
}

function validateHashTag (value) {
  return regex.test(value) && value.length >= 2;
}

pristineComment.addValidator(
  form.querySelector('.text__description'),
  validateComment,
  'Комментарий должен быть от 20 до 140 символов'
);

pristineHashTag.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashTag,
  'Хэштег должен начинаться с # и быть от 1 до 19 символов'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(pristineHashTag.validate() && pristineComment.validate()) {
    //blockSubmitButton(evt)
    evt.target.querySelector('.img-upload__submit').disabled = true;
    sendData( () => {
      //unblockSubmitButton
      evt.target.querySelector('.img-upload__submit').disabled = false;
    },
    new FormData(evt.target)
    );
    closeImgUpload();
  }
});
