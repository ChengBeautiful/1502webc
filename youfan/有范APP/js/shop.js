/**
 * Created by hp on 2017/3/17.
 */
$(function(){
    var $a=false;
   $('.header a:eq(0)').click(function(){
       if($a==false){
           $('.souye').stop(true,false).slideDown();
           $a=true;
       }else{
           $('.souye').stop(true,false).slideUp();
           $a=false;
       }
   })
});