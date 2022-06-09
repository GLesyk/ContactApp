import {Router} from "./router.js";

const router = new Router();
router.init();

const abonentList = [
{
    id: 1,
	avatar: 'https://i.pinimg.com/originals/64/17/ef/6417ef82395842c3a2b4a1dfd9356ee6.jpg',
	name: 'Ivan',
	phone: '9379992',
},
{
    id: 2,
	avatar: 'https://cspromogame.ru//storage/upload_images/avatars/3981.jpg',
	name: 'Petya',
	phone: '9379992',
},
{
    id: 3,
	avatar: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
	name: 'Pavlo',
	phone: '9379992',
},
{
    id: 4,
	avatar: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
	name: 'Alexander',
	phone: '937999289647',
},
];
const liseRow = document.getElementById('full_abonent_list');
const textToFind = document.getElementById('textToFind');

function seachKontakt(kontaktList) {
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
                                <button data-contact-id="` + listInfo.id + `" data-action="edit-contact"><i class="las la-pen edit"></i></button>
                            </div>
                        </div>`;
        liseRow.insertAdjacentHTML('beforeEnd',template);
    });

    bindEditActionToContactList();
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

const edit_name = document.getElementById('edit_name');
const edit_phone = document.getElementById('edit_phone');
const edit_save = document.getElementById('edit_save');

btnAdd.addEventListener('click', function(){
	let name = userName.value;
	let phone = userPhone.value;
	if ( name.length <= 0 || phone.length <= 0) {
		return;
	}
	let contact = {
        id: Date.now(),
		avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
		name: name,
		phone: phone,
	}
	abonentList.push(contact);
	router.locate();
	seachKontakt(abonentList);
});

function bindEditActionToContactList() {
    document.querySelectorAll('[data-action="edit-contact"]').forEach(element => {
        element.addEventListener('click', event => {
            let currentId = event.target.parentElement.getAttribute('data-contact-id');
            let filteredContact = abonentList.find(contact => contact.id === parseInt(currentId));

            edit_name.value = filteredContact.name;
            edit_phone.value = filteredContact.phone;
            edit_save.setAttribute('data-edit-contact-id', currentId);

            router.locate('edit_page');
        });
    });
}

edit_save.addEventListener('click', event => {
    let contactId = event.target.getAttribute('data-edit-contact-id');

    abonentList.map(contact => {
        if(contact.id === parseInt(contactId)) {
            contact.name = edit_name.value;
            contact.phone = edit_phone.value;
        }
    });

    seachKontakt(abonentList);
    router.locate('main_page');
});