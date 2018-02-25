$(window).load(function(){
 
	if(jQuery('.bxslider2').length){
		jQuery('.bxslider2').bxSlider({
			auto: true,
			controls:true,
			pager: false,
			pause:3000,
			autoHover:true,
			infiniteLoop:true,
			responsive: true,
			 
			onSliderLoad: function(){ 
               	$('.linksection .chlodn-banner, .linksection .klimat-banner').css('opacity',1);
               	$('#mainbanner').css('opacity',1);
			                var windowW = window.innerWidth;
			                var windowH = window.innerHeight;
			                var mainbannerH = parseInt($('#mainbanner').height());
				
				if(windowW > 600)
				{
				                if(  windowW > windowH ) {  
					                var newMainbannerH = windowH+(windowH / 2.5);     
				                }else{
					                var newMainbannerH = windowH-(windowH / 5); 
				                }
				
				                $('#mainbanner').css('height', newMainbannerH+"px");
				                var innerMainbanner = newMainbannerH + 300;  
				                $('#mainbanner .bx-viewport, #mainbanner .bx-viewport img:not(.img-banner)').css('height', innerMainbanner+"px");
			                 
				                var buttonsH = parseInt(newMainbannerH-(newMainbannerH / 2));    
				                var buttonsW = parseInt(buttonsH-(buttonsH / 2));
				
				                $('.linksection .chlodn-banner, .linksection .klimat-banner').css('height',buttonsH+'px');
				                //$('.linksection .chlodn-banner, .linksection .klimat-banner, .banner-link').css('width',buttonsW+'px');
				                $('.banner-link').css('width','100%');
				
				                var linkW = buttonsW;
				                var linkH = parseInt(buttonsH / 8); 
				                var buttonY = $('.linksection .chlodn-banner').offset();
			
				                var posY = parseInt(windowH - buttonY.top - linkH);  
				                if(  windowW > windowH ) {  
					                $('.banner-link').css({'line-height':linkH+'px','height':linkH+'px', 'font-size':'30px','top':posY+'px'}); 	
				                }else{
					                $('.banner-link').css({'line-height':linkH+'px','height':linkH+'px','position':'absolute', 'bottom':'0px'});
				                }
				                
				                var mainWindowAfterAll = parseInt(buttonY.top+buttonsH+130); // 130 = gradient+30 
				                $('#mainbanner').css('height', mainWindowAfterAll+"px");
				                ///* strzalki zmieniajace tlo
				                //$('#mainbanner .bx-controls').css({'position':'absolute','top':parseInt(buttonY.top+buttonsH-20)+'px', 'display':'block', 'width':'100%'});
				                //$('#mainbanner .bx-controls-direction').css({'position':'absolute !important','bottom':parseInt(buttonsH/2)+'px !important'});
				                //*/
				      
				      //kropki pod bannerem    
					 //var pager_top = newMainbannerH-20;
					//console.log(pager_top);
					//$('.bx-wrapper .bx-pager').css('top',pager_top+"px");
					
				}
				
           }      
		});
	}
	if(jQuery('#mainbanner').length){
	$("#mainbanner .bx-controls-direction .bx-prev").empty();
	$("#mainbanner .bx-controls-direction .bx-next").empty();
	$("#mainbanner .bx-controls-direction .bx-next").append('<i class="fa fa-angle-right"></i>');
	$("#mainbanner .bx-controls-direction .bx-prev").append('<i class="fa fa-angle-left"></i>');
	
		/*
		strzalki do zmiany tła
		$("#mainbanner .bx-controls-direction .bx-prev").empty();
		$("#mainbanner .bx-controls-direction .bx-next").empty();
		$("#mainbanner .bx-controls").append('<div class="bx-controls-direction"><a class="bx-prev"><i class="fa fa-angle-left"></i></a><a class="bx-next"><i class="fa fa-angle-right"></i></a></div>')
		*/
		var interval = setInterval(function(){
			changeSlide('next');
		},7000);
	 /*
	 strzalki do zmiany tła
		$(".bx-next").on('click',function(event){
			clearInterval(interval); 
			event.preventDefault();
			changeSlide('next');
			return false;
		});
		$(".bx-prev").on('click',function(event){
			clearInterval(interval);
			event.preventDefault();
			changeSlide('prev');
			return false;
		});
		*/
		function changeSlide(type){
			var bgs = new Array();
			bgs[0] = '/wp-content/themes/hmkemc-child/images/home-slider/slide1.jpg';
			bgs[1] = '/wp-content/themes/hmkemc-child/images/home-slider/slide2.jpg';
			bgs[2] = '/wp-content/themes/hmkemc-child/images/home-slider/slide3.jpg';
			bgs[3] = '/wp-content/themes/hmkemc-child/images/home-slider/slide4.jpg';
			//bgs[4] = '/wp-content/themes/hmkemc-child/images/home-slider/slide5.jpg';
		//	bgs[5] = '/wp-content/themes/hmkemc-child/images/home-slider/slide6.jpg';
			var currentbg = $('#mainbanner').data('currentbg');
			var maxbg = $('#mainbanner').data('maxbg');
			if(type == 'next')
			{
				if(currentbg == ( bgs.length-1 ))
				{
					currentbg = 0;
			
				}else{
					currentbg += 1;
				}
			}else{
				if(currentbg == 0)
				{
					currentbg = ( bgs.length-1 );
			
				}else{
					currentbg -= 1;
				}
			}
			$('body').css({'background' : 'url('+bgs[currentbg]+') no-repeat',
			'transition' : 'background 1s linear', 
			'background-attachment' : 'fixed',
			'background-position': 'center',
			'-webkit-background-size': 'cover',
	  		'-moz-background-size': 'cover',
	  		'-o-background-size': 'cover',
	  		'background-size': 'cover'});
		
			console.log(bgs[currentbg]); 
		
			$('#mainbanner').data('currentbg', currentbg);
		};
	}
	
	
});


function init_map(){
var myOptions = {zoom:10,center:new google.maps.LatLng(50.09319230000001,19.77105670000003),mapTypeId: google.maps.MapTypeId.ROADMAP};
map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(50.09319230000001,19.77105670000003)});
infowindow = new google.maps.InfoWindow({content:'<strong></strong><br>ul. Burów 51A <br>32-083  Balice<br>'});
google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);
/* ---------------------------------------------------------------------- */
/*	Google Map Function for Custom Style
/* ---------------------------------------------------------------------- */
function initialize() {
	var myOptions = {zoom:10,center:new google.maps.LatLng(50.09319230000001,19.77105670000003),mapTypeId: google.maps.MapTypeId.ROADMAP};
map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(50.09319230000001,19.77105670000003)});
infowindow = new google.maps.InfoWindow({content:'<strong></strong><br>ul. Burów 51A <br>32-083  Balice<br>'});
google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
infowindow.open(map,marker);
}
/* ---------------------------------------------------------------------- */
/*	Google Map Function for Event Style
/* ---------------------------------------------------------------------- */
function initialize_event() {
	var MY_MAPTYPE_ID = 'custom_style';
	var map;
	var brooklyn = new google.maps.LatLng(0, 0);
	var featureOpts = [
		{
		  stylers: [
			{ hue: '#E24F3D' },
			{ visibility: 'simplified' },
			{ gamma: 0.5 },
			{ weight: 0.5 }
		  ]
		},
		{
		  elementType: 'labels',
		  stylers: [
			{ visibility: 'on' }
		  ]
		},
		{
		  featureType: 'water',
		  stylers: [
			{ color: '#ffffff' }
		  ]
		}
	];
	var mapOptions = {
		zoom: 12,
		center: brooklyn,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	};

	map = new google.maps.Map(
		document.getElementById('map-canvas1'),
		mapOptions
	);

	var styledMapOptions = {
		name: 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}
/* ---------------------------------------------------------------------- */
/*	Google Map Function for Event Style
/* ---------------------------------------------------------------------- */
function initialize_event_1() {
	var MY_MAPTYPE_ID = 'custom_style';
	var map;
	var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
	var featureOpts = [
		{
		  stylers: [
			{ hue: '#E24F3D' },
			{ visibility: 'simplified' },
			{ gamma: 0.5 },
			{ weight: 0.5 }
		  ]
		},
		{
		  elementType: 'labels',
		  stylers: [
			{ visibility: 'on' }
		  ]
		},
		{
		  featureType: 'water',
		  stylers: [
			{ color: '#ffffff' }
		  ]
		}
	];
	var mapOptions = {
		zoom: 12,
		center: brooklyn,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	};

	map = new google.maps.Map(
		document.getElementById('map-canvas2'),
		mapOptions
	);

	var styledMapOptions = {
		name: 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

 
	//MOBILE
				
	/*
				
					$('#mainbanner').css('height', windowH+"px");
					$('#mainbanner .bx-viewport, #mainbanner .bx-viewport img').css('height', windowH+"px");
					
					
					if(  windowH < 900 && windowH >700) {
						$('.linksection .chlodn-banner, #mainbanner .linksection .klimat-banner').css('height','420px');
						$('.linksection .chlodn-banner, #mainbanner .linksection .klimat-banner, #mainbanner .banner-link').css('width','320px');
						$('.banner-link').css({'line-height':'50px','height':'50px','margin-top':'185px', 'font-size':'20px'});
						}
					else if(  windowH <= 700 && windowH >600) {
						$('.linksection .chlodn-banner, .linksection .klimat-banner').css('height','400px');
						$('.linksection .chlodn-banner, .linksection .klimat-banner, .banner-link').css('width','300px');
						$('.banner-link').css({'line-height':'50px','height':'50px','margin-top':'175px', 'font-size':'20px'});
						}
					else if(  windowH <= 600 && windowH >500) {
						$('.linksection .chlodn-banner, .linksection .klimat-banner').css('height','350px');
						$('.linksection .chlodn-banner, .linksection .klimat-banner, .banner-link').css('width','250px');
						$('.banner-link').css({'line-height':'50px','height':'50px','margin-top':'150px', 'font-size':'20px'});
						}
					else if(  windowH <= 500 && windowH >400) {
						$('.linksection .chlodn-banner, .linksection .klimat-banner').css('height','300px');
						$('.linksection .chlodn-banner, .linksection .klimat-banner, .banner-link').css('width','200px');
						$('.banner-link').css({'line-height':'50px','height':'50px','margin-top':'125px', 'font-size':'20px'});
						}
				
						
						//$('.linksection .chlodn-banner, .linksection .klimat-banner').css('height',bannersH+'px');
					
				var pagerTop = $('#mainbanner').height()-70; 
				$('#mainbanner .bx-wrapper .bx-pager, #mainbanner .bx-wrapper .bx-controls-auto').css('top', pagerTop+"px");
				*/
