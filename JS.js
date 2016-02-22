$(function() {
    $('.portion').bind('keyup', function(event) {
        var oldPortion = parseFloat($("#previousPortion").val());
        var newPortion = parseFloat($(event.target).val());

        if (oldPortion && newPortion) { 
            $('.serving').each(function(index, elem) {
                var ingredientNow = $('.amount', elem);
                var oldAmount = parseFloat(ingredientNow.text());
                var newAmount = oldAmount * newPortion / oldPortion;
                ingredientNow.text(newAmount);
            });
            $('#previousPortion').val(newPortion);
        }
    });
});
