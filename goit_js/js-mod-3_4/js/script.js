var testQuiz = {

  questionsQuantity: 3,
  answersQuantity: 3,

  title: 'Тест по программированию',
  questions: 'Вопрос № ',
  answers: 'Вариант ответа № ',

  createNewElement: function (newElemTag, newElemClass, newElemContent) {
    var newElem = document.createElement(newElemTag);
    newElem.className = newElemClass;
    if (newElemContent) {
      newElem.innerHTML = newElemContent;
    }
    return newElem;
  },

  generateNewElement: function (newElemTag, newElemClass, newElemParent, newElemContent, order) {
    var el = this.createNewElement(newElemTag, newElemClass, newElemContent);
    if (newElemParent) {
      var parent = document.getElementsByClassName(newElemParent);
      if (parent.length) {
        var ordNum = (order > 0 && order < parent.length) ? order : 0;
        if (ordNum) {
          parent[ordNum].appendChild(el);
        } else {
          parent[0].appendChild(el);
        }
      } else {
        console.log('Error! Wrong parentElemClassName');
      }
    } else {
      document.body.appendChild(el);
    }
  },

  addAttribute: function (attrName, attrValue, className, ordinalNum) {
    var element = (ordinalNum) ? (document.getElementsByClassName(className)[ordinalNum]) :
      (document.getElementsByClassName(className)[0]);

    var att = document.createAttribute(attrName);
    att.value = attrValue;
    element.setAttributeNode(att);
  },

  generate: function () {
    this.generateNewElement('div', 'container');
    this.generateNewElement('div', 'page-header', 'container');
    this.generateNewElement('h1', 'heading', 'page-header', this.title);
    this.generateNewElement('form', 'quiz_form', 'container');
    this.generateNewElement('ul', 'list-group', 'quiz_form');

    var k = 1;
    for (var q = 1; q <= this.questionsQuantity; q++) {
      this.generateNewElement('li', 'list-group-item count-li-' + q, 'list-group', this.questions + q);
      for (var a = 1; a <= this.answersQuantity; a++) {
        this.generateNewElement('p', 'checkbox count-check-' + k, 'count-li-' + q, 0, a);
        this.generateNewElement('label', 'check-label ' + k, 'count-check-' + k, 0, 0);
        this.generateNewElement('input', 'checkbox-input ' + k, 'check-label ' + k);
        this.generateNewElement('span', 'answer ' + a, 'check-label ' + k, ' ' + this.answers + a);
        this.addAttribute('type', 'checkbox', 'checkbox-input ' + k);
        k++;
      }
    }
    this.generateNewElement('input', 'btn btn-primary', 'quiz_form');
    this.addAttribute('type', 'submit', 'btn');
    this.addAttribute('value', 'Проверить мои результаты', 'btn');
  }
};

testQuiz.generate();
