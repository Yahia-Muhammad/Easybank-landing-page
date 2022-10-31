
let showList = document.querySelector("#show-list"),
    listHeader = document.querySelector("#list-header");

let checkList = true;

showList.onclick = function(){
    if(checkList){
        listHeader.style.transform = "translate(0px, 0px)";
    }else{
        listHeader.style.transform = "translate(0px, -380px)";
    }
    checkList = !checkList;
}