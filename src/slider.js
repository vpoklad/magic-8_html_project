$(document).ready(function () {
    $('.slider').slick({
        arrows: true, //по-умолчанию включено отображение стрелок
        dots: false, //по-умолчанию отключены точки внизу
        adaptiveHeight: true, //по-умолчанию выключена автоподстройка высоты слайда
        // slidesToShow: 1, //кол-во слайдов, к-рые отображаются одновременно - 
        //ширина между ними рассчитывается автоматом в зависимости от кол-ва одновременно отображающихся слайдов
        slidesToScroll: 1, //кол-во одновременно прокручиваемых слайдов (кол-во точек уменьшаеться, типа как кол-во страниц)
        speed: 300,//скорость прокрутки по-умолчанию 300мс, чем больше, тем плавнее (медленнее)
        easing: 'linear',//тип анимации, по умолчанию linear
        infinite: true, // по-умолчанию true будет ли слайдер "бесконечным" 
        initialSlide: 0,//стартовый слайд по-умолчанию нулевой
        autoplay: false, //автопромотка через период по-умолчанию выключена, если не бесконечно, то проматывает влево-вправо
        autoplaySpeed: 300, //период, через который автопромотка проматывает, по-умолчанию 3000мс
        pauseOnFocus: true, //все 3 по-умолчанию тру
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true, //для листания мышью на ПК по-умолчанию включено
        swipe: true, //тоже самое но для тачскринов (если отключен draggable, то swipe работает, а если swipe, то нет)
        touchTreshold: 10, //по-умолчанию - 5, отвечает за момент 
        //срабатывания слайда, нужно столько раз просвайпить, 
        //чтобы был переход к другому слайду, если увеличить, 
        //то нужно просвайпить меньшее расстояние
        touchMove: true, //по-умолчанию тру, если выключим, 
        //то тянуть не сможем слайд типа туда- сюда пальцем, 
        //но свайпить сможем
        waitForAnimate: false, //по-умолчанию тру, 
        //если кликать по стрелкам - будет переключаться, 
        //но если быстрее по ним кликать, то быстрее он не будет переключаться

        //ТО ЧТО НУЖНО

        centerMode: true, //по-умолчанию выключена, перый 
        //(который можно переназначить в initialSlide) слайд
        //выстраиваеться по центру при включенной опции 
        //добавляеться класс SLICK-CENTER
        variableWidth: true, //по-умолчанию выключено, если включена, 
        //то автоширина пропадает(даеться возможность контенту выбирать ширину, 
        //будет адаптивно подстраиваться обрезая правый край)
        rows: 1, //можно выставлять в несколько рядов, по-умолчанию один
        slidesPerRow: 1, //кол-во слайдов в ряду, по-умолчанию один
        vertical: false, //вертикальный слайдер, но если лента слайдов slick-track флексом, то не сработает, 
        // нужно переназначить в цсс флекс на блок, так же задать высоту элементу slider-item
        verticalSwiping: false, //чтобы пролистывать вертикальными свайпами 
        //иначе будет свайп горизонтальный только работать, а пролистываться вертикально
        asNavFor: ".sliderbig", //связывает этот (маленький) слайдер с большим слайдером
        responsive: [   // при достижении брейкпоинта можно поменять свойство
            {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1
                  
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }

        ],
        mobileFirst: true, // меняет привычислении брейкпоинтов значения макс-видз на мин-видз, 
        //тогда брейкпоинт будет означать - выводить 2 слайда при разрешениях больше 768
        appendArrows: $('.content'), //переместили стрелки в другой див (слетели стили, т.к. уже там не класс слайдер)
        appendDot:$('.content'), //тоже с точками
    });
    $('.sliderbig').slick({
        arrows: false,
        fade: true,
        cssEase: 'linear', // будет только один слайд и они не листаться будут а заменяться
        // asNavFor: ".slider"
    });
});

//счетчик

var $slider = $('.sliderbig');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +15)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}

