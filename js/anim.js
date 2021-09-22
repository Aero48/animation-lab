//Initialize class and id elements
let elements = document.getElementsByClassName("element");
let purpleBoxes = document.getElementsByClassName("purpleEl");

let titleDiv = document.getElementById("titleEl");

//Makes everything with the elements class fade in on page load
for(let i = 0; i<elements.length; i++){
    TweenLite.from(elements[i], {duration: 1, alpha:0});
}

//Makes the title move in from the right on page load
TweenLite.from(titleDiv, {duration: 1, x:100});

//Iterates through the array of purple box elements
for(let i = 0; i<purpleBoxes.length; i++){
    //Makes purple boxes fade in on page load
    TweenLite.from(purpleBoxes[i], {duration: 1,  alpha:0});
    //Event listeners for when elements are moused over
    purpleBoxes[i].addEventListener("mouseover", function(){
        TweenLite.to(purpleBoxes[i], {duration: 0.5, backgroundColor: "#CE58CE"}); 
    });
    purpleBoxes[i].addEventListener("mouseout", function(){
        TweenLite.to(purpleBoxes[i], {duration: 0.5, backgroundColor: "#800080"}); 
    });
    //Makes everything fade out when one of the boxes is clicked on
    purpleBoxes[i].addEventListener("click", function(){
        for(let i = 0; i<elements.length; i++){
            TweenLite.to(elements[i], {duration: 1, alpha:0});
        }
        TweenLite.to(titleDiv, {duration: 1, x:100});
        for(let i = 0; i<purpleBoxes.length; i++){
            TweenLite.to(purpleBoxes[i], {duration: 1, alpha:0});
        }
    })
}