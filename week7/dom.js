        const title = document.getElementById('title');
            const btnred = document.getElementById('btnred');
            const btnblue = document.getElementById('btnblue');
            const btngreen = document.getElementById('btngreen');       
            btnred.addEventListener('click', () => {     title.classList.add('text-red');});
            btnblue.addEventListener('click', () => {  title.classList.add('text-blue');});
            btngreen.addEventListener('click', () => {  title.classList.add('text-green');});
       
