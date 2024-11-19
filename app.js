let backet = document.querySelector('.basket');
let open__div = document.querySelector('.open__div');



backet.addEventListener('click', function(){ 

    if (open__div.classList.contains('new')){
        open__div.classList.remove('new');
        open__div.classList.add('new1');
    }else if (open__div.classList.contains('new1')){
        open__div.classList.add('new');
        open__div.classList.remove('new1');
    }else {
        open__div.classList.add('new');
    }
});