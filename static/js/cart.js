$(function(){
    //初始化
     doPrice()
// 鼠标移上全选框变色效果
 $('.fa-check').mouseover(function(){
   if($(this).attr('class')!='fa fa-check checked'){
    $(this).css('color','#ff6700')
   }
 })
$('.fa-check').mouseleave(function(){
    $(this).css('color','#fff')
 })
//普通选择
$('.fa-check').click(function(){
  var cla=$(this).attr('class')
  if(cla!='fa fa-check checked'){
    $(this).attr('class','fa fa-check checked')
  }else{
     $(this).attr('class','fa fa-check')
  }
  doCheckAll()
   doPrice()
 })

// 全选选择

$('#check-all').click(function(){
 var cla=$(this).attr('class')
  if(cla!='fa fa-check checked'){
    $('.fa-check').attr('class','fa fa-check checked')
  }else{
     $('.fa-check').attr('class','fa fa-check')
  }
   doPrice()
})
// 检查是否全选
 function doCheckAll(){
    var allitem=$('.list-item i[class*="fa-check"]').length
    var checkeditem=$('.list-item i[class$="checked"]').length
    if(allitem!=checkeditem){
        $('#check-all').attr('class','fa fa-check')
    }else{
         $('#check-all').attr('class','fa fa-check checked')
    }


 }
//加减按钮

$('.plus').click(function(){
  var nowvalue=$(this).siblings('input').val()
  var nowvalue=parseInt(nowvalue)
  // var currentvalue=0
  var currentvalue=nowvalue+1
  $(this).siblings('input').val(currentvalue)
  var danjia=parseFloat($(this).parents('.good-num').siblings('.good-price').html())
  var xiaoji=danjia*currentvalue
//页面中输出
  $(this).parents('.good-num').siblings('.good-total-price').html(xiaoji+'元')
   doPrice()
})

$('.minus').click(function(){
  var nowvalue=$(this).siblings('input').val()
  var nowvalue=parseInt(nowvalue)
  var currentvalue=0
  nowvalue<=1?currentvalue=1:currentvalue=nowvalue-1 
  $(this).siblings('input').val(currentvalue)
 var danjia=parseFloat($(this).parents('.good-num').siblings('.good-price').html())
  var xiaoji=danjia*currentvalue
//页面中输出
  $(this).parents('.good-num').siblings('.good-total-price').html(xiaoji+'元')
  doPrice()

})

//统计所有勾选的值
function doPrice(){
  var items=$('.list-item i[class*="fa-check"]')
  var checkeditems=$('.list-item i[class$="checked"]').parents('.select').siblings('.good-total-price')//选中小计的价钱
  var totalprice=0//储存总计
  for(var i=0;i<checkeditems.length;i++){
   totalprice+=parseFloat(checkeditems[i].innerHTML)
  }
  $('.sum-price').html(totalprice)
  //选中多少件
  $('.select-count').html(checkeditems.length)
  //总商品数
  $('.all-count').html(items.length)
  
}

//删除当前商品
$('.operation').click(function(){
    $(this).parents('.list-item').remove()
})




})