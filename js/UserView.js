class UserView{

    //Atributos y métodos / Estado de componente

    //constructor(name, age){

        //this.name = name;
        //this.age = age;
        //Object.seal(this); //Se puede editar la info pero no las variables
        //Se puede usar freeze para congelarlo completamente

    //}

    //Se puede sobre cargar pero deben tener diferente cantidad de atributos del objeto, si no, no funciona


    
    constructor(user){

        this.user = user;
        Object.seal(this); //Se puede editar la info pero no las variables
        //Se puede usar freeze para congelarlo completamente

    }


    //Metodos

    render = (container) =>{

        //String -> HTML DOM

        let div = document.createElement("div");


       let html = `<div class="card card-margin  w-50">
       <div class="card-body">
         <h5 class="card-title">${this.user.name}</h5>
         <p class="card-text">Tiene ${this.user.age} años</p>
         <a id = "${this.user.id}" href="#" class="btn btn-danger">Button</a>
       </div>
     </div>`;

        div.innerHTML = html; //<div> <div class= "card">...</div> </div>
        let card = div.firstChild; //<div> <div class= "card">...</div> </div> DOM cambiamos a DOM
        if(this.user.blocked === true){

            card.classList.add("text-black");
            card.classList.add("bg-warning");

        }
        container.appendChild(card);

        //Eventos de la card

        let blockBtn = document.getElementById(this.user.id);
        blockBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            alert(this.user.name);

        });

    }


    /* Recordar que esto se puede hacer desde el index para lograr usar las variables del index* */
    block = () =>{

        alert("** Bloquear a "+this.user.name+" **");


    }

   //hello = () =>{

     //   console.log(`Te saluda ${this.name} con edad de ${this.age}`);

    //}

}