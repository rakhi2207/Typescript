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
function getAttachedData(data) {
    let fd = document.getElementById("main");
    let h1 = document.createElement('h1');
    h1.style.textAlign = "center";
    h1.innerText = data.title;
    let p = document.createElement('p');
    p.innerText = data.author;
    fd.appendChild(h1);
    p.style.paddingLeft = "16%";
    fd.appendChild(p);
    let img = document.createElement('img');
    img.src = data.imageUrl;
    img.classList.add("center");
    fd.appendChild(img);
}
function getDetail() {
    return __awaiter(this, void 0, void 0, function* () {
        let params = new URLSearchParams(document.location.search);
        let name = params.get("url");
        console.log(name);
        let nameSplit = name.toLowerCase().split(" ");
        name = nameSplit.join("-");
        console.log("name " + name);
        const value = yield fetch(`http://localhost:8080/wholeInfo?title=${name}`);
        const data = yield value.json();
        if (Object.keys(data).length == 0) {
            let fd = document.getElementById("main");
            let h1 = document.createElement('h1');
            h1.style.textAlign = "center";
            h1.innerText = "No Result Found";
            fd.appendChild(h1);
        }
        for (let x of data) {
            getAttachedData(x);
        }
    });
}
getDetail();
