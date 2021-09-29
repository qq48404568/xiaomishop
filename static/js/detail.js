$(function(){
//    默认选中第一个版本/第一个颜色
    $('.detail_color_left').eq(0).attr('class','detail_color_left checked');
    $('.detail_much_left').eq(0).attr('class','detail_much_left checked');
    updateTotalPrice()
    //点击选中其他的颜色
    $('.detail_color_left').click(function(){
        $('.detail_color_left').attr('class','detail_color_left');
        $(this).attr('class','detail_color_left checked');
        updateTotalPrice()
    });
    //点击选中手机版本
    $('.detail_much_left').click(function(){
        $('.detail_much_left').attr('class','detail_much_left');
        $(this).attr('class','detail_much_left checked');
        updateTotalPrice();
    })

    //点击保障服务
    $('.shop_detail_bz1').click(function(){
        var nowcircleclass=$(this).find('.fa-check-circle').attr('class');
        var nowclass=$(this).find('.fa-check-square').attr('class');
        if(nowcircleclass.indexOf('checked')>0){
            //如果存在,则移除选中;
            nowcircleclass=nowcircleclass.replace('checked','');
            nowclass=nowclass.replace('checked','');
            $(this).find('.fa-check-circle').attr('class',nowcircleclass);
            $(this).find('.fa-check-square').attr('class',nowclass);
        }else{
            //不存在, 则选中
            $(this).find('.fa-check-circle').attr('class',nowcircleclass+' checked');
            $(this).find('.fa-check-square').attr('class',nowclass+' checked');
        }
        updateTotalPrice();
    })


    //统计总价格
    function updateTotalPrice(){
        //版本价钱
        var bbprice=$(".detail_much_left[class$='checked']").find('span').attr('data-val')*1;
        //服务价钱
        var svprice=0;
        var svspan=$(".fa-check-circle[class$='checked']").parent('.shop_detail_bz1').find('span[data-val]');
        for(var i=0;i<svspan.length;i++){
            svprice+=svspan[i].getAttribute('data-val')*1;
        }
        //总价值
        var totalprice=bbprice+svprice;
        $('#totalPrice').html('总计&nbsp;：&nbsp;'+totalprice+'元')
        $('#phonePrice').html(bbprice+'元');
    }
})