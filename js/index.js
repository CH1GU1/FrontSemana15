const nameTF = document.getElementById("nameTF");
const ageTF = document.getElementById("ageTF");
const submitBtn = document.getElementById("submitBtn");

const usersContainer = document.getElementById("usersContainer");

//Importación simple 
//const myModal = document.getElementById("myModal");

//Importacion boostrap
var myModal = new bootstrap.Modal(document.getElementById('myModal'));

const brandLink = document.getElementById("brandLink");

brandLink.addEventListener('click', (e)=>{
    e.preventDefault();
    myModal.show();

});


const getPokemon = (pokemon)=>{
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon).then(
        (response) =>{
            response.json().then(
                (data) =>{
                    console.log(data);
                }
            )
        }
    );    
}

const getPokemonAsync = async (pokemon)=>{

    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon);
        let data = await response.json();
        console.log(data);      
    } catch (error) {
        console.log(error);
    }

   
}

const getAllUsers = async ()=>{

    let response = await fetch("https://prograreddomi.herokuapp.com/api/users/getall");
    let data = await response.json();
    console.log(data);
    usersContainer.innerHTML = "";
    for(let i in data){
       let user = data[i];
        let userView = new UserView(user);


        userView.render(usersContainer);

      // usersContainer.innerHTML += `<li>${user.name}</li>`; // ojo con usar string para referenciar elementos, puede ser demorado

    }
}

getAllUsers();

const postUser = async ()=>{
    let user = {
        id:"",
        name:nameTF.value,
        age:ageTF.value
    };
    console.log(user);
    let json = JSON.stringify(user); //Transforma a cadena con JSON
    console.log(json);
 //   let obj = JSON.parse(json); //Pasa a objeto
  //  console.log(obj); 


  let response = await fetch("https://prograreddomi.herokuapp.com/api/users/create", 
  {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },

    body: json

  });

  let data = await response.json();
  console.log(data);
  getAllUsers();
}


submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    postUser();
});

const createObject = () =>{
    let julian = new UserView("Julian",18);
    let kevin = new UserView("Kevin",20);
    //userView.alfa = "nuevo atributo";
    console.log(kevin);
    console.log(julian);
 //   julian.hello();
 //   kevin.hello();
}

createObject();