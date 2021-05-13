const input = $('input')
const h4 = $('amenities h4')

$('input:checkbox').change(
    function(){
	list_amenity = []
        if ($(this).is(':checked')) {
            list_amenity.push(input.getAttribute('data-id'));
	}
    h4.html(list_amenity);
    });
