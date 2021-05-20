$(function() {
   $('#nav-icon').click(function(){ //при клике на бургер
       $(this).toggleClass('open'); //он трансформируется
        if($(this).hasClass('open')){ // если бургер открыт
         $('.menu_column').css('animation', 'anim_menu1 0.3s linear'); // добавляем анимацию выпадающего меню
         $('.menu_column').css('animation-fill-mode', 'forwards'); // задерживаем анимацию на месте после выполнения
      }else{
         $('.menu_column').css('animation', 'anim_menu2 0.3s linear'); // добавляем анимацию закрытия меню
      }
   });
   $('.menu_column ul li').click(function(){ //при клике на пункт меню
      $('.menu_column').css('animation', 'anim_menu2 0.3s linear'); // меню закрывается
      $('#nav-icon').removeClass('open'); // бургер трансформируется
   });




   
   $("a.scroll-to").on("click", function(e){ // скрипт для плавного скрола
      e.preventDefault();
      let anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 0 // если есть фиксированная шапка заменить 0 на ее размер
      }, 800); // время анимации скрола
  });
                


});