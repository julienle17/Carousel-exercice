'use strict'

let count = 0;
let listImages = document.getElementsByClassName('carousel');
let lengthImages = listImages.length;
document.getElementsByClassName('button').onclick = nextImg();

function nextImg() {
	if (count < lengthImages -1) {
		listImages[count].classList.add('displayNone');
		listImages[count+1].classList.remove('displayNone');
		count++;

	} else {
			listImages[0].classList.remove('displayNone');
			listImages[lengthImages -1].classList.add('displayNone');
			count = 0;
	}
}

