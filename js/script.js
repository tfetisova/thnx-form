//visual steps display
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  $('#thanks-slider').owlCarousel({
    center: true,
    items: 1,
    nav: true,
    dots: true,
    autoplay: false,
    loop:false,
    margin: 10,
    responsive:{
      0:{
        items:1,
      },
      600:{
        center: false,
        items:2,
      },
      1000:{
        center: false,
        items:3,
      }
    }
  });
 $("#thanks-slider > div.owl-nav > button.owl-next").html(' <div class="thanks-slide-arrow arrow-next"></div>')
  $("#thanks-slider > div.owl-nav > button.owl-prev").html(' <div class="thanks-slide-arrow arrow-prev"></div>')
  if($('.add-doctor-container').not('active')){
    $('.continue[href="step3.html"]').css({
      "margin-top": "370px"
    })
  }
  // const steps = 5;
  // const visibleStep = $(".step-tab:visible").data('step');
  // $(`.step-container[data-step=${visibleStep}]`).addClass('active');
  // const preview = () => {
  //   $('.step-title').text('Ваша благодарность!').css({
  //     'color':'var(--text-color)',
  //   });
  //   $('.step-subtitle').text('Смотрите, что получилось.').show().css({
  //     'color':'var(--text-color)',
  //   });
  //   $('.steps').removeClass('d-flex').addClass('d-none');
  //   $('.step-title-container').addClass('preview');
  //   $('.continue').addClass('d-none');
  //   $('.btn-form-submit').removeClass('d-none')
  // };
  // const stepContinue = () => {
  //   $('.step-subtitle').hide();
  //   const visibleStep = $('.step-tab:visible').data('step');
  //   if($('.step-tab:visible').next()){
  //     $('.step-tab:visible').next().addClass('active');
  //     $(`.step-tab[data-step=${visibleStep}]`).removeClass('active');
  //     $('.step-container.active').next().addClass('active')
  //     $(`.step-container[data-step=${visibleStep}]`).removeClass('active');
  //     switch (visibleStep) {
  //       case 1 :
  //         $('.step-title').text('Благодарность кому');
  //         break;
  //       case 2 :
  //         $('.step-title').text('Благодарность от кого');
  //         break;
  //       case 3 :
  //         $('.step-title').text('Добавьте Ваше портретное фото');
  //         break;
  //       case 4 :
  //         $('.step-title').text('Текст благодарности');
  //         $('.step-subtitle').text('Выберите из предложенных вариантов и отредактируйте по своему желанию').show();
  //         break;
  //       case 5 :
  //         //preview case
  //        preview();
  //         break;
  //       default:
  //         $('.step-title').text('Начнём благодарность?');
  //     }
  //   }
  //   $('body,html').animate({scrollTop: 0}, 400);
  // }
  // const goToPreview = () => {
  //   $('.step-preview').addClass('active')
  //     .siblings('.step-tab').removeClass('active');
  //   preview();
  // };
  // $('.continue').on('click', ()=>{
  // stepContinue();
  // });
  //живой поиск, логика перенесена из html
  isolimit = 9, isoColWd = 148;
  isoColWds = {
    'xs':300, // <576
    'sm':300, // <768
    'md':300, // <992
    'lg':300, // <1200
    'xl':300  // >=1200
  }

  Imgs = []; // isotope isort data
  /*[
          {'i':'cases-thbw300/case001-1.jpg','c':'c0','n':'text 001'},
      ];
      //*/

  Imgs = [
    {'k':'rebenok','i':'http://faces.report/media/doctors/rebenok001.jpg','c':'st1','n':'Антон Ребенок','a':'косметология BabyFace','p':'','d':'','h':'https://rebenok.faces.report/','t':'','f':'','x':'d'},
    {'k':'trunov','i':'http://faces.report/media/doctors/trunov001.jpg','c':'st2','n':'Юрий Трунов','a':'Тотал Дентал','p':'','d':'','h':'https://trunov.faces.report/','t':'','f':'','x':'d'},
    {'k':'gorishny','i':'http://faces.report/media/doctors/gorishny2.jpg','c':'st2','n':'Виктор Горишный','a':'ортодонт','p':'','d':'','h':'doctor/gorishny','t':'','f':'','x':'d'},
    {'k':'dmitrieva','i':'http://faces.report/media/doctors/dmitrieva2.jpg','c':'st2','n':'Оксана Дмитриева','a':'Status Dental Studio','p':'','d':'','h':'doctor/dmitrieva','t':'','f':'','x':'d'},
    {'k':'datser','i':'http://faces.report/media/doctors/datser2.jpg','c':'st2','n':'Вера Дацер','a':'Тотал Дентал','p':'','d':'','h':'doctor/datser','t':'','f':'','x':'d'},
    {'k':'martynenko','i':'http://faces.report/media/doctors/martynenko2.jpg','c':'st2','n':'Евгений Мартыненко','a':'имплантолог','p':'','d':'','h':'doctor/martynenko','t':'','f':'','x':'d'},
    {'k':'tkach','i':'http://faces.report/media/doctors/tkach02.jpg','c':'st3','n':'Олег Ткач','a':'Oleg Tkach M.D. plastic & Aesthetic surgery','p':'','d':'','h':'doctor/tkach','t':'','f':'','x':'d'},
    {'k':'kolibaba','i':'http://faces.report/media/doctors/kolibaba02.jpg','c':'st3','n':'Олег Колібаба','a':'Медичний центр Олега Колібаби','p':'','d':'','h':'doctor/kolibaba','t':'','f':'','x':'d'},
    {'k':'nerba','i':'http://faces.report/media/doctors/nerba2.jpg','c':'st2','n':'Ольга Ньорба','a':'Косметология @Dr.OlgaNerba','p':'','d':'','h':'doctor/nerba','t':'','f':'','x':'d'},
    {'k':'zulinskiy','i':'http://faces.report/media/doctors/zulinsky2.jpg','c':'st2','n':'Эрнест Зулинский','a':'имплантолог','p':'','d':'','h':'doctor/zulinskiy','t':'','f':'','x':'d'},
    {'k':'adamchuk','i':'http://faces.report/media/doctors/adamchuk2.jpg','c':'st2','n':'Назарий Адамчук','a':'Стоматологическая клиника Мар\'яни Мельнічук','p':'','d':'','h':'doctor/adamchuk','t':'','f':'','x':'d'},
    {'k':'zhuchkova','i':'http://faces.report/media/doctors/zhuchkova2.jpg','c':'st1','n':'Светлана Жучкова','a':'Косметология Baby Face','p':'','d':'','h':'doctor/zhuchkova','t':'','f':'','x':'d'},
    {'k':'zonova-katerina','i':'http://faces.report/media/doctors/Zonova-Katerina.jpg','c':'st1','n':'Катерина Зонова','a':'z.beauty.clinic','p':'','d':'','h':'doctor/zonova-katerina','t':'','f':'','x':'d'},
    {'k':'dudikova-ekaterina','i':'http://faces.report/media/doctors/dudikova-ekaterina-2.jpg','c':'st1','n':'Екатерина Дудикова','a':'Dr.Dudikova Clinic','p':'','d':'','h':'doctor/dudikova-ekaterina','t':'','f':'','x':'d'},
    {'k':'donec-evgeniy','i':'http://faces.report/media/doctors/Donec-Evgeniy.jpg','c':'st3','n':'Евгений Донец','a':'клиника \"GRACE\"','p':'','d':'','h':'doctor/donec-evgeniy','t':'','f':'','x':'d'},
    {'k':'edgar-kaminskiy','i':'http://faces.report/media/doctors/Edgar-Kaminskiy.jpg','c':'st3','n':'Эдгар Каминский','a':'клиника «Гармония»','p':'','d':'','h':'doctor/edgar-kaminskiy','t':'','f':'','x':'d'},
    {'k':'harkov-andrey','i':'http://faces.report/media/doctors/harkov-andrey-2.jpg','c':'st3','n':'Андрей Харьков','a':'Perfecto-Room','p':'','d':'','h':'doctor/harkov-andrey','t':'','f':'','x':'d'},
    {'k':'matolinets-taras','i':'http://faces.report/media/doctors/Matrosnec-Taras.jpg','c':'st3','n':'Тарас Матолинец','a':'','p':'','d':'','h':'doctor/matolinets-taras','t':'','f':'','x':'d'},
    {'k':'vladimir-pirus','i':'http://faces.report/media/doctors/vladimir-pirus-2.jpg','c':'st3','n':'Владимир Пирус','a':'','p':'','d':'','h':'doctor/vladimir-pirus','t':'','f':'','x':'d'},
    {'k':'volihnovskiy-rostislav','i':'http://faces.report/media/doctors/Volihnovskiy-Rostislav.jpg','c':'st3','n':'Ростислав Волихновский','a':'Інститут Хірургії Доктора Валіхновського','p':'','d':'','h':'doctor/volihnovskiy-rostislav','t':'','f':'','x':'d'},
    {'k':'pasechnik-vasiliy','i':'http://faces.report/media/doctors/pasechnik-vasiliy-2.jpg','c':'st3','n':'Василий Пасечник','a':'клиника Medicell','p':'','d':'','h':'doctor/pasechnik-vasiliy','t':'','f':'','x':'d'},
    {'k':'macyuk-yuriy','i':'http://faces.report/media/doctors/macyuk-yuriy-2.jpg','c':'st3','n':'Юрий Мацюк','a':'клиника Medicell','p':'','d':'','h':'doctor/macyuk-yuriy','t':'','f':'','x':'d'},
    {'k':'kompaniec-oleg','i':'http://faces.report/media/doctors/Kompaniec-Oleg-Anatolevich.jpg','c':'st3','n':'Олег Компаниец','a':'клиника Grace','p':'','d':'','h':'doctor/kompaniec-oleg','t':'','f':'','x':'d'},
    {'k':'patlajan-gennadiy','i':'http://faces.report/media/doctors/Patlajan-Gennadiy-Igorevich.jpg','c':'st3','n':'Геннадий Патлажан','a':'пластический хирург','p':'','d':'','h':'doctor/patlajan-gennadiy','t':'','f':'','x':'d'},
    {'k':'alshalalda-rauhi','i':'http://faces.report/media/doctors/alshalalda-rauhi-2.jpg','c':'st2','n':'Раухи Альшалалда','a':'Студия «Ортодонтия Доктора Раухи»','p':'','d':'','h':'doctor/alshalalda-rauhi','t':'','f':'','x':'d'},
    {'k':'dahno-larisa','i':'http://faces.report/media/doctors/dahno-larisa-2.jpg','c':'st2','n':'Лариса Дахно','a':'Стоматологическая клиника доктора Дахно ','p':'','d':'','h':'doctor/dahno-larisa','t':'','f':'','x':'d'},
    {'k':'dmitriy-averin','i':'http://faces.report/media/doctors/dmitriy-averin-2.jpg','c':'st2','n':'Дмитрий Аверин','a':'','p':'','d':'','h':'doctor/dmitriy-averin','t':'','f':'','x':'d'},
    {'k':'derbak-sergey','i':'http://faces.report/media/doctors/derbak-main.jpg','c':'st3','n':'Сергей Дербак','a':'','p':'','d':'','h':'doctor/derbak-sergey','t':'','f':'','x':'d'},
    {'k':'olga-dovgopolaia','i':'http://faces.report/media/doctors/dovgopola02.jpg','c':'st1','n':'Ольга Довгополая','a':'косметология Lege Artis','p':'','d':'','h':'doctor/olga-dovgopolaia','t':'','f':'','x':'d'},
    {'k':'vadim-simonov','i':'http://faces.report/media/doctors/simonov02.jpg','c':'st3','n':'Вадим Симонов','a':'клиника Grace','p':'','d':'','h':'doctor/vadim-simonov','t':'','f':'','x':'d'},
    {'k':'shevchuk-tatiana','i':'http://faces.report/media/doctors/shevchuk-tatiana-2.jpg','c':'','n':'Татьяна Шевчук','a':'Центр эстетической медицины GRACE','p':'','d':'','h':'doctor/shevchuk-tatiana','t':'','f':'','x':'d'},
    {'k':'maria-sergeeva','i':'http://faces.report/media/doctors/maria-sergeeva-2.jpg','c':'st1','n':'Марина Сергеева','a':'спа-салон Soul Spa','p':'','d':'','h':'doctor/maria-sergeeva','t':'','f':'','x':'d'},
    {'k':'maxim-ivanchuk','i':'http://faces.report/media/doctors/maxim-ivanchuk-2.jpg','c':'st3','n':'Максим Иванчук','a':'клиника Максима Иванчука','p':'','d':'','h':'doctor/maxim-ivanchuk','t':'','f':'','x':'d'},
    {'k':'egor-kolodchenko','i':'http://faces.report/media/doctors/egor-kolodchenko-2.jpg','c':'st3','n':'Егор Колодченко','a':'клиника КОГЕРЕНТ','p':'','d':'','h':'doctor/egor-kolodchenko','t':'','f':'','x':'d'},
    {'k':'dmitriy-kozlov','i':'http://faces.report/media/doctors/dmitriy-kozlov-2.jpg','c':'st3','n':'Дмитрий Козлов','a':'клиника Laser One','p':'','d':'','h':'doctor/dmitriy-kozlov','t':'','f':'','x':'d'},
    {'k':'samij-luchshij','i':'http://faces.report/media/doctors/samij-luchshij-2.jpg','c':'','n':'Самый Лучший','a':'','p':'','d':'','h':'https://samij-luchshij.faces.report/','t':'','f':'','x':'d'}];

  SpTg = {
    'st1':'косметолог',
    'st2':'стоматолог',
    'st3':'пластический хирург',
  };


  // debounce so filtering doesn't happen every millisecond
  function debounce( fn, threshold ) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout( timeout );
      var args = arguments;
      var _this = this;
      function delayed() {
        fn.apply( _this, args );
      }
      timeout = setTimeout( delayed, threshold );
    };
  }

  function select_value(e) {
    if (typeof e!='undefined') {e.preventDefault()};
    var r = $(e.target).closest('.grid-item');
    var t = r.find('.grittm-casnm').text();
    if (t) {
      qsd.val(t);
      qsu = '.none';
      $('#iso3-content').isotope();
      $('#search_doc_dropdown').addClass('d-none');
    }
    return false;
  }


  var erf, qsd;
  var qs, qsu;

  $(document).ready(function() {
    erf = $('#eventreg');
    qsd = $('#doctor-name');

    qsd.val('');
    qsd.keyup(debounce(function() {
      qs = qsd.val();
      qsu = qs.toUpperCase();
      //console.log(qs);
      if ( qsu!='' ) {
        $('#search_doc_dropdown').find('span').text(qsd.val());
        $('#search_doc_dropdown').removeClass('d-none');
      } else { $('#search_doc_dropdown').addClass('d-none'); }
      $('#iso3-grid').removeClass('d-none');
      fi3 = 0;
      $('#iso3-content').isotope({
        filter: function() {
          r = false;
          if (qsu!='') {
            var d=$(this).find('.grittm-casnm').text().toUpperCase();
            var f = d.split(' ');
            f.forEach(function(t,n,a){ if (t.lastIndexOf(qsu,0)===0) r = true; });
            if (d.lastIndexOf(qsu,0)===0) r = true;
            //console.log([r,f,qsdoc]);
          } // else { r = true; }
          if ( r&&fi3<isolimit ) { fi3++;} else { r = false; }
          return r;
        }
      });
    },200));
    $('#iso3-content').on('click','.grid-item',select_value);
    $('.media-item').on('click', ()=>{
      $('.add-doctor-container').addClass('active');
      $('.continue').css({
        "margin-top": "170px"
      })
    })

    $('.input-field').children('input').each(function(i) {
      if ( $(this).val()!='' )
        $(this).closest('.input-field').find('label').addClass('active');
    }).focusin(function(e) {
      $(this).closest('.input-field').find('label').addClass('active');
    }).focusout(function(e) {
      if ( $(this).val()=='' )
        $(this).closest('.input-field').find('label').removeClass('active');
    });
    $('input,textarea,select').change(formchanged);
    //erf.find('input:visible').first().focus();
  });

  function formchanged(e) {
    erf.find('input:visible[required]').each(function() {
      if (this.validity.valid) {
        $(this).closest('.input-field').removeClass('has-error').addClass('has-success');
      } else {
        $(this).closest('.input-field').removeClass('has-success').addClass('has-error');
      }
    });
    if ( $(this).is('select') ) selectchanged($(this));
    $('#md-eventreg').removeClass('disabled');
    return true;
  }

  function selectchanged(o) {
    var v = o.val();
    var d = o.data('sel');
    if (d!='') $('#'+d).val(v);
    //console.log([v,d]);
  }

//блок добавления врача вручную - отображение
  $('#doctor-name').on('focus', (e)=>{
    $('.dropdown-search').removeClass('d-none');
  })
  $('#doctor-name').on('input',(e)=>{
    $('.dropdown-search>span').text($('#doctor-name').val())
  });
  $('.add-doctor-link').on('click', (e)=>{
    e.preventDefault();
    $('.add-doctor-container').addClass('active');
    $('.dropdown-search').addClass('d-none');
  });
  //user photo upload
  $('.user-photo-input').change(function() {
    if (this.files[0]) {
      let fr = new FileReader();

      fr.onload = function () {
        const userPhoto = fr.result;
        console.log(userPhoto);
        $('.user-photo ').css({
          "background-image": `url("${userPhoto}")`,
          "background-size": "cover",
          "background-position": "top center",
          "background-repeat": "no-repeat",
          "height" : "262.33px",
          "color": "#fff",
        }).text('Загрузить другое фото');
      };
      fr.readAsDataURL(this.files[0]);
      $('.user-photo>svg').hide();
    }

  });

  //редактирование текста благодарности
  $('.thanks-text-edit').on('click', function(){
    const editId = $(this).data("edit");
    console.log('editId',editId);
    const editText = $(`.edited-text[data-edit="${editId}"]`);
    console.log('editText',editText);
    const thanksTextInput = $('#thanks-text-input');
    const modalTitle = $('#editing-modal');
    const squareCount = 10;
    const square = `<div class="grey-square"></div>`;
    //заполнение серыми квадратами первой строки модального окна редактирования
    modalTitle.html(()=>{
      let squares = [];
      for(let i=0; i<squareCount; i++){
        squares.push(square)
      }
      return squares.join('');
    });
//редактирвоание текста
    thanksTextInput.val(editText.text().trim());
  });

  //сохранение текста благодарности
  $('#save-thanks-text').on('click', function(){
    $('.preview-thanks-text').text($('#thanks-text-input').val());
  })
});

