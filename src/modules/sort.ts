import {IData} from '../data/data'

export function sortArByName(ar:IData[],value:string){
	if (value==='norm') return ar
	if(value==='reverse'){
		return ar.sort((a:IData,b:IData)=>{
			if (a.name>b.name) return -1
			else if (a.name<b.name) return 1
			else return 0
		})
	}
}
export function sortArByDate(ar:IData[],value:string){
	if(value==='date'){
		return ar.sort((a:IData,b:IData)=>{
			if (a.date>b.date) return -1
			else if (a.date<b.date) return 1
			else return 0
		})
	}
}