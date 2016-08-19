'use strict'

// Adding data to local storage

let quizTitle = 'Тест по програмированию';
let quizButton = 'Проверить мои результаты';
let storedQuestions = [{"question": "Какой из ниже приведенных тегов не является мета тегом?"},{"question": "Кто являеться создателем JavaScript?"},{"question": "Каким атрибутом задается фоновое изображение страницы?"}];
let storedAnswers = [[{"answer": "keywords"},{"answer": "description"},{"answer": "img"},],[{"answer": "Брендад Эйх"},{"answer": "Ларри Уолл"},{"answer": "Билл Гейтс"},],[{"answer": "background"},{"answer": "bgsound"},{"answer": "bgcolor"}]];
let parsedQuestions = [];
let parsedAnswers = [[],[],[]];

var writeToLocalStorage = (function () {
  for (let i = 0; i < storedQuestions.length; i++) {
    localStorage.setItem('q ' + (i + 1), JSON.stringify(storedQuestions[i]));
    for (let j = 0; j < storedAnswers.length; j++) {
      localStorage.setItem('a ' + (i + 1) + '-' + (j + 1), JSON.stringify(storedAnswers[i][j]));
    }
  }
})();

// Generating HTML using template

var getFromLocalStorage = (function () {
  for (let i = 0; i < storedQuestions.length; i++) {
    parsedQuestions[i] = JSON.parse(localStorage.getItem('q ' + (i + 1)));
    for (let j = 0; j < storedAnswers.length; j++) {
      parsedAnswers[i][j] = JSON.parse(localStorage.getItem('a ' + (i + 1) + '-' + (j + 1)));
    }
  }
})();

let html = $('#testQuiz').html();

let quiz = tmpl(html, {
  headTitle: quizTitle,
  q_data: parsedQuestions,
  a_data: parsedAnswers,
  submitValue: quizButton
});

$('body').append(quiz);

$('.btn').modal(); // Separate plugin calling modal window
