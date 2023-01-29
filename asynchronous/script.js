'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*const getCountry = function (cName) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${cName}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    //neighbor render
    const [neighbor] = data.borders;
    if (!neighbor) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
};

const renderCountry = function (country) {
  const html = `<article class="country">
    <img class="country__img" src="${country.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${country.name.common}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${country.population}</p>
      <p class="country__row"><span>🗣️</span>${Object.values(
        country.languages
      )}</p>
      <p class="country__row"><span>💰</span>${
        Object.values(country.currencies)[0].name
      }</p>
    </div>
  </article>`;
  //console.log(Object.values(country.currencies)[0].name);
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

getCountry('turkey');*/

//////////////////////////////////////////////////////////////////

//Coding Challenge 1
/*const whereAmI = function (lat, lng) {
  getJSON2(lat, lng)
    .then(data => {
      console.log(data);
      console.log(
        `You are in ${data.address.province ?? data.address.town}, ${
          data.address.country
        }`
      );
    })
    .catch(err => console.log(err));
};

navigator.geolocation.getCurrentPosition(function (pos) {
  const { latitude, longitude } = pos.coords;
  whereAmI(latitude, longitude);
});

function getJSON2(lat, lng) {
  return fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
  ).then(response => {
    if (response.status === 401) throw new Error('unauthorization');
    if (!response.ok) throw new Error('not 200');
    return response.json();
  });
}*/

///////////////////////////////////////////////////////////////
//Coding Challenge 2
/*const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imgPath;
    imgEl.addEventListener('load', function () {
      imgContainer.append(imgEl);
      resolve(imgEl);
    });

    imgEl.addEventListener('error', function () {
      reject(new Error('img not found'));
    });
  });
};

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('img 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('img 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err.message));*/

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

//Coding Challenge 3
//TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.*/
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imgPath;
    imgEl.addEventListener('load', function () {
      imgContainer.append(imgEl);
      resolve(imgEl);
    });

    imgEl.addEventListener('error', function () {
      reject(new Error('img not found'));
    });
  });
};

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const loadNPause = async function () {
  try {
    const img = await createImage('img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';
    const img2 = await createImage('img/img-2.jpg');
    await wait(2);
    img2.style.display = 'none';
  } catch (err) {
    console.log(err.message);
  }
};
//loadNPause();

const loadAll = async function (imgArr) {
  const imgsPromise = imgArr.map(async img => await createImage(img));
  console.log(imgsPromise);
  const imgs = await Promise.all(imgsPromise);
  console.log(imgs);
  imgs.forEach(img => img.classList.add('parallel'));
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
