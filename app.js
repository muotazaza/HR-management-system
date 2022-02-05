`use strict`
//You will create a constructor to generate an employee object which will be rendered in the main section from your app.js file.

//Employee ID

//Full Name

//Department:

//Administration
//Marketing
//Development
//Finance
//Level:

//Junior
//Mid-Senior
//Senior
//Image URL

//Salary

//You will create a prototype function for calculating the salary using the provided table by generating a random number between the minimum and maximum salary for each level, use the below table to calculate the salary depends on the employee level.

//After calculating the random salary you should calculate the net salary where the tax percent is 7.5.

//Level	Min	Max
//Senior	1500	2000
//Mid-Senior	1000	1500
//Junior	500	1000
//You will create a render prototype function to render each employee name with their salary in the home page.

//Use the information shown in the table below to create employees instances.

//Employee ID	Full Name	Department	Level
//1000	Ghazi Samer	Administration	Senior
//1001	Lana Ali	Finance	Senior
//1002	Tamara Ayoub	Marketing	Senior
//1003	Safi Walid	Administration	Mid-Senior
//1004	Omar Zaid	Development	Senior
//1005	Rana Saleh	Development	Junior
//1006	Hadi Ahmad	Finance	Mid-Senior
var senior,mid_senior,junior

// var Departmen =["Administration","Marketing","Development","Finance"]
// var level=["junior","Mid Senior","Senior"]
// console.log(senior.max)
let employeeForm= document.getElementbyid('employeeForm');
let  employeecrad =document.getElementById('employeecard');


function ID(x){

    var num = 1;
    var string = "" + num;
    var id = "0000";
    x = id.substring(0, id.length - string.length) + string;
    num++;
    return x;
    }
function employee(employeeID,full_name,Departmen,level,imageURL, salary,)
{
    this.employeeID
    this.full_name
    this.Departmen
    this.level
    this.imageURL
    this.salary
}
function handelsubmet (event){
    event.preventDefault();
    let employeeID =event.target.employeeID.value;
    let full_name =event.targe.full_name.value;
    let Department =event.target.Department.value ;
    let Deparr=Department.split(','); 
    let level =event.target.level.value;
let arrlev =level.split(',');
 let ID= events.target.id.value;
   // console.log(`${this.employeeID} ${this.full_name}${this.Departmen}${this.level}`)
}

// function ID(x){

//     var num = 1;
//     var string = "" + num;
//     var id = "0000";
//     x = id.substring(0, id.length - string.length) + string;
//     num++;
//     return x;
//     }
employeeForm.AddEventslistener('submit ', handelsubmet)
 employee.prototype.render = function () {
     for(let i =0;i<employee.length;i++)
{
     let div = document.createElement('div');
     dinksSection.appendChild(div);
     let h4 = document.createElement('h4');
     div.appendChild(h4);
     h4.textContent=`${this.full_name}`
     let p = document.createElement('p');
     dinksSection.appendChild(div);
     p.textContent=`${this.ID}     ${this.Department}${this.level}${this.employeeID}`
     let img = document.createElement('img');
        div.appendChild(img);

}
 }
    
//     
//     h4.textContent = this.name;

//     let p = document.createElement('p');
//     div.appendChild(p);
//     if(this.isCold && this.isHot){
//         p.textContent =`${this.name} is available Hot and Cold and it has the following ingredients : `
//     }else if(this.isCold){
//         p.textContent =`${this.name} is available Cold and it has the following ingredients : `
//     }else if(this.isHot){
//         p.textContent =`${this.name} is available Hot and it has the following ingredients : `
//     }
  
//     let ul = document.createElement('ul');
//     div.appendChild(ul);
//     console.log(this.ingredients);
//     for(let i=0; i < this.ingredients.length ;i++){
//         let li = document.createElement('li');
//         ul.appendChild(li);
//         li.textContent = this.ingredients[i];
//     }


   let img = document.createElement('img');
     div.appendChild(img);
     img.setAttribute('src',this.one);
     img.setAttribute('alt',);

//     let p2 = document.createElement('p');
//     div.appendChild(p2);
//     p2.textContent = `price : ${this.price}` ;

// }



// function handelSubmit(event) {
//     event.preventDefault();
//     let name = event.target.name.value;
//     let ingredientsString = event.target.ingredients.value;
//     let ingredientsArr = ingredientsString.split(',');
//     //    console.log(ingredientsArr);
//     let isCold = event.target.isCold.checked;
//     let isHot = event.target.isHot.checked;
/*employee.prototype.render =function(){
    employeeID


}
//for ()
function getRandomNumberBetween(level)
{ var x ; 
    if (level == "junior")

    x= Math.floor(Math.random()*(1000-500+1)+500) ;
    return x - x *0.0075 ; 
    if (level == "Mid Senior")
    
    x= Math.floor(Math.random()*(1500-1000+1)+1000);
    return x - x *0.0075 ; 

    if (level == "Senior")
    
    x= Math.floor(Math.random()*(2000-1500+1)+1500);
    return x - x *0.0075 ;
}*/