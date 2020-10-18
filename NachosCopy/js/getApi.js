let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Accept", "application/json");
myHeaders.append("Actie-Promo-Action", "0a3cfda0-21fb-4510-878a-8016a0c18e15");

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

let url = 'https://stage.actie.ru/api/v1/checks/winners'



fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {

        // console.log(result.checks);
        const data = result.checks;

        let winList = document.querySelectorAll('.winners__list');

        
        let searchBtn = document.querySelector('.winners__body-btn');
        let arr = [];
        const btnMob = document.querySelector('.winners__btn-mobile-wrapper');


        
        data.forEach((element, i) => {
          
            arr.push(element);
            const {
                prise,
                phone,
                draw_period
            } = element;

            let newContent = `
                <div class="winners__list-item">
                    <img src="./img/winners/mobile/jbl-speaker.png" alt="jbl-speaker">

                    <div class="winners__prise">${prise}</div>
                    <div class="winners__tel">${phone}</div>
                    <div class="winners__data">${draw_period}</div>
                </div>

            `;
            let newContentMob = `
                <div class="winners__list-item">
                    <img src="./img/winners/mobile/jbl-speaker.png" alt="jbl-speaker">

                    <div class="winners__prise">${prise}</div>
                    <div class="winners__tel">${phone}</div>
                    <div class="winners__data">${draw_period}</div>
                </div>

            `;
           

            if (i <= 7) {
                if (draw_period.length > 9) {
                    winList[1].innerHTML += newContent;
                }
                if (draw_period.length < 15) {
                    winList[0].innerHTML += newContent;
                }
            }

            const btn = document.querySelector('.winners__btn');


            function tabsPc() {

                if (i > 7) {
                    if (draw_period.length > 9) {
                        winList[1].innerHTML += newContent;
                    }
                    if (draw_period.length < 15) {
                        winList[0].innerHTML += newContent;
                    }
                }
                if (i = element.length) {
                    btn.removeEventListener('click', tabsPc);
                }

            }

            function tabsMob() {
                if(i > 3) {
                    winList[1].innerHTML += newContent;
                }
                if (i = element.length) {
                    btn.removeEventListener('click', tabsMob);
                }

            }

            btn.addEventListener('click', tabsPc);
            btnMob.addEventListener('click', tabsMob);

        });

       searchBtn.addEventListener('click', ()=>{
            let inputValue = document.querySelector('.winners__body-search .winners__body-input').value;
           
            
            arr.forEach((item, i) =>{
                const {
                    prise,
                    phone,
                    draw_period
                } = item;

                console.log(item);

                let str = inputValue.slice(-2);
                if(phone.includes(str, -2) && draw_period.length > 9) {
                    winList[1].innerHTML = ` 
                    <div class="winners__list-item">
                        <img src="./img/winners/mobile/jbl-speaker.png" alt="jbl-speaker">
    
                        <div class="winners__prise">${prise}</div>
                        <div class="winners__tel">${phone}</div>
                        <div class="winners__data">${draw_period}</div>
                    </div>`
                    winList[1].classList.add('display-show');
                    winList[1].classList.remove('display-hide');

                    tabs[1].classList.add('winners__tipe-item_active');
                    tabs[0].classList.remove('winners__tipe-item_active');
                    tabs[2].classList.remove('winners__tipe-item_active');
                    winList[0].classList.remove('winners__tipe-item_active');
                    winList[2].classList.remove('winners__tipe-item_active');
                    winList[0].classList.remove('display-show');
                    winList[2].classList.remove('display-show');
                    winList[0].classList.add('display-hide');
                    winList[2].classList.add('display-hide');
                } else if(phone.includes(str, -2) && draw_period.length < 15) {
                    winList[0].innerHTML = ` 
                    <div class="winners__list-item">
                        <img src="./img/winners/mobile/jbl-speaker.png" alt="jbl-speaker">
    
                        <div class="winners__prise">${prise}</div>
                        <div class="winners__tel">${phone}</div>
                        <div class="winners__data">${draw_period}</div>
                    </div>`
                    winList[0].classList.add('display-show');
                    winList[0].classList.remove('display-hide');

                    tabs[0].classList.add('winners__tipe-item_active');
                    tabs[1].classList.remove('winners__tipe-item_active');
                    tabs[2].classList.remove('winners__tipe-item_active');
                    winList[1].classList.remove('winners__tipe-item_active');
                    winList[2].classList.remove('winners__tipe-item_active');
                    winList[1].classList.remove('display-show');
                    winList[2].classList.remove('display-show');
                    winList[1].classList.add('display-hide');
                    winList[2].classList.add('display-hide');

                }
            });
        });

    })
    .catch(error => console.log('error', error));


