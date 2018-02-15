window.onload = () => {
 	// localStorage.setItem('isLogin', false);
 	const FREE = 'free';
 	const PAY = 'pay';
 	let access = FREE;
 	let sortAccess = FREE;

 	let getContent = document.getElementById('getContent');
 	getContent.addEventListener('click', getVideo);

 	// debugger
	
 	let autorization = document.getElementById('singIn');
 	autorization.addEventListener('click', checkLogin);

 	let logOutBut = document.getElementById('logOut');
 	logOutBut.addEventListener('click', logOut);

 	let filterBut = document.getElementById('filterBut');
 	filterBut.addEventListener('click', function(){
 		renderFilterVideo(videos,advertising)
 	});

 	let sortBut = document.getElementById('sortBut');
 	sortBut.addEventListener('click', function(){
 		debugger
 		renderSortVideo(videos,advertising)}
 		);

 	let loggedUser = document.getElementById('loggedUser');

 	function spinnerOn () {
 		let spiner = document.getElementById('spiner');
 		spiner.style.display = 'block';
 	}

 	function spinnerOff () {
 		let spiner = document.getElementById('spiner');
 		spiner.style.display = 'none';
 	}


 	function getVideo() {
 		spinnerOn();
 		axios.all([
  			axios.get('http://10.10.54.227:8000/videos'),
  			axios.get('http://10.10.54.227:8000/advertising')
		]).then(axios.spread((response1,response2) => {
  			videos = response1.data;
  			advertising = response2.data;
  			spinnerOff();
 			renderPage(videos,advertising)
 			})).catch(error => {
 		 console.log(error);
		});

 		// return videos, advertising
 		}
 		console.log(videos);
  		console.log(advertising);

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
		parentElem.innerHTML = '';
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
		return videos, advertising
	}

	function setAccess() {
		localStorage.setItem('isLogin', true)	
	}

	let isLogin = () => localStorage.getItem('isLogin') === 'true' 
	

	function checkLogin() {
		let log = document.getElementById('login');
 		let pass = document.getElementById('password');
 		let loggedUser = document.getElementById('loggedUser');
		if (log.value.trim() === user.login && pass.value.trim() === user.password) {
			setAccess();
			log.style.display = 'none';
			pass.style.display = 'none';
			autorization.style.display = 'none';
			loggedUser.innerHTML = 'Hello,' + ' ' + log.value;
			loggedUser.style.display = 'inline-block'; 
			logOutBut.style.display = 'inline-block';
			alert('success')
			
		}
		else if (log.value !== user.login || pass.value !== user.password ) {
			alert('Uncorrect login or password. Try again')
			
			}
		else alert('Sorry! You must registered')
	}

	function logOut () {
		let log = document.getElementById('login');
 		let pass = document.getElementById('password');
 		let loggedUser = document.getElementById('loggedUser');
		localStorage.setItem('isLogin', false);
		logOutBut.style.display ='none';
		loggedUser.style.display = 'none'; 
		log.style.display = 'inline-block';
		log.value = '';
		pass.style.display = 'inline-block';
		pass.value = '';
		autorization.style.display = 'inline-block';
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

	function sortVideo (videoA, videoB) {
		if (videoA.access === sortAccess) return 1
		else if (videoB.access === sortAccess) return -1
		else return 0
	}
	
	function renderFilterVideo (videos,advertising) {
		document.getElementById('content').innerHTML = '';
		let filterArray = videos.filter((video) => video.access === access);
		renderPage(filterArray,advertising);
		access = access === PAY ? FREE : PAY;
	}

	function renderSortVideo (videos,advertising) {
		debugger
		document.getElementById('content').innerHTML = '';
		let sortArray = videos.map((i) => i).sort(sortVideo);
		renderPage(sortArray,advertising);
		sortAccess = sortAccess === PAY ? FREE : PAY;



	}

	
}

