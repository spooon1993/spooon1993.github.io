var body = document.body;

var list = {

    header: function () {
        var h2 = document.createElement('h2');
        h2.className = "h2";
        h2.innerHTML = "Тест по праграммированию";
        body.appendChild(h2);
    },

    question1: function (a) {
        var q1 = document.createElement('p');
        q1.className = "h2";
        q1.innerHTML = a+". Вопрос №"+a;
        body.appendChild(q1);
    },

    answer: function (a) {
        var check = document.createElement('input');
        check.className = "checkbox";
        check.setAttribute('type', 'checkbox');
        body.appendChild(check);

        var li1 = document.createElement('li');
        li1.className = "li";
        li1.innerHTML = "Вариант ответа №"+a;
        body.appendChild(li1);
    },

    checkbox: function () {
        var check = document.createElement('input');
        check.className = "checkbox";
        check.setAttribute('type', 'checkbox');
        body.appendChild(check);
    },

    submit: function () {
        var button = document.createElement('input');
        button.className = "button btn.btn-lg btn-primary";
        button.setAttribute('type', 'button');
        button.setAttribute('value', "Проверить мои результаты");
        body.appendChild(button);
    }

};

list.header();
list.question1(1);
list.answer(1);
list.answer(2);
list.answer(3);
list.question1(2);
list.answer(1);
list.answer(2);
list.answer(3);
list.question1(3);
list.answer(1);
list.answer(2);
list.answer(3);
list.submit();

