function uebung2_BasicCalculator() {
}

uebung2_BasicCalculator.prototype.isNumber = function (toCheck1, toCheck2) {
	if(isNaN(toCheck1) || isNaN(toCheck2) || toCheck1 == null || toCheck2 == null) {
		return false;
	} else {
		return true;
	}
}

uebung2_BasicCalculator.prototype.division = function (z1, z2) {
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

uebung2_BasicCalculator.prototype.multiplication = function multiplication(z1, z2) {
	if(this.isNumber(z1, z2)) {
		return z1*z2;
	} else {
		throw new Error("Parameter haben den falschen Datentyp");
	}
};

uebung2_BasicCalculator.prototype.addition = function addition(z1, z2) {
	if(this.isNumber(z1, z2)) {
		return z1 + z2;
	} else {
		throw new Error("Parameter haben den falschen Datentyp");
	}
};

uebung2_BasicCalculator.prototype.subtraction = function subtraction(z1, z2) {
	if(this.isNumber(z1, z2)){
		return z1 - z2;
	} else {
		throw new Error("Parameter haben den falschen Datentyp");
	}
};
