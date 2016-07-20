function Stopwatch(placement) {
  var appName = 'stopwatch';
  var app = this;
  var body = placement;
  var appBody = birthOfElement('div', appName, '', body);
  var wrapper = birthOfElement('div', (appName + '__wrapper'), '', appBody);
  var digits = birthOfElement('div', (appName + '__digits'), '', wrapper);
  var buttons = birthOfElement('div', (appName + '__buttons'), '', wrapper);
  var splits = birthOfElement('div', (appName + '__splits'), '', wrapper);
  var splitList = birthOfElement('ul', (appName + '__split-list'), '', splits);
  var hours = birthOfElement('span', (appName + '__hours'), '00', digits);
  birthOfElement('span', (appName + '__separator'), ':', digits);
  var minutes = birthOfElement('span', (appName + '__minutes'), '00', digits);
  birthOfElement('span', (appName + '__separator'), ':', digits);
  var seconds = birthOfElement('span', (appName + '__seconds'), '00', digits);
  birthOfElement('span', (appName + '__separator'), '.', digits);
  var milliseconds = birthOfElement('span', (appName + '__milliseconds'), '000', digits);
  var copyright = birthOfElement('div', (appName + '__copyright'), '2016 &copy; Mr.Tymchuk', body);

  var hh, mm, ss, ms;
  hh = mm = ss = ms = 0;
  var tick = 13;
  var splitCounter = 0;
  var timeout;

  function birthOfElement(tagName, className, innerText, appendParent) {
    var newElement = document.createElement(tagName);

    newElement.classList.add(className);
    newElement.innerHTML = innerText;
    appendParent.appendChild(newElement);

    return newElement;
  }

  function Button(name) {
    var btn = document.createElement('div');
    btn.innerHTML = name;
    btn.classList.add(appName + '__' + name.toLowerCase());
    buttons.appendChild(btn);
    return btn;
  }

  function generateTime() {
    var timeStr = '';
    timeStr += ( (hh < 10) ? '0' + hh : hh );
    timeStr += ':';
    timeStr += ( (mm < 10) ? '0' + mm : mm );
    timeStr += ':';
    timeStr += ( (ss < 10) ? '0' + ss : ss );
    timeStr += '.';
    timeStr += ( (ms < 10) ? '00' + ms : (ms < 100) ? '0' + ms : ms );

    return timeStr;
  }

  var startBtn = new Button('Start');
  var splitBtn = new Button('Split');
  var resetBtn = new Button('Reset');

  app.start = function() {
    (startBtn.innerHTML === 'Start') ? (timeGrow(),
                                        startBtn.classList.add('active'),
                                        startBtn.innerHTML = 'Stop') :
                                        (clearTimeout(timeout),
                                        app.split(),
                                        timeout = undefined,
                                        startBtn.classList.remove('active'),
                                        startBtn.innerHTML = 'Start');
  };

  app.split = function() {
    if(timeout !== undefined) {
      splitCounter++;
      var splitItem = document.createElement('li');
      splitItem.innerHTML = splitCounter + ' Stop: ' + generateTime();
      splitItem.classList.add(appName + '__split-item');
      splitItem.addEventListener("transitionend", removeSplitItem, false);
      splitList.appendChild(splitItem);
      return splitItem;
    }
  };

  app.reset = function() {
    clearTimeout(timeout);
    timeout = undefined;
    ms = ss = mm = hh = 0;
    splitCounter = 0;

    startBtn.classList.remove('active');
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    milliseconds.innerHTML = '000';
    startBtn.innerHTML = 'Start';
    splitList.firstChild.classList.add('deleted'); //INIT ALL SPLIT-ITEMS DELETION BY TRANSITIONED EVENT
  };

  function removeSplitItem() {
    splitList.removeChild(splitList.firstChild);
    (splitList.firstChild) ? splitList.firstChild.classList.add('deleted') : console.log('All Items removed.');
  }

  startBtn.addEventListener('click', this.start);
  splitBtn.addEventListener('click', this.split);
  resetBtn.addEventListener('click', this.reset);

  function timeGrow(){
    msGrow();
    clearTimeout(timeout);
    timeout = undefined;
    timeout = setTimeout(timeGrow, tick);
  }

  function msGrow() {
    (ms > 999-tick) ? (ms = 0, ssGrow()) : ms += tick;
    (ms < 10) ? milliseconds.innerHTML = '00' + ms :
    (ms < 100) ? milliseconds.innerHTML = '0' + ms : milliseconds.innerHTML = ms;
  }

  function ssGrow() {
    (ss >= 59) ? (ss = 0, mmGrow()) : ss++;
    (ss < 10) ? seconds.innerHTML = '0' + ss : seconds.innerHTML = ss;
  }

  function mmGrow() {
    (mm >= 59) ? (mm = 0, hhGrow()) : mm++;
    (mm < 10) ? minutes.innerHTML = '0' + mm : minutes.innerHTML = mm;
  }

  function hhGrow() {
    (hh >= 99) ? hh = 0 : hh++;
    (hh < 10) ? hours.innerHTML = '0' + hh : hours.innerHTML = hh;
  }
}

var stopwatch = new Stopwatch(document.body);

//PUBLIC METHODS:

// stopwatch.start();
// stopwatch.split();
// stopwatch.reset();
