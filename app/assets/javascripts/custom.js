function select2() {
  $('.select2').select2({theme: 'bootstrap'});
}

$(document).ready(function() {
  select2();
});

$(document).on('click', '#load_product', function() {
  var page = $(this).attr('page');
  var store_id = $(this).attr('store_id');

  $.ajax({
    url: '/products',
    type: 'get',
    dataType: 'script',
    data: {'page': page, 'store_id': store_id}
  });
  
  $(this).attr('page', parseInt(page) + 1);
});

$(document).on('click', '#load_combo', function() {
  var page = $(this).attr('page');
  var store_id = $(this).attr('store_id');

  $.ajax({
    url: '/combos',
    type: 'get',
    dataType: 'script',
    data: {'page': page, 'store_id': store_id}
  });
  $(this).attr('page', parseInt(page) + 1);
});
