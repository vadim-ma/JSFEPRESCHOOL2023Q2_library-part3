console.log('Итоговая оценка: 196/204\n\n### Этап 1: Пользователь не зарегистрирован 50/50\n- **Ограниченная карусель в блоке `About`** 25/25\n  1. Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15\n  2. На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2\n  3. Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2\n  4. Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2\n  5. На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2\n  6. Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2\n- **Слайдер в блоке `Favorites`** 23/23\n  1. "Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15\n  2. На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2\n  3. Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца. +2\n  4. Во время анимаций высота блока `Favorites` не должна меняться. +2\n  5. ❗Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока `Favorites`. +2\n- **До регистрации**\n  1. Нажатие на кнопку `Check the card` ни к чему не приведёт.\n- **До авторизации** 2/2\n  1. Иконка юзера в хедере отображается в виде силуэта.\n  2. В блоке `Favorites` все кнопки должны иметь имя `Buy`, а не `Own`. +2\n\n### Этап 2: Пользователь на этапе регистрации 45/49\n- **Меню авторизации при нажатии на иконку пользователя** 8/8\n  1. Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2\n  2. На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2\n  3. То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +2\n  4. Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2\n- **Модальное окно `REGISTER`** 29/29\n  1. Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n  2. При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно `REGISTER`, где есть поля `First name`, `Last name`, `E-mail` и `Password`. +2\n  3. При нажатии кнопки `Sign Up` в блоке  `Digital Library Cards` также появляется модальное окно `REGISTER`. +2\n  4. Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n  5. При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n  6. В данном случае, ограничения по полям - все поля должны быть не пустыми. +2\n  7. Пароль должен быть не короче 8 символов. +2\n  8. В поле `E-mail` должна быть валидация типа email. +2\n- **Окончание регистрации** 8/8\n  1. Данные сохраняются в хранилище **localStorage**, в том числе и пароль, хотя в реальной жизни так делать нельзя. +2\n  2. Иконка пользователя меняется на заглавные буквы имени. +2\n  3. Отображение страницы приходит в состояние после авторизации (этап 4). +2\n  4. Будет сгенерирован девятизначный `Card Number` случайным образом в формате 16-ричного числа. +2\n- **При наличии регистрации, но будучи не авторизованным** 0/4\n  1. Блок `Digital Library Cards`. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки `Check the card` на 10 секунд. 0/2\n  2. Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. 0/2\n\n### Этап 3: Пользователь на этапе входа в учётную запись после регистрации. 29/29\n- **Модальное окно `LOGIN`** 27/27\n  1. Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n  2. При нажатии на кнопку `Log In` появляется модальное окно `LOGIN`, где есть поля `E-mail or readers card` и `Password`. +2\n  3. При нажатии кнопки `Log In` в блоке  `Digital Library Cards` также появляется модальное окно `LOGIN`. +2\n  4. Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n  5. При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n  6. Для авторизации все поля должны быть не пустыми. +2\n  7. Пароль должен быть не короче 8 символов. +2\n- **Блок `Favorites`** 2/2\n  1. Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку `Buy` открывается модальное окно `LOGIN`. +2\n\n### Этап 4: Пользователь после входа в учётную запись 72/76\n- **Меню профиля при нажатии на иконку с инициалами пользователя** 16/16\n  1. При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2\n  2. Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2\n  3. На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2\n  4. То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2\n  5. Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2\n  6. ❗Вместо надписи Profile отображается девятизначный `Card Number`. Для `Card Number` можно использовать меньший шрифт чтобы надпись вметилась в контейнер, +2\n  7. Нажатие на кнопку `My Profile` открывает модальное окно `MY PROFILE`. +2\n  8. Нажатие на кнопку `Log Out` приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2\n- **Модальное окно `MY PROFILE`** 25/25\n  1. Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n  2. В случае если имя и фамилия слишком длинные и не влазят в блок то должен произойти перенос фамилии на следующую строку.\n  3. Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2\n  4. Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии `Own`. Значение варьируется 0-16. +2\n  5. Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2\n  6. Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n  7. При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2\n- **Блок `Favorites`** 6/6\n  1. При нажатии на любую кнопку `Buy`, еще до покупки абонемента, открывается модальное окно `BUY A LIBRARY CARD`. +2\n  2. При нажатии на любую кнопку `Buy`, после покупки абонемента, меняет вид кнопки на неактивную `Own`, добавляя единицу к счетчику книг в профиле. +2\n  3. Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе `Rented Books`. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке `Rented Books` становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл `Rented Books` скроллироваться не должен 2/2\n- **Модальное окно `BUY A LIBRARY CARD`** 25/27\n  1. ❗Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще. +2\n  1. Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n  2. При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n  3. Для того, чтобы кнопка `Buy` была активна, все поля должны быть не пустыми. 0/2\n  4. `Bank card number` должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +2\n  5. `Expiration code` содержит 2 поля с ограничением в 2 цифры. +2\n  6. CVC должен содержать 3 цифры. +2\n  7. После удачного нажатия на кнопку `Buy`, окно закрывается, и больше мы к нему не возвращаемся.\n- **Блок `Digital Library Cards`** 0/2\n  1. При наличии авторизации вместо кнопки `Check the Card` будут отображаться данные пользователя и бейджи, как на дизайне `LibraryCard after login in account`. 0/2\n\n');

const burger = document.querySelector(".burger-ico");
const burgerMenu = document.querySelector(".burger-menu");
const links = document.querySelectorAll(".burger-menu--list .navigation-link");
burger.addEventListener('click', () => {
    burger.classList.toggle('burger-menu--opened');
    burgerMenu.classList.toggle('burger-menu--opened');
});

function closeBurgerMenu() {
    burger.classList.remove('burger-menu--opened');
    burgerMenu.classList.remove('burger-menu--opened');
}
links.forEach(element => {
    element.addEventListener('click', closeBurgerMenu);
});
document.addEventListener('click', function closeMenuHandler_Burger(event) {
    // click outside menu and its open button
    if (
        (burgerMenu === event.target || burgerMenu.contains(event.target))
        || (burger === event.target || burger.contains(event.target))
    ) {
        return;
    }
    closeBurgerMenu();
});

const caruselButtonLeft = document.querySelector(".carusel--nav-button-left");
const caruselButtonRight = document.querySelector(".carusel--nav-button-right");
const caruselImageList = document.querySelector(".carusel-image-list");
const caruselPagination = document.querySelector('.carusel-pagination');
let paginationButtonCount = 3;
let curImg = 0;

function mediaQueryChange(e) {
    if (e.matches) {
        paginationButtonCount = 5;
    }
    else {
        paginationButtonCount = 3;
    }
    updateCarusel(curImg);
}
const mediaQuery = window.matchMedia('(max-width: 1439px)');
mediaQuery.onchange = mediaQueryChange;
mediaQueryChange(mediaQuery);

const stdDuration = parseFloat(getComputedStyle(caruselImageList).getPropertyValue('transition-duration'));
// const stdDuration = 1; //sec

function updateCarusel(newImg) {
    if (newImg < 0) {
        newImg = 0;
    }
    if (newImg >= paginationButtonCount) {
        newImg = paginationButtonCount - 1;
    }

    const diff = Math.abs(curImg - newImg);
    if (diff === 0) {
        return;
    }
    curImg = newImg;

    caruselImageList.style.transitionDuration = `${diff * stdDuration}s`;


    const shift = caruselImageList.children[0].offsetLeft - caruselImageList.children[curImg].offsetLeft;
    caruselImageList.style.transform = `translateX(${shift}px)`;

    const activeButton = document.querySelector(".carusel-button-active")
    activeButton.classList.remove('carusel-button-active');
    const selector = `.carusel-button[data-img-number='${curImg + 1}']`;
    const newActiveButton = document.querySelector(selector);
    newActiveButton.classList.add('carusel-button-active');

    if (curImg === 0) {
        caruselButtonLeft.classList.remove('carusel--nav-button-active');
    } else {
        caruselButtonLeft.classList.add('carusel--nav-button-active');
    }
    if (curImg === paginationButtonCount - 1) {
        caruselButtonRight.classList.remove('carusel--nav-button-active');
    } else {
        caruselButtonRight.classList.add('carusel--nav-button-active');
    }
}
function shiftCaruselLeft() {
    shiftCarusel(-1);
}
function shiftCaruselRight() {
    shiftCarusel(1);
}
function shiftCarusel(direction) {
    updateCarusel(curImg + direction);
}
caruselButtonLeft.addEventListener('click', shiftCaruselLeft);
caruselButtonRight.addEventListener('click', shiftCaruselRight);

function setCurImg(event) {
    const target = event.target.closest('li');
    if (!target) {
        return;
    }
    const newImg = parseInt(target.dataset.imgNumber) - 1;
    updateCarusel(newImg);
}
caruselPagination.addEventListener('click', setCurImg);

function chanageSeason(event) {
    document.querySelector('.active-season').classList.remove('active-season');
    const season = document.forms.seasons.season.value;
    const selector = `.favorites-books[data-season='${season}']`;
    const newActive = document.querySelector(selector);
    newActive.classList.add('active-season');
}

document.forms.seasons.selector.onchange = chanageSeason;

const profileMenuBtn = document.querySelector('.user-icon');
const profileMenu = document.querySelector('.profile');
const loginMenuItem = document.querySelector('.open-login-dialog-btn');
const registerMenuItem = document.querySelector('.open-register-dialog-btn');

function toggleMenu(menu) {
    if (currentUser) {
        profileMenu.firstElementChild.textContent = currentUser.cardNumber;
        profileMenu.firstElementChild.style.fontSize = '11px';
        loginMenuItem.textContent = 'My profile'
        registerMenuItem.textContent = 'Log Out';
    } else {
        profileMenu.firstElementChild.textContent = 'Profile';
        profileMenu.firstElementChild.style.fontSize = '';
        loginMenuItem.textContent = 'Log In'
        registerMenuItem.textContent = 'Register';
    }
    menu.classList.toggle('open');
}
function closeMenu(menu) {
    menu.classList.remove('open');
}
function isOpenMenu(menu) {
    menu.classList.contains('open');
}

profileMenuBtn.addEventListener('click', function toggleMenuProfile_Handler(event) {
    toggleMenu(profileMenu);
});
document.addEventListener('click', function closeMenuProfile_Handler(event) {
    // click outside menu and its open button
    if (
        (profileMenu === event.target || profileMenu.contains(event.target))
        || (profileMenuBtn === event.target || profileMenuBtn.contains(event.target))
    ) {
        return;
    }
    closeMenu(profileMenu);
});

let userDb;
let currentUser = null;
function saveUserDb() {
    localStorage.setItem('userDb', JSON.stringify(userDb));
}
userDb = localStorage.getItem('userDb');
if (userDb) {
    userDb = JSON.parse(userDb);
} else {
    const exampleUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jd@example.com',
        password: '12345678',
        cardNumber: 'F00234030',
        visits: 23,
        bonuses: 1240,
        books: [
            'The Last Queen, Clive Irving',
            'Dominicana, Angie Cruz'
        ],
    }
    userDb = [exampleUser];
    saveUserDb();
}
function getUserInitials() {
    const firstName1 = currentUser.firstName[0].toUpperCase();
    const lastName1 = currentUser.lastName[0].toUpperCase();
    return `${firstName1}${lastName1}`;
}
function getUserTitle() {
    return `${currentUser.firstName} ${currentUser.lastName}`;
}
function updateUserUI() {
    if (currentUser) {
        document.querySelector('.user-icon-badge').classList.add('user-loggedin');
        const userInitials = document.querySelector('.user-initials');
        userInitials.textContent = getUserInitials();
        userInitials.classList.add('user-loggedin');
        userInitials.title = getUserTitle();
    } else {
        document.querySelector('.user-icon-badge').classList.remove('user-loggedin');
        const userInitials = document.querySelector('.user-initials');
        userInitials.textContent = '';
        userInitials.classList.remove('user-loggedin');
    }
    updateBooksUI();
}
function updateProfile(){
    if(!currentUser){
        return;
    }
    myprofileDialog.querySelector('.myprofile--user-avatar').textContent = getUserInitials();
    myprofileDialog.querySelector('.myprofile--user-name').textContent = getUserTitle();
    const cards = myprofileDialog.querySelector('.myprofile--cards');
    cards.children[0].querySelector('.myprofile--card--counter').textContent = currentUser.visits.toString();
    cards.children[1].querySelector('.myprofile--card--counter').textContent = currentUser.bonuses.toString();
    cards.children[2].querySelector('.myprofile--card--counter').textContent = currentUser.books.length.toString();
    const books = myprofileDialog.querySelector('.myprofile--books-list');
    books.innerHTML = '';
    currentUser.books.forEach((book) => {
        const newBook = document.createElement('li');
        newBook.textContent = book;
        newBook.classList.add('myprofile--books--list-item');
        books.append(newBook);
    });

    myprofileDialog.querySelector('.myprofile--library-card--number').textContent = currentUser.cardNumber;
}
function getNewCardNumber() {
    const letters = '0123456789ABCDEF';
    const maxLength = 9;
    const base = letters.length;
    let ret = '';
    for (let i = 0; i < maxLength; i++) {
        ret += letters[Math.floor(Math.random() * base)];
    }

    return ret;
}
function registerUser(event) {
    const newUser = {
        firstName: document.forms.register.firstName.value,
        lastName: document.forms.register.lastName.value,
        email: document.forms.register.email.value.toLowerCase(),
        password: document.forms.register.password.value,
        cardNumber: getNewCardNumber(),
        visits: 1,
        bonuses: 0,
        books: [],
        hasLibCard: false,
    }
    const curUserIndex = userDb.findIndex(user => user.email === newUser.email);
    if (curUserIndex === -1) {
        userDb.push(newUser);
    } else {
        userDb.splice(curUserIndex, 1, newUser);
    }
    saveUserDb();
    currentUser = newUser;
    updateUserUI();
}

function loginUser(event) {
    const testUser = {
        username: document.forms.login.username.value.toLowerCase(),
        cardNumber: document.forms.login.username.value.toUpperCase(),
        password: document.forms.login.password.value,
    }
    const curUserIndex = userDb.findIndex(user => (user.email === testUser.username || user.cardNumber === testUser.cardNumber) && (user.password === testUser.password));
    if (curUserIndex === -1) {
        alert('Wrong email, card number or password');
    } else {
        currentUser = userDb[curUserIndex];
        currentUser.visits++;
        saveUserDb();
        updateUserUI();
    }

}
function buyLibcard(){
    currentUser.hasLibCard = true;
    saveUserDb();
}

function closeDialogOutside(event, dialog) {
    var rect = dialog.getBoundingClientRect();
    var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
        dialog.close();
    }
}
const registerDialog = document.querySelector('dialog.register');
const loginDialog = document.querySelector('dialog.login');
const myprofileDialog = document.querySelector('dialog.myprofile');
const libcardDialog = document.querySelector('dialog.libcard');

registerMenuItem.addEventListener('click', function (event) {
    closeMenu(profileMenu);
    if (currentUser) {
        currentUser = null;
        updateUserUI();

    } else {
        registerDialog.showModal();
    }
});
registerDialog.addEventListener('click', function (event) {
    closeDialogOutside(event, registerDialog);
});
registerDialog.addEventListener('submit', function (event) {
    registerUser(event);
});
loginDialog.addEventListener('submit', function (event) {
    loginUser(event);
});
libcardDialog.addEventListener('submit', function (event) {
    buyLibcard();
});

loginMenuItem.addEventListener('click', function (event) {
    closeMenu(profileMenu);
    if (currentUser) {
        updateProfile();
        myprofileDialog.showModal();
    } else {
        loginDialog.showModal();
    }
});
loginDialog.addEventListener('click', function (event) {
    closeDialogOutside(event, loginDialog);
});
myprofileDialog.addEventListener('click', function (event) {
    closeDialogOutside(event, myprofileDialog);
});
document.querySelector('.signup-btn')
    .addEventListener('click', function (event) {
        registerDialog.showModal();
    });
document.querySelector('.login-btn')
    .addEventListener('click', function (event) {
        loginDialog.showModal();
    });

document.querySelector('.register--close-btn').addEventListener('click', function (event) {
    registerDialog.close();
});
document.querySelector('.register--login-btn').addEventListener('click', function (event) {
    registerDialog.close();
    loginDialog.showModal();
});

document.querySelector('.login--close-btn').addEventListener('click', function (event) {
    loginDialog.close();
});
document.querySelector('.login--register-btn').addEventListener('click', function (event) {
    loginDialog.close();
    registerDialog.showModal();
});

document.querySelector('.myprofile--close-btn').addEventListener('click', function (event) {
    myprofileDialog.close();
});
document.querySelector('.libcard--close-btn').addEventListener('click', function (event) {
    libcardDialog.close();
});
const copyBtn = document.querySelector('.myprofile--library-card--copy-img')
copyBtn.addEventListener('click', function (event) {
    navigator.clipboard.writeText(currentUser.cardNumber)
    .then(function(){
        myprofileDialog.querySelector('.myprofile--library-card--copy-message').textContent = 'copied';
        setTimeout( function(){
            myprofileDialog.querySelector('.myprofile--library-card--copy-message').textContent = '';
        }, 1000);
})});

function isRentredBook(testBook){
    return currentUser.books.find(book => book === testBook);
}
function updateBooksUI(){
    books = document.querySelectorAll('li.book');
    books.forEach((book) => {
        let buy = true;
        if(currentUser){
            const bookTitle = book.querySelector('.book-title').textContent;
            const bookAuthor = book.querySelector('.book-author').textContent;
            const rentedBook = `${bookTitle}, ${bookAuthor}`
            if(isRentredBook(rentedBook)){
                buy = false;
            }
        }
        const btn = book.querySelector('.favorites-button');
        if(buy){
            btn.classList.add('button-buy');
            btn.classList.remove('button-own');
        }else{
            btn.classList.remove('button-buy');
            btn.classList.add('button-own');
        }
    });
}
function buyBook(book){
    const bookTitle = book.querySelector('.book-title').textContent;
    const bookAuthor = book.querySelector('.book-author').textContent;
    const rentedBook = `${bookTitle}, ${bookAuthor}`
    
    if(!isRentredBook(rentedBook)){
        currentUser.books.push(rentedBook);
        saveUserDb();
    }
}

function buyBook_Handler(event){
    if(this.classList.contains('button-own')){
        return;
    }
    if(currentUser){
        if(currentUser.hasLibCard){
            buyBook(this.parentElement);
            this.classList.remove('button-buy');
            this.classList.add('button-own');
        }else{
            libcardDialog.showModal();
        }
    }else{
        loginDialog.showModal();
    }
}
document.querySelectorAll('.button-buy').forEach(element => {
    element.addEventListener('click', buyBook_Handler);
});