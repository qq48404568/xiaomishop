$(function(){
    //初始化总价, 总选择数, 总条数;
    doPrice();
    //全选/选择框的鼠标移上变个颜色
    $('.fa-check').mouseover(function(){
        if($(this).attr('class')!='fa fa-check checked') {
            $(this).css('color', '#ff6a00');
        }
    })
    $('.fa-check').mouseleave(function(){
        $(this).css('color','#fff');
    })

    //普通勾选
    $('.fa-check').click(function(){
        var cla=$(this).attr('class');
        if(cla!='fa fa-check checked'){
            $(this).attr('class','fa fa-check checked');
        }else{
            $(this).attr('class','fa fa-check');
        }
        doCheckAll();
        doPrice();
    })

    //全选框勾选
    $('#check-all').click(function () {
        var cla=$(this).attr('class');
        if(cla!='fa fa-check checked'){
            $('.fa-check').attr('class','fa fa-check checked');
        }else{
            $('.fa-check').attr('class','fa fa-check');
        }
        doPrice();
    })

    //检查是否全选
    function doCheckAll(){
        var allitem=$('.list-item i[class*="fa-check"]').length;
        var checkeditem=$('.list-item i[class$="checked"]').length;
        if(allitem!=checkeditem){
            $('#check-all').attr('class','fa fa-check');
        }else{
            $('#check-all').attr('class','fa fa-check checked');
        }
    }



    //加减按钮

    $('button.minus').click(function(){
        var nowvalue=$(this).siblings('input').val();
        nowvalue=parseInt(nowvalue);
        var currentvalue=0;
        nowvalue<=1?currentvalue=1:currentvalue=nowvalue-1;
        $(this).siblings('input').val(currentvalue);

        //计算当前的小计
        var danjia=parseFloat($(this).parents('.good-num').siblings('.good-price').html());
        var xiaoji=danjia*currentvalue;
        $(this).parents('.good-num').siblings('.good-total-price').html(xiaoji+'元');

        //更新总价
        doPrice();
    })

    $('button.plus').click(function(){
        var nowvalue=$(this).siblings('input').val();
        nowvalue=parseInt(nowvalue);
        var currentvalue=nowvalue+1;
        $(this).siblings('input').val(currentvalue);

        //计算当前的小计
        var danjia=parseFloat($(this).parents('.good-num').siblings('.good-price').html());
        var xiaoji=danjia*currentvalue;
        $(this).parents('.good-num').siblings('.good-total-price').html(xiaoji+'元');

        //更新总价
        doPrice();
    })

    function doPrice(){
        //统计所有勾选了的值;
        var items=$('.list-item i[class*="fa-check"]');
        var checkeditems=$('.list-item i[class$="checked"]').parents('.select').siblings('.good-total-price')
        var totalprice=0;
        for(var i=0;i<checkeditems.length;i++){
            totalprice+=parseFloat(checkeditems[i].innerHTML);
        }
        //改总价
        $('.sum-price').html(totalprice);
        //改选中数
        $('.select-count').html(checkeditems.length);
        //改总条数
        $('.all-count').html(items.length);

    }
})