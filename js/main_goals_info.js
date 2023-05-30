let chartLabels = ['Przedawnione', 'Do zrobienia', 'Wykonane'];
let expiredTasks = [];  //przedawnione zadania
let toDoTasks = [];  
let doneTasks = [];  
let chartdata = [];

let expiredGoals = [];
let toDoGoals = []; 
let doneGoals = [];  

const goalInfoContainerList = document.querySelector(".goal-information-container-list");

const switchTask = document.querySelector(".switch-task");
const switchGoals = document.querySelector(".switch-goals");

switchTask.addEventListener('click' ,function (){
    openTasks =true;
    assigningTasks();
    if(currentKind == "expiredGoals"){
        currentKind= "expiredTasks";
    }else if(currentKind == "toDoGoals"){
        currentKind= "toDoTasks";
    }else if(currentKind == "doneGoals"){
        currentKind= "doneTasks"; 
    }

    fillGoalsInfo(currentKind,true);

    myChart.destroy();
    drawChart();
    switchGoals.classList.remove("active-switch");
    switchTask.classList.add("active-switch");
    });

switchGoals.addEventListener('click' ,function (){
    openTasks =false;
    assigningGoals();
    if(currentKind == "expiredTasks"){
        currentKind= "expiredGoals";
    }else if(currentKind == "toDoTasks"){
        currentKind= "toDoGoals";
    }else if(currentKind == "doneTasks"){
        currentKind= "doneGoals"; 
    }

    fillGoalsInfo(currentKind,false);

    myChart.destroy();
    drawChart();
    switchTask.classList.remove("active-switch");
    switchGoals.classList.add("active-switch");
    });

const assigningTasks= () =>{
    expiredTasks = [];
    toDoTasks = []; 
    doneTasks = [];  
    convertedTasks.forEach(el =>{
        const today = new Date();
        today.setMonth(today.getMonth() -1);
        const dateFromEl = new Date(el.date);
        if(el.done == '1'){
            doneTasks.push(el);
        }else{
            if(dateFromEl < today ){
                expiredTasks.push(el);
            }else{
                if(el.done == '0'){
                    toDoTasks.push(el);
                }
            }
        }
    });
    chartdata = [expiredTasks.length, toDoTasks.length, doneTasks.length];
    console.log(expiredTasks, toDoTasks ,doneTasks);
   
};
const assigningGoals= () =>{
    expiredGoals = [];
    toDoGoals = []; 
    doneGoals = [];  
    convertedGoals.forEach(el =>{
        if(el.done == '1'){
            doneGoals.push(el);
        }else{
            if(el.expired){
                expiredGoals.push(el);
            }else{
                if(el.done == '0'){
                    toDoGoals.push(el);
                }
            }
        }
    });
    console.log(expiredGoals, toDoGoals ,doneGoals);
    chartdata = [expiredGoals.length, toDoGoals.length, doneGoals.length];
};

function fillInfo(text){
    goalInfoContainerList.insertAdjacentHTML("beforeend",
    `<div class="goal-list-info">
        ${text}
    </div>`);
}

function addDeleteButton(){
    const goalDeleteBtn = document.querySelectorAll(".goal-list-element-delete");
    goalDeleteBtn.forEach((el) =>{ 
        el.addEventListener('click' ,function (){
            if(this.id.substr(0,1) == "G"){
                let GID =this.id.substr(5,30);
                const div = document.querySelector("#G"+GID);
                div.remove();
                AllDeleteGoal.push(GID);
                convertedGoals.forEach(el =>{ 
                    
                    if(el.id == Number(GID)){
                        convertedGoals[convertedGoals.indexOf(el)] = '';
                        el = '';
                        assigningGoals();
                    }
                });
                
            }
            if(this.id.substr(0,1) == "T"){
                let TID =this.id.substr(5,30);
                const div = document.querySelector("#T"+TID);
                div.remove();
                AllDeleteID.push(TID);
                convertedTasks.forEach(el =>{ 
                    
                    if(el.id == TID){
                        convertedTasks[convertedTasks.indexOf(el)] = '';
                        el = '';
                        assigningTasks();
                    }
                });
            }
            });
    });
}

function fillGoalsInfo (choice,task){
    console.log(choice,task);
    let list =[];
    if(task){
        if(choice == 'expiredTasks'){
            expiredTasks.forEach(el =>{ 
                list.push(el);
            });
        }else if(choice == 'toDoTasks'){
            toDoTasks.forEach(el =>{ 
                list.push(el);
            });
        }else{
            doneTasks.forEach(el =>{ 
                list.push(el);
            });
        }
            goalInfoContainerList.innerHTML = '';
    
            list.forEach(el =>{
            goalInfoContainerList.insertAdjacentHTML("beforeend",
                `<div class="goal-list-element" id="T${el.id}">
                    <div class="goal-list-element-info-button">i</div>
                    <div class="goal-list-element-name" data-description="${el.description}" data-name="${el.name}">${el.name} </div>
                    <div class="goal-list-element-description"> | ${el.description}</div>
                    <div class="goal-list-element-delete"id="TDbtn${el.id}"></div>
                </div>`);
            });
            const goalListElements = document.querySelectorAll('.goal-list-element');

            goalListElements.forEach(goalListElement => {
            const infoButton = goalListElement.querySelector('.goal-list-element-info-button');
            const nameElement = goalListElement.querySelector('.goal-list-element-name');

                infoButton.addEventListener('mouseenter', () => {
                    nameElement.textContent = nameElement.dataset.description;
                });

                goalListElement.addEventListener('mouseleave', () => {
                    nameElement.textContent = nameElement.dataset.name;
                });
            });
    }else{
        goalInfoContainerList.innerHTML = '';
        if(choice == 'expiredGoals'){
            expiredGoals.forEach(el =>{ 
                list.push(el);
            });
        }else if(choice == 'toDoGoals'){
            toDoGoals.forEach(el =>{ 
                list.push(el);
            });
        }else{
            doneGoals.forEach(el =>{ 
                list.push(el);
            });
        }
            goalInfoContainerList.innerHTML = '';
            list.forEach(el =>{
    
            goalInfoContainerList.insertAdjacentHTML("beforeend",
                `<div class="goal-list-element" id="G${el.id}">
                    <div class="goal-list-element-name">${el.name} </div>
                    <div class="goal-list-element-delete"id="GDbtn${el.id}"></div>
                </div>`);
            });
    
    }
    addDeleteButton();
    console.log('przechodzi');
    if(goalInfoContainerList.textContent == ''){
        console.log('zachodzi');
        if(task){
            if(currentKind == 'expiredTasks'){
                fillInfo("Brak przedawnionych zadań");
            }else if(currentKind == 'toDoTasks'){
                fillInfo("Brak zadań do wykonania");
            }else{
                fillInfo("Brak wykonanych zadań");
            }
        }else{
            if(currentKind == 'expiredGoals'){
                fillInfo("Brak przedawnionych celów");
            }else if(currentKind == 'toDoGoals'){
                fillInfo("Brak celów do wykonania");
            }else{
                fillInfo("Brak wykonanych celów");
            }
        }
    }
  
};







// class PracticalCourse extends course {
//     constructor (title,length,price){
//         super(title,length,price);
//         this.numOfExercises = 'dziala';
//     }
//     console(){
//         console.log("2");
//         console.log(this.numOfExercises+"2");
//     }
  
// }

// class TheoreticalCourse extends course {
//     publish(){
//         console.log("ez");
//     }
// }
// const krawiec = new PracticalCourse('krawiecki',4,50);
// new course('programowanie',20,100);
// krawiec.profit();