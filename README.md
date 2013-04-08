toggle_input_container
======================

Show and hide dom elements when checkboxes or radios are selected.

Info:

Since I'm having a hard time naming and concisely describing this

```html
<label for="good_day">
  <input type="checkbox" id="good_day" />
  Are you having a good day?
</label>

<div id="show_good_day_more">
  <label for="good_day_more">Please tell us more</label>
  <input id="good_day_more" />
</div>
```

```javascript
$('#good_day').toggle_input_container('#show_good_day_more');
```
