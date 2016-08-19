$(function(){

    var html = $('#test').html();
    var data = {
        name: 'Тимчук Сергій Валерійович',
        photo_url: "img/photo.jpg",
        work: "Студент ЧНУ ім. Ю.Федьковича",
        learning_reasons: "Хочу навчитись фронтенд, тому що:",
        reasons_list: ["Вдосконалити власні знання",
                       "Розвинути Україну в ІТ",
                       "Добитись мрії"],
        contact_phone: "Мій мобільний номер",
        phone_number:"+380679519951",
        social_profile: "Мій профіль ВКонтакті",
        social_network: "https://vk.com/mr_tymchuk",
        facebook_url: "Mr.Tymcuhuk",
        feedback_title: "Мій фідбек:",
        feedback: "Тобі ніхто нічого не повинен! Добивайся всього сам!"
    };

    var content = tmpl(html,data)

    $('body').append(content);
});