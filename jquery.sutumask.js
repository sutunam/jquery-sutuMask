/**
 * jQuery sutuMask - a plugin to add mask / overlay to elements
 * 
 * Copyright 2012 Sutunam France http://www.sutunam.com
 * Released under the MIT license http://opensource.org/licenses/MIT
 */
;(function($) {
    var defaults = {
        opacity         : 0.8,
        backgroundColor : '#FFF',
        zIndex          : 99
    };
    
    var rMask = function() {
        $($(this).data('_mask')).remove();
    };
    
    $.fn.extend({
        sutuMask: function (options) {
            var opts = $.extend({}, defaults, options);
            
            return $(this).each(function() {
                rMask();
                
                var offset = $(this).offset();
                $(this).data('_mask', $('<div></div>').css({
                    'position'          : 'absolute',
                    'opacity'           : opts.opacity,
                    'height'            : $(this).height(),
                    'width'             : $(this).width(),
                    'top'               : offset.top,
                    'left'              : offset.left,
                    'background-color'  : opts.backgroundColor,
                    'z-index'           : opts.zIndex
                }).appendTo($('body')));
            });
        },
        sutuUnmask: function() {
            return $(this).each(rMask);
        }
    });
}(jQuery));