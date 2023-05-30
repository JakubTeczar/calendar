const body = document.querySelector("body");
const taskTime = document.querySelector(".edit-time");
const taskTitle = document.querySelector(".edit-title");
const taskTextArea = document.querySelector(".edit-text-area");
taskTextArea.textContent = "";
const taskError = document.querySelector(".edit-error");
const panelCurtainContainer = document.querySelector(".calendary-panel-curtain-container");
const panelCurtain= document.querySelector(".calendary-panel-curtain");
const panel = document.querySelector(".calendary-panel");
const addTask = document.querySelector(".add-task");
const addTaskPanel = document.querySelector(".add-task-panel");
const showTask = document.querySelector(".show-task");
const showTaskPanel = document.querySelector(".show-task-panel");


const displayMonth = document.querySelector(".display-month");
const displayYear = document.querySelector(".display-year");
const previousMonth = document.querySelector(".previous-month");
const nextMonth = document.querySelector(".next-month");


let currentlySelectedItem; 
const taskSave = document.querySelector(".task-save");
const saveDataOnServer = document.querySelector(".save-data-on-server");
let VisibleTasksID= [];
let AllTask ="";
let OneTask ="";
const calendary = document.querySelector(".calendary");
const start = Date.now();
const animation = document.querySelector(".animation");

let monthDifference = 0;


let counterID = 0; //unikalne id każdego taska
// code.addEventListener('change',function (){
//     console.log("teraz");
    
//     AllTask = AllTask + code.value;
//     console.log(code.value);
// });
saveDataOnServer.addEventListener('click' ,function (){
    SaveOnServerBt.click();
});
previousMonth.addEventListener('click' ,function (){
    monthDifference = monthDifference -1;
    VisibleTasksID =[];
    PlanHowToRenderCal();
    selectionOfAddingTask(false,true);
});
nextMonth.addEventListener('click' ,function (){
    monthDifference = monthDifference +1;
    VisibleTasksID =[];
    PlanHowToRenderCal();
    selectionOfAddingTask(false,true);
});

taskSave.addEventListener('click' ,function (){
    AddNewTask();
});

panelCurtain.addEventListener('click' ,function (){
    visibility();
});

addTask.addEventListener('click' ,function (){
    addTask.style.borderTopRightRadius = "20px";
    showTask.style.borderRadius = "0px";

    addTaskPanel.classList.add("visibility");
    showTaskPanel.classList.remove("visibility");

    addTask.style.color = "white";
    showTask.style.color = "black";

    addTask.style.background = "black";
    showTask.style.background = "white";
});


showTask.addEventListener('click' ,function (){
    showTask.style.borderTopLeftRadius = "20px";
    addTask.style.borderRadius = "0px";

    addTask.style.background = "white";
    showTask.style.background = "black";

    showTask.style.color = "white";
    addTask.style.color = "black";
    
    showTaskPanel.classList.add("visibility");
    addTaskPanel.classList.remove("visibility");
});

const visibility = () => {

    panel.classList.toggle("visibility");
    panelCurtainContainer.classList.toggle("visibility");
    panelCurtain.classList.toggle("visibility");
};
const AddNewTask = () => {
    let ID = 0;
    if(AllID.length == 500 ){
        alert("Za dużo zadań wykorzystales limit");
        console.log("Za dużo zadań wykorzystales limit");
    }else{
        
        let StopKey = false; 
        if(taskTitle.value == ""){
            taskError.textContent = "Wprowadź tytuł zadania";
            StopKey = true;
        }
        if(StopKey == false){

            do{  
                ID = Math.floor(Math.random() * 502);
            }while(AllID.indexOf(ID.toString()) != -1);
            AllID.push(ID.toString());
            let NewTask = new task(ID.toString(),taskTitle.value,taskTextArea.value,
            currentlySelectedItem+" "+taskTime.value+":00",'0',currentlySelectedItem,taskTime.value);

            convertedTasks.push(NewTask);
            //code.value = AllTask;
        }else{

        }
    }
    ClearAddPanel();
    selectionOfAddingTask(false,false);
};

const ClearAddPanel = () => {
    taskTitle.value = '';
    taskTextArea.value = '';
    taskTime.value = '00:00';
};
const fillShowPanel = () => {
    showTaskPanel.innerHTML = "";
    for(const i of convertedTasks){
        if(i.done =='0'){
            if(i.from == currentlySelectedItem){
                showTaskPanel.insertAdjacentHTML("beforeend",`
                <div class="show-task-panel-element" id="taskPanel${i.id}">
                    <div class="task-time">
                    ${i.time}
                    </div>

                    <div class="task-title">
                    ${i.name}
                    </div>

                    <div class="task-text">
                    ${i.description}
                    </div>

                    <div class="task-doneBt" id="${i.id}">
                    ✔️
                    </div>

                    <div class="task-delete" id="${i.id}">
                    Usuń
                    </div>

                </div>`);
                document.querySelectorAll(".task-delete").forEach(element =>
                    element.addEventListener('click' ,function (){
                        let TaskID = this.id;
                        RemoveTask(TaskID);
                        checkChange();
                    
                    })
                    );
                document.querySelectorAll(".task-doneBt").forEach(element =>
                    element.addEventListener('click' ,function (){
                        let TaskID = this.id;
                        RemoveTask(TaskID,true);
                        
                        convertedTasks.forEach(el =>{
                            if(el.id == TaskID){
                                el.done = '1';
                                AllDoneID.push(el.id);
                                checkChange();
                            }
                        });
                       
                    })
                    );
            }
        }
    }
   
};

const RemoveTask = (ID,joke=false) => {

    for(let i = 0; i < convertedTasks.length;i++){
        if(ID == convertedTasks[i].id){ 
            if(!joke){
                AllDeleteID.push(convertedTasks[i].id);
                convertedTasks[convertedTasks.indexOf(convertedTasks[i])] = "";
                DeleteUselessField();
            }
    
            let currentTask = document.getElementById("task"+ID);
            let currentTaskPanel = document.getElementById("taskPanel"+ID);
            if(currentTask != undefined){
                currentTask.remove();
            }
            if(currentTaskPanel != undefined){
                currentTaskPanel.remove();
            }
           
        }
    }
   

    
};


let lastDay = function(y,m){
    return new Date(y, m +1, 0).getDate();
}

const PlanHowToRenderCal = () => {
    calendary.innerHTML = '';
    let today = new Date ();
    today = new Date (today.getFullYear() ,today.getMonth()+ monthDifference ,1);

    const mounthName = new Intl.DateTimeFormat("pl-US", { month:"long"}).format(today); 
    displayMonth.textContent =mounthName;
    displayYear.textContent =today.getFullYear();

    let lastDayCurrentMonth = lastDay(today.getYear(),today.getMonth());
    let firstDayOfWeek = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    let lastDayFirstMounth;
    if(today.getMonth() == 0){
        lastDayFirstMounth = lastDay(today.getYear()-1,today.getMonth()+11);
    }else{
        lastDayFirstMounth = lastDay(today.getYear(),today.getMonth()-1);
    }
    let lastDayOfWeek = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDay();
    let howMuchToAddFirst = 0;
    let howMuchToAddEnd = 0;
    if(firstDayOfWeek != 0){
        howMuchToAddFirst =firstDayOfWeek -1;
    }else{
        howMuchToAddFirst =6;
    }
    if(lastDayOfWeek != 0){
        howMuchToAddEnd =7-lastDayOfWeek;
    }else{
        howMuchToAddEnd = 0;
    }


    calendaryRender(howMuchToAddFirst,lastDayFirstMounth,false);
    calendaryRender(lastDayCurrentMonth,firstDayOfWeek,true);
    calendaryRender(howMuchToAddEnd,0,true,true);
    document.querySelectorAll(".day").forEach(element =>
        element.addEventListener('click' ,function (){

            visibility();
            currentlySelectedItem = element.id;
            fillShowPanel();  
            
        })
        );

  
}

let checkChange = function(){
    //console.log(TaskFromServer);
    let change = false;
    let length = TaskFromServer.length;
    let LenCounter = 0;
    convertedTasks.forEach(el =>{
        if(TaskFromServer.indexOf(el) ==-1){
            change = true;
        }else{
            //console.log(el);
            LenCounter++;
        }
    });
    if(change || LenCounter != length || AllDoneID.length != 0){
        saveDataOnServer.style.display = "flex";
        assigningTasks();
    }else{
        saveDataOnServer.style.display = "none";
    }
    console.log(TaskFromServer);
}

const calendaryRender = (howMuch,start,visibilityDays,endMounth=false) => {
   
    const today = new Date ();
    if(visibilityDays==false ){
        let DayWeek = 0
        for(let day = start-howMuch+1; day <= start ; day++){
            const date = new Date (today.getFullYear(),today.getMonth()-1 + monthDifference,day);
            const dateForDayWeek = new Date (date.getYear(),date.getMonth(),day  +2);
            const dayName = new Intl.DateTimeFormat("pl-US", { weekday:"long"}).format(dateForDayWeek); 
    
            calendary.insertAdjacentHTML("beforeend",`<div class="day hidden" id="${date.getFullYear()}-${date.getMonth()}-${day}"><p>${day} <span class="flexible-enter"></span> ${dayName} </p>  
            <div class="day-task-list" id="task-list${date.getFullYear()}-${date.getMonth()}-${day}"> </div>
                </div>`);
        }
    }else{
        for(let day = 1; day <= howMuch; day++){
            let date = new Date (today.getFullYear(),today.getMonth()+ monthDifference,day);
            let dateForDayWeek;
            if(endMounth){
                dateForDayWeek = new Date (today.getYear(),today.getMonth(),start + (7-howMuch)+day);
                date = new Date (today.getFullYear(),today.getMonth()+1+ monthDifference,day);
            }else{
               dateForDayWeek = new Date (today.getYear(),today.getMonth(),start + day -1);
            }

            let dateForDayWeek2 = new Date (date.getYear(),date.getMonth(),day +2);

            const dayName = new Intl.DateTimeFormat("pl-US", { weekday:"long"}).format(dateForDayWeek); 
            const dayName2 = new Intl.DateTimeFormat("pl-US", { weekday:"long"}).format(dateForDayWeek2); 

                if(today.getDate() == date.getDate() && today.getMonth() == date.getMonth()  && today.getYear() == date.getYear() ){
                    
                    calendary.insertAdjacentHTML("beforeend",`<div class="day today" id="${date.getFullYear()}-${date.getMonth()}-${day}"><p>${day}<span class="flexible-enter"></span> ${dayName2} </p>  
                    <div class="day-task-list" id="task-list${date.getFullYear()}-${date.getMonth()}-${day}"> </div>
                     </div>`);
                }else if((dayName2 == "niedziela" || dayName2 == "sobota") && endMounth == false){
                    calendary.insertAdjacentHTML("beforeend",`<div class="day weekend" id="${date.getFullYear()}-${date.getMonth()}-${day}"><p>${day}<span class="flexible-enter"></span> ${dayName2} </p>
                     <div class="day-task-list" id="task-list${date.getFullYear()}-${date.getMonth()}-${day}"> </div>
                      </div>`);
                }else if(endMounth == false ){
                    calendary.insertAdjacentHTML("beforeend",`<div class="day" id="${date.getFullYear()}-${date.getMonth()}-${day}"><p>${day}<span class="flexible-enter"></span> ${dayName2} </p> 
                     <div class="day-task-list" id="task-list${date.getFullYear()}-${date.getMonth()}-${day}"> </div>
                     </div>`);
                
                }else{
                    calendary.insertAdjacentHTML("beforeend",`<div class="day hidden" id="${date.getFullYear()}-${date.getMonth()}-${day}"><p>${day}<span class="flexible-enter"></span> ${dayName2} </p>  
                    <div class="day-task-list" id="task-list${date.getFullYear()}-${date.getMonth()}-${day}"> </div>
                        </div>`);
                }
          
        }
    }

};


function compare(a, b) {
    const TimeA = a.Time;
    const TimeB = b.Time;
    
    let comparison = 0;
    if (TimeA > TimeB) {
      comparison = 1;
    } else if (TimeA < TimeB) {
      comparison = -1;
    }
    return comparison;
  }
 
// const SortDayTask = (From) => {    
//     console.log(From);
//     let orderCounter = 0;
//     for(const el of convertedTasks){
//         if( From == el.From ){
//             console.log(el.Time);
//             const task = document.getElementById("task" + el.ID);
//             task.style.order = orderCounter++;
//         }
//     }
// }

const selectionOfAddingTask = (first = false,change=false) => {
    let AddedTask= [];
  
    for(const el of convertedTasks){
        let task = document.getElementById(el.from);
        if (task === null){

        }else{
            if(VisibleTasksID.indexOf(el.id.toString()) == -1){
                if(el.done == '1'){

                }else{
                    //console.toString(el , el.id);
                    VisibleTasksID.push(el.id);
                    
           
                    if(AddedTask.indexOf(el.from.toString()) == -1){
                        
                       
                        AddedTask.push(el.from.toString());
                        if(first){
                            AppednTasks(el,first,change);
                        }else{
                            AppednTasks(el,first,change);
                        }
                        console.log(AddedTask);
                        
                    }
                }
                
            }
            
        }
    }
    checkChange();
};
const AppednTasks = (Task,first=false,change=false) => {

    let div = document.getElementById("task-list"+Task.from);
    
    TaskToGenerate = SortTasks(Task.from);
    
    if(!first){
        TaskToGenerate.forEach(el => {
            if(el.id !=Task.id && change==false ){
                console.log(el.id);
                RemoveTask(el.id,true);
            }
        });
    }
   
  
    TaskToGenerate.forEach(el => {
        if(el.done == '0'){
            let shortName 
            if(el.name.length > 14){
                shortName =  el.name.substr(0,11) + "..";
            }else{
                shortName =  el.name;
            }
        div.insertAdjacentHTML("beforeend",
        `<div class="task" id="task${el.id}" data-title="${el.description}">
        <div class="task-time">${el.time}</div>  
        <div class="task-title">${shortName}</div> 
        </div> <div class="task-text">  ${el.description}</div>  
        </div>`);
        }
       
    });
    // TaskToGenerate.forEach(el => { });
    
    fillShowPanel();
    // const taskTime = document.querySelector(".task-time")
    // console.log(Task.From , div);



};
const SortTasks = (From) => {
    TasksList =[];
    NewTasksList =[];
  
    convertedTasks.forEach((el, index) => {
        if(el.from == From){
            TasksList.push([el.time,el]);
            convertedTasks[index]='';
            //TasksList.push(el);
        }
    });
    TasksList.sort();

   
    for(const el of TasksList){
        NewTasksList.push(el[1]);
        convertedTasks.push(el[1]);
    }
    DeleteUselessField();
    return NewTasksList;
};
const DeleteUselessField = () => {
    NewConvertedTasks =[];
    convertedTasks.forEach(el => {
        if(el != ''){
            NewConvertedTasks.push(el);
        }
    });
    convertedTasks = NewConvertedTasks;
};

PlanHowToRenderCal();
taskTime.value = '00:00';
console.log('eee');
convertedTasks.forEach((element) => {
    TaskFromServer.push(element);
});
selectionOfAddingTask(true);





// //animation 
// window.scrollTo(0, 0);
// setTimeout("AnimationEnd()", 5300);
// const AnimationEnd = () => {
//     body.style.overflow = "auto";
//     body.style.overflowX = "hidden";
// };

//cel na później
// dodać możliwość zaznaczania wykonanych zadań dodać zakłdkę ze statystykami z calendarza wyknoanych zadań 
// zakłdki mała szerokość po kliknięciu rozszerzają sie i to będą te 2 zakładki z statystykami z calendarza i celów
// zazanaczać cele w kalenażu(date ich końca)
// w statystykach mozna dodać  wykone zadania , niewykonane zadania ,wykres kołowy wykonanych i nie wykonanych zadań i z boku procenty nie obok wykresu
// możliwość przywrócenia celów lub zadań do kalenarza 
//przygotować wygląć w szkole wygląd i wymyślić funkjonalności do dodawnaia linków i celów 
// możliwość oznaczania gwiazdką ważnych wydarzeń w kalendarzu 
// można zrobić podobny panel jak jest przy lesson info do celów info za 
// 2 dni po wykonaiu  zadania usówaj zadanie dodawaj go do statystyk jako nie wykonane zadanie 
// dodoaj możliwość przywracania zadń do wybranego dnia
// dodawanie do innej bazy danych wykonane zadania do nie zrobione i do jeszcze innej do zrobienia aktulne




//ważniejsze cele na jutro
// wykonać wyglą linków i celów możliwość dodawania ich w js
//zapytać się radzia czy trudno jest zrobić jakąś mondrzejszą baze danych
// dodać zakładkę gdzie będzie info jak się nazywa kiedy kończy się najbliższy cel a po kliknięciu bedzie więcje szczegółów
// a po kliknięciu pojawią się wszystkie cele

