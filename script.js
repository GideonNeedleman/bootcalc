function addition() {
	let op1 = document.getElementById("op1").value;
	let op2 = document.getElementById("op2").value;
	if ((op1 == "") || (op2 == "")) {
		alert("please enter numbers");
	}
	else {
		let result = parseFloat(op1) + parseFloat(op2);
		document.getElementById("addition_result").innerHTML = result;
	}
}