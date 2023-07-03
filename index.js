let count = 0;
document.getElementById("increment-btn").addEventListener("click", function(){
    count++;
    document.getElementById("count-el").innerText = count;
});

document.getElementById("decrement-btn").addEventListener("click", function(){
    if(count > 0){
        count--;
        document.getElementById("count-el").innerText = count;
    }
});

document.getElementById("save-btn").addEventListener("click", function(){
    let countStr = count + " - ";
    document.getElementById("save-el").textContent += countStr;
    count = 0;
    document.getElementById("count-el").innerHTML = count;
});
function reset(){
    document.getElementById("save-el").textContent = "Previous Entries: ";
}
