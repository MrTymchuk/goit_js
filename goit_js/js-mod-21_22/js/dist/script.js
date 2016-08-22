'use strict';

$(function () {

   var info = [
    {
      question : "1. Какой из ниже приведенных тегов не является мета тегом?",
      answer   : [
          "description",
          "img",
          "keywords"
      ],
      rightAnswer: {
        1:true
      }
    },
    {
      question : "2. Кто являеться создателем JavaScript?",
      answer   : [
          "Брендад Эйх",
          "Ларри Уолл",
          "Билл Гейтс"
      ],
      rightAnswer: {
        0:true
      }
    },
    {
      question : "3. Каким атрибутом задается фоновое изображение страницы?",
      answer   : [
          "bgsound",
          "bgsound",
          "background"
      ],
      rightAnswer: {
        2:true,
      }

  }];

  localStorage.setItem('data', JSON.stringify(info)); // записываем данные в localStorage

  var questions = JSON.parse(localStorage.getItem('data')); // считываем данные из localStorage в переменную questions

  var htmlQuestion = $('#test').html(); // указали место куда вставлять html

  var content = tmpl(htmlQuestion, { // tmpl - вызвали шаблон
    data: questions // в шаблон передали объект (не массив!)
  });

  $('.questions').append(content); // добавили контент на страницу

  function checkAnswer(e) {
    // функция проверки правильности ответов

    e.preventDefault(); // предотвращаем отправку формы

    var error = false; // считаем что ответы правильные

    var user = []; // ответы

    for (var i = 0; i < questions.length; i++) {

      var inputs = $('.box' + i + ' input:checkbox');

      var userAnswered = {}; // ответ

      for (var k = 0; k < inputs.length; k++) {

        var checked = inputs[k].checked; // выбраные (отмеченые) варианты ответов

        var right = questions[i].rightAnswer[k] == true; // правильный ответ

        if (checked !== right) {
          // если отмеченный ответ не правильный
          userAnswered[k] = false; // пользовательский ответ неправильный
          error = true; //
        } else {
            // иначе
            userAnswered[k] = true; // пользоветельский ответ правильный
          };
      };
      user.push(userAnswered); // записали в ответ
    };

    function modalWindow() {
      var $modal = $('<div class="modalWindow"><h2 class="text-center">' + (error ? 'Вы не сдали тест!' : 'Вы сдали тест!') + '</h2></div>'); // Модалька и условия вывода на ней "сдал" или "не сдал"
      var $overlay = $('<div class="modalWindow-overlay"></div>'); // Оверлей
      var $buttonOk = $('<button class="btn btn-success">Пройти ещё раз</button>'); // Кнопка

      $('body').append($modal); // Добавил модальку на страницу
      $('body').append($overlay); // Добавил оверлей на страницу
      $('.modalWindow').append(content); // Вставил контент на модальку
      $('.modalWindow').append($buttonOk); // Добавил кнопку на модальку

      for (var i = 0; i < questions.length; i++) {
        var inputs = $('.box' + i + ' input:checkbox');
        var inputsShowResult = $('.modalWindow .box' + i + ' input:checkbox'); // Вывод результата проверки

        for (var k = 0; k < questions[i].answer.length; k++) {

          var checked = inputs[k].checked; // Проверка

          if (checked == true) {
            // Если правильно
            if (user[i][k] == true) {
              $(inputsShowResult[k]).attr({
                "disabled": true,
                "checked": true
              }).parent().append("<span> Правильный ответ!</span>").find("span").css({ "color": "green", "font-weight": "bold" }); // Вывод комментария к выбраному пользователем варианту
            } else {
                $(inputsShowResult[k]).attr({ // Если не правильно
                  "disabled": true,
                  "checked": true
                }).parent().append("<span> Неправильный ответ!</span>").find("span").css({ "color": "red", "font-weight": "bold" }); // Вывод комментария к выбраному пользователем варианту
              };
          } else {
            $(inputsShowResult[k]).attr({
              "disabled": true
            });
          };
        };
      };

      $overlay.one('click', hideModal); // Закрытие модальки по клику на оверлей
      $buttonOk.one('click', hideModal); // Закрытие модальки по клику на кнопку

      function hideModal() {
        // Функция закрытия модальки
        $('input:checkbox').removeAttr('checked'); // Снимаем отметки с выбраных чекбоксов
        $modal.remove(); // Убираем модальку
        $overlay.remove(); // Убираем оверлей
      };
    };

    modalWindow(); // Вызов модальки
  };

  $('.check').on('click', checkAnswer); // Запустить функцию проверки правильности ответов
});
