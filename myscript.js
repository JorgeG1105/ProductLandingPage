//Carousel JS
let startPoint = 0;
const images = [];
let time = 10000;

//Image list
images[0] = 'images/microphones/g2000progamingheadset.png';
images[1] = 'images/microphones/hero-rage-wireless.png';
images[2] = 'images/microphones/ROG-Strix-Wireless-gaming headset.png';

//Change the img

function changeImg() {
	let title = document.querySelector('.img-title');
	let info = document.querySelector('.img-info');
	document.slide.src = images[startPoint];

	if (startPoint < images.length -1 ){
		startPoint++;
		if(startPoint === 1) {
			title.innerHTML = 'G2000 Pro Gaming Headset';
			info.innerHTML = 'An LED backlit gaming headset with high precision 51mm magnetic neodymium drivers, soft leather ear pads and a braided cable fitted with a rotary volume controller.'
		}
		else if (startPoint === 2) {
			title.innerHTML = 'Hero Rage Wireless';
			info.innerHTML= 'The Sound Blaster Tactic3D Rage Wireless V2.0 Gaming Headset is the must-have gear for hardcore gamers. It features 50mm FullSpectrum drivers and SBX Pro Studio technologies, delivering superior uncompromised wireless gaming audio thats backed by decades of legendary Sound Blaster expertise.'
		}
	}
	else {
		startPoint = 0;
		title.innerHTML = 'ROG Strix Wireless Gaming Headset';
		info.innerHTML= 'ROG Strix Wireless is a gaming headset with 2.4GHz wireless technology that provides a lower-latency connection than Bluetooth headsets for instant audio transmission. With ROG Strix Wireless, every in-game sound reaches your ears instantly — even from up to 15 meters away from your PC — ensuring you are never behind on the action. 2.4GHz technology even consumes less power, so you can enjoy more than 10 hours1 of use between charges. ROG Strix Wireless features a dual-antenna design with an automatic interference avoidance mechanism to ensure a stable connection, even in complicated Wi-Fi environments.'
	}

	setTimeout("changeImg()", time);
}

//Hamburger icon JS
let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector("#nav-bar");

/*---This will trigger the hamburger to change when clicked in mobile mode--*/
hamburger.addEventListener("click", function(){
	this.classList.toggle("change");
	navbar.classList.toggle("toggleDisplay");
});

window.onload = changeImg;