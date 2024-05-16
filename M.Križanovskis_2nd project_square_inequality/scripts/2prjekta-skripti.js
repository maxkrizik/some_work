function clearAllmath() {
	var canvas = document.getElementById("myCanvas"); // where get a canvas
	var ctx = canvas.getContext("2d"); // how to use it
	ctx.clearRect(0,0,800,800); // clear from .. to ..(coordinates)

	// Set canvas size
	canvas.width = 800; 
	canvas.height = 800;

	// Draw the X axis
	ctx.beginPath(); // start work
	ctx.moveTo(0, canvas.height / 2);
	ctx.lineTo(canvas.width, canvas.height / 2);
	ctx.stroke();

	// Add arrows in the end of X-Axis
	ctx.beginPath(); // start work
	ctx.moveTo(canvas.width - 20, canvas.height / 2 - 10); // line start
	ctx.lineTo(canvas.width, canvas.height / 2); // where to draw the line
	ctx.lineTo(canvas.width - 20, canvas.height / 2 + 10); // line start
	ctx.stroke(); // draw it

	// Draw divisions along the x-axis
	ctx.fillStyle = "black"; // color
	for (let i = -canvas.width / 2; i <= canvas.width / 2; i += 10) { // do until condition is met
	  if (i !== 10 && i % 60 === 0) { 
	    ctx.beginPath(); // start work
	    ctx.moveTo(i + canvas.width / 2, canvas.height / 2 - 10); // line start
	    ctx.lineTo(i + canvas.width / 2, canvas.height / 2 + 10); // where to draw the line
	    ctx.stroke(); // draw
	  }
	}
	
	// Name X axis
	ctx.font = "25px Arial"; // set size and font
	ctx.fillStyle = "Black"; // color
	ctx.fillText("X", 770, 440); // text and it coordinates

	// Headline canvas
	ctx.font = "25px Arial"; // set size and font
	ctx.fillStyle = "Black"; // color
	ctx.fillText("This chart is drawn schematically!", 220, 40); // text and it coordinates

	document.getElementById("field1").value = ""; // clear field
	document.getElementById("field2").value = ""; // clear field
	document.getElementById("field3").value = ""; // clear field
	document.getElementById("myResultmath").value = ""; // clear field
	document.getElementById("info").style.border = "black 3px solid" // set border
	document.getElementById("field1").style.border = "black 3px solid" // set border
	document.getElementById("field2").style.border = "black 3px solid" // set border
	document.getElementById("field3").style.border = "black 3px solid" // set border
}
function mainFun() {
	var a = document.getElementById("field1").value; // get field1 value and give variable
	var b = document.getElementById("field2").value; // get field2 value and give variable
	var c = document.getElementById("field3").value; // get field3 value and give variable
	var res = document.getElementById("myResultmath"); // give variable for window with answer
	ctx.clearRect(0,0,800,800); // clear from .. to ..(coordinates)

	// Set canvas size
	canvas.width = 800; 
	canvas.height = 800;

	// Draw the X axis
	ctx.beginPath(); // start work
	ctx.moveTo(0, canvas.height / 2);
	ctx.lineTo(canvas.width, canvas.height / 2);
	ctx.stroke();

	// Add arrows in the end of X-Axis
	ctx.beginPath(); // start work
	ctx.moveTo(canvas.width - 20, canvas.height / 2 - 10); // line start
	ctx.lineTo(canvas.width, canvas.height / 2); // where to draw the line
	ctx.lineTo(canvas.width - 20, canvas.height / 2 + 10); // line start
	ctx.stroke(); // draw it

	// Draw divisions along the x-axis
	ctx.fillStyle = "black"; // color
	for (let i = -canvas.width / 2; i <= canvas.width / 2; i += 10) { // do until condition is met
	  if (i !== 10 && i % 60 === 0) { 
	    ctx.beginPath(); // start work
	    ctx.moveTo(i + canvas.width / 2, canvas.height / 2 - 10); // line start
	    ctx.lineTo(i + canvas.width / 2, canvas.height / 2 + 10); // where to draw the line
	    ctx.stroke(); // draw
	  }
	}
	
	// Name X axis
	ctx.font = "25px Arial"; // set size and font
	ctx.fillStyle = "Black"; // color
	ctx.fillText("X", 770, 440); // text and it coordinates

	// Headline canvas
	ctx.font = "25px Arial"; // set size and font
	ctx.fillStyle = "Black"; // color
	ctx.fillText("This chart is drawn schematically!", 220, 40); // text and it coordinates
	var checking = check(a,b,c); // give variable for check function
	if (checking[0] == false ) { // if after check function we get answer false
			res.style.color = "red"; // answer color
			res.value = checking[1]; // answer = error from check function
		} 	else {  // if answer true
				document.getElementById("info").style.border = "black 3px solid"
				document.getElementById("field1").style.border = "black 3px solid"
				document.getElementById("field2").style.border = "black 3px solid"
				document.getElementById("field3").style.border = "black 3px solid"
				var answer = math(a,b,c); // give variable for math function and send 3 variables
				var parab = math2(a); // give variable for math2 function and send a coefficent
					if (parab[0] == true) { // if parabola branches up
						if (b == 0 && c == 0) {
							if (a <= 2 && a > 0) {
								ctx.moveTo(350, 100); // coordinate where parabola started
								ctx.quadraticCurveTo(400,700,450,100); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke()
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 388.5, 405); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[1], 385, 430); // text and it coordinate
							} 
							if (a > 2 && a <= 4) {
								ctx.moveTo(300, 100); // coordinate where parabola started
								ctx.quadraticCurveTo(400,700,500,100); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke()
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 388.5, 405); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[1], 385, 430); // text and it coordinate
							} 
							if (a > 4 && a <= 6) {
								ctx.moveTo(250, 100); // coordinate where parabola started
								ctx.quadraticCurveTo(400,700,550,100); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke()
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 388.5, 405); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[1], 385, 430); // text and it coordinate
							} 
							if (a > 6 && a <= 8) {
								ctx.moveTo(200, 100); // coordinate where parabola started
								ctx.quadraticCurveTo(400,700,600,100); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke()
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 388.5, 405); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[1], 385, 430); // text and it coordinate
							} 
							if (a > 8 && a <= 10) {
								ctx.moveTo(150, 100); // coordinate where parabola started
								ctx.quadraticCurveTo(400,700,650,100); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke()
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 388.5, 405); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[1], 385, 430); // text and it coordinate
							} 
							if (a > 10) {
								ctx.moveTo(100, 100); // coordinate where parabola started
								ctx.quadraticCurveTo(400,700,700,100); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke()
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 388.5, 405); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[1], 385, 430); // text and it coordinate
							}
							res.value = "The parabola touches the x-axis because the discriminant is 0. This equation will have 1 root.\n\n"+"Discriminant = "+answer[0]+"\n\nX = "+answer[1]+"\n\nX-coordinate of the top of the parabola = "+answer[3]+"\nY-coordinate of the top of the parabola = "+answer[4]+"\n\nThe branches of the parabola are directed: "+parab[1]+"\n\nAnswer: ∅."; // answer
							res.style.color = "lime" // answer color
						} else {
							if (answer[0] > 0) { // if discriminant > 0
								ctx.moveTo(300, 200); // coordinate where parabola started
								ctx.quadraticCurveTo(400,800,500,200); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke() // start draw
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 446, 405); // text and it coordinate
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 331, 405); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[2], 470, 395); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[1], 350, 395); // text and it coordinate
								res.value = "The parabola crosses the x-axis because the discriminant is greater than 0. This expression will have 2 roots.\n\n"+"Discriminant = "+answer[0]+"\n\nX₁ = "+answer[1]+"\nX₂ = "+answer[2]+"\n\nX-coordinate of the top of the parabola = "+answer[3]+"\nY-coordinate of the top of the parabola = "+answer[4]+"\n\nThe branches of the parabola are directed: "+parab[1]+"\n\nAnswer: (-∞;"+answer[1]+")⋃("+answer[2]+";+∞)."; // answer
								res.style.color = "lime" // answer color
							}
							if (answer[0] < 0) { // if discriminant < 0
								ctx.moveTo(300, 100); // coordinate where parabola started
								ctx.quadraticCurveTo(400,600,500,100); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke() // start draw
								res.value = "There are no solutions because the discriminant is less than 0. The parabola will lie above the x-axis!\n\n"+"Discriminant = "+answer[0]+"\n\nX₁ = No solution\n"+"X₂ = No solution\n\n"+"X-coordinate of the top of the parabola = "+answer[3]+"\nY-coordinate of the top of the parabola = "+answer[4]+"\n\nThe branches of the parabola are directed: "+parab[1]+"\n\nAnswer: ∅."; // answer
								res.style.color = "lime" // answer color
							}
							if (answer[0] == 0) { // if discriminant = 0
								ctx.moveTo(300, 100); // coordinate where parabola started
								ctx.quadraticCurveTo(400,700,500,100); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
								ctx.stroke()
								ctx.font = "80px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(".", 388.5, 405); // text and it coordinate
								ctx.font = "25px Arial"; // size and font
								ctx.fillStyle = "Black"; // text color
								ctx.fillText(answer[1], 385, 430); // text and it coordinate
								res.value = "The parabola touches the x-axis because the discriminant is 0. This equation will have 1 root.\n\n"+"Discriminant = "+answer[0]+"\n\nX = "+answer[1]+"\n\nX-coordinate of the top of the parabola = "+answer[3]+"\nY-coordinate of the top of the parabola = "+answer[4]+"\n\nThe branches of the parabola are directed: "+parab[1]+"\n\nAnswer: ∅."; // answer
								res.style.color = "lime" // answer color
							}
							}
						} 	else { // parabola branches down
								if (b == 0 && c == 0) {
									if (a < 0 && a >= -2) {
										ctx.moveTo(350, 700); // coordinate where parabola started
										ctx.quadraticCurveTo(400,100,450,700); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
										ctx.stroke()
										ctx.font = "80px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(".", 388.5, 405); // text and it coordinate
										ctx.font = "25px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(answer[1], 385, 390); // text and it coordinate
									} 
									if (a < -2 && a >= -4) {
										ctx.moveTo(300, 700); // coordinate where parabola started
										ctx.quadraticCurveTo(400,100,500,700); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
										ctx.stroke()
										ctx.font = "80px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(".", 388.5, 405); // text and it coordinate
										ctx.font = "25px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(answer[1], 385, 390); // text and it coordinate
									}
									if (a < -4 && a >= -6) {
										ctx.moveTo(250, 700); // coordinate where parabola started
										ctx.quadraticCurveTo(400,100,550,700); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
										ctx.stroke()
										ctx.font = "80px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(".", 388.5, 405); // text and it coordinate
										ctx.font = "25px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(answer[1], 385, 390); // text and it coordinate
									}
									if (a < -6 && a >= -8) {
										ctx.moveTo(200, 700); // coordinate where parabola started
										ctx.quadraticCurveTo(400,100,600,700); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
										ctx.stroke()
										ctx.font = "80px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(".", 388.5, 405); // text and it coordinate
										ctx.font = "25px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(answer[1], 385, 390); // text and it coordinate
									}
									if (a < -8 && a >= -10) {
										ctx.moveTo(150, 700); // coordinate where parabola started
										ctx.quadraticCurveTo(400,100,650,700); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
										ctx.stroke()
										ctx.font = "80px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(".", 388.5, 405); // text and it coordinate
										ctx.font = "25px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(answer[1], 385, 390); // text and it coordinate
									}
									if (a < -10) {
										ctx.moveTo(100, 700); // coordinate where parabola started
										ctx.quadraticCurveTo(400,100,700,700); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
										ctx.stroke()
										ctx.font = "80px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(".", 388.5, 405); // text and it coordinate
										ctx.font = "25px Arial"; // size and font
										ctx.fillStyle = "Black"; // text color
										ctx.fillText(answer[1], 385, 390); // text and it coordinate
									}
								res.value = "The parabola touches the x-axis because the discriminant is 0. This equation will have 1 root.\n\n"+"Discriminant = "+answer[0]+"\n\nX = "+answer[1]+"\n\nX-coordinate of the top of the parabola = "+answer[3]+"\nY-coordinate of the top of the parabola = "+answer[4]+"\n\nThe branches of the parabola are directed: "+parab[1]+"\n\nAnswer: X ∈ ℝ."; // answer
								res.style.color = "lime" // answer color
							} else {
								if (answer[0] > 0) { // if discriminant > 0
									ctx.moveTo(300, 600); // coordinate where parabola started
									ctx.quadraticCurveTo(400,0,500,600); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
									ctx.stroke()
									ctx.font = "80px Arial"; // size and font
									ctx.fillStyle = "Black"; // text color
									ctx.fillText(".", 446, 405); // text and it coordinate
									ctx.font = "80px Arial"; // size and font
									ctx.fillStyle = "Black"; // text color
									ctx.fillText(".", 331, 405); // text and it coordinate
									ctx.font = "25px Arial"; // size and font
									ctx.fillStyle = "Black"; // text color
									ctx.fillText(answer[2], 465, 425); // text and it coordinate
									ctx.font = "25px Arial"; // size and font
									ctx.fillStyle = "Black"; // text color
									ctx.fillText(answer[1], 345, 425); // text and it coordinate
									res.value = "The parabola crosses the x-axis because the discriminant is greater than 0. This expression will have 2 roots.\n\n"+"Discriminant = "+answer[0]+"\n\nX₁ = "+answer[1]+"\nX₂ = "+answer[2]+"\n\nX-coordinate of the top of the parabola = "+answer[3]+"\nY-coordinate of the top of the parabola = "+answer[4]+"\n\nThe branches of the parabola are directed: "+parab[1]+"\n\nAnswer: (-∞;"+answer[1]+")⋃("+answer[2]+";+∞)."; // answer
									res.style.color = "lime" // answer color
								}
								if (answer[0] < 0) { // if discriminant < 0
									ctx.moveTo(300, 700); // coordinate where parabola started
									ctx.quadraticCurveTo(400,200,500,700); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
									ctx.stroke()
									res.value = "There are no roots because the discriminant is less than 0. The parabola will lie above the x-axis!\n\n"+"Discriminant = "+answer[0]+"\n\nX₁ = No solution\n"+"X₂ = No solution\n\n"+"X-coordinate of the top of the parabola = "+answer[3]+"\nY-coordinate of the top of the parabola = "+answer[4]+"\n\nThe branches of the parabola are directed: "+parab[1]+"\n\nAnswer: X ∈ ℝ."; // answer
									res.style.color = "lime" // answer color
								}
								if (answer[0] == 0) { // if discriminant = 0
									ctx.moveTo(300, 700); // coordinate where parabola started
									ctx.quadraticCurveTo(400,100,500,700); // 1,2 number - coordinate of the top, 3,4 - coordinate parabola end
									ctx.stroke()
									ctx.font = "80px Arial"; // size and font
									ctx.fillStyle = "Black"; // text color
									ctx.fillText(".", 388.5, 405); // text and it coordinate
									ctx.font = "25px Arial"; // size and font
									ctx.fillStyle = "Black"; // text color
									ctx.fillText(answer[1], 385, 390); // text and it coordinate
									res.value = "The parabola touches the x-axis because the discriminant is 0. This equation will have 1 root.\n\n"+"Discriminant = "+answer[0]+"\n\nX = "+answer[1]+"\n\nX-coordinate of the top of the parabola = "+answer[3]+"\nY-coordinate of the top of the parabola = "+answer[4]+"\n\nThe branches of the parabola are directed: "+parab[1]+"\n\nAnswer: X ∈ ℝ."; // answer
									res.style.color = "lime" // answer color
								}
							}
							}
				}
}

function check(a,b,c) {
	var checks = [true, ""]; // give variable for this function
	if (a == "" || b == "" || c == "") { // check empty fields
		checks = [false, "All fields with coefficients must be filled!"];
		document.getElementById("field1").style.border = "#ff1e00 3px dashed" // border error red
		document.getElementById("field2").style.border = "#ff1e00 3px dashed" // border error red
		document.getElementById("field3").style.border = "#ff1e00 3px dashed" // border error red
	} else if (isNaN(a) || isNaN(b) || isNaN(c)){ // check is not a number
		checks = [false, "Entered text is not a number! Please enter only the numbers!"];
		document.getElementById("field1").style.border = "#ff1e00 3px dashed" // border error red
		document.getElementById("field2").style.border = "#ff1e00 3px dashed" // border error red
		document.getElementById("field3").style.border = "#ff1e00 3px dashed" // border error red
	} else if (a == 0){ // check coefficent a = 0
		checks = [false, "Condition violated: coefficient A ≠ 0."]
		document.getElementById("field1").style.border = "#ff1e00 3px dashed" // border error red
		document.getElementById("info").style.border = "#ff1e00 3px dashed" // border error red
	}
	return checks; // return true or false
}
function math(a,b,c) {
	var d = Math.pow(b, 2)-4*a*c // count discriminant
	var x1 = (-b+Math.sqrt(d))/(2*a) // count root 1
	var x2 = (-b-Math.sqrt(d))/(2*a) // count root 2
	if (Number.isInteger(x1)) { // check integer
	} else {
		x1 = x1.toFixed(2); // round number
	}
	if (Number.isInteger(x2)) { // check integer
	} else {
		x2 = x2.toFixed(2); // round number
	}
	if (x1 > x2) { // x1 is larger than x2
		var temp = x1
		x1 = x2
		x2 = temp
	}
	var x0 = -b/(2*a) // count top of a parabola X
	if (Number.isInteger(x0)) {
	} else {
		x0 = x0.toFixed(2);
	}
	/////!!!!!!!!!!/////
	var y0 = a*Math.pow(x0, 2)+b*x0+(Number(c)) // count top of a parabola Y
	if (Number.isInteger(y0)) {
	} else {
		y0 = y0.toFixed(2);
	}
	var num = [d,x1,x2,x0,y0]; // give array for all answers
	return num; // return array  answers
}

function math2(a) {
	var check = [true, "Up🠕"]; // give variable for function, parabola branches up
	if (a < 0) {
		check = [false, "Down🠗"]; // Parabola branches down
	}
	return check; // return answer with parabola branches direct
}