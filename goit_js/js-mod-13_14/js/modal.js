'use strict';

(function ($) {
  $.fn.modal = function () {

    var $btn = this;
    var $modalBox;
    var $overlay;
    var $body = $('body');


    function showModal(e) {
      e.preventDefault();

      var correctAnswers = [2, 3, 6];
      var correctAnswersCounter = 0;
      var $answersOptions = $('.for-checking');

      for (var i = 0; i < correctAnswers.length; i++) {
        if ($answersOptions[correctAnswers[i]].checked)
          correctAnswersCounter++;
      }

      switch (correctAnswersCounter) {
        case 0:
          $modalBox = $('<div class="modal-box">Ваш результат: ' + correctAnswersCounter + '. <p>Вы можете попробовать еще раз.</p><div class="start_again"><input type="submit" class="btn btn-danger again" value="Начать заново"></div></div>');
          break;
        case 1:
          $modalBox = $('<div class="modal-box">Ваш результат: ' + correctAnswersCounter + '. <p>Почти все ответы верны.</p><div class="start_again"><input type="submit" class="btn btn-warning again" value="Начать заново"></div></div>');
          break;
        case 2:
          $modalBox = $('<div class="modal-box">Ваш результат: ' + correctAnswersCounter + '. <p>Почти все ответы верны. Вы можете попробовать еще раз.</p><div class="start_again"><input type="submit" class="btn btn-warning again" value="Начать заново"></div></div>');
          break;
        case 3:
          $modalBox = $('<div class="modal-box">Ваш результат: ' + correctAnswersCounter + '. <p>Все ответы верны.</p><div class="start_again"><input type="submit" class="btn btn-success again" value="Начать заново"></div></div>');
          break;
      }

      $overlay = $('<div class="modal-overlay"></div>');
      $($body).append($overlay);
      $($body).append($modalBox);
      $($overlay).animate({
        'opacity': '1'
      }, 1000);
      $($modalBox).animate({
        'opacity': '1',
        'top': '40%'
      }, 1000);
      $('.again').one('click', hideModal);
      correctAnswersCounter = 0;
    }

    function hideModal() {
      var $answersOptions = $('.for-checking');
      $modalBox.animate({
        'opacity': '0',
        'top': '-50%'
      }, 1000);
      $overlay.animate({
        'opacity': '0'
      }, 1000);
      setTimeout(function () {
        $modalBox.remove();
        $overlay.remove();
      }, 1000);
      for (var i = 0; i < $answersOptions.length; i++) {
        $answersOptions[i].checked = false;
      }
    }

    $($btn).on('click', showModal);

  };
  return this;

})(jQuery);
