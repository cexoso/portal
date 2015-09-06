$(function(){
    $('#fixPhone ul.brand').on('click','li',function(){
        $('#fixPhone ul.brand li').removeClass('active');
        $(this).addClass('active');
    })
});
$(function(){
    $("#process ul").on('click','li',function(){
        $("#process ul").find('li.active').removeClass('active');
        var act=$(this).attr('act');
        $(this).addClass('active');
        $("#mail,#door").css({
            "display":"none"
        });
        $("#"+act).css({
            "display":"block"
        });
    });
    $("#process ul>li[act='mail']").trigger('click');
});