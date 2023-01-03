// Add your code here
function submitData(usersName, usersEmail){
    const obj = {
        name: usersName,
        email: usersEmail
    }
   return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",   
        },
        body: JSON.stringify(obj),
    })
    .then((response) => response.json())
    .then((obj) => document.body.innerHTML = obj.id)
    .catch(function (error) {
        // alert("Bad things! Ragnarők!");
        document.body.innerHTML = error.message;
})
}

