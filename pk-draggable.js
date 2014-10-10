var pk = pk || {};
(function (pk) {
    pk.draggable = function (opt) {
        var drag = false;
        var el = opt.element;
        var handle = opt.handle || opt.element;
        var container = opt.container || document.body;
        pk.addClass(handle, 'pk-drag-draggable');
        var fn = opt.listeners;
        var m = opt.move;
        var dragging = false;
        var dragStart = {}, dragEnd = {};
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
            containerD = pk.offset(container);
            elD = pk.offset(el);
            if (fn && fn.dragstart) fn.dragstart(el, e);
        });
        pk.bindEvent("mouseup", window, function (e) {
            if (!dragging) return;
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
            if (m && container) {
                var left = el.getBoundingClientRect().left + (e.dragEnd.x - el.getBoundingClientRect().left) - startOffset.x;
                var top = el.getBoundingClientRect().top + (e.dragEnd.y - el.getBoundingClientRect().top) - startOffset.y;
                if (left < containerD.left) {
                    el.style.left = 0 + 'px';
                } else if (left + elD.width > containerD.left + containerD.width) {
                    el.style.left = (containerD.left + containerD.width) - elD.width + 'px';
                }
                if (top < containerD.top) {
                    el.style.top = 0 + 'px';
                } else if (top + elD.height > containerD.top + containerD.height) {
                    el.style.top = (containerD.top + containerD.height) - elD.height + 'px';
                }
            }
            if (fn && fn.dragend) fn.dragend(el, e);
        });
        pk.bindEvent("mousemove", window, function (e) {
            if (!dragging) return;
            e.dragStart = dragStart;
            e.dragEnd = {
                x: e.clientX,
                y: e.clientY
            };

            function move(axis) {
                if (axis.x) el.style.left = el.getBoundingClientRect().left + (e.dragEnd.x - el.getBoundingClientRect().left) - startOffset.x + 'px';
                if (axis.y) el.style.top = el.getBoundingClientRect().top + (e.dragEnd.y - el.getBoundingClientRect().top) - startOffset.y + 'px';
            }
            if (m) {
                if (typeof m === 'object') {
                    move(m);
                } else {
                    move({
                        x: true,
                        y: true
                    });
                }
            }
            if (fn && fn.dragging) fn.dragging(el, e);
        });
    };
})(pk);
