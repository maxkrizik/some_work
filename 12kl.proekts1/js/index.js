function manage() {
	var a = document.getElementById("field1").value
	var b = document.getElementById("field2").value
	var c = document.getElementById("field3").value
	var answer = document.getElementById("myResult")
	var parbaude = check(a, c)
	if (parbaude[0] == false) {
		answer.value = parbaude[1]
		answer.style.color = "red"
	} else {
		var data = count(a, b)
		answer.value = "Vienādojums: (" + a + "x³ + x - " + b + ")³ = " + c + " - x³\n\n" + "Atbilde: x = " + data
		answer.style.color = "lime"
	}
}

function check(first, third) {
	var end = [true, ""]
	if (first == "" || third == "") {
		end = [false, "Kļūda! Visiem laukumiem ir jābūt aizpildētiem!"]
	} else if (isNaN(first) || isNaN(third)) {
		end = [false, "Kļūda! Ievadit var tikai ciparus un skaitļus!"]
	} else if (first.length > 3 || third.length > 3) {
    	end = [false, "Kļūda! Katram koeficentam ir jābūt mazākam par 1000!"]
	} else if (Math.sign(Number(first)) == 0|| Math.sign(Number(third)) == 0 || Math.sign(Number(first)) == -1 || Math.sign(Number(third)) == -1) {
		end = [false, "Kļūda! Neviens koeficents nevar būt zemāks, vai vienāds ar 0!"]
	}
	return end
}

function count(a, b) {
	var x = Math.pow(b / a, 1/3);
	x = x.toFixed(5)
	return x
}

function clearAll() {
	document.getElementById("field1").value = ""
	document.getElementById("field2").value = ""
	document.getElementById("field3").value = ""
	document.getElementById("myResult").value = ""
}

function updateField2() {
    var a = parseFloat(field1.value);
    var c = parseFloat(field3.value);
    var b = a * c / 2;

    // Проверяем, является ли b NaN
    if (isNaN(b)) {
        // Если b NaN, устанавливаем значение field2 равным 0
        field2.value = 0;
    } else {
        // Если b не NaN, продолжаем с проверкой целого числа
        if (Number.isInteger(b)) {
            // Если b целое, устанавливаем значение field2 без .toFixed()
            field2.value = b;
        } else {
            // Если b нецелое, устанавливаем значение field2 с .toFixed(2)
            field2.value = b.toFixed(2);
        }
    }

    // Делаем field2 readonly
    field2.readOnly = true;
}

// Убираем readonly перед обновлением значения
function enableField2() {
    field2.readOnly = false;
}

// Обновляем значение field2 при изменении значений field1 и field3
field1.addEventListener('input', function () {
    enableField2();
    updateField2();
});

field3.addEventListener('input', function () {
    enableField2();
    updateField2();
});

// Инициализируем значение field2 при загрузке страницы
updateField2();