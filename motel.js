const motelCustomer = {
	name: "James Bond",
	birthDate: "1971-03-08",
	gender: "Male",
	prefRooms: ["Extra bed", "Extra key", "Smoking room", "Pool View"],
	payMethod: "Credit Card",
	mailAddress: {
		street: "2 Pond Place",
		city: "Gander",
		province: "NL",
		postal: "A3H 7Y9",
	},
	phone: "709-740-0466",
	checkInDate: {
		date: "2023-03-20",
		time: "15:00",
	},
	checkOutDate: {
		date: "2023-03-25",
		time: "11:00",
	},
	getAge: function () {
		const birthDate = new Date(this.birthDate);
		const now = new Date();
		let age = now.getFullYear() - birthDate.getFullYear();
		const monthDiff = now.getMonth() - birthDate.getMonth();
		if (
			monthDiff < 0 ||
			(monthDiff === 0 && now.getDate() < birthDate.getDate())
		) {
			age--;
		}
		return age;
	},
	getDurationOfStay: function () {
		const checkInDateTime = new Date(
			this.checkInDate.date + " " + this.checkInDate.time
		);
		const checkOutDateTime = new Date(
			this.checkOutDate.date + " " + this.checkOutDate.time
		);
		const diffTime = Math.abs(checkOutDateTime - checkInDateTime);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays;
	},
};
html = `
  <ul>
    <li>Name: ${motelCustomer.name} </li>
    <li>Gender: ${motelCustomer.gender} </li>
    <li>Age: ${motelCustomer.getAge()} </li>
    <li>Room preferences: ${motelCustomer.prefRooms.join(", ")} </li>
    <li>Payment method: ${motelCustomer.payMethod} </li>
    <li>Mailing Address: ${motelCustomer.mailAddress.street}, ${
	motelCustomer.mailAddress.city
}, ${motelCustomer.mailAddress.province}, ${
	motelCustomer.mailAddress.postal
} </li>
    <li>Phone number: ${motelCustomer.phone} </li>
    <li>Check-In date and time: ${motelCustomer.checkInDate.date} ${
	motelCustomer.checkInDate.time
} </li>
    <li>Check-Out date and time: ${motelCustomer.checkOutDate.date} ${
	motelCustomer.checkOutDate.time
} </li>
    <li>Duration of stay: ${motelCustomer.getDurationOfStay()} day(s) </li>
  </ul>
`;

document.body.innerHTML = html;
