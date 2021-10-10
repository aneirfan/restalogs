import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

// ambil data json
import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function(data) {
        dataList +=`<div class="i-col-4">
            <div class="restoran">
                <div class="resto-padding">
                    <img class="img-resto" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
                    <div class="kota">${data['city']}</div>
                    <h6 class="teks-merah rating">Rating: ${data['rating']}</h6>
    			    <h6 class="teks-hitam nama"><a href="#">${data['name']}</a></h6>
                    <p class="teks-hitam deskripsi">${data['description'].slice(0, 150)}...</p>
                </div>
            </div>
        </div>`;


    });
    document.querySelector('#konten').innerHTML = dataList;  
});

// navigasi
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});