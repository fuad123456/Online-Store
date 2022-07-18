import {IData} from '../data/data'
import {data} from '../data/data'
import {filterArByColor} from '../modules/filter'



export function render(data:IData[],val?:boolean): void{
	// let div = document.createElement('div')
	let s= document.querySelector('#cards') as HTMLElement
	s.innerHTML=''
	data.map(function(el:IData,i){
		s.innerHTML+=`
		<div class="col col-md-4">
			<div class="my-card">
				<div class="box"> <img src="${el.url}" alt="" class="card-image"> </div>
				<div class="card-desc">
					<div class="title">${el.name}</div>
					<div class="desc">
						<div>${el.date}</div>
						<div>${el.popular}</div>
						<div>${el.price}</div>
						<div>${el.manufacturer}</div>
						<div>${el.color}</div>
						<div>${el.amount}</div>
					</div>
				</div>
			</div>
		</div>  
		`
	})

}
