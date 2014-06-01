/**
 * jQuery sutuMask - a plugin to add mask / overlay to elements
 * 
 * Copyright 2012 Sutunam France http://www.sutunam.com
 * Released under the MIT license http://opensource.org/licenses/MIT
 */
;(function($) {
    var defaults = {
        opacity : 0.8,
        backgroundColor : '#FFF',
        zIndex : 99
    };
    var dataKey = '_mask';
    
    var maskedElements = $();
    
    var rMask = function() {
        maskedElements = maskedElements.not(this);
        $($(this).data(dataKey)).remove();
    };
    
    var applySize = function () {
        var offset = $(this).offset();
        $(this).data(dataKey).css({
            'height'            : $(this).outerHeight(),
            'width'             : $(this).outerWidth(),
            'top'               : offset.top,
            'left'              : offset.left
        });
    };
    
    $(window).resize(function() {
        maskedElements.each(applySize);
    });
    
    $.fn.extend({
        sutuMask: function (options) {
            var opts = $.extend({}, defaults, options);
            var container = $('body');
            
            
            return $(this).each(function() {
                rMask();
                
                $(this).data(dataKey, $('<div></div>').css({
                    'position'          : 'absolute',
                    'opacity'           : opts.opacity,
                    'background-color'  : opts.backgroundColor,
                    'z-index'           : opts.zIndex
                }).appendTo(container)).each(applySize);
                maskedElements = maskedElements.add(this);
            });
        },
        sutuUnmask: function() {
            return $(this).each(rMask);
        }
    });
}(jQuery));
