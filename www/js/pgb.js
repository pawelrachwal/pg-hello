function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function myselfInfo() {

	infoPeronal =  'Hi! My personal data:' + '\n' +
			'=====' + '\n' +
			'Paweł Rachwał' + '\n' + 
			'Informatyka Stosowana' + '\n' + 
			'KrDUIS1012' + '\n' + 
			'181483' + '\n' + 

	navigator.notification.alert(infoPersonal);
	
}