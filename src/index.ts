import "./styles/style.css";
import { IData } from "./data/data";
import { data } from "./data/data";
import { filterArByColor, filterArByPop, filterArByManufacturer } from "./modules/filter";
import { render } from "./modules/render";
// console.log(data);
//this email
type IDataLauncher = {[key: string]: string|undefined}

// console.log(filterArByPop(data,true));
let dataNew: IData[] = data;

var state: IData[] = [];

localStorage.clear();
let checkbox = document.querySelectorAll(
  ".input-check"
) as NodeListOf<HTMLInputElement>;
// checkbox.forEach((el: HTMLInputElement, i: number) => {
//   el.addEventListener("change", function () {
//     if (el.value == "blue" || el.value == "black" || el.value == "red") {
//       if (el.checked) {
//         let d = filterArByColor(dataNew, el.value);
//         if (!localStorage.getItem("test") || state.length==0) {
//           localStorage.setItem("test", JSON.stringify(d));
//           state = [...d];
//         } else {
//           let d = filterArByColor(state, el.value);
//           let r = JSON.parse(localStorage.getItem("test") as string);
//           console.log(d);
// 		  if (d.length!==0) {
// 			  state = [ ...d];
// 		  }else {
// 			let element=document.querySelector('#cards')!
// 			element.innerHTML='Cовпаденией не найдено'
// 			// console.log('here');
// 			return
// 		  }
//           localStorage.setItem("test", JSON.stringify(state));
//         }
//       } else {
//         state = state.filter(function (eli: IData, i) {
//           return eli.color !== el.value;
//         });
//         localStorage.setItem("test", JSON.stringify(state));
//       }
//     } else {
//       if (el.checked) {
//         let d = filterArByPop(state);
//         if (!localStorage.getItem("test")) {
//           localStorage.setItem("test", JSON.stringify(d));
//           state = [...d];
//         } else {
//           let d = filterArByPop(state);
//           let r = JSON.parse(localStorage.getItem("test") as string);
//         //   console.log(r);
//           state = [...r, ...d];
//           localStorage.setItem("test", JSON.stringify(state));
//         }
//       } else {
//         state = state.filter(function (eli: IData, i) {
//           return !eli.popular;
//         });
//         localStorage.setItem("test", JSON.stringify(state));
//       }
//     }
//     render(state);
//   });
// });
let manufacturer = document.querySelectorAll(".manufacturer-img") as NodeListOf<HTMLElement>;;
// manufacturer.forEach(el => {
//   el.addEventListener("click", function s (e) {

//     let parent = el.parentElement as HTMLElement;
//     if (!parent.classList.contains("active")) {
//       parent.classList.add("active");
// 	  let attr:string=el.dataset.manufacturer!;
//       if (!localStorage.getItem("test") || state.length==0) {
// 		let d = filterArByManufacturer(dataNew, attr);
// 		console.log(d);
//         localStorage.setItem("test", JSON.stringify(d));
//         state = [...d];
//       }
// 	  else {
// 		let d = filterArByManufacturer(dataNew,attr);
// 		let r = JSON.parse(localStorage.getItem("test") as string);
// 		console.log(r);
// 		state = [...r, ...d];
// 		localStorage.setItem("test", JSON.stringify(state));
// 	  }
//     }
// 	else if (parent.classList.contains("active")) {
// 		parent.classList.remove("active");
// 		state = state.filter(function (eli: IData, i) {
// 			return eli.manufacturer !==el.dataset.manufacturer;
// 		  });
// 		//   console.log(el.classList.contains("active")); 
// 		  localStorage.setItem("test", JSON.stringify(state));
// 	}
// 	render(state);
//   });

// });

let allInputsOfColor=document.querySelectorAll('input[data-color]') as NodeListOf<HTMLInputElement>;
let allInputsOfPopular=document.querySelectorAll('input[data-popular]') as NodeListOf<HTMLInputElement>;
let arrayForDataLauncher:IDataLauncher[] = [];
let allImages=document.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
allImages.forEach(function(eli){
	let parent = eli.parentElement as HTMLElement;
	eli.addEventListener('click', function(){
		if (!parent.classList.contains("active")) {
		  parent.classList.add("active");
		}else{
			parent.classList.remove("active");
		}
	})
})
function analize() {
	arrayForDataLauncher=[]
	allImages.forEach(function(eli){
		let parent = eli.parentElement as HTMLElement;
		if (parent.classList.contains('active')){
		let attr= eli.dataset ;
		arrayForDataLauncher.push(attr)
		}
	})
	allInputsOfColor.forEach(function(eli){
		if (eli.checked){
		let attr= eli.dataset
		arrayForDataLauncher.push(attr)
		}
	})
	allInputsOfPopular.forEach(function(eli){
		if (eli.checked){
		let attr= eli.dataset
		arrayForDataLauncher.push(attr)
		}
	})
}

	let manufactItems:IData[] = [];
	let colorItems:IData[] = [];
	let filterAfterManufact: IData[]=[]
	let popularItems: IData[]=[]
// analize()

function launcher(data:IDataLauncher[]){
	// state=[]
	let isImgActive=false
	let c=false
	allImages.forEach(function(eli){
		let parent = eli.parentElement as HTMLElement;
		if(parent.classList.contains('active')){
			// f=dataNew
			isImgActive=true
		}
	})
	allInputsOfColor.forEach(function(eli){
		if(eli.checked){
			c=true
		}
	})
	colorItems=[]
	manufactItems=[]
	filterAfterManufact=[]
	if (data.length!==0){
		data.map(function(eli){
			if(eli.manufacturer){
				let elManufact=filterArByManufacturer(dataNew,eli.manufacturer)
				manufactItems=[...manufactItems,...elManufact]
				console.log(isImgActive);
				state=manufactItems
			}
			if(eli.color){
				if(manufactItems.length==0){
					let elColor=filterArByColor(dataNew,eli.color)
					colorItems=[...colorItems,...elColor]
				}else{
					if(isImgActive){
						let elColor=filterArByColor(manufactItems,eli.color)
						filterAfterManufact=[...filterAfterManufact,...elColor]
						console.log(isImgActive);
					}
				}

			}
			if(eli.popular){
				if(manufactItems.length==0){
					let elPop=filterArByPop(dataNew)
					popularItems=[...popularItems,...elPop]
				}else{
					if(isImgActive){
						let elPop=filterArByPop(manufactItems)
						filterAfterManufact=[...filterAfterManufact,...elPop]
						console.log(isImgActive);
					}
				}

			}
			console.log(isImgActive);
			// console.log(main);
		})
		if(manufactItems.length==0 && colorItems.length !==0){
			state=colorItems
			console.log('m',colorItems);
		}
		else if(manufactItems.length!=0 && c==false){
			state=manufactItems
			console.log('f',manufactItems);
		}
		else if(manufactItems.length!=0 && isImgActive!==false){
			state=filterAfterManufact
			// console.log('f',f);
			console.log(filterAfterManufact.length);
			console.log(colorItems.length);
		}
		console.log(data);
		
	}else{
		state=[]
	}
	// state=m
	// console.log(b);
	
}
document.addEventListener('click',function(){
	analize();
	launcher(arrayForDataLauncher)
	render(state)

	// console.log(array);
	// console.log(state);
	console.log('-------------');
	// console.log(array.length);
	
});
// state=dataNew
// render(state)