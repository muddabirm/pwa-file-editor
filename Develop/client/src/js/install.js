const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferedPrompt = event
    //used to remove hidden class from button
    butInstall.classList.toggle('hidden',false) 

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const userPrompt = window.defferedPrompt
    if(!userPrompt){
        return
    }
    userPrompt.prompt() //showing the prompt on screen

    window.defferedPrompt = null
    butInstall.setAttribute('disabled',true)
    butInstall.textContent = 'installed....!'
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
//handle result

    window.defferedPrompt = null
});
