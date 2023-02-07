import { RequiredData} from "./interfaceRequired";
let page:number=1,category:string="",type:string="articles";
let fd:HTMLElement|null=document.getElementById("main");
function createCard(x:RequiredData):void
{
    let mdiv:HTMLDivElement|null=document.createElement('div');
    mdiv.classList.add("parent");
     let div:HTMLDivElement=document.createElement('div');
     div.classList.add("parent_image");
     let div1:HTMLElement=document.createElement('div');
     div1.classList.add("parent_text");
    let img:HTMLImageElement=document.createElement("img");
    img.src=x.imageUrl;
    let a:HTMLAnchorElement=document.createElement('a');
    a.href="/outerPage.html?url="+x.urlTitle;

    console.log("url Title "+x.urlTitle);

    let p:HTMLHeadElement=document.createElement('h2');
    let p1:HTMLParagraphElement=document.createElement('p');
    let p2:HTMLParagraphElement=document.createElement('p');
    a.appendChild(p);
    p.innerText=x.title;
    p1.innerText=x.metaDescription;
    p2.innerHTML=x.author; 
    div.appendChild(img);
    div1.appendChild(a);
    div1.appendChild(p1);
    div1.appendChild(p2);
    mdiv.appendChild(div);
    mdiv.appendChild(div1);
    fd!.appendChild(mdiv);
}

async function gettingPromiseData()
{
    let url:string=`http://localhost:8080/?pagesize=16&page=${page}&category=${category}&type=${type}`;
    const value:Response=await fetch(url);
    const data:RequiredData[]=await value.json();
    if(data.length<16)
    {
        (document.getElementById('more') as HTMLInputElement).disabled=true;
    }else{
        (document.getElementById('more') as HTMLInputElement).disabled=false;
    }
    for(let x of data){
        createCard(x)
    }
    page+=1;
}

function assignable(e:Event)
{
    const help=e.target as Element;
    type="category";
    page=1;
    if(help.innerHTML=="Trends")
    {
        category="trends";
    }else if(help.innerHTML=="Advice")
    {
        category="advice";
    }else if(help.innerHTML=="Relationships")
    {
        category="relationships";
    }else if(help.innerHTML=="Inspiration")
    {
        category="inspiration";
    }
    (fd as HTMLInputElement).innerHTML=" ";
    gettingPromiseData();
}
async function getData()
{
    // let type="articles";
    category="",type="articles";
    (fd as HTMLInputElement).innerHTML=" ";
    let clickedValue=document.getElementsByClassName("clickables");
    for(let idx=0;idx<clickedValue.length;idx++)  {
        let element=clickedValue[idx];
       element.addEventListener("click",(e)=>
       {
            assignable(e)
       })
    };

    gettingPromiseData();
}
getData();

async function searchData()
{
     page=1;
    fd!.innerHTML=" ";
    let search=(document.getElementById("searchValue") as HTMLButtonElement)!.value.toLowerCase();
    let url=`http://localhost:8080/search?page=${page}&search=${search}`;
    const value=await fetch(url);
    const data:RequiredData[]=await value.json();
    if(Object.keys(data).length==0)
    {
        let fd=document.getElementById("main");
        let h1=document.createElement('h1');
        h1.innerHTML="No Result Found";
        fd!.appendChild(h1);
        return ;
    }
    for(let x of data){
      createCard(x)
    }

}
function getMoreData()
{
    gettingPromiseData();
}