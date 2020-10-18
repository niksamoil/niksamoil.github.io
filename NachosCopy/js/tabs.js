const tabs = document.querySelectorAll('.winners__tipe-item'),
      tabsContent = document.querySelectorAll('.winners__list'),
      tabsParent = document.querySelector('.winners__tipe');



function hideTabContent() {
    tabsContent.forEach( item => {
        item.classList.add('display-hide');
        item.classList.remove('display-show');

    });

    tabs.forEach(item =>{
        item.classList.remove('winners__tipe-item_active');
    });
}

function showTabContent(i = 1) {
    tabsContent[i].classList.add('display-show');
    tabsContent[i].classList.remove('display-hide');

    tabs[i].classList.add('winners__tipe-item_active');
}


hideTabContent();
showTabContent();



tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    tabs.forEach((item, i) => {
        if(target === item) {
            hideTabContent();
            showTabContent(i);
        }
    })
});

