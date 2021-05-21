## Smooth scrolling + burger

Пример адаптивного меню доступун в файлах проекта

## Бургер и его переворот
## HTML
```  HTML
 <div class="burger">
                <div id="nav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
```
## CSS
``` CSS
 #nav-icon {
        width: 45px;
        height: 45px;
        position: relative;
        margin: 20px auto;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
    }
    #nav-icon span {
        display: block;
        position: absolute;
        height: 6px;
        width: 100%;
        background: #ffffff;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }
    #nav-icon span:nth-child(1) {
        top: 0px;
        transform-origin: left center;
    }
    #nav-icon span:nth-child(2) {
        top: 15px;
        transform-origin: left center;
    }
    #nav-icon span:nth-child(3) {
        top: 30px;
        transform-origin: left center;
    }
    #nav-icon.open span:nth-child(1) {
        transform: rotate(45deg);
        top: 0px;
        left: 8px;
    }
    #nav-icon.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }
    #nav-icon.open span:nth-child(3) {
        transform: rotate(-45deg);
        top: 30px;
        left: 8px;
    }
```
## JavaScript
``` JavaScript
$(function () {
   $('#nav-icon').click(function () { //при клике на бургер
      $(this).toggleClass('open'); // добавляется заранее прописанный класс
   });
});
```

---
## Плавный скролл по секциям
###### Добавьте этот класс всем ссылкам которые ведут на секции сайта
```
<a href="#" class="scroll-to">
```

## JavaScript
```  JavaScript
$("a.scroll-to").on("click", function(e){ // при клике на ссылку с классом "scroll-to" 
      e.preventDefault(); //запускается функция
      let anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 0 // если есть фиксированная шапка заменить 0 на ее размер
      }, 800); // время анимации скрола
  });
```
---


___жирный курсивный___
__жирный__
_курсивный_
![текст если картинка не отобразится](путь)
