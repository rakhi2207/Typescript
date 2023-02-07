import { RequiredData } from "../models/interfaceRequired";
export async function getData(url:string)
{
    try {
        const value = await fetch(url);
          const data: RequiredData[] = await value.json();
          return data;
      } catch {
        console.log("There is some error fetching data.");
        const data:RequiredData[]=[];
        return data;
      }
}