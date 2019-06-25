window.onload = function () {
    function price() {
        let sum = 0;
        let filling = new Array();
        let glass = prompt('Какой стаканчик вы хотите? (Есть маленький - 10 грн и большой - 25 грн)');
        if (glass == 'большой') {
            sum += 25;
            while (filling.length != 1) {
                let ingr = prompt('Какую начинку вы хотите? (шоколад - 5 грн, карамель - 6 грн, ягоды - 10 грн). МИНИМУМ ОДНА.');
                if (ingr == null || ingr == "") {
                    alert('Введите начинку.');
                }
                else {
                    filling.push(ingr);
                }
            }
            let conf = confirm('Ещё добавок?');
            if (conf == true) {
                for (let i = 0; i < 2; i++) {
                    let ingr2 = prompt('Какую начинку вы хотите? (шоколад - 5 грн, карамель - 6 грн, ягоды - 10 грн).');
                    filling.push(ingr2);
                }
            }
            for (let i = 0; i < filling.length; i++) {
                switch (filling[i]) {
                    case "шоколад":
                        sum += 5;
                        break;
                    case "карамель":
                        sum += 6;
                        break;
                    case "ягоды":
                        sum += 10;
                        break;
                }
            }
        }
        else {
            sum += 10;
        }
        let marsh = confirm('Посыпать маршмеллоу?');
        if (marsh == true) {
            sum += 5;
        }
        return sum;
    }
    document.getElementsByTagName('h1')[0].innerHTML = 'Итоговая цена: ' + price() + ' гривен.';
};
//# sourceMappingURL=app.js.map