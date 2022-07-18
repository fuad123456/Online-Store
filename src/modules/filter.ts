import {IData} from "../data/data"

export function filterArByPop(data:IData[],) {
	return data.filter((i)=>i.popular)
}
export function filterArByAmount(data:IData[],amount:number){
	return data.filter((i)=>i.amount>=amount)
}
export function filterArByManufacturer(data:IData[],manufacturer:string | undefined){
	return data.filter((i)=>i.manufacturer===manufacturer)
}
export function filterArByColor(data:IData[],color:string | undefined){
	return data.filter((i)=>i.color===color)
}