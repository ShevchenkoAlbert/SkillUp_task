	// import user from './user';

	let parentElem = document.getElementById('content');
 	let index = 0;
 	let log = document.getElementById('login');
 	let pass = document.getElementById('password');
 	localStorage.setItem('isLogin', false);
 	let showContent = document.getElementById('showContent');
 	showContent.addEventListener("click", function(){renderPage(videos,advertising)});
 	

 	

	function makeVideo(video) {
		let div = document.createElement('div');
		div.className = 'block_video';
		let p = document.createElement('p');
		let a = document.createElement('a');
		a.setAttribute('href', '#');
		let img = document.createElement('img');
		img.setAttribute('src',video.preview);
		p.innerHTML = video.title ;
		let accessDiv = document.createElement('div');
		let accessClass = getAccessClass(video.access); 
		accessDiv.className = 'access_block ' + accessClass;
		accessDiv.innerHTML = video.access;
		div.appendChild(p);
		a.appendChild(img);
		div.appendChild(a);
		div.appendChild(accessDiv);
		return div;
	}

	function getAccessClass(video) {
		if (video === 'free') 
			return 'green'
		return  'red'
	}

	function makeReklama(advertising){
		let rek_div = document.createElement('div');
		rek_div.className = 'block_reklama';
		let rek_img = document.createElement('img');
		rek_img.setAttribute('src', advertising.url);
		rek_div.appendChild(rek_img);
		return rek_div;

	}

	function renderPage(videos,advertising) {
		for (let i =0; i<videos.length; i++) {
			const createdDiv = makeVideo(videos[i]);
			parentElem.appendChild(createdDiv);

			if ((i+1)%3 === 0) {
				const createdReklama = makeReklama(advertising[index])
				parentElem.appendChild(createdReklama);
				index++;
			}

		}
	}

	function checkLogin() {
		if (log.value === user.login && pass.value === user.password) 
			localStorage.setItem('isLogin', true)
		else if (log.value !== user.login || pass.value !== user.password ) 
			alert('Uncorrect login or password. Try again')
		else alert('Sorry! You must registered')
	}

	function showFree(videos){
		videos.forEach((item,i) => console.log(item))
	} 


