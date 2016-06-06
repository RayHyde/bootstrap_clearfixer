/* ----------------------------------------------------------------------
* File name:		jquery.bootstrap_clearfixer.js
* Version:			1.0
* Description:	inserts "clearfix visible" divs into bootstrap columns 
* Website:			generic jQuery plugin
* Version:			16-12-2015
* Author:				Ray Hyde - www.rayhyde.nl
---------------------------------------------------------------------- */

(function ($) {
	$.fn.bootstrapClearfixer = function (options) {
		var settings = $.extend({
			// clear columns after every Xth columns. Fill in the 
			// column numbers below for each bootstrap size
			lg: 6,
			md: 6,
			sm: 4,
			xs: 3			
		}, options);
		
		var parent = this,
				$cols = parent.find('[class^=col-]'),
				type = '',
				qty;
		
		function placeFix(type, qty) {			
			for(var i = qty -1; i < $cols.length; i+=qty) {
				$cols.eq(i).after('<div class="clearfix visible-' + type + '-block"></div>'); 
			}			
		}
		
		for (type in settings) {
			if(settings.hasOwnProperty(type)) {
				qty = settings[type];
				if ( qty > 0) {
					placeFix(type, qty);
				}
			}
		}		
	}

}(jQuery));