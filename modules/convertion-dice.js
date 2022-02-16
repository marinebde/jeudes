function convertionLettre1a6(chiffre) {
	let lettre;
	switch (chiffre) {
		case 1:
			lettre = "one";
			break;
		case 2:
			lettre = "two";
			break;
		case 3:
			lettre = "three";
			break;
		case 4:
			lettre = "four";
			break;
		case 5:
			lettre = "five";
			break;
		case 6:
			lettre = "six";
            break;
    }   
		return lettre;
};

export function convertion(chiffre) {
	if (chiffre >= 0 && chiffre < 7 ) {
		return convertionLettre1a6(chiffre);
	}
};
