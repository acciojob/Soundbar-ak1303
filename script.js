//your JS code here. If required.
let currAudio;
document.addEventListener('click',(e)=>{
	if(e.target.classList.contains('btn')){
		let audioFile = e.target.getAttribute('data-audio');
		const audio = new Audio(audioFile); 
		if (currAudio) {
	      currAudio.pause();
	    }
	    currAudio = audio;
		audio.play();
	}
	else if(e.target.classList.contains('stop')){
		if (currAudio) {
	      currAudio.pause();
	    }
	}
})