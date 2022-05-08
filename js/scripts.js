
const toggleTheme = document.getElementById('toggle-theme');
const toggleThemeIcon = document.getElementById('toggle-theme__icon');
const toggleThemeText = document.getElementById('toggle-theme__text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles =  document.documentElement.style;


/*CON ESTE CÓDIGO LE CAMBIAMOS LA CLASE AL "BODY" */
toggleTheme.addEventListener('click', () => {

    /*CON TOGGLE A MODO DE INTERRUPTOR, SI TIENE LA CLASE LA QUITA, SINO LA PONE */
    document.body.classList.toggle('dark');
   
    if(toggleThemeIcon.src.includes('moon.svg')){
        toggleThemeIcon.src = "assets/icons/sun.svg";
        toggleThemeText.textContent = 'Light Mode'
    } else {
        toggleThemeIcon.src = "assets/icons/moon.svg";
        toggleThemeText.textContent = 'Dark Mode';

    }
});



toggleColors.addEventListener('click', (e) => {

   rootStyles.setProperty('--primary-color', e.target.dataset.color)
   
    
})




