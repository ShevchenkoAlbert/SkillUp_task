window.onload = () => {
let index = getQueryVariable();
let videoBlock = document.getElementById('video');
let video = document.createElement('video');
video.setAttribute('controls','controls')
let source = document.createElement('source');
source.setAttribute('src', videos[index].url);
video.appendChild(source);
videoBlock.appendChild(video);

let asideBlock = document.getElementById('aside');
let title = document.createElement('p');
title.innerHTML = videos[index].title; 
let rate = document.createElement('div');
rate.innerHTML = videos[index].rate;
let year = document.createElement('div');
year.innerHTML = 'year: ' + videos[index].year;
let genre = document.createElement('div');
genre.innerHTML = 'genre: ' + videos[index].genre;
let time = document.createElement('div');
time.innerHTML = 'time: ' + videos[index].time;
asideBlock.appendChild(title);
asideBlock.appendChild(rate);
asideBlock.appendChild(year);
asideBlock.appendChild(genre);
asideBlock.appendChild(time);







function getQueryVariable() {
    var query = window.location.search.substring(1);
    var pair = query.split('=');
    var index = Number(pair[1]);    
        return index;    
}

function change_visibility (block_close, block_open) {
    document.getElementById(block_close).style.display='none';
    document.getElementById(block_open).style.display='';
}

}