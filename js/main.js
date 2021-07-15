const btn = document.querySelector('.get');
const price = document.querySelector('.container_price');
const bar = document.querySelector('.left_bar');
const getMoney = document.querySelector('.get_money');
const application = document.querySelector('.application');

btn.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        getMoney.classList.add('hidden');
        getMoney.style.right = 20 + 'px';
        price.style.display = 'block';

        if (timePassed >= 400) { 
       		getMoney.style.display = 'none';
       		price.classList.add('show');
       		price.style.left = 80 + 'px';
       		application.style.marginTop = 320 + 'px';
        	clearInterval(timer) 
        }

      }, 20);
   }