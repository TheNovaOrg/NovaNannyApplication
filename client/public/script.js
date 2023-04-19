document.addEventListener("DOMContentLoaded", ()=>{
    let fragment = window.location.hash
    if (fragment !== ''){
        let section = document.querySelector(fragment)
        if (section !== null){
            console.log(fragment)
            section.scrollIntoView()
        }
    }
})
