const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const city = document.getElementById('city');
const country = document.getElementById('country');



form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const lnameValue = fname.value.trim();
    const fnameValue = lname.value.trim();
    
	const emailValue = email.value.trim();
	const cityValue = city.value.trim();
	const countryValue = country.value.trim();
	
	if(fnameValue === '') {
        setErrorFor(fname,'First Name cannot be blank');
	} else {
		setSuccessFor(fname);
	}
    if(lnameValue === '') {setErrorFor(lname,'Last Name cannot be blank');
	} else {
		setSuccessFor(lname);
	}

	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(cityValue === '') {
		setErrorFor(city, 'City cannot be blank');
	} else {
		setSuccessFor(city);
	}
	
	if(countryValue === '') {
		setErrorFor(country, 'Country cannot be blank');
	}else{
		setSuccessFor(country);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}