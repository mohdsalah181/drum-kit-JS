{
    const playingClass = 'playing',
          crashRide = document.getElementById('crash-ride'),
          hitHatTop = document.getElementById('hihat-top');

    const animateCrashOrRide = () => {
        crashRide.style.transform = 'rotate(0deg) scale(1.5)';
    };

    const animateHiHatClosed = () => {
        hitHatTop.style.top = '171px';
    };

    const playSound = e => {
        const keyCode = e.keyCode,
        keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

        if (!keyElement) return; // if the keyElement not exist in the keymap list then do nothing

        // to run the audio
        const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
        audioElement.currentTime = 0;
        audioElement.play();

        // to start the animation with audio playing
        switch(keyCode){
            case 69:
            case 82:
                animateCrashOrRide();
                break;
            case 75:
                animateHiHatClosed();
                break;
        }
        //keyElement.classList.add(playingClass);
    };

    // to return the crash ride to its position
    const removeCrashRideTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	};
    crashRide.addEventListener('transitionend', removeCrashRideTransition);

    // to retun the hihat to its position
    const removeHiHatTopTransition = e => {
        if (e.propertyName !== 'top') return;
        e.target.style.top = '166px';
    }
    hitHatTop.addEventListener('transitionend', removeHiHatTopTransition);

    window.addEventListener('keydown', playSound);
}

