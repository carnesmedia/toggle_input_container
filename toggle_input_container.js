/*
 * ToggleContainer jQuery plugin
 * Amiel Martin
 * 2012-09-05
 *
 * Toggle visibility of any jquery selector if a radio or checkbox is selected.
 */


// TODO: Take options
jQuery.fn.toggle_container = function(container) {
  container = jQuery(container);
  var show = 'show', hide = 'hide';

  return this.each(function() {
    var t = jQuery(this);

    var show_hide = function() {
      container[t.is(':checked') ? show : hide]();
    };

    t.change(show_hide);
    show_hide();
  });
};
