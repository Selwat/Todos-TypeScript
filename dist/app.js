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
import renderTasks from "./helpers/render-tasks.helpers.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
