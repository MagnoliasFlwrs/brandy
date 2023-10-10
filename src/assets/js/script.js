//attention
const attention = document.querySelector('.attention');
const attentionCloseBtn = document.querySelector('.attention-close');
attentionCloseBtn.addEventListener('click' , ()=> {
    attention.classList.add('hidden');
})

//pc-params
const paramsBtn = document.querySelector('.params');
const paramspanel = document.querySelector('.params-panel');
const searchInput = document.querySelector('.input-wrapper input');

if (paramsBtn) {
    paramsBtn.addEventListener('click' , ()=> {
        paramsBtn.classList.toggle('active');
        if (paramsBtn.innerHTML === 'Скрыть') {
            paramsBtn.innerHTML = 'Параметры';
        }else {
            paramsBtn.innerHTML = 'Скрыть';
        }
        paramspanel.classList.toggle('active');
        searchInput.classList.toggle('active');

    })

}

//search-results
const searchWrap = document.querySelector('.search-wrapper');
const overlay = document.querySelector('.overlay');
const resultWrap = document.querySelector('.results');

searchInput.addEventListener('input' , ()=> {
    overlay.classList.add('open');
    searchWrap.classList.add('to-result');
    resultWrap.classList.add('active')
})
overlay.addEventListener('click' , ()=> {
    overlay.classList.remove('open');
    searchWrap.classList.remove('to-result');
    resultWrap.classList.remove('active')
})



// custom select

const customSelects =  document.querySelectorAll('.select');

if (customSelects) {
    customSelects.forEach(el => {
        el.addEventListener('click' , (e)=> {
            let currentSelectWrap = e.target.closest('.select-wrap');
            let currentSelectBody = currentSelectWrap.querySelector('.select-list');
            let currentSelectOptions = currentSelectBody.querySelectorAll('li');
            let currentSelectTitle = el.querySelector('p');
            console.log(currentSelectTitle);
            currentSelectBody.classList.add('active');
            currentSelectOptions.forEach(option => {
                option.addEventListener('click' , ()=> {
                    currentSelectTitle.innerHTML = option.textContent;
                    currentSelectTitle.dataset.current = option.dataset.value;
                    currentSelectBody.classList.remove('active');
                })
            })
        })
    })
    document.addEventListener('click', (e)=> {
        let lists = document.querySelectorAll('.select-list.active')
        if (!e.target.closest('.select-wrap') && lists){
            lists.forEach(el=> {
                el.classList.remove('active');
            })

        }
    })

}

//mobile-menu

const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown-list');
const droprightScreens = document.querySelectorAll('.dropright-screen');
dropdown.addEventListener('click' , ()=> {
    dropdown.classList.toggle('active');
    dropdownList.classList.toggle('active');
})

const droprightLinks = document.querySelectorAll('.dropright');
const backBtns = document.querySelectorAll('.back');

droprightLinks.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.preventDefault();
        let currScreen = el.querySelector('.dropright-screen')
        currScreen.classList.add('active');
    })
})
backBtns.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.stopPropagation();
        let droprightScreen = e.target.closest('.dropright-screen');
        droprightScreen.classList.remove('active');
    })
})

const burgerBtn = document.querySelector('.burger-btn');
const burgerCloseBtn = document.querySelector('.burger-close-btn');
const mobileBody = document.querySelector('.mobile-menu');

burgerBtn.addEventListener('click' , ()=> {
    mobileBody.classList.add('active')
})
burgerCloseBtn.addEventListener('click' , ()=> {
    mobileBody.classList.remove('active')
})

const promoSwiper = document.querySelector('.promo-swiper');

if (promoSwiper) {
    const swiper = new Swiper(promoSwiper, {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}