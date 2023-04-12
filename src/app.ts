//#1 Lekcja
/* let age: number = 21;
age = 22;

let ageAsString: string ="dwadziescia jeden";
ageAsString = "dziesiec";
ageAsString = `${age}`;

console.log(ageAsString);


const add = (v1:number, v2:number) => v1 + v2;
console.log(add(10, 5));
 */

//#2 Lekcja
/* const input1Element:HTMLInputElement = document.querySelector("#input1");
const input2Element:HTMLInputElement  = document.querySelector("#input2");
const addButtonElement = document.querySelector("button");

const add = (v1:number, v2:number) => v1 + v2;

addButtonElement.addEventListener("click", () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
}) */

//#3 Lekcja
/* const logAge = (age: number | string) => {
    console.log(`Hej mam ${age} lat!`);
};

logAge(22);
logAge("dwadziescia dwa");

let test: string | number | boolean;

 */

//#4 Lekcja
/* const buttonElement = document.querySelector("button");

const calculatePrice = (originalPrice: number, hasDiscount: boolean) =>{
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
}

buttonElement.addEventListener("click", () =>{
    const originalPrice:number = 50;
    const hasDiscount:boolean = new URLSearchParams(window.location.search
        ).get("discount") ==="true";

    console.log(calculatePrice(originalPrice,hasDiscount));

}); */

//#5 Lekcja

import { Task, Category } from "./types/types";
import renderTasks from "./helpers/render-tasks.helpers.js";
import {renderCategories} from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement : HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory : Category ;




const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: "hobby",
    }, 
    {
        name: "Póść na siłkę",
        done: true,
        category: "gym",
    }, 
    {
        name: "Nakarmić kota",
        done: false,
        category: "work",
    },
];







const addTask = (task: Task) =>{
    tasks.push(task);
};

const updateSelectedCategory =(newCategory: Category) =>{
    selectedCategory = newCategory;
}

addButtonElement.addEventListener("click", (event: Event) =>{
 
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false, 
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});

renderCategories(categories, 
    categoriesContainerElement, 
    updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);