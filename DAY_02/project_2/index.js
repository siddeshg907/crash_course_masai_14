const api="https://jsonplaceholder.typicode.com/users"

const data=async(api)=>(
         await fetch(api)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
)


data(api)