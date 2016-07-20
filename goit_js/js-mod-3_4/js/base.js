var testForm = {

  testBody: document.body,
  testForm: document.createElement('form'),
  testHead: document.createElement('header'),
  testName: document.createElement('h1'),
  testBtn:  document.createElement('button'),

  qCounter: 0,

  createTest: function(tName, btnName) {

    this.testForm.classList.add('test');
    this.testForm.setAttribute('id', 'testForm');
    this.testForm.setAttribute('method', 'GET');
    this.testName.classList.add('test__name');
    this.testName.innerHTML = tName || 'Тест по программированию';
    this.testBtn.classList.add('test__submit');
    this.testBtn.setAttribute('form', 'testForm');
    this.testBtn.setAttribute('type', 'submit');
    this.testBtn.innerHTML = btnName ||'Проверить мои результаты';

    this.testBody.appendChild(this.testForm);
    this.testForm.appendChild(this.testHead);
    this.testHead.appendChild(this.testName);
    this.testForm.appendChild(this.testBtn);

    console.log('added <h1> instanse', this.testForm);
  },

  createTestQuestion: function(qName, answersArray) {

    var questionBody = document.createElement('figure');
    var questionHead = document.createElement('header');
    var questionName = document.createElement('h2');

    var questionAnswerCheckbox;
    var questionAnswerLabel;
    questionBody.classList.add('question');
    questionName.classList.add('question__title');
    questionName.innerHTML = qName || ( (this.qCounter+1) + '. Вопрос №' + (this.qCounter+1) );

    questionBody.appendChild(questionHead);
    questionHead.appendChild(questionName);

    this.qCounter++;

    for (var i = 0; i < (answersArray !== undefined ? answersArray.length : 3); i++) {
      var labelText = document.createTextNode(answersArray !== undefined ? answersArray[i] : ('Вариант ответа №'+(i+1) ) );
      questionAnswerLabel =  document.createElement('label');
      questionAnswerCheckbox =  document.createElement('input');
      questionAnswerCheckbox.classList.add('answer__checkbox');
      questionAnswerLabel.classList.add('answer__title');
      questionAnswerCheckbox.setAttribute('type', 'checkbox');
      questionAnswerCheckbox.setAttribute('id', ('q-'+this.qCounter+'-answer-'+(i+1)) );
      questionAnswerCheckbox.setAttribute('name', ('q'+this.qCounter+'A'+(i+1)) );

      questionBody.appendChild(questionAnswerLabel);
      questionAnswerLabel.appendChild(questionAnswerCheckbox);
      questionAnswerLabel.appendChild(labelText);
    }
    this.testForm.insertBefore(questionBody, this.testBtn);

  }
};

testForm.createTest();
setTimeout( function() { testForm.createTestQuestion(); }, 0);
setTimeout( function() { testForm.createTestQuestion(); }, 500);
setTimeout( function() { testForm.createTestQuestion(); }, 1000);

