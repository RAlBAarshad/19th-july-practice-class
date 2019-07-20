let intelligenceLevels = ["smart", " intelligent", "brave", "different", "unique", "awesome"];


function showIntelligence() {
    let name = document.querySelector("input").value;
    let randm = parseInt(Math.random() * intelligenceLevels.length)
    // let randomIndex = parseInt(Math.random()),
    alert(intelligenceLevels[randm]);


    // let name = document.querySelector("input").value;
    // let intelligence;
    // if(name==false){
    //     alert("please enter a name");
    // } else{ 
    //     if (name.charAt(0).toLowerCase()=="a") {
    //         intelligence=intelligenceLevels[5];
    //         alert (intelligence);
    //     } else if (name.charAt(0).toLowerCase() =="b"){
    //         intelligence=intelligenceLevels[1];
    //         alert (intelligence);
    //     } else if (name.charAt(0).toLowerCase() =="c"){
    //         intelligence=intelligenceLevels[2];
    //         alert (intelligence);
    //     } else if (name.charAt(0).toLowerCase() =="d"){
    //         intelligence=intelligenceLevels[4];
    //         alert (intelligence);
    //     }
    // }

}
