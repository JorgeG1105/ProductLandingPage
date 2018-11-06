let startPoint = 0;
const images = [];
let time = 5000;

//Image list
images[0] = 'images/microphones/g2000progamingheadset.png';
images[1] = 'images/microphones/hero-rage-wireless.png';
images[2] = 'images/microphones/ROG-Strix-Wireless-gaming headset.png';

//Change the img

function changeImg() {
	document.slide.src = images[startPoint];

	if (startPoint < images.length -1 ){
		startPoint++;
	}
	else {
		startPoint = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;