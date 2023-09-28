// Add your code here
function submitData(name = "name", email = "email"){
  const dataSubmitted = {
      name: `${name}`, 
      email: `${email}`,
  }
  const configurationObject = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
            body: JSON.stringify(dataSubmitted),
        }
  return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    return document.body.append(response.id)

  })
  .catch(function (error) {
    return document.body.append(error);
  });       
}
submitData("Ian", "ianjuly4@gmail.com")