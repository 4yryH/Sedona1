const modalShow = document.querySelector('.modal_search');
const searchButton = document.querySelector('.show_search');
const searchForm = document.querySelector('.form_search');
const adults = document.querySelector('.input_adults');
const childs = document.querySelector('.input_childs');
const dateStart = document.querySelector('.date_start');
const dateEnd = document.querySelector('.date_end');

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (modalShow.classList.contains('modal_search_show')) {
            evt.preventDefault();
            modalShow.classList.remove('modal_search_show')
        }
    }
})

let isStorageSupport = true;
let storageAdults = "";
let storageChilds = "";
let storageDateStart = "";
let storageDateEnd = "";

try {
    storageAdults = localStorage.getItem('number_of_adults');
    storageChilds = localStorage.getItem('number_of_childs');
    storageDateStart = localStorage.getItem('start')
    storageDateEnd = localStorage.getItem('end')
} catch (err) {
    isStorageSupport = false;
}

searchButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalShow.classList.toggle('modal_search_show');
    if (storageAdults) {
        adults.value = storageAdults;
    } if (storageChilds) {
        childs.value = storageChilds;
    } if (storageDateStart) {
        dateStart.value = storageDateStart;
    } if (storageDateEnd) {
        dateEnd.value = storageDateEnd;
    }
})

searchForm.addEventListener('submit', function (evt) {
    if (!adults.value & !childs.value) {
        evt.preventDefault();
        modalShow.classList.remove('modal-error');
        modalShow.offsetWidth = modalShow.offsetWidth;
        modalShow.classList.add('modal-error');
        console.log('Не указано количество персон')
    } if (!dateStart.value || !dateEnd.value)  {
        evt.preventDefault();
        modalShow.classList.remove('modal-error');
        modalShow.offsetWidth = modalShow.offsetWidth;
        modalShow.classList.add('modal-error');
    } else {
        {
            if (isStorageSupport) {
                localStorage.setItem('number_of_adults', adults.value);
                localStorage.setItem('number_of_childs', childs.value);
                localStorage.setItem('start', dateStart.value);
                localStorage.setItem('end', dateEnd.value);
            }
        }
    }
})