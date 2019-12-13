
//var isolimit = 5;
var iditem = 1;

if ( typeof isolimit==='undefined' ) var isolimit = 1000;
if ( typeof isoColWd==='undefined' ) var isoColWd = 300;
if ( typeof isoColWds!=='object' ) var isoColWds = {};

$(document).ready(function(){
	$grid = $('#iso1-content');
	$grid2 = $('#iso2-content');
	$grid3 = $('#iso3-content');
	isoColWd = IsotopeColumnWidth();
	
	$.fn.revealItems = function($items){
		
		var iso = this.data('isotope');
		if ( typeof iso!=='undefined' ) {
			var itemSelector = iso.options.itemSelector;
			//$items.hide();
			$(this).append($items);
			$items.imagesLoaded().progress(function(imgLoad, image){
				var $item = $(image.img).parents(itemSelector);
				//$item.show();
				iso.appended($item);
			});
		}
		return this;
	}
	$grid.isotope({
		containerStyle: null,
		masonry:{
			columnWidth: isoColWd,
			gutter: 15
		},
		itemSelector: '.grid-item',
		//filter : '*',
		filter : function() {
          return $(this).index() < isolimit;
        },
		transitionDuration: '0.4s'
	});

    var f = '*';
    af2 = $('#iso2-filters').find('.filter-item.active');
    if ( af2.length ) { f = $(af2[0]).data('f'); }
	var fi2 = 0;
	$grid2.isotope({
		containerStyle: null,
		masonry:{
			columnWidth: isoColWd,
			gutter: 15
		},
		itemSelector: '.grid-item',
        filter: function() {
          var r = ( ( f!='*' ) ? $(this).is(f) : true );
          if ( r&&fi2<isolimit ) { fi2++;} else { r = false; }
          return r;
        },
		transitionDuration: '0.4s'
	});

    f = '*';
    af3 = $('#iso3-filters').find('.filter-item.active');
    if ( af3.length ) { f = $(af3[0]).data('f'); }
	var fi3 = 0;
	$grid3.isotope({
		containerStyle: null,
    layoutMode: 'fitRows',
    fitRows: {
      //gutter: 10
    },
/*		masonry:{
			columnWidth: isoColWd,
			gutter: 15
		},
//*/
		itemSelector: '.grid-item',
        filter: function() {
          var r = ( ( f!='*' ) ? $(this).is(f) : true );
          if ( r&&fi3<isolimit ) { fi3++;} else { r = false; }
          return r;
        },
		transitionDuration: '0.4s'
	});

	
	$grid.imagesLoaded().progress(function(){
		$grid.isotope();
	});
	$grid2.imagesLoaded().progress(function(){
		$grid2.isotope();
	});
	$grid3.imagesLoaded().progress(function(){
		$grid3.isotope('layout');
	});

	/*$grid.imagesLoaded( function() {
		 $grid.isotope({
			containerStyle: null,
			masonry:{
				columnWidth: 300,
				gutter: 15
			},
			itemSelector: '.grid-item',
			filter : '*',
			transitionDuration: '0.4s'
		});
	});*/
	
	function IsotopeColumnWidth(){
	  var mediaBreakPoints = {
          'xs':0,
          'sm':576,
          'md':768,
          'lg':992,
          'xl':1200
	  };
	  var r = isoColWd;
	  var w = $(window).width(), h = $(window).height();
	  var o = ( w<h ? 'p' : 'l' );
	  var s = '';
	  for ( var b in mediaBreakPoints ) { if ( w>=mediaBreakPoints[b]&&(b in isoColWds) ) s = b; }
	  r = ( s!='' ? isoColWds[s] : isoColWd);
	  return r;
	}
	
	function GenerateItems(grid,type){
		var items = '';
		var ogr = $('#'+grid+'-grid');
		if ( ogr.length ) {
			var dgt = ogr.data('tmpl');
			if ( typeof dgt==='undefined' ) dgt = 'grid-item-template';
			//var t = $('#'+dgt).clone(true, true);
			//t.attr('id','').removeClass('hidden');
			var frc = [];
			var fri = ogr.data('fritems');
			if ( typeof fri!=='undefined' ) frc = fri.split(' ');
			
			for ( var i=0; i<Imgs.length; i++ ) {
			  var f = true;
			  if ( Imgs[i]['x']!==type ) {
			    f = false;
			  }
			  if ( frc.length ) {
			    f = false;
			    if ( typeof Imgs[i]['k']!=='undefined' ) { if ( frc.indexOf(Imgs[i]['k'])>=0 ) f = true; }
			  }
			  if ( f ) {
				var item = $('#'+dgt).clone(true, true);
				//if (iditem<isolimit) 
				item.removeClass('d-none');
				//item.addClass('grid-item wow fadeInUp c'+(i%9));
				var par = grid+'-'+iditem;
				item.css('width','44%'); //isoColWd);
				item.addClass('grid-item wow fadeInUp '+Imgs[i]['c']);
				//if ( !i ) item.addClass('grid-sizer');
				item.attr('id',par);
				item.attr('data-docid',Imgs[i]['k']);
				item.find('.grittm-img').attr('src',Imgs[i]['i']).attr('alt',Imgs[i]['n']);
				item.find('.grittm-txt').html(Imgs[i]['n']);
				item.find('.grittm-href').attr('href',Imgs[i]['h']);
				if (Imgs[i]['p']!='') item.find('.grittm-person').html('<span>На фото: </span>'+Imgs[i]['p']);
				if (Imgs[i]['d']!='') item.find('.grittm-doc').html('<span>Доктор: </span>'+Imgs[i]['d']);
				if (Imgs[i]['t']!='') item.find('.grittm-cstag').html('<span>Категория: </span>'+Imgs[i]['t']);
				if (Imgs[i]['f']!='') item.find('.grittm-ftgnm').html('<span>Фотограф: </span>'+Imgs[i]['f']);
				if (Imgs[i]['n']!='') item.find('.grittm-casnm').html(Imgs[i]['n']);
				if (Imgs[i]['a']!='') item.find('.grittm-castt').html(Imgs[i]['a']);
				if (Imgs[i]['s']!='') item.find('.grittm-href').attr('data-size',Imgs[i]['s']);
				if (Imgs[i]['n']!='') item.find('.grittm-docnbr').html(Imgs[i]['n'].replace(/\s+/g,'<br> '));

				items+=item.prop('outerHTML');
				iditem++;
			  }
			}
		}
		return $(items);
	}

	// SimpleInfiniteScroll
	function Infinite(e){
		if((e.type == 'scroll') || e.type == 'click'){
			var doc = document.documentElement;
			var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
			var bottom = top + $(window).height();
			var docBottom = $(document).height();
			
			if(bottom + 50 >= docBottom){
				$grid.revealItems(GenerateItems());
			}
		}
	}
	
	$grid.revealItems(GenerateItems('iso1','c'));
	$grid2.revealItems(GenerateItems('iso2','c'));
	$grid3.revealItems(GenerateItems('iso3','d'));
	//$grid.isotope('layout');
	
	$(document).on('click','.filter-item',function(){
		$('.filter-item.active').removeClass('active');
		$(this).addClass('active');
		var f = $(this).data('f');
		var i = $(this).data('i');
		var iso = $('#'+i+'-content');
		console.log(f);
		iso.find('.grid-item').removeClass('wow').removeClass('fadeInUp');
		//iso.isotope({filter: f});
		var fi = 0;
		iso.isotope({
            filter: function() {
              var r = ( ( f!='*' ) ? $(this).is(f) : true );
              if ( r&&fi<isolimit ) { fi++;} else { r = false; }
              return r;
            }
        });
		return false;
	})
	
	
	$(window).resize(function(){
		var cWidth=IsotopeColumnWidth();
/*
		var margin=40;
		var padding=15;
		var columns=0;
		var windowWidth = $(window).width();

		var overflow = false;
		while(!overflow){
			columns++;
			var WidthTheory = ((cWidth*columns)+((columns+1)*padding)+margin);
			if(WidthTheory > windowWidth)
				overflow = true;
		}
		if(columns > 1)
			columns--;
		
		var GridWidth = ((cWidth*columns)+((columns+1)*padding)+margin);
		
		if( GridWidth != $('#iso1-grid').width()){
			//$('#iso1-grid').width(GridWidth);
		}
		if( GridWidth != $('#iso2-grid').width()){
			//$('#iso2-grid').width(GridWidth);
		}
//*/
			$('#iso1-content').find('.grid-item').css('width',cWidth);
			$('#iso1-content').isotope('layout');

			$('#iso2-content').find('.grid-item').css('width',cWidth);
			$('#iso2-content').isotope('layout');

			$('#iso3-content').find('.grid-item').css('width',cWidth);
			$('#iso3-content').isotope('layout');
	});

	//$(window).scroll(Infinite);
	if ( $.isFunction('WOW') ) { new WOW().init(); }

})