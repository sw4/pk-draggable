pk-draggable
========

Simple helper library written in pure JS to enable element dragging

###Requires

`pk-base.js` and `pk-base.css` as a precursor

###Features

- Drag snapping / constraining within parent container
- Drag headers
- X / Y (or no) axis constraint
- Custom handlers for drag start, drag end and dragging actions

###Use

`pk.draggable(opt)`

Where `opt` is an object of the following type:

```javascript
element: // DOM element to drag - required
handle: // DOM element to use as drag handle, set to element value by default
container: // DOM element to contain dragging within, defaults to document.body
move: // set to 'true' to allow full movement, or 'x' or 'y' to restrict on an axis, false by default
listeners: // optional, object consisting of custom dragstart, dragend and dragging functions to call on action
```


###Custom listeners

Any custom listeners defined are returned the element being dragged and the current event. The event object returned is augmented with two further object properties `dragStart` and `dragEnd`consisting of `x` and `y` key-value pairs.


