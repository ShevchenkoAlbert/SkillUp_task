window.onload = () => {
 	// localStorage.setItem('isLogin', false);
 	let showContent = document.getElementById('showContent');
 	showContent.addEventListener('click', function(){renderPage(videos,advertising)});
	
 	let autorization = document.getElementById('singIn');
 	autorization.addEventListener('click', checkLogin);
 	
	function makeVideo(video,index) {
		let div = document.createElement('div');
		div.className = 'block_video';
		let p = document.createElement('p');
		let img = document.createElement('img');
		img.setAttribute('src',video.preview);
		p.innerHTML = video.title ;
		let accessDiv = document.createElement('div');
		let accessClass = getAccessClass(video.access); 
		accessDiv.className = 'access_block ' + accessClass;
		accessDiv.innerHTML = video.access;
		div.appendChild(p);
		div.appendChild(img);
		div.appendChild(accessDiv);
		div.addEventListener('click', function(){checkAccess(video,index)})
		return div;
	}

	function getAccessClass(video) {
		if (video === 'free') 
			return 'accessColorFree'
		return  'accessColorPay'
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
		let parentElem = document.getElementById('content');
 		let index = 0;
		for (let i =0; i<videos.length; i++) {
			const createdDiv = makeVideo(videos[i],i);
			parentElem.appendChild(createdDiv);

			if ((i+1)%3 === 0) {
				const createdReklama = makeReklama(advertising[index])
				parentElem.appendChild(createdReklama);
				index++;
			}
		}
	}

	function setAccess() {
		localStorage.setItem('isLogin', true)
		
	}

	let isLogin = () => localStorage.getItem('isLogin') === 'true' 
	

	function checkLogin() {
		let log = document.getElementById('login');
 		let pass = document.getElementById('password');
		if (log.value.trim() === user.login && pass.value.trim() === user.password) {
			setAccess();
			alert('success')
			
		}
		else if (log.value !== user.login || pass.value !== user.password ) {
			console.log(log.vale , pass);
			alert('Uncorrect login or password. Try again')
			
			}
		else alert('Sorry! You must registered')
	}


	function createUrl(index) {
		return  './video.html?index='+ index; 
	}

	function moveToVideo (index) {

		let a = document.createElement('a');
		a.setAttribute('href', createUrl(index));
		a.style.display = 'none';
		a.setAttribute('id', index);
		let body = document.getElementsByTagName('body');
		body[0].appendChild(a);
		let elemLink = document.getElementById(index);
		elemLink.click();
		body[0].removeChild(a);
	}

	function checkAccess (video,index) {
		if (video.access === 'free') moveToVideo(index)
		else if(video.access === 'pay') {
			if(isLogin()) moveToVideo(index)
			else alert('Sorry! You must registered')
		}
	}

}


