let btn=document.getElementById('btn')
let table=document.querySelector('.table')
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
           <td><button class="btn btn-danger btn-delete p-1 ">Delete</button> <button class="btn btn-success btn-edit p-1 ms-2 w-25">Edit</button></td>
          </tr>
          </tbody>
      </table>`
    })})
    return getItems;
}
btn.addEventListener('click',getItems)
