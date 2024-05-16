document.getElementById("copyb").style.cursor = "pointer";
	function myFunction() {
		var finResult = document.getElementById('myResult');
		if (document.getElementById("field1").value == '') {
			finResult.value = "Please enter the number!";
			finResult.style.color = "red";
		} else {
			myFunction2();
		}
	}

	function myFunction2() {
		var num = document.getElementById('field1').value;
		var numType = document.getElementById('numtype').value;
		var finResult = document.getElementById('myResult');

		if(isNaN(num)) {
			finResult.value = "Entered text is not a number!";
			finResult.style.color = "red";
		} else {
			check1(numType, finResult);
		}
	}

	function check1(numType, finResult) {
		if (numType == 0) {
			finResult.value = "Please select a type!";
			finResult.style.color = "red";
		} else {
			check2(numType, finResult);
		}
	}

	function check2(numType, finResult) {
		var num = document.getElementById('field1').value;
		var result = parseInt(num,10).toString(numType);

		if (numType == 2) {
			finResult.value = "The number in Binary system is: "+result;
			finResult.style.color = "lime";
		} else {
			finResult.value = "The number in Hexadecimal system is: "+result;
			finResult.style.color = "lime";
		}
	}

	function clearAll() {
		var num = document.getElementById('field1');
		var numType = document.getElementById('numtype');
		var finResult = document.getElementById('myResult');
		num.value = "";
		numType.value = 0;
		finResult.value = "";
	}
	function myFunction11() {
		var text = document.getElementById("field11").value;
		var sortby = document.getElementById("sortby").value;
		var result = document.getElementById("myResult11")
		const words = text.split(" ");
		if(text == "") {
			result.value = "Please enter the text!"
			result.style.color = "red"
		} else {
			if(sortby == 0) {
			result.value = "Please select a sort type!"
			result.style.color = "red"
		} else {
			if (sortby == 1) {
				result.value = words.sort().reverse()
				result.style.color = "lime"
			} else {
				result.value = words.sort()
				result.style.color = "lime"
			}
		}
		}
	}

	function clearAll11() {
		var text = document.getElementById("field11");
		var sortby = document.getElementById("sortby");
		var result = document.getElementById("myResult11")
		text.value = "";
		sortby.value = 0;
		result.value = "";
	}
	function choose() {
		var numType = document.getElementById('numtype33').value;
		var numType2 = document.getElementById('numtype22').value;
		if (numType == 0) {
			document.getElementById("field333").readOnly = true
			document.getElementById("field23").readOnly = true
			document.getElementById("field35").readOnly = true
			document.getElementById("field111").style.color = "#aaa"
			document.getElementById("field222").style.color = "#aaa"
			document.getElementById("field44").style.color = "#aaa"
			document.getElementById('numtype22').value = 0
			document.getElementById("field333").value = ""
			document.getElementById("field23").value = ""
			document.getElementById("field35").value = ""
		}
		if (numType == 1) {
			document.getElementById('numtype22').value = 2
			document.getElementById("field222").style.color = "#aaa"
			document.getElementById("field44").style.color = "black"
			document.getElementById("field23").readOnly = true
			document.getElementById("field35").readOnly = false
			document.getElementById("field333").readOnly = false
			document.getElementById("field35").value = ""
		}
		if (numType == 2) {
			document.getElementById('numtype22').value = 1
			document.getElementById("field111").style.color = "black"
			document.getElementById("field222").style.color = "black"
			document.getElementById("field44").style.color = "#aaa"
			document.getElementById("field23").readOnly = false
			document.getElementById("field35").readOnly = true
			document.getElementById("field333").readOnly = false
			document.getElementById("field23").value = ""
		}
	}

	function checks() {
		var numType = document.getElementById('numtype33').value;
		if (numType == 2) {
			manaFunkcija1111();
		}
		if (numType == 1) {
			manaFunkcija2222();
		}
	}
	
	function manaFunkcija1111() {
		var a = document.getElementById("field333").value;
		var b = document.getElementById("field23").value;
		if (a == "") {
			document.getElementById("myResult33").value = "Please enter A side value!";
			document.getElementById("myResult33").style.color = "red";
		} else {
			if (b == "") {
				document.getElementById("myResult33").value = "Please enter B side value!";
				document.getElementById("myResult33").style.color = "red";
			} else {
				if(isNaN(a)) {
					document.getElementById("myResult33").value = "A side value is not a number!";
					document.getElementById("myResult33").style.color = "red";
				} else {
					if(isNaN(b)) {
						document.getElementById("myResult33").value = "B side value is not a number!";
						document.getElementById("myResult33").style.color = "red";
					} else {
						if (a < 0) {
							document.getElementById("myResult33").value = "Entered A side value is lower than 0!";
							document.getElementById("myResult33").style.color = "red";
						} else {
							if (b < 0) {
								document.getElementById("myResult33").value = "Entered B side value is lower than 0!";
								document.getElementById("myResult33").style.color = "red";
							} else {
								skaits1()
							}
						}
					}
				}
			}
		}
	}

	function manaFunkcija2222() {
		var a = document.getElementById("field333").value;
		var c = document.getElementById("field35").value;
		if (a == "") {
			document.getElementById("myResult33").value = "Please enter A side value!";
			document.getElementById("myResult33").style.color = "red";
		} else {
			if (c == "") {
				document.getElementById("myResult33").value = "Please enter C side value!";
				document.getElementById("myResult33").style.color = "red";
			} else {
				if(isNaN(a)) {
					document.getElementById("myResult33").value = "A side value is not a number!";
					document.getElementById("myResult33").style.color = "red";
				} else {
					if(isNaN(c)) {
						document.getElementById("myResult33").value = "C side value is not a number!";
						document.getElementById("myResult33").style.color = "red";
					} else {
						if (a < 0) {
							document.getElementById("myResult33").value = "Entered A side value is lower than 0!";
							document.getElementById("myResult33").style.color = "red";
						} else {
							if (c < 0) {
								document.getElementById("myResult33").value = "Entered C side value is lower than 0!";
								document.getElementById("myResult33").style.color = "red";
							} else {
								skaits2()
							}
						}
					}
				}
			}
		}
	}

	function skaits1() {
		var a = document.getElementById("field333").value;
		var a = Math.round(a * 100) / 100
		var b = document.getElementById("field23").value;
		var b = Math.round(b * 100) / 100
		var c = Math.sqrt(b*b+a*a)
		var c = Math.round(c * 100) / 100
		var p = ((a+b+c)/2)
		var p = Math.round(p * 100) / 100
		var s = (a*b/2)
		var s = Math.round(s * 100) / 100
		var r1 = (c/2)
		var r1 = Math.round(r1 * 100) / 100
		var r2 = (s/p)
		var r2 = Math.round(r2 * 100) / 100
		var pful = (p*2)
		var pful = Math.round(pful * 100) / 100
		var sina = Math.sin(a/c)
		var sina = Math.round(sina * 100) / 100
		var ugola = Math.asin(sina)
		var ugola = (ugola/3.14*180)
		var ugola = Math.round(ugola)
		var ugolb = (90-ugola)
		document.getElementById("myResult33").value = "a=" +a + "cm, b=" +b + "cm, c=" +c + "cm,\n" + "p=" +p + "cm, P=" +pful + "cm, \u2220α=" +ugola + "\u00B0, \u2220β=" +ugolb + "\u00B0,\n" + "S\u2206=" +s + "cm\xB2, R=" +r1 + "cm, r=" +r2 + "cm."
		document.getElementById("myResult33").style.color = "lime";
	}

	function skaits2() {
		var a = document.getElementById("field333").value;
		var a = Math.round(a * 100) / 100
		var c = document.getElementById("field35").value;
		var c = Math.round(c * 100) / 100
		var b = Math.sqrt(c*c-a*a)
		var b = Math.round(b * 100) / 100
		var p = ((a+b+c)/2)
		var p = Math.round(p * 100) / 100
		var s = (a*b/2)
		var s = Math.round(s * 100) / 100
		var r1 = (c/2)
		var r1 = Math.round(r1 * 100) / 100
		var r2 = (s/p)
		var r2 = Math.round(r2 * 100) / 100
		var pful = (p*2)
		var pful = Math.round(pful * 100) / 100
		var sina = Math.sin(a/c)
		var sina = Math.round(sina * 100) / 100
		var ugola = Math.asin(sina)
		var ugola = (ugola/3.14*180)
		var ugola = Math.round(ugola)
		var ugolb = (90-ugola)
		document.getElementById("myResult33").value = "a=" +a + "cm, b=" +b + "cm, c=" +c + "cm,\n" + "p=" +p + "cm, P=" +pful + "cm, \u2220α=" +ugola + "\u00B0, \u2220β=" +ugolb + "\u00B0,\n" + "S\u2206=" +s + "cm, R=" +r1 + "cm, r=" +r2 + "cm."
		document.getElementById("myResult").style.color = "lime";
	}

	function clearAll33() {
		document.getElementById("myResult33").value = ""
		document.getElementById("field333").value = ""
		document.getElementById("field23").value = ""
		document.getElementById("numtype33").value = 0
		document.getElementById("numtype22").value = 0
		document.getElementById("field333").readOnly = true
		document.getElementById("field23").readOnly = true
		document.getElementById("field35").readOnly = true
		document.getElementById("field111").style.color = "#aaa"
		document.getElementById("field222").style.color = "#aaa"
		document.getElementById("field44").style.color = "#aaa"
	}
	
	function check11() {
		var karta = document.getElementById("type1").value;
		var sods = document.getElementById("type2");
		var more = document.getElementById("type3");
		if (karta == 0) {
			sods.disabled = true;
			sods.options[0].selected = true;
			more.disabled = true
			more.options[0].selected = true;
			document.getElementById("myResult5").value = ""
		}
		if (karta == 1) {
			sods.disabled = false;
			sods.options[1].style.display = "block"
			sods.options[2].style.display = "block"
			sods.options[3].style.display = "block"
			sods.options[4].style.display = "block"
			sods.options[5].style.display = "block"
			sods.options[6].style.display = "block"
			sods.options[7].style.display = "block"
			sods.options[8].style.display = "block"
			sods.options[9].style.display = "none"
			sods.options[10].style.display = "none"
			sods.options[11].style.display = "none"
		}
		if (karta == 2) {
			sods.disabled = false;
			sods.options[0].selected = true;
			more.options[0].selected = true;
			sods.options[1].style.display = "none"
			sods.options[2].style.display = "none"
			sods.options[3].style.display = "none"
			sods.options[4].style.display = "none"
			sods.options[5].style.display = "none"
			sods.options[6].style.display = "none"
			sods.options[7].style.display = "none"
			sods.options[8].style.display = "none"
			sods.options[9].style.display = "block"
			sods.options[10].style.display = "block"
			sods.options[11].style.display = "block"
		}
	}

	function check223() {
		var sods = document.getElementById("type2").value;
		var more = document.getElementById("type3");
		var lng = document.getElementById("type4").value;
		if (sods == 0) {
			more.disabled = true
			document.getElementById("myResult5").value = ""
			more.value = 0
		}
		if (sods == 1) {
			more.disabled = false
			document.getElementById("type3").options[1].style.display = "block"
			document.getElementById("type3").options[2].style.display = "block"
			document.getElementById("type3").options[3].style.display = "block"
			document.getElementById("type3").options[4].style.display = "block"
			document.getElementById("type3").options[5].style.display = "block"
			document.getElementById("type3").options[6].style.display = "none"
			document.getElementById("type3").options[7].style.display = "none"
			document.getElementById("type3").options[8].style.display = "none"
			document.getElementById("type3").options[9].style.display = "none"
			document.getElementById("type3").options[10].style.display = "none"
			document.getElementById("type3").options[11].style.display = "none"
			document.getElementById("type3").options[12].style.display = "none"
			document.getElementById("type3").options[13].style.display = "none"
			document.getElementById("type3").options[14].style.display = "none"
			document.getElementById("type3").options[15].style.display = "none"
			document.getElementById("type3").options[16].style.display = "none"
			document.getElementById("type3").options[17].style.display = "none"
			document.getElementById("type3").options[18].style.display = "none"
			document.getElementById("myResult5").value = ""
		}
		if (sods == 2) {
			more.disabled = false
			more.value = 0
			document.getElementById("type3").options[1].style.display = "none"
			document.getElementById("type3").options[2].style.display = "none"
			document.getElementById("type3").options[3].style.display = "none"
			document.getElementById("type3").options[4].style.display = "none"
			document.getElementById("type3").options[5].style.display = "none"
			document.getElementById("type3").options[6].style.display = "block"
			document.getElementById("type3").options[7].style.display = "block"
			document.getElementById("type3").options[8].style.display = "block"
			document.getElementById("type3").options[9].style.display = "none"
			document.getElementById("type3").options[10].style.display = "none"
			document.getElementById("type3").options[11].style.display = "none"
			document.getElementById("type3").options[12].style.display = "none"
			document.getElementById("type3").options[13].style.display = "none"
			document.getElementById("type3").options[14].style.display = "none"
			document.getElementById("type3").options[15].style.display = "none"
			document.getElementById("type3").options[16].style.display = "none"
			document.getElementById("type3").options[17].style.display = "none"
			document.getElementById("type3").options[18].style.display = "none"
			document.getElementById("myResult5").value = ""
		}
		if (sods == 3) {
			more.disabled = true
			more.options[0].selected = true;
			if (lng == 1) {
				document.getElementById("myResult5").value = "За систематическое нарушение правил."
			}
			if (lng == 2) {
				document.getElementById("myResult5").value = "Par sistemātisku noteikumu pārkāpšanu."
			}
			if (lng == 3) {
				document.getElementById("myResult5").value = "For systematic violation of the rules."
			}
		}
		if (sods == 4) {
			more.disabled = true
			more.options[0].selected = true;
			if (lng == 1) {
				document.getElementById("myResult5").value = "За осознанную задержку возобновления игры."
			}
			if (lng == 2) {
				document.getElementById("myResult5").value = "Par apzinātu spēles atsākšanas kavēšanu."
			}
			if (lng == 3) {
				document.getElementById("myResult5").value = "For knowingly delaying the resumption of play."
			}
		}
		if (sods == 5) {
			more.disabled = true
			more.options[0].selected = true;
			if (lng == 1) {
				document.getElementById("myResult5").value = "За несоблюдение дистанции, во время стандартного положения."
			}
			if (lng == 2) {
				document.getElementById("myResult5").value = "Par distances neievērošanu, standarta izpildes laikā."
			}
			if (lng == 3) {
				document.getElementById("myResult5").value = "For non-observance of the distance, during the standard position."
			}
		}
		if (sods == 6) {
			more.disabled = false
			document.getElementById("type3").options[1].style.display = "none"
			document.getElementById("type3").options[2].style.display = "none"
			document.getElementById("type3").options[3].style.display = "none"
			document.getElementById("type3").options[4].style.display = "none"
			document.getElementById("type3").options[5].style.display = "none"
			document.getElementById("type3").options[6].style.display = "none"
			document.getElementById("type3").options[7].style.display = "none"
			document.getElementById("type3").options[8].style.display = "none"
			document.getElementById("type3").options[9].style.display = "none"
			document.getElementById("type3").options[10].style.display = "block"
			document.getElementById("type3").options[11].style.display = "block"
			document.getElementById("type3").options[12].style.display = "none"
			document.getElementById("type3").options[13].style.display = "none"
			document.getElementById("type3").options[14].style.display = "none"
			document.getElementById("type3").options[15].style.display = "none"
			document.getElementById("type3").options[16].style.display = "none"
			document.getElementById("type3").options[17].style.display = "none"
			document.getElementById("type3").options[18].style.display = "none"
			document.getElementById("myResult5").value = ""
		}
		if (sods == 7) {
			more.disabled = true
			more.options[0].selected = true;
			if (lng == 1) {
				document.getElementById("myResult5").value = "За срыв перспективной атаки соперника."
			}
			if (lng == 2) {
				document.getElementById("myResult5").value = "Par pretinieka daudzsološa uzbrukuma pārtraukšanu."
			}
			if (lng == 3) {
				document.getElementById("myResult5").value = "For a stoping a opponent promising attack."
			}
		}
		if (sods == 8) {
			more.disabled = true
			more.options[0].selected = true;
			if (lng == 1) {
				document.getElementById("myResult5").value = "За оспаривание решения судьи."
			}
			if (lng == 2) {
				document.getElementById("myResult5").value = "Par tiesneša lēmumu apstrīdēšanu."
			}
			if (lng == 3) {
				document.getElementById("myResult5").value = "For challenge the referee's decision."
			}
		}

		if (sods == 9) {
			more.disabled = false
			document.getElementById("type3").options[1].style.display = "none"
			document.getElementById("type3").options[2].style.display = "none"
			document.getElementById("type3").options[3].style.display = "none"
			document.getElementById("type3").options[4].style.display = "none"
			document.getElementById("type3").options[5].style.display = "none"
			document.getElementById("type3").options[6].style.display = "none"
			document.getElementById("type3").options[7].style.display = "none"
			document.getElementById("type3").options[8].style.display = "none"
			document.getElementById("type3").options[9].style.display = "none"
			document.getElementById("type3").options[10].style.display = "none"
			document.getElementById("type3").options[11].style.display = "none"
			document.getElementById("type3").options[12].style.display = "block"
			document.getElementById("type3").options[13].style.display = "block"
			document.getElementById("type3").options[14].style.display = "block"
			document.getElementById("type3").options[15].style.display = "none"
			document.getElementById("type3").options[16].style.display = "none"
			document.getElementById("type3").options[17].style.display = "none"
			document.getElementById("type3").options[18].style.display = "none"
			document.getElementById("myResult5").value = ""
		}
		if (sods == 10) {
			more.disabled = false
			document.getElementById("type3").options[1].style.display = "none"
			document.getElementById("type3").options[2].style.display = "none"
			document.getElementById("type3").options[3].style.display = "none"
			document.getElementById("type3").options[4].style.display = "none"
			document.getElementById("type3").options[5].style.display = "none"
			document.getElementById("type3").options[6].style.display = "none"
			document.getElementById("type3").options[7].style.display = "none"
			document.getElementById("type3").options[8].style.display = "none"
			document.getElementById("type3").options[9].style.display = "none"
			document.getElementById("type3").options[10].style.display = "none"
			document.getElementById("type3").options[11].style.display = "none"
			document.getElementById("type3").options[12].style.display = "none"
			document.getElementById("type3").options[13].style.display = "none"
			document.getElementById("type3").options[14].style.display = "none"
			document.getElementById("type3").options[15].style.display = "block"
			document.getElementById("type3").options[16].style.display = "block"
			document.getElementById("type3").options[17].style.display = "block"
			document.getElementById("type3").options[18].style.display = "block"
			document.getElementById("myResult5").value = ""
		}
		if (sods == 11) {
			more.disabled = true
			more.options[0].selected = true;
			if (lng == 1) {
				document.getElementById("myResult5").value = "За лишение соперника явной возможности голевого момента."
			}
			if (lng == 2) {
				document.getElementById("myResult5").value = "Par skaidru vārtu gūšanas iespēju atņemšanu pretiniekam."
			}
			if (lng == 3) {
				document.getElementById("myResult5").value = "For denial of am obvious goal scoring opportunity."
			}
		}
	}
	function copy() {
        var textc = document.getElementById("myResult5");
        myResult5.select();
        document.execCommand("copy");
    }

    function max(){
    	var more = document.getElementById("type3").value;
    	var lng = document.getElementById("type4").value;
    	if (more == 1) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За специальное выбивания мяча дальше от соперника, когда соперник должен возобновлять игру."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par apzinātu bumbas sitienu tālāk no pretinieka, kad pretiniekam ir jāatsāk spēle."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For deliberately hitting the ball away from the opponent when the opponent has to restart play."
    		}
    	}
    	if (more == 11) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За удар по воротам соперника, после остановки игры судьёй."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par sitienu pretinieka vārtos, pēc spēles apturēšanas."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For shooting an opponent's goal after the game has been stopped by the referee."
    		}
    		
    	}
    	if (more == 111) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За оскорбление соперника."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par pretinieka apvainošanu."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For insulting an opponent."
    		}
    		
    	}
    	if (more == 1111) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За попытку обмануть судью."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par mēģinājumu maldināt tiesnesi."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For trying to deceive a referee."
    		}
    	}
    	if (more == 11111) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За снятие майки, во время празднования гола."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par krekla novilkšanu, vārtu svinēšanas laikā."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For taking off the jersey during the goal celebration."
    		}
    	}
    	if (more == 2) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За удар по ногам сопернику."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par sitienu pretiniekam pa kājam."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For kicking an opponent."
    		}
    	}
    	if (more == 22) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За игру в опасном подкате."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par asu spēli izkupienā."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For playing in a dangerous tackle."
    		}
    	}
    	if (more == 222) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За использование рук во время борьбы с соперником за мяч."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par roku izmantošanu, cīnoties ar pretinieku par bumbu."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For using hands while fighting an opponent for the ball."
    		}
    	}
    	if (more == 6) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За заход на поле без разрешения судьи."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par iekļūšanu laukumā bez tiesneša atļaujas."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For entering the field without the permission of the referee."
    		}
    	}
    	if (more == 66) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За покидание поля без разрешения судьи."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par laukuma atstāšanu bez tiesneša atļaujas."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For leaving the field without the referee's permission."
    		}
    	}
    	if (more == 9) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За агрессивную игру в подкате."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par agresīvo spēlī izkupienā."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For aggressive tackle play."
    		}
    	}
    	if (more == 99) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За умышленную игру в соперника, без попытки сыграть в мяч."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par apzinātu spēlēšanu pret pretinieku, nemēģinot nospēlēt bumbā."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For intentionally playing at an opponent without attempting to play the ball."
    		}
    	}
    	if (more == 999) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За агрессивную игру прямой ногой."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par agresīvo spēli ar taisno kāju."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For aggressive play with a straight leg."
    		}
    	}
    	if (more == 10) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За удар соперника рукой/ногой/головой."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par sitienu pretiniekam ar roku/kāju/galvu"
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For hitting an opponent with a hand/foot/head."
    		}
    	}
    	if (more == 100) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За плевок в соперника/оффиццальное лицо/болейщика/судью."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par spļaušanu uz pretinieku/oficiālo personu/līdzjutēju/tiesnesi."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For spitting at an opponent/official person/fan/referee."
    		}
    	}
    	if (more == 1000) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За использование запрещённых слов."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par aizliegtu vārdu lietošanu."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For using forbidden words."
    		}
    	}
    	if (more == 10000) {
    		if (lng == 1) {
    			document.getElementById("myResult5").value = "За использование запрещённых жестов."
    		}
    		if (lng == 2) {
    			document.getElementById("myResult5").value = "Par aizliegtu žestu lietošanu."
    		}
    		if (lng == 3) {
    			document.getElementById("myResult5").value = "For using prohibited gestures."
    		}
    	}
    }

	function clearAll5() {
		document.getElementById("type2").value = 0
		document.getElementById("type3").value = 0
		document.getElementById("type1").value = 0
		document.getElementById("myResult5").value = ""
	}

	function checks77() {
		var word1 = document.getElementById("field7").value;
		var word2 = "";
		var rez7 = document.getElementById("myResult7");
		if(word1 == "") {
			rez7.value = "Field with your text is empty! Please enter any text!"; // if string is empty, result = error
			rez7.style.color = "red"; // if string is empty, result color is red
		} else {
			rez7.value = ""; // if string is not empy result is empty
			myFunction7(word1, word2, rez7); // if string is not empty, call next function
		}
	}

	function myFunction7(word1, word2, rez7) {
		word2 = word1.toLowerCase().replace(/\s/g, ""); // replace word1 to lower case and remove all spaces
		word2 = word2.split(""); // split up word2 value
		word2 = word2.reverse(); // reverse word2 value
		word2 = word2.join(""); // connect word2 splited up values
		word11 = word1.toLowerCase().replace(/\s/g, ""); // to lower case word1 and remove all spaces
		if (word2 == word11) {
			rez7.value = "Congratulations! Your entered text:\n" + "'" +word1 + "'\n" + "is polidrome!" // result is correct
			rez7.style.color = "lime" // result color is lime
		} else {
			rez7.value = "Unlucky! Your entered text:\n" + "'" +word1 + "'\n" + "is not a polidrome! Try again!" // result is incorrect
			rez7.style.color = "red" // result color is red
		}
	}


	function clearAll7() {
		document.getElementById("field7").value = ""
		document.getElementById("myResult7").value = ""
	}

	function galvena() {
		const fib = document.getElementById("fieldfib").value;
		const rez = document.getElementById("myResultfib");
		var parbRezult = checkfib(fib);
		if (parbRezult[0] == false ) {
			rez.style.color = "red";
			rez.value = parbRezult[1];
		} else {
			var rezultats = fibanaciFun(fib);
			rez.value = "Fibonacci Series:\n" +rezultats + ".";
			rez.style.color = "lime"
		}
	}

	function checkfib(fib) {
		var parbrez = [true, ""];
		if (fib == "") {
			parbrez = [false, "Field is empty!"];
		} else if (isNaN(fib)) {
			parbrez = [false, "Entered text is not a number!"];
		} else if(fib > 1476) {
			parbrez = [false, "The entered number is too large, please select a smaller number!"];
		} else if (fib < 0) {
			parbrez = [false, "The entered number is smaller than 0, please select a larger number!"];
		}
		return parbrez;
	}

	function fibanaciFun(fib) {
		var mas=[]; mas[0] = 0; mas[1] = 1; var i; 
		for (var i = 2; i<Number(fib); i++) {
			mas[i] = Number(mas[i-1] + mas[i-2]);
		}
		return mas;
    }

	function clearAllfib() {
		document.getElementById("fieldfib").value = "";
		document.getElementById("myResultfib").value = "";
	}