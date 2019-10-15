
	var i = 0; // Start point
	var images = [];
	var time = 3000;

	// Image List
	images[0] = 'dummy1.jpeg';
	images[1] = 'change.jpeg';
	images[2] = 'do.jpeg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}
	window.onload = changeImg;

	
	var options = {
		bottom: '64px', // default: '32px'
		right: 'unset', // default: '32px'
		left: '32px', // default: 'unset'
		time: '0.5s', // default: '0.3s'
		mixColor: '#fff', // default: '#fff'
		backgroundColor: '#fff',  // default: '#fff'
		buttonColorDark: '#100f2c',  // default: '#100f2c'
		buttonColorLight: '#fff', // default: '#fff'
		saveInCookies: true, // default: true,
		label: '🌓', // default: ''
		autoMatchOsTheme: true // default: true
	  }
	  
	  const darkmode = new Darkmode(options);
	  darkmode.showWidget();
	
	
