$(document).ready(function() {

  //ddslick initialisation

  if ($('#select1').length >= 1) {
    $('#select1').ddslick({
      width: 170,
      onSelected: function (selectedData) {
        //callback function: do something with selectedData;
      }
    });
  }

  if ($('#select2').length >= 1) {
    $('#select2').ddslick({
      width: 200,
      onSelected: function (selectedData) {
        //callback function: do something with selectedData;
      }
    });
  }

  if ($('#select3').length >= 1) {
    $('#select3').ddslick({
      height: 230,
      onSelected: function (selectedData) {
        //callback function: do something with selectedData;
      }
    });
  }

  if ($('#select4').length >= 1) {
    $('#select4').ddslick({
      //width: 170,
      onSelected: function (selectedData) {
        //callback function: do something with selectedData;
      }
    })
  }


  //click's
  $('#btn-acc-info').click(function () {
    $(this).parent().find('.drop-down').toggle();
  });

  $('#btn-data-range').click(function () {
    $(this).parent().find('.drop-down').toggle();
  });

});