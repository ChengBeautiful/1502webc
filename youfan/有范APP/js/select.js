$(function(){
    var $a=false;
   $('.header p').click(function(){
       if($a==false){
           $('.select').stop(true,false).slideDown();
           $a=true;
       }else{
           $('.select').stop(true,false).slideUp();
           $a=false;
       }
   })
});