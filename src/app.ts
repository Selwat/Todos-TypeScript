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


/* <li>
<label for="task-1">Wyrzucić smieci</label>
<input type="checkbox" id="task-1" name="Wyrzucić smieci" />
</li> */
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement : HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: {
    name: string;
    done: boolean;
}[] = [{
    name: "Wyrzucić śmieci",
    done: false,
}, {
    name: "Póść na siłkę",
    done: true,
}, {
    name: "Nakarmić kota",
    done: false,
}];



const render = () =>{
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        const id: string = `task-${index}`;

        const labelElement: HTMLElement = document.createElement("label");
        labelElement.innerHTML = task.name;
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name= task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () =>{
            task.done = !task.done
        })
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    });
};

const addTask = (taskName: string) =>{
    tasks.push({name: taskName, done:false });
};

addButtonElement.addEventListener("click", (event: Event) =>{
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});

render();