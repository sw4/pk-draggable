var pk = pk || {};
(function (pk) {
    pk.draggable = function (opt) {
        var el = opt.element;
        var handle = opt.handle || opt.element;
        var container = {
            element: opt.container && opt.container.element ? opt.container.element : document.body,
            style: opt.container && opt.container.style ? opt.container.style : 'restrict'
        };

        pk.addClass(handle, 'pk-drag-draggable');
        var fn = opt.listeners;
        var m = opt.move;
        if (m && typeof m !== 'object') {
            m= {
                x: true,
                y: true
            };
        }
        var dragging = false;
        var dragStart = {};
        var startOffset;
        var containerD = {};
        var elD = {};
        pk.bindEvent("mousedown", handle, function (e) {
            dragging = true;
            dragStart = e.dragStart = {
                x: e.clientX,
                y: e.clientY
            };
            startOffset = {
                x: e.clientX - el.getBoundingClientRect().left,
                y: e.clientY - el.getBoundingClientRect().top
            };
            pk.addClass(handle, 'pk-drag-dragging');
            pk.addClass(document.body, 'pk-noselect');
            document.onselectstart = function () {
                return false;
            };
            containerD = pk.offset(container.element);
            elD = pk.offset(el);
            if (fn && fn.dragstart){ fn.dragstart(el, e);}
        });
        pk.bindEvent("mouseup", window, function (e) {
            if (!dragging){ return;}
            dragging = false;
            e.dragStart = dragStart;
            e.dragEnd = {
                x: e.clientX,
                y: e.clientY
            };
            pk.removeClass(handle, 'pk-drag-dragging');
            pk.removeClass(document.body, 'pk-noselect');
            document.onselectstart = function () {
                return true;
            };
            if (m && container.style === "snap") {
                contain();
            }
            if (fn && fn.dragend){ fn.dragend(el, e);}
        });

        function contain() {
            if (m.x && el.offsetLeft < 0) {
                el.style.left = 0 + 'px';
            } else if (m.x && el.offsetLeft > container.element.offsetWidth - el.offsetWidth) {
                el.style.left = container.element.offsetWidth - el.offsetWidth + 'px';
            }
            if (m.y && el.offsetTop < 0) {
                el.style.top = 0 + 'px';
            } else if (m.y && el.offsetTop > container.element.offsetHeight - el.offsetHeight) {
                el.style.top = container.element.offsetHeight - el.offsetHeight + 'px';
            }
        }
        pk.bindEvent("mousemove", window, function (e) {
            if (!dragging){ return;}
            e.dragStart = dragStart;
            e.dragEnd = {
                x: e.clientX,
                y: e.clientY
            };
            if (m.x){ el.style.left = el.offsetLeft + (e.dragEnd.x - el.getBoundingClientRect().left) - startOffset.x + 'px';}
            if (m.y){ el.style.top = el.offsetTop + (e.dragEnd.y - el.getBoundingClientRect().top) - startOffset.y + 'px';}
            if (container.style == "restrict"){ contain();}
            if (fn && fn.dragging){ fn.dragging(el, e);}
        });
    };
})(pk);
