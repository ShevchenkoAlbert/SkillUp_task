window.onload = () => {
let index = getQueryVariable();
let videoBlock = document.getElementById('video');
let video = document.createElement('video');
video.setAttribute('controls','controls')
let source = document.createElement('source');
source.setAttribute('src', videosBack[index].url);
video.appendChild(source);
videoBlock.appendChild(video);

let asideBlock = document.getElementById('aside');
let title = document.createElement('p');
title.innerHTML = videosBack[index].title; 
let rate = document.createElement('div');
rate.appendChild (addRateStar(videosBack[index]));
let year = document.createElement('div');
year.innerHTML = 'year: ' + videosBack[index].year;
let genre = document.createElement('div');
genre.innerHTML = 'genre: ' + videosBack[index].genre;
let time = document.createElement('div');
time.innerHTML = 'time: ' + videosBack[index].time;
asideBlock.appendChild(title);
asideBlock.appendChild(rate);
asideBlock.appendChild(year);
asideBlock.appendChild(genre);
asideBlock.appendChild(time);

function addRateStar(video) {
	let star, rate
	rate = document.createElement('div');
	for(let i=1; i<6; i++) {
		star = document.createElement('i');
		star.setAttribute('aria-hidden', 'true');
		if (i <= video.rate) {
		star.className = 'fa fa-star';
		rate.appendChild(star) }
		else star.className = 'fa fa-star-o';
		rate.appendChild(star)		
	}	
	return rate	
}

function getQueryVariable() {
    var query = window.location.search.substring(1);
    var pair = query.split('=');
    var index = Number(pair[1]);    
        return index;    
}

let shortDesc = document.getElementById('shortDescription');
let p = document.createElement('p');
p.innerHTML = videosBack[index].shortDescription;
shortDesc.appendChild(p);
let showMore = document.createElement('button');
showMore.innerHTML = 'Read more';
showMore.addEventListener('click', function(){change_visibility('shortDescription', 'largeDescription' )});
shortDesc.appendChild(showMore);

let largeDesc = document.getElementById('largeDescription');
largeDesc.style.display = 'none';
let largeParagrh = document.createElement('p');
largeParagrh.innerHTML = videosBack[index].largeDescription;
largeDesc.appendChild(largeParagrh);
let hideMore = document.createElement('button');
hideMore.innerHTML = 'Hide more';
hideMore.addEventListener('click', function(){change_visibility('largeDescription', 'shortDescription' )});
largeDesc.appendChild(hideMore);



function change_visibility (block_close, block_open) {
    document.getElementById(block_close).style.display='none';
    document.getElementById(block_open).style.display='block';
}

}