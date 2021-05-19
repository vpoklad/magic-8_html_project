let btn = document.getElementsByClassName('more__btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let content = this.previousElementSibling;
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            this.innerHTML = 'Less';
        } else {
            content.classList.add('hidden');
            this.innerHTML = 'Read more';
        }
    });
}




