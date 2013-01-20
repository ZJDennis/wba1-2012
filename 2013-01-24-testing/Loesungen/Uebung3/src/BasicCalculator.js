function BasicCalculator() {
}

BasicCalculator.prototype.isNumber = function (toCheck1, toCheck2) {
	if((typeof toCheck1) == "number" && (typeof toCheck2) == "number") {
		return true;
	} else {
		return false;
	}
}

BasicCalculator.prototype.division = function (z1, z2) {
	if(this.isNumber(z1, z2)) {
		if(z2 == 0) {
			throw new Error("Division durch 0 nicht moeglich");
		} else {
			return z1 / z2;
		}
	} else {
		throw new Error("Parameter haben den falschen Datentyp");
	}
};

BasicCalculator.prototype.multiplication = function multiplication(z1, z2) {
	if(this.isNumber(z1, z2)) {
		return z1*z2;
	} else {
		throw new Error("Parameter haben den falschen Datentyp");
	}
};

BasicCalculator.prototype.addition = function addition(z1, z2) {
	if(this.isNumber(z1, z2)) {
		return z1 + z2;
	} else {
		throw new Error("Parameter haben den falschen Datentyp");
	}
};

BasicCalculator.prototype.subtraction = function subtraction(z1, z2) {
	if(this.isNumber(z1, z2)){
		return z1 - z2;
	} else {
		throw new Error("Parameter haben den falschen Datentyp");
	}
};
