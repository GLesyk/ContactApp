import {Router} from "./router.js";

const router = new Router();
router.init();

const abonentList = [
{
	avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
	name: 'Ivan',
	phone: '9379992',
},
{
	avatar: 'https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png',
	name: 'Petya',
	phone: '9379992',
},
{
	avatar: 'https://yt3.ggpht.com/ytc/AKedOLTlGVLrXzgZDwItF-m8Tux0NF5II9C-TIa6HgIalg=s900-c-k-c0x00ffffff-no-rj',
	name: 'Pavlo',
	phone: '9379992',
},
{
	avatar: 'https://yt3.ggpht.com/ytc/AKedOLTlGVLrXzgZDwItF-m8Tux0NF5II9C-TIa6HgIalg=s900-c-k-c0x00ffffff-no-rj',
	name: 'Alexander',
	phone: '937999289647',
},
];
const liseRow = document.getElementById('full_abonent_list');
const textToFind = document.getElementById('textToFind');

function seachKontakt(kontaktList){
	liseRow.innerHTML = '';
kontaktList.map(function(listInfo) {
	let template = `<div class="list__item">
						<div class="item__avatar">
							<img src="`+listInfo.avatar+`">
						</div>
						<div class="item__text">
							<p class="text__name">`+listInfo.name+`</p>
							<p class="text__number">`+listInfo.phone+`</p>
						</div>
						<div class="item__button">
							<button><i class="las la-pen edit"></i></button>
						</div>
					</div>`;
	liseRow.insertAdjacentHTML('beforeEnd',template);
})
}
seachKontakt(abonentList);
textToFind.addEventListener('keyup', function(e){
	if  (e.target.value.length > 0) {
		seachKontakt(abonentList.filter(function(seachBar)
		{
			return seachBar.name.toLowerCase().includes(e.target.value.toLowerCase()) //те що записується в поле пошуку!!

		}))

		}
		
		else {
			seachKontakt(abonentList);
		}
})

document.querySelectorAll('[data-route-action]').forEach(element => {
    element.addEventListener('click', e => {
        router.locate(e.target.getAttribute('data-route-action'));
    })
});


const btnAdd = document.getElementById('btnAdd');
const userName = document.getElementById('userName');
const userPhone = document.getElementById('userPhone');

btnAdd.addEventListener('click', function(){
	let name = userName.value;
	let phone = userPhone.value;
	if ( name.length <= 0 || phone.length <= 0) {
		return;
	}
	let contact = {
		avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
		name: name,
		phone: phone,
	}
	abonentList.push(contact);
	router.locate();
	seachKontakt(abonentList);
} )

