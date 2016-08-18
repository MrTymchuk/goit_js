$(function() {
  var $wrapper = $('<div>', {class: 'wrapper'}).appendTo('body');
  var $tabs = $('<div>', {class: 'tabs'}).appendTo($wrapper);
  var $tabsList = $('<ul>', {class: 'tabs__list'}).appendTo($tabs);
  var $tabsContent = $('<div>', {class: 'tabs__content'}).appendTo($wrapper);

  function Tab(tabName, $tabContent) {
    var $tabsItem = $('<li>', {class: 'tabs__item'}).appendTo($tabsList);
    var tabNumber = $tabsList.children().length;
    var $tabsLink = $('<a>', {class: 'tabs__link', href: '#tab-link-' + tabNumber, text: tabName || 'Tab ' + tabNumber}).appendTo($tabsItem);
    var $tabsContentItem = $('<div>', {id: 'tab-content-' + tabNumber, class: 'tabs__content-item'}).appendTo($tabsContent);
    (tabNumber === 1) ? ($tabsContentItem.addClass('active'), $tabsItem.addClass('active')) : '';
    (typeof($tabContent) === 'object') ? $tabContent.appendTo($tabsContentItem) : console.log('fuck it');

    $tabsLink.on('click', function() {
      $tabsList.children().removeClass('active');
      $tabsContent.children().removeClass('active');
      $tabsItem.addClass('active');
      $tabsContentItem.addClass('active');
    });

    $tabsContentItem.addContent = function($element) {
      return $element.appendTo($tabsContentItem);
    };

    return $([$tabsItem, $tabsContentItem]);
  }

  var $tab1 = new Tab('', $('<p>', {class: 'tabs__paragraph', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas pariatur aliquid explicabo. Architecto cum, tempora. Illo sunt, debitis? Aliquam dolorum vero qui laudantium illum modi, quia enim pariatur officiis laboriosam fugit, excepturi autem mollitia architecto ut magni. Fuga aliquam ex ipsa ab asperiores qui! Excepturi commodi eos repellat, illo nostrum nam aliquam sint eveniet dicta velit, alias eaque tempora. Quae dolore vitae, harum delectus ex quam! Inventore ea labore assumenda atque voluptates excepturi tempora eaque saepe sapiente ipsa. Itaque obcaecati nam eveniet fugiat fuga reprehenderit ipsa, nostrum vitae ullam magnam quod alias voluptates, enim dicta, eius accusantium omnis non. Aperiam!'}));
  var $tab2 = new Tab();
  var $tab3 = new Tab('', $('<p>', {class: 'tabs__paragraph', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quibusdam harum esse minus commodi, vitae molestiae voluptas, laboriosam magnam, doloremque a iste sit excepturi totam ipsam eveniet ipsa in quasi. In nulla iure velit.'}));
  var $tab4 = new Tab();
  $tab1[1].addContent($('<p>', {class: 'tabs__paragraph', text: 'Fuga aliquam ex ipsa ab asperiores qui! Excepturi commodi eos repellat, illo nostrum nam aliquam sint eveniet dicta velit, alias eaque tempora. Quae dolore vitae, harum delectus ex quam! Inventore ea labore assumenda atque voluptates excepturi tempora eaque saepe sapiente ipsa.'}));
  $tab2[1].addContent($('<p>', {class: 'tabs__paragraph', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, odit?'}));
  $tab2[1].addContent($('<p>', {class: 'tabs__paragraph', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nobis iure doloremque harum culpa, at animi enim tenetur accusantium impedit fugiat nihil fuga, omnis odit porro placeat temporibus, vero aliquam.'}));
  $tab4[1].addContent($('<p>', {class: 'tabs__paragraph', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aliquid aperiam, sapiente illum! Consequuntur sunt nobis necessitatibus animi voluptates, officiis neque nihil fugiat sapiente quis officia corrupti accusamus, maxime reiciendis vero, tenetur assumenda accusantium! Beatae sit quam eos provident iste culpa voluptas, nulla laboriosam doloremque voluptatem numquam, officia eaque natus ipsa excepturi sapiente itaque quis veniam maxime labore! Aspernatur quasi itaque nihil, sequi similique dolor corrupti nisi quam obcaecati saepe, ipsum eum molestiae temporibus totam neque adipisci cumque! Excepturi neque numquam, cumque at molestiae distinctio quod rerum eaque sit deserunt, voluptates dolorum.'}));
});
