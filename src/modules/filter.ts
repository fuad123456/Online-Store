import {IData} from "../data/data"

export function filterPop(data:IData[],) {
	return data.filter((i)=>i.popular)
}
export function filterAmount(data:IData[],amount:number){
	return data.filter((i)=>i.amount>=amount)
}
export function filterManufacturer(data:IData[],manufacturer:string | undefined){
	return data.filter((i)=>i.manufacturer===manufacturer)
}
export function filterColor(data:IData[],color:string | undefined){
	return data.filter((i)=>i.color===color)
}