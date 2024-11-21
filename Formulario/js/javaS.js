const mode = document.getElementById('mode_icon')

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    const nnn = document.getElementById('container')
    const butt = document.getElementById('login_button')
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        nnn.classList.add('gdark');
        butt.classList.add('gdark');
        
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
    nnn.classList.remove('gdark');
    butt.classList.remove('gdark');
});

