$(function() {
  var $wrapper = $('<div>', {class: 'wrapper'}).appendTo('body');
  var $form = $('<form>', {class: 'reg-form'}).appendTo($wrapper);
  var $showHelp = $('<button>', {class: 'show-help', text: 'Show help'});

  function TextInput(label, tooltip) {
    var inputCount = $form.children().length+1;
    var $wrapper = $('<div>', {class: 'input-wrapper'}).appendTo($form);
    var $label = $('<label>', {class: 'form__label', for: 'text-input-'+inputCount, text: label}).appendTo($wrapper);
    var $input = $('<input>', {class: 'form__input-text', id: 'text-input-'+inputCount}).appendTo($wrapper);
    var $tooltip = $('<span>', {class: 'tooltip', text: tooltip});
    var timeoutId, timeoutId2;

    $input.on({mouseenter: function() {
      clearTimeout(timeoutId);
      if (!$input.is( ":focus" ) && $input.val() === ''){
        $input.showTooltip();
      }
    }, focusin: function() {
      clearTimeout(timeoutId);
      if (!$input.is(':hover') && $input.val() === '') {
        $input.showTooltip();
      }
    }, mouseleave: function() {
      if (!$input.is( ":focus" )) {
        timeoutId = setTimeout($input.hideTooltip, 500);
      }
    }, focusout: function() {
      if (!$input.is(':hover')) {
        timeoutId = setTimeout($input.hideTooltip, 500);
      }
    }, input: function() {
      if ($input.val() !== '') {
        if ($wrapper.find('.tooltip')[0]) {
          console.log('hide');
          timeoutId = setTimeout($input.hideTooltip, 500);
        }
      }
      else {
        console.log('show');
        clearTimeout(timeoutId);
        $input.showTooltip();
      }
    }});

    $input.showTooltip = function() {
      $tooltip.appendTo($wrapper);
      clearTimeout(timeoutId2);
      setTimeout(function() {
        $tooltip.addClass('tooltip--show');
      }, 10);
    };

    $input.hideTooltip = function() {
      if($('tooltip--show')) {
        $tooltip.removeClass('tooltip--show');
        timeoutId2 = setTimeout(function() {
          $tooltip.remove();
        }, 500);
      }
    };

    return $input;
  }

  $showHelp.on('click', function(event) {
    event.preventDefault();
    console.log('click');

    for (var i = 0; i < $inputArray.length; i++) {
      $inputArray[i].showTooltip();
      setTimeout($inputArray[i].hideTooltip, 5000);
    }

  });

  var $inputArray = [new TextInput('Firstname', 'Please provide your firstname'),
                     new TextInput('Lastname', 'Please provide also your lastname'),
                     new TextInput('Adress', 'Your home or work adress')];

  $showHelp.appendTo($form);

});
