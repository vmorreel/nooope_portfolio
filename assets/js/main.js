//Display logo in console
//console.log("\nDesigned and developped by Valentin Morreel :\nnCCxcCXcxNcxNCnnXXCxCNNnXNNCNxnxcnxCxxNNcNXCCcXccn\nncCCCnccxXCXNxCCnNNncCNnXccnxXnCnCXXnCXCNXCNNnxNNX\nNcXccnccccnxcncNnccXNCcNcncXnNNccNCcxcNcXxxnnXnCxc\nxnnnxXNnxCNnNNccncNCNNNXCcCXcNXNXNXNnNnCxcXCncXCCc\nXXCxNxCNcXXNxcXXxcCnNcxnCxcXnNXCNnxXnccNnCXXxxxCnC\nXxxXNncNNxNXCxNXCNXXXcnXCcCXcCcnNCCCCxnnNcXcXXnCNC\nXCNCxCxcCXCcxNnCcNCncXcxCCcxnXnCccNxcnnNCnnNXcCNNN\nxxxncNnnxCNxcNCXCcNccXXxnCxCxCcCncxNnXCcCNXCxnxNXC\nccCXxXnncNxnXCxcxnxcXXcCNNNnNNNXCCxcXCXCXnCxxxCCXc\nCxXNxcCXCcNnnCXCCNCNnnnXcNnncxcXnNNxcnXcnCnCnxncCc\nxXxxcNxNxXNNCccNncXCcNccNCXnnxNNCcCNxcnnCCnXNCcxcN\nXnNxCxxXxCXCCnXcCXNNxXxxxCxnnCxnNnCxxnCXcNNCNnnCxX\nnXXcnCNnNxXxxCXNCXnNccXNCxXxccxXCCNNXxNXXnxcXxCxCn\nXNCxxxxccCCNXxCncNxCcXxNccxcNXxNXcCXxXCcCnXCXXCNxc\nnccncXXXXnnxNXXCCnCxNNcxXncCXxNCNnccnXNxxXXccNxXCn\nCncnNNXXXxXXCncncCnCxXXnnxcNxnCNCccCxnCCxNNNnNNcxC\ncCxNnXcNnCxNcNXXXnNxncCNCCcNnNXcNCNnXcxXnNNNCCNxXc\nCcCnxCnXxxCccNxCcNcxCnnxNxcnncNnxcXNxNXXcNxCCnccxN\nxNXxxxNcnNcxnCXCnnxNNnNcxXCnNNCcNXxCccCxCCNXcxNxcX\nnXcXxxCcNXccXXnXcCxnCXnCXXxNcxXXcxNCxxNxnNCcXXXCxc\nxCnCXnxCcXXcNXxNCXXxXXcNCCNNCCnNXCcNxNXncXnxXxCCnN\nThanks for visit :D")

// Get page title
var pageTitle = $("title").text();

// Change page title on blur
$(window).blur(function() {
	$("title").text("Don't forget to check me!");
});

// Change page title back on focus
$(window).focus(function() {
	$("title").text(pageTitle);
});

$('.parallax').scroll(function() {
	changeBurgerColour();
	disappearTitleHeader();
	if (window.mobileAndTabletcheck() == false) {
		showCards();
	}
});

$('header>div.mouse').click(function(event) {
	var heightHeader = document.getElementsByTagName('header')[0].offsetHeight;
	$('.parallax').animate({scrollTop:heightHeader}, 'slow');
	return false;
});

$('footer>div>a.footer-logo.no-smoothstate').click(function(event) {
	$('.parallax').animate({scrollTop:0}, 'slow');
	return false;
});

// device detection
window.mobilecheck = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

window.mobileAndTabletcheck = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

function changeBurgerColour() {
	var heightHeader = document.getElementsByTagName('header')[0].offsetHeight;
	var heightBurger = document.getElementsByTagName('span')[0].offsetHeight;
	var semiBurger = heightBurger / 2;
	var burgerMargin = 24;

	if (window.mobilecheck() == false) {
		var semiHeader = heightHeader / 2;
	}
	else {
		var semiHeader = heightHeader - burgerMargin*2;
	}

	if ($('.parallax').scrollTop() > (semiHeader-(semiBurger-burgerMargin))) {
		$(".bar").addClass('blackBurger');
		$(".burger").addClass('blackBurger');
	}
	if ($('.parallax').scrollTop() < (semiHeader-(semiBurger-burgerMargin))) {
		$(".bar").removeClass('blackBurger');
		$(".burger").removeClass('blackBurger');
	}
}

function disappearTitleHeader() {
	var heightHeader = document.getElementsByTagName('header')[0].offsetHeight;

	if (window.mobilecheck() == false) {
		var semiHeader = heightHeader / 2;
	}
	else {
		var semiHeader = heightHeader;
	}

	if ($('.parallax').scrollTop() > semiHeader-100) {
		$('#title_header').css({
			opacity: 4.5 - $('.parallax').scrollTop() * 0.005
		});
	}
	if ($('.parallax').scrollTop() == 0) {
		$('#title_header').css({
			opacity: '1'
		});
	}
}


$('header').on("mousemove", function(event) {
	if (window.mobilecheck() == false) {
		var width = $('#title_header').width();
		var height = $('#title_header').height();

		var x = event.pageX; 
		var y = event.pageY;

		var percentageX =  (x / width)*2;
		var percentageY = (y / height)*2;

		const tiltX = ((25/ 2) - ((percentageX) * 5)).toFixed(2);
		const tiltY = ((25/ 2) - ((percentageY) * 2)).toFixed(2);

		$('#title_header>h1, #title_header>p').css('transform', 'translate(' + tiltX * -1 + 'px,' + tiltY * -1 + 'px) scale3d(1,1,1)');
		$('#title_header>div.line-wrap').css('transform', 'translate(' + tiltX + 'px,' + tiltY + 'px) scale3d(1,1,1)');
	}
});

//KONAMI CODE
var colors = {
	'1': 'rgb(255, 170, 85)',
	'2': 'rgb(49, 255, 172)', 
	'3': 'rgb(252, 33, 69)', 
	'4': 'rgb(50, 157, 255)'
};

var radius = {
	'1': '0px',
	'2': '500px'
};

var header = $('header');
var headerTitle = $('header').find('h1');
var headerParagraph = $('header').find('p');

function cheatTitle() {
	headerTitle.css({
		'-webkit-transition': 'all .2s ease-in-out',
		'-moz-transition': 'all .2s ease-in-out',
		'-ms-transition': 'all .2s ease-in-out',
		'-o-transition': 'all .2s ease-in-out',
		'transition': 'all .2s ease-in-out'
	});
	headerTitle.text('such particles');
	headerParagraph.text('Konami Code is geek');
}

function showBubbles() {
	header.prepend('<ul class="bg-bubbles" id="' + counter + '">');

	for (var i = 1; i <= ($('#title_header').find('h1').text().length+1)*2; i++) {

		var dim = Math.floor((Math.random() * 25) + 5);
		var color = colors[Math.floor((Math.random() * 4) + 1)];
		var rad = radius[Math.floor((Math.random() * 2) + 1)];
		var delay = Math.floor((Math.random() * 4) + 1);
		var duration = Math.floor((Math.random() * 9) + 7);

		$('header ul#'+ counter).append('<li>');
		$('header ul#'+ counter + ' li:nth-of-type(' + i + ')').css({
			'left': i*100/$('#title_header').find('h1').text().length-4 + '%',
			'z-index': Math.floor((Math.random() * 9) + 1),
			'width': dim,
			'height': dim,
			'background-color': color,
			'border': '1px solid ' + color,
			'border-radius': rad,
			'-webkit-animation-delay': delay + 's',
			'animation-delay': delay + 's',
			'-webkit-animation-duration': duration + 's',
			'animation-duration': duration + 's',
			'transform': 'scale3d(1,1,1), perspective(1px)'
		});
	}
}

function activateCheats() {
	cheatTitle();
	showBubbles();
}

var allowedKeys = {
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',
	65: 'a',
	66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;
var counter = 0

document.addEventListener('keydown', function(e) {
	var key = allowedKeys[e.keyCode];
	var requiredKey = konamiCode[konamiCodePosition];

	if (key == requiredKey) {
		konamiCodePosition++;
		if (konamiCodePosition == konamiCode.length) {
			counter += 1;
			activateCheats();
		}
	} 
	else {
		konamiCodePosition = 0;
	}
});

function showCards()
{
	$('.project_container').each( function(i){

		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		/* If the object is completely visible in the window, do effect*/
		if( bottom_of_window > bottom_of_object ){
			$(this).animate({'opacity':'1'},200);
			$(this).find('div.card-year').animate({'top':'-18px'},450);
			$(this).find('div.card-role').animate({'left':'-12%'},400);
			$(this).find('div.card-title').animate({'left':'70%'},500);
			$(this).find('div.card-project').animate({'left':'70%'},450);
			$(this).find('div.card-line').animate({'top':'64%'},450);
		}
	}); 
}

