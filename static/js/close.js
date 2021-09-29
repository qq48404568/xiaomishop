

$(function(){
    $('.close_data h5').click(function(){
        $('.close_data h5').css('borderColor','#ccc');
        $(this).css('borderColor','#ff6a00');
    })
    $('.close_add .del').click(function(){
        $(this).parents('.close_add').remove();
    })
})

