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
const btnAddNew = document.getElementById('AddNew');
const btnBackMainPage = document.getElementById('btnBackMainPage');
const btnAdd = document.getElementById('btnAdd');
const btnBackCreatePage = document.getElementById('btnBackCreatePage');
const btnSave = document.getElementById('btnSave');
const mainPage = document.getElementById('main_page');
const createPage = document.getElementById('create_page');
const editPage = document.getElementById('edit_page');
const userName = document.getElementById('userName');
const userPhone = document.getElementById('userPhone');

btnAddNew.addEventListener('click', function(){
		mainPage.classList.toggle ('disabled'),
		createPage.classList.toggle ('disabled');

});
btnBackMainPage.addEventListener('click', function(){
	if (mainPage.classList.contains('disabled')) {
		
		mainPage.classList.remove('disabled'),
		createPage.classList.add('disabled');
	}
});
btnBackCreatePage.addEventListener('click', function(){
	if (createPage.classList.contains('disabled')) {
		createPage.classList.remove('disabled');
		editPage.classList.add('disabled');

	}
});

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
	mainPage.classList.toggle ('disabled'),
	createPage.classList.toggle ('disabled');
	seachKontakt(abonentList);
} )

