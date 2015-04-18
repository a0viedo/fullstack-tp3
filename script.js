var i = 0;
var number = 45530;
var dividores = [];

while (i <= number) {
	if ((number % i) === 0 ) {
		dividores.push(i);
		i++;
	} else {
		i++;
	}
}

console.log(dividores);

