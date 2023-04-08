import pristineMin from "../pristine/pristine.min";

const form = document.querySelector('.img-upload__form');
const regex = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,19}$');

const pristine  = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function validateComment (value) {
  return value.length >= 20 && value.length <= 140;
}

function validateHashTag (value) {
  return value.length <= 20 || regex.test(value);
}

pristine.addValidator(
  form.querySelector('.text__description'),
  validateComment,
  'От 2 до 50 символов'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashTag,
  'От 2 до 50 символов'
);
