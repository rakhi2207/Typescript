"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let page = 1, category = "", type = "articles";
let fd = document.getElementById("main");
function createCard(x) {
    let mdiv = document.createElement('div');
    mdiv.classList.add("parent");
    let div = document.createElement('div');
    div.classList.add("parent_image");
    let div1 = document.createElement('div');
    div1.classList.add("parent_text");
    let img = document.createElement("img");
    img.src = x.imageUrl;
    let a = document.createElement('a');
    a.href = "/outerPage.html?url=" + x.urlTitle;
    console.log("url Title " + x.urlTitle);
    let p = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    a.appendChild(p);
    p.innerText = x.title;
    p1.innerText = x.metaDescription;
    p2.innerHTML = x.author;
    div.appendChild(img);
    div1.appendChild(a);
    div1.appendChild(p1);
    div1.appendChild(p2);
    mdiv.appendChild(div);
    mdiv.appendChild(div1);
    fd.appendChild(mdiv);
}
function gettingPromiseData() {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `http://localhost:8080/?pagesize=16&page=${page}&category=${category}&type=${type}`;
        const value = yield fetch(url);
        const data = yield value.json();
        if (data.length < 16) {
            document.getElementById('more').disabled = true;
        }
        else {
            document.getElementById('more').disabled = false;
        }
        for (let x of data) {
            createCard(x);
        }
        page += 1;
    });
}
function assignable(e) {
    const help = e.target;
    type = "category";
    page = 1;
    if (help.innerHTML == "Trends") {
        category = "trends";
    }
    else if (help.innerHTML == "Advice") {
        category = "advice";
    }
    else if (help.innerHTML == "Relationships") {
        category = "relationships";
    }
    else if (help.innerHTML == "Inspiration") {
        category = "inspiration";
    }
    fd.innerHTML = " ";
    gettingPromiseData();
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        // let type="articles";
        category = "", type = "articles";
        fd.innerHTML = " ";
        let clickedValue = document.getElementsByClassName("clickables");
        for (let idx = 0; idx < clickedValue.length; idx++) {
            let element = clickedValue[idx];
            element.addEventListener("click", (e) => {
                assignable(e);
            });
        }
        ;
        gettingPromiseData();
    });
}
getData();
function searchData() {
    return __awaiter(this, void 0, void 0, function* () {
        page = 1;
        fd.innerHTML = " ";
        let search = document.getElementById("searchValue").value.toLowerCase();
        let url = `http://localhost:8080/search?page=${page}&search=${search}`;
        const value = yield fetch(url);
        const data = yield value.json();
        if (Object.keys(data).length == 0) {
            let fd = document.getElementById("main");
            let h1 = document.createElement('h1');
            h1.innerHTML = "No Result Found";
            fd.appendChild(h1);
            return;
        }
        for (let x of data) {
            createCard(x);
        }
    });
}
function getMoreData() {
    gettingPromiseData();
}
