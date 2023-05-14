showData();
function saveData()
{
let name;
name=document.getElementById("name").value; //Отвечают за взятие информации из заполняеемых полей

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
localStorage.setItem("users",JSON.stringify(user_records));
}
showData();
function showData()
{
  document.getElementById("showUsers").innerHTML=""; //Базовое отображение текста в заполненной таблице
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px;">'+user_records[i].name+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].email+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].psw+'</div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
  }