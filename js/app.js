$(document).ready(function() {

	if (isMobile()) {
		var $humburger = $('.button-humburger'),
			$mobileNav = $('.mobile-nav'),
			$btnSearch = $('.button-search'),
			$searchField = $btnSearch.find('input');

		$humburger.on('click', function() {
			if ($mobileNav.hasClass('active')) {
				$mobileNav.removeClass('active');
			} else {
				$mobileNav.addClass('active');
			}
		});

		$btnSearch.on('click', function() {
			if (!$searchField.hasClass('active')) {
				$searchField.addClass('active');
			} else {
				$searchField.removeClass('active');
			}
		});
	}


	var $btnScroll = $('.scroll-to-top');

	$(document).on('scroll', function() {
		toggleVisibleScroll($btnScroll);
	});

	var $widgetSlider = $('#widget-slider'),
		$widgetSliderNav = $('.widget-slider_nav'),
		$wsnPrev = $widgetSliderNav.find('.btn-nav.nav-prev'),
		$wsnNext = $widgetSliderNav.find('.btn-nav.nav-next');

	// trigger('next.owl.carousel');
	$widgetSlider.owlCarousel({
		items: 1,
		onInitialized: itemsCounter
	});

	function itemsCounter() {
		var i = 0;

		$widgetSlider.find('.item-counter').each(function() {
			$(this).html(i + 1);
			i++;
		});
	}

	$wsnPrev.on('click', function() {
		$widgetSlider.trigger('prev.owl.carousel');
	});

	$wsnNext.on('click', function() {
		$widgetSlider.trigger('next.owl.carousel');
	})

});

function toggleVisibleScroll(element) {
	if (isVisibleMainscreen()) {
		element.addClass('visible');
	} else {
		element.removeClass('visible');
	}
}

function isMobile() {
		if ( $(window).width() <= 772) {
			return true;
		} else {
			return false;
		}
	}

function isVisibleMainscreen() {
	if ( $(document).scrollTop() >= $(window).height()) {
		return true;
	} else {
		return false;
	}
}