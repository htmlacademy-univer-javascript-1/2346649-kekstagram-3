function getRandomInt (a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringLenght(str, len) {
  return str.length <= len;
}

function createPhotoArray() {
  const photoArray = [];

  for (let i = 1; i <= 25; i++) {
    const id = i;
    const url = `photos/${i}.jpg`;
    const description = `Описание фотографии №${i}`;
    const likes = getRandomInt(15, 200);
    const comments = getRandomInt(0, 200);

    const photoObj = { id, url, description, likes, comments };
    photoArray.push(photoObj);
  }

  return photoArray;
}
