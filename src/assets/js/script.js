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
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}


// category-list

const showHideBtns = document.querySelectorAll('.show-hide-list');
const categoryLists = document.querySelectorAll('.category-items');
const catalogCategoryBtn = document.querySelector('.show-more-btn')

if (showHideBtns && categoryLists) {
    function clearCategoryListsClasses() {
        categoryLists.forEach(el => {
            if(el.classList.contains('show')) {
                el.classList.remove('show');
                el.nextElementSibling.classList.remove('hide');
            }
        })
    }
    showHideBtns.forEach(el=> {
        let arr = el.previousElementSibling.querySelectorAll('li');
        let countContent = el.querySelector('.count')
        if (arr.length <= 4) {
            el.classList.add('hide');
        } else {
            let count = arr.length - 4;
            countContent.innerHTML = count
        }
        el.addEventListener('click' , (e)=> {
            clearCategoryListsClasses();
            let currContent = e.target.closest('.category-card');
            let currUl = currContent.querySelector('ul');
            let currLiArr = currUl.querySelectorAll('li');

            currContent.classList.add('active')
            currUl.classList.add('show');
            el.classList.add('hide');
        })
    })
    if(catalogCategoryBtn) {
        let arr = catalogCategoryBtn.previousElementSibling.querySelectorAll('.catalog-item');
        let countContent = catalogCategoryBtn.querySelector('.count')
        window.onresize = function() {
            if (window.innerWidth < 1024) {
                if (arr.length <= 5) {
                    el.classList.add('hide');
                } else {
                    let count = arr.length - 5;
                    countContent.innerHTML = count;
                }
            } else {
                if (arr.length <= 9) {
                    el.classList.add('hide');
                } else {
                    let count = arr.length - 9;
                    countContent.innerHTML = count;
                }
            }
        }
        catalogCategoryBtn.addEventListener('click' , ()=> {
            const ul = catalogCategoryBtn.closest('.content').querySelector('.catalog-category');
            ul.classList.add('show');
            catalogCategoryBtn.classList.add('hide');
        })
    }

}
// tabs

window.addEventListener('DOMContentLoaded', (event) => {
    const tabsBtns = document.querySelectorAll('.tabs-panel li');
    const cars = document.querySelectorAll('.tab-container .tab-content');


    if(tabsBtns){
      tabsBtns.forEach(function(el){
        el.addEventListener('click', function(ev){
          makeActive(ev.target);
        });
      });
    }
  function makeActive(target){
    let num = target.dataset.num;
    let selector = '.tab-container .tab-content[data-num="'+num+'"]';
    let targetTab = document.querySelector(selector);

    tabsBtns.forEach(function(el){
      el.classList.remove('active');
    });
    cars.forEach(function(el){
      el.classList.remove('active');
    });
    target.classList.add('active');
    targetTab.classList.add('active');

  }


  });

  // gallery

const thumbs = document.querySelectorAll('.mini-img');
const bigImages = document.querySelectorAll('.images img');
const thumbsList = document.querySelector('.thumbs');
const thumbsCounters = document.querySelectorAll('.thumb-count');

if (thumbsList) {
    thumbsCounters.forEach(el=> {
        const span = el.querySelector('span');
        const arr = el.previousElementSibling.querySelectorAll('li');
        if (arr.length <=5) {
            el.classList.add('hide')
        } else {
            span.innerHTML = arr.length - 5;
        }
        el.addEventListener('click' , ()=> {
            const currList = el.previousElementSibling ;
            currList.classList.add('show');
            el.classList.add('hide');
        })
    })

    function clearThumbClasses() {
        thumbs.forEach(el => {
            if(el.closest('li').classList.contains('active-thumb')){
                el.closest('li').classList.remove('active-thumb');
            }
        })
    }
  thumbs.forEach((el,i)=> {
    el.addEventListener('click' , (e)=> {
        let currbigImgs = e.target.closest('.gallery').querySelectorAll('.images img');
        clearThumbClasses()
        el.closest('li').classList.add('active-thumb');
        currbigImgs.forEach(img=> {
            if(img.classList.contains('active')) {
            img.classList.remove('active');
            }
        })
        bigImages[i].classList.add('active');

    })
  })
}
const productsSwipers = document.querySelectorAll('.products-tab-swiper');
if (productsSwipers) {
    productsSwipers.forEach(el=> {
        const swiper = new Swiper(el, {
            loop: true,
            slidesPerView: 2,
            navigation: {
              nextEl: '.products-btn-next',
              prevEl: '.products-btn-prev',
            },
            breakpoints: {
                320: {
                  slidesPerView: 2.1,
                },
                970: {
                  slidesPerView: 3,
                },
                1100: {
                  slidesPerView: 4,
                }
              }
          });
    })
}
const partnersSwiper = document.querySelector('.partners-swiper');
if(partnersSwiper) {
    const swiper = new Swiper(partnersSwiper, {
        loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
            },
            970: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            }
          }
      });
}
