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

###Useage

`pk.draggable(opt)`

Where `opt` is an object of the following type:

```javascript
element: // DOM element to drag - required
handle: // DOM element to use as drag handle, set to element value by default
move: // set to 'true' to allow full movement, or 'x' or 'y' to restrict on an axis, false by default
listeners: // optional, object consisting of custom dragstart, dragend and dragging functions to call on action
```



