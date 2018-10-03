//$ jQuery - Manipulation.
//General Attributes.
$(this).attr('checked');
$(this).prop('checked');
$(this).is(':checked');

$(this).attr('title', 'Attribute title');
$(this).attr('alt', 'Alt text');

$(this).prop('disabled', false);
$(this).prop('checked', true);

$('input[type="checkbox"]').prop('disabled', true);

$(this).removeAttr('title');
$(this).removeAttr('alt');

$(this).prop();

$(this).val();