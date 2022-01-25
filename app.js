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

var Departmen =["Administration","Marketing","Development","Finance"]
var level=["junior","Mid Senior","Senior"]
console.log(senior.max)
function employee(employeeID,full_name,Departmen,level,imageURL, salary,)
{
    this.employeeID
    this.full_name
    this.Departmen
    this.level
    this.imageURL
    this.salary
}
0.0075
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
}