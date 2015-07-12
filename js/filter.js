$(document).ready(function() {
  $('#filterOptions li a').click(function() {
    // Klasse des geklickten Items
    var ourClass = $(this).attr('class');

    // active class ändern
    $('#filterOptions li').removeClass('active');
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      // alle Items anzeigen
      $('#ourHolder').children('li.item').show();
    }
    else {
      // alle Elemente die nicht Teil der Klasse sind verstecken
      $('#ourHolder').children('li:not(.' + ourClass + ')').hide();
      // alle Elemente anzeigen die Teil der Klasse sind
      $('#ourHolder').children('li.' + ourClass).show();
    }
    return false;
  });
});