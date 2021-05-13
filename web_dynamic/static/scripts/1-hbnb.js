document.addEventListener('DOMContentLoaded', function () {
  $('input[type=checkbox]').change(
    function () {
      console.log('ok');
      if ($(this).is('checked')) {
        console.log('Checkbox is checked..');
      }
    });
});
