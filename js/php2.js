


// let taskList = document.querySelectorAll(".loading-from-the-database-task");

// taskList.forEach(element =>{
//     convertedTasks.push(new task(element.querySelector(".IDZadania").textContent.trim(),
//     element.querySelector(".nazwa").textContent.trim(),
//     element.querySelector(".szczegoly").textContent.trim(),
//     element.querySelector(".data").textContent.trim(),
//     element.querySelector(".wykonane").textContent.trim(),
//     element.querySelector(".from").textContent.trim(),
//     element.querySelector(".time").textContent.trim()
//     ));
//     AllID.push(element.querySelector(".IDZadania").textContent.trim());
//     console.log(1);
// }); 





// const generateTableOnServer = () => {
//     console.log(convertedTasks , TaskFromServer);
//     let list = [];
//     console.log(TaskFromServer);
//     convertedTasks.forEach(el=>{
//         if(TaskFromServer.indexOf(el) != -1){
//         }else{
//             list.push(el);
//         }
        
//     });
//     return list;
    
// };


// let gate=true;
// SaveOnServerBt.addEventListener('click',function(){
    
//   counter = 1;
//     if(gate){
//         event.preventDefault();
//     let generateTable = generateTableOnServer();
    
//     console.log(generateTable);
//     generateTable.forEach(el=>{
//         form.insertAdjacentHTML("afterbegin",
//         `<input type="text" name="IDZadania${counter}" value="${el.id}"> 
//         <input type="text" name="nazwa${counter}" value="${el.name}"> 
//         <input type="text" name="szczegoly${counter}" value="${el.description}"> 
//         <input type="text" name="data${counter}" value="${el.date}"> 
//         <input type="text" name="wykonane${counter}" value="${el.done}"> 
//        `);
//        counter++;
//     });
//     counter=counter-1;
//     let TextDeleteID = "";
//     AllDeleteID.forEach((element, index) => {
//         if(index == 0){
//             TextDeleteID =" IDZadania = "+ element;
//         }else{
//             TextDeleteID = TextDeleteID +" OR IDZadania = "+ element;
//         }
        
//     });
//     let TextDoneID = "";
//     AllDoneID.forEach((element, index) => {
//         if(AllDeleteID.indexOf(element) == -1){
//             if(index == 0){
//                 TextDoneID =" IDZadania = "+ element;
//             }else{
//                 TextDoneID = TextDoneID +" OR IDZadania = "+ element;
//             }
//         }
//     });
    
//     form.insertAdjacentHTML("afterbegin",`
//     <input type="text" name="licznik" value="${counter}"> 
//     <input type="text" name="DeleteIDTask" value="${TextDeleteID}"> 
//     <input type="text" name="DoneIDTask" value="${TextDoneID}"> 
//     `);

//     setTimeout(() => {
//         gate= false;
//         SaveOnServerBt.click();
//     }, 250);
//     document.querySelector(".save-animation").classList.add("cover");
//     }else{

//     }
    
// });
//new course('programowanie',20,100);
//krawiec.profit();


/////////////////////cos z datą jest nie tak odejmuje się jedno nie dobrez e