function changeBg(){
    let t= event.target.id;
    if (t === "pictures"){
        document.querySelector(".i3").classList.add("visible");  
    } else if (t === "professional"){
        document.querySelector(".i2").classList.add("visible");  
        document.body.style.color="white"
    } else if(t === "blog"){
        document.querySelector(".i1").classList.add("visible");  
        document.body.style.color="black"
    }
}  
function restoreBg(){
    let x = event.target.id; 
    console.log(x);
    if (x === "pictures"){
        document.querySelector(".i3").classList.remove("visible");  
    } else if (x === "professional"){
        document.querySelector(".i2").classList.remove("visible");  
        document.body.style.color="black    "
    } else if(x === "blog"){
        document.querySelector(".i1").classList.remove("visible");  
        document.body.style.color="black"
    }
} 

async function completeName() {
    let restName = ["a", "s", "b", "o", "l", "a"];
    
    await Promise.all(restName.map((element, index) => 
        new Promise(resolve => {
            setTimeout(() => {
                document.querySelector("#name").innerHTML += element;
                resolve();
            }, 100 * (Math.random() * 10));
        })
    ));
    
    if (document.querySelector("#name").innerHTML !== "Akshat P.asbola") {
        document.querySelector("#name").innerHTML += "?";
    }
};
function restoreName(){
    let status = 1;
    while (status === 1){
        if (document.querySelector("#name").innerHTML=== "Akshat P."){
            status = 0;
        } else{
            t = document.querySelector("#name").innerHTML;
            document.querySelector("#name").innerHTML = t;
        }
    }

}