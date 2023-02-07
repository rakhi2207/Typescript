import { RequiredData } from "./interfaceRequired";
function getAttachedData(data:RequiredData):void
{
    let fd=document.getElementById("main");
    let h1=document.createElement('h1');
    h1.style.textAlign="center";
    h1.innerText=data.title;
    let p=document.createElement('p');
    p.innerText=data.author;
    fd!.appendChild(h1);
    p.style.paddingLeft="16%"
    fd!.appendChild(p);
    let img=document.createElement('img');
    img.src=data.imageUrl;
    img.classList.add("center");
    fd!.appendChild(img);
}

async function getDetail(){
    let params = new URLSearchParams(document.location.search);
    let name = params.get("url");
    console.log(name);
     let nameSplit=name!.toLowerCase().split(" ");
     name=nameSplit.join("-");
     console.log("name "+name)
    const value= await fetch(`http://localhost:8080/wholeInfo?title=${name}`);
    const data:RequiredData[]=await value.json();
    if(Object.keys(data).length==0)
    {
        let fd=document.getElementById("main");
        let h1=document.createElement('h1');
        h1.style.textAlign="center";
        h1.innerText="No Result Found";
        fd!.appendChild(h1);
    }
    for(let x of data){
        getAttachedData(x);
    }
}
getDetail();