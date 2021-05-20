## Adaptive menu + burger
---
---

___жирный курсивный___
__жирный__
_курсивный_

## Плавный скролл по секциям
###### Добавьте этот класс всем ссылкам которые ведут на секции сайта
```
<a href="#" class="scroll-to">
```

## JavaScript
```  JavaScript
$("a.scroll-to").on("click", function(e){ // скрипт для плавного скрола
      e.preventDefault();
      let anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 0 // если есть фиксированная шапка заменить 0 на ее размер
      }, 800); // время анимации скрола
  });

```
![текст если картинка не отобразится](путь)
