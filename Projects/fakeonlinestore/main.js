let itemCategory = document.querySelectorAll('.item-category')
let searchItem = document.querySelector('.search-items')
let sortItem = document.querySelector('.sort-items')
let cart = []
let cartItems = document.querySelector('.cart-items')
let returnedCategory = ''
//let returnedSort = 'category'
// Load Items
function loadItems(retrievedItems = JSON.parse(sessionStorage.getItem('inventory'))) {
	let items = document.querySelector('.items')
	let itemsNum = document.querySelector('.results-num')
	resultNum = retrievedItems.length === 1 ? 'Item' : 'Items'
	let result = ''
	retrievedItems.map(x => {
		result += `
		<div class="item" id="${x.id}">
		<div class="image">
		<img src="${x.url}" alt="${x.name}" loading="lazy"></div>
		<div class="item-x">
		<p>Brand:&nbsp;</p>
		<p class="brand">${x.brand}</p>
		</div>
		<div class="item-x">
		<p>Name:&nbsp;</p>
		<p class="name">${x.name}</p>
		</div>
		<div class="item-x">
		<p>Category:&nbsp;</p>
		<p class="category">${x.category}</p>
		</div>
		<div class="item-x">
		<p>Price:&nbsp;</p>
		<p class="price">$${x.price}</p>
		</div>
		<div class="item-x">
		<button class="btn btn-cart"></button>
		</div>
		</div>
		`
	})
	items.innerHTML = result
	itemsNum.textContent = `${retrievedItems.length} ${resultNum} Returned`
	addToCart()
	loadCart()
	cartPopup()
}


// search items 
searchItem.onsubmit = function(e) {
	e.preventDefault()
	searchArray = JSON.parse(sessionStorage.getItem('inventory')).filter(y => 
		y.name.toLowerCase().includes(e.target[0].value.toLowerCase()))
	loadItems(searchArray)
	removeActive()
	Array.from(itemCategory).map(x => x.getAttribute('id') == 'all' ? x.classList.add('active'):x.classList.remove('active'))
	e.target[0].value = ''
}

// Filter items
Array.from(itemCategory).forEach(x => {
	x.onclick = function() {
		returnedCategory = x.getAttribute('id')
		removeActive()
		x.classList.add('active')
		returnedCategoryArray(returnedCategory)
	}
})

// Returned filtered Array
function returnedCategoryArray(itemCat) {
	if(itemCat === 'all' || itemCat === '') {
		loadItems()
	} else {
		categoryArray = JSON.parse(sessionStorage.getItem('inventory')).filter(y =>
			y.category.toLowerCase() === itemCat.toLowerCase()
		)
		loadItems(categoryArray)
	}
}


function removeActive() {
	Array.from(itemCategory).map(x => x.classList.remove('active'))
}

// create cart
function createCart() {
	sessionStorage.setItem('cart', JSON.stringify(cart))
}

if(sessionStorage.getItem('cart') === null) {
	createCart()
}




// Add Items To Cart
function addToCart() {
	let itemsList = document.querySelectorAll('.item')
	cart = [...JSON.parse(sessionStorage.getItem('cart'))]
	cartItems.style.display = cart.length === 0 ? 'none' : 'block'
	Array.from(itemsList).forEach(x => {
	x.onmouseover = function() {
		isFound = cart.some(y => +y.id === +x.id)
		x.querySelector('.btn-cart').style.visibility = 'visible'
		if(isFound) {
			x.querySelector('.btn-cart').innerText = 'Remove From Cart'
			x.querySelector('.btn-cart').onclick = function() {
				foundIndex = cart.findIndex(product => +product.id === +x.id)
				cart.splice(foundIndex,1)
				x.querySelector('.btn-cart').innerText = 'Add To Cart'
				cartItems.innerText = cart.length
				cartItems.style.display = cart.length === 0 ? 'none' : 'block'
				sessionStorage.setItem('cart', JSON.stringify(cart))
				loadCart()
			}

		} else {
			x.querySelector('.btn-cart').innerText = 'Add To Cart'
			x.querySelector('.btn-cart').onclick = function() {
				let item = {}
				item.id = +x.id
				item.name = x.querySelector('.name').textContent
				item.brand = x.querySelector('.brand').textContent
				item.category = x.querySelector('.category').textContent
				item.price = x.querySelector('.price').textContent
				item.qty = 1
				cart.push(item)
				x.querySelector('.btn-cart').innerText = 'Remove From Cart'
				cartItems.innerText = cart.length
				cartItems.style.display = cart.length === 0 ? 'none' : 'block'
				sessionStorage.setItem('cart', JSON.stringify(cart))
				loadCart()
			}
		}
	}
})


Array.from(itemsList).forEach(x => {
	x.onmouseout = function() {
		x.querySelector('.btn-cart').style.visibility = 'hidden'
	}
})
}

// Load Cart
function loadCart() {
	let realCart= document.querySelector('.your-cart-items')
	let totalNumber = document.querySelector('.total-number')
	let cartFooter = document.querySelector('.cart-footer')
	let result = `<div class="cart-header">
				<div>Name</div>
				<div>Qty</div>
				<div>Price</div>
			</div>
			<div class="line"></div>`
	cartItems.innerText = cart.length
	
	
	if(cart.length === 0) {
		realCart.innerHTML = `<div style="text-align: center; margin-top: 30px;">
		Cart is Empty</div>`
		cartFooter.style.display = 'none'
	} else {
		cart.map(x => {
			result += `
			<div class="cart-body" id="${x.id}">
			<div>${x.name}</div>
			<div class="btns">
				<div class="cart-qty">${x.qty}</div>
			</div>
			<div>${x.price}</div>
			<div class="btn btn-remove">&times;</div>
			</div>`
	})
	total = cart.map(x => +x.price.substring(1))
			.reduce((a,b) => a + b)
	cartFooter.style.display = 'block'
	totalNumber.innerText = `$${total}`
	realCart.innerHTML = result
   }

}


// Load Cart Popup
function cartPopup() {
	let cartList = document.querySelector('.cart')
	let cartPopup = document.querySelector('.cart-popup')
	let popup = document.querySelector('#popup')
	let btnClose = document.querySelector('.btn-close')
	let checkOut = document.querySelector('.btn-cart-checkout')
	let realCart= document.querySelector('.your-cart-items')
	let cartFooter = document.querySelector('.cart-footer')
	let removeItem = document.querySelectorAll('.btn-remove')

	cartList.onclick = function() {
		cartPopup.style.display = 'block'
		popup.style.display = 'block'
		returnedCategoryArray(returnedCategory)
	}

	btnClose.onclick = function() {
		cartPopup.style.display = 'none'	
		popup.style.display = 'none'
	}

	// Remove Item from cart
	Array.from(removeItem).forEach(item => {
		item.onclick = function() {
			deleteId = +item.parentElement.getAttribute('id')
			foundIndex = cart.findIndex(product => +product.id === deleteId)
			cart.splice(foundIndex,1)
			sessionStorage.setItem('cart', JSON.stringify(cart))
			returnedCategoryArray(returnedCategory)
		}
	})

	checkOut.onclick = function() {
		realCart.innerHTML = `<div style="text-align: center; margin-top: 30px;">
		Thanks shopping with us</div>`
		cartFooter.style.display = 'none'
		cartItems.style.display = 'none'
		cart.length = 0
		sessionStorage.setItem('cart', JSON.stringify(cart))
	}
}
