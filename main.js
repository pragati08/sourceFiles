let home = () =>{
    console.log("inside function........");
    var link1 = document.getElementById("main-1");
    link1.scrollIntoView();      
}

let news = () =>{
    var link2 = document.getElementById("main-2");
    link2.scrollIntoView();
}

let contact = () =>{
    var link3 = document.getElementById("main-3");
    link3.scrollIntoView();
}

let about = () =>{
    var link4 = document.getElementById("main-4");
    link4.scrollIntoView();
}

const divthree = document.getElementById("main-3");
const linkcss = document.getElementById("link-3");


const callbackFunction = function(entries){
    let videoEntry = entries[0]; // we have only one entry
    if(videoEntry.isIntersecting) {
        // console.log('hello');
        entries.linkcss.style.color("blue")
    }   
}
 

const observer = new IntersectionObserver(callbackFunction,{
    
})

observer.observe(divthree);
 
