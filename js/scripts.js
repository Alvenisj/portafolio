
const toggleTheme = document.getElementById('toggle-theme');
const toggleThemeIcon = document.getElementById('toggle-theme__icon');
const toggleThemeText = document.getElementById('toggle-theme__text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles =  document.documentElement.style;

const flagsElementUno = document.getElementById("flags-es");
const flagsElementDos = document.getElementById("flags-en");

// CÓDIGO AÚN NO FUNCIONA PORQUE TENGO UN ERROR EN LA FUNCIÓN QUE TRAE EL JSON
const textsToChange = document.querySelectorAll("[data-section]");

//*********************************************** */
// BANDERA DE ESPAÑA
flagsElementUno.addEventListener("click", (e) => {

    changelanguage(e.target.parentElement.dataset.language);
   
});

//BANDERA DE INGLATERRA
flagsElementDos.addEventListener("click", (e) => {

    changelanguage(e.target.parentElement.dataset.language);

})


//USAR EL JSON Y CAMBIAR EL TEXTO
const changelanguage = async language => {

    // BUSCAR CÓMO TRAER UN ARCHIVO JSON Y MOSTRARLO EN EL HTML
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
    
    //REVISAR PORQUE AÚN TIENE UN ERROR
    for (const textsToChanges of textsToChange) {
        const section = textsToChange.dataset.section;
        const value = textsToChange.dataset.value;

        textsToChange = innerHtml = texts[section][value]
    }
};



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

    rootStyles.setProperty("--primary-color", e.target.dataset.color);
    
})




