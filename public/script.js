const container = document.querySelector(".container");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
const select = document.getElementById("movie");



function total(){
    let selectedSeat = container.querySelectorAll(".seat.selected").length;
    //console.log(selectedSeat);
    let price = select.value;
    amount.innerText = selectedSeat * price;
    count.innerText = selectedSeat;
}

container.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        total();
    }
})

select.addEventListener("change", (e)=>{
    total();
})