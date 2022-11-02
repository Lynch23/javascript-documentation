const inventory =  [
		{	
			id: 1,
			name: "Air Jordan 11 Retro high-top",
			brand: "Jordans",
			price: 399,
			quantity: 20,
			category: "Shoes",
			url: "./static/Air Jordan 11 Retro high-top.webp"
		}, {
			id: 2,
			name: "Tabi-toe high-top Sneakers",
			brand: "Maison Margiella",
			price: 499,
			quantity: 20,
			category: "Shoes",
			url: "./static/maison margiela.webp"
		}, {
			id: 3,
			name: "Monte Runner  high-top Sneakers",
			brand: "Moncler",
			price: 299,
			quantity: 20,
			category: "Shoes",
			url: "./static/moncler.webp"
		}, {
			id: 4,
			name: "Check-print shirt",
			brand: "AMIRI",
			price: 199,
			quantity: 20,
			category: "Clothings",
			url: "./static/AMIRI check-print shirt.webp"
		}, {
			id: 5,
			name: "Neo Classic City tote bag",
			brand: "Balenciaga",
			price: 99,
			quantity: 10,
			category: "Bags",
			url: "./static/Balenciaga Neo Classic City tote bag.webp"
		}, {
			id: 6,
			name: "BR 03-94 Multimeter Limited Edition 42mm",
			brand: "Bell & Ross",
			price: 1099,
			quantity: 20,
			category: "Watches",
			url: "./static/Bell & Ross BR 03-94 Multimeter Limited Edition 42mm.webp"
		}, {
			id: 7,
			name: "Zip-collar pullover sweatshirt",
			brand: "Isabel Marant Walid",
			price: 299,
			quantity: 20,
			category: "Clothings",
			url: "./static/isabel marant walid zip-collar pullover sweatshirt.webp"
		}, {
			id: 8,
			name: "Polished-finish shoulder bag",
			brand: "Lemaire",
			price: 299,
			quantity: 20,
			category: "Bags",
			url: "./static/Lemaire polished-finish shoulder bag.webp"
		}, {
			id: 9,
			name: "Tudor 2021 unworn Black Bay Fifty-Eight 42mm",
			brand: "Tudor",
			price: 2999,
			quantity: 20,
			category: "Watches",
			url: "./static/Tudor 2021 unworn Black Bay Fifty-Eight 42mm.webp"
		}, {
			id: 10,
			name: "Locman Italy Mare 300MT 43mm",
			brand: "Locman",
			price: 2599,
			quantity: 20,
			category: "Watches",
			url: "./static/Locman Italy Mare 300MT 43mm.webp"
		},  {
			id: 11,
			name: "V-neck dylan T-shirt",
			brand: "Rick Owens",
			price: 2599,
			quantity: 20,
			category: "Clothings",
			url: "./static/rick owens v-neck dylan t-shirt.jpg"
		},  {
			id: 12,
			name: "Versace medusa-motif monogram messenger bag",
			brand: "Versace",
			price: 599,
			quantity: 20,
			category: "Bags",
			url: "./static/versace medusa-motif monogram messenger bag.webp"
		}
	]

document.addEventListener('DOMContentLoaded', loadInventory, false)

function loadInventory() {
	sessionStorage.setItem('inventory', JSON.stringify(inventory))
	loadItems()
}

function resetInventory() {
	sessionStorage.removeItem('inventory')
	loadInventory()
}

if(sessionStorage.getItem('inventory')===null) {
	loadInventory()
} 





