(function ($) {
    "use strict";

    $(document).ready(function ($) {
		// for mobile menu
		$('#menu-btn').click((e) => {
			$('body').toggleClass('menu-open');
			e.preventDefault();
		});

    });
}(jQuery));