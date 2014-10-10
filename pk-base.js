var pk = pk || {};
(function (pk) {
    pk.preventBubble = function (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        e.cancelBubble = true; // IE events
        e.returnValue = false; // IE events
        return false;
    };
    pk.center = function (el) {
        el.style.top = el.parentNode.clientHeight / 2 - (el.offsetHeight / 2) + 'px';
        el.style.left = el.parentNode.clientWidth / 2 - (el.offsetWidth / 2) + 'px';
    };
    pk.getStyle = function (obj, style) {
        var css = window.getComputedStyle(obj);
        return css.getPropertyValue(style);
    };
    pk.addClass = function (thisEl, cssClass) {
        var cssClasses = thisEl.getAttribute('class');
        cssClasses = cssClasses || '';
        if (cssClasses && cssClasses.indexOf(cssClass) > -1) return;
        thisEl.setAttribute('class', (cssClasses ? cssClasses + ' ' : '') + cssClass);
        return thisEl;
    };
    pk.removeClass = function (thisEl, cssClass) {
        var cssClasses = thisEl.getAttribute('class');
        if (!cssClasses) return;
        thisEl.setAttribute('class', cssClasses.replace(cssClass, ''));
        return thisEl;
    };
    pk.bindEvent = function (ev, thisEl, fn) {
        if (thisEl.addEventListener) {
            thisEl.addEventListener(ev, fn, false);
        } else {
            thisEl.attachEvent("on" + ev, fn);
        }
    };
    
    pk.offset = function (elem) {
            var top= elem.getBoundingClientRect().top,
             left= elem.getBoundingClientRect().left,
             height= elem.offsetHeight,
             width= elem.offsetWidth;
            return {
                top: top,
                left: left,
                right:left+width,
                bottom:top+height,
                height: height,
                width: width
            };
        };

})(pk);
