pk-draggable
========

[![Build Status](https://travis-ci.org/sw4/pk-draggable.svg?branch=master)](https://travis-ci.org/sw4/pk-draggable)

Simple helper library written in pure JS to enable element dragging


**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

#####[Demo](http://sw4.github.io/pk-modal)
###Requires

- `pk-core.js`
- `pk-core.css`

###Features

- Drag snapping / constraining within parent container
- Drag headers
- X / Y (or no) axis constraint
- Custom handlers for drag start, drag end and dragging actions

###Usage

`pk.draggable(opt)`

Where `opt` is an object of the following type:

```javascript
element: // DOM element to drag - required
handle: // DOM element to use as drag handle, set to element value by default
container: {
  element:// DOM element to contain dragging within, defaults to document.body
  style:// 'snap' or 'restrict' (default). 'snap' allows dragging outside the container and snapping back on mouseup, 'restrict' prevents dragging outside the container boundaries
}
move: // set to 'true' to allow full movement, or 'x' or 'y' to restrict on an axis, false by default
listeners: // optional, object consisting of custom dragstart, dragend and dragging functions to call on action
```


###Custom listeners

Any custom listeners defined are returned both the element being dragged and the related event. The event object is augmented with further objects consisting of `x` and `y` values:

```javascript
dragStart: // the position on the page of of the dragstart event
dragOffset: // the position within the drag handle the drag event was initiated at
dragEnd: // the position on the page of of the dragend (or current drag) event
dragDist: // the pixel distance of the drag
dragPerc: // the percentage distance of the drag within the parent (constrain) element
```
