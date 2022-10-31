let btn=document.getElementById('btn')
let table=document.getElementById('tables')
const baseUrl='https://jsonplaceholder.typicode.com'
let getItems = ()=> {
    const fetchItems=fetch (`${baseUrl}/users`)
    .then((res)=>res.json())
    .then((data)=>
        {data?.map((item)=> {
        table.innerHTML += `  <table class="table">
        <tbody>
          <tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
           <td><button id="delete" class="btn btn-danger btn-delete p-1 ">Delete</button> <button id="edit" class="btn btn-success btn-edit p-1 ms-2 w-25">Edit</button></td>
          </tr>
          </tbody>
      </table>`
    })})
    return getItems;
}
btn.addEventListener('click',getItems)

table.addEventListener('click',e=>{
  if (e.target.id === "edit") {
  let row=e.target.parentElement.parentElement;
  let firstBox=row.children[1];
  let first=firstBox.innerHTML;
  let newValue=first;
  console.log(first)
firstBox.innerHTML=` <input type="text" value="${first}">`
let input =firstBox.children[0];
input.addEventListener('change',()=>{
  newValue=input.value;
  console.log(newValue)
  firstBox.innerHTML =`${newValue}`
})
}
})

table.addEventListener('click',e=>{
  if (e.target.id === "delete") {
  e.target.parentElement.parentElement.remove();
  }
})
