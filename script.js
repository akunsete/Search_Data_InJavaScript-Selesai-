"use strict";
const search = document.getElementById("Search");
const listItems = document.getElementById("ListItems");

let dataAvaible = ["minecraft","roblox","roadmap","kemenku","gameBaru!"];

search.addEventListener('input', function(){
    let valueSearch = search.value.replace(/\s+/g, "").toLocaleLowerCase();
    let dataFind = dataAvaible.find(datas => datas.toLocaleLowerCase().trim().includes(valueSearch))

    if(dataFind) {
        if(valueSearch.trim() === "") {
            listItems.innerHTML = "";
            return
        }
        let li = document.createElement("li");
        listItems.innerHTML = "";
        li.textContent = dataFind;
        listItems.appendChild(li);
    } else {
        listItems.innerHTML = "";aaaa
    };
});