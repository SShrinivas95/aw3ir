function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function testDate() {
    let msg;

    let mtn = new Date();

    let m = new Date(document.querySelector("#Datee").value);

    // if (m >mtn ) {
    //     msg=false ;
    // }else{
    //     msg=true
    // }   

    // return msg ;
    return m < mtn;
}

function calcNbChar(id) {
    let n = document.querySelector(`#${id}`).value.length;
    if (id == "Adresse") {
        document.querySelector(`#${id} + span`).innerHTML = ` ${n} car <br>`;
    }
    else {
        document.querySelector(`#${id} + span`).innerHTML = `${n} car`;
    }
}

var contactStore = (function () {
    // variable privée
    var contactList = [];

    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block

    return {
        add: function (_name, _firsname, _date, _adress, _mail) {
            var contact = {
                name: _name,
                firstname: _firsname,
                date: _date,
                adress: _adress,
                mail: _mail,
            };
            // ajout du contact à la liste
            contactList.push(contact);
            localStorage.setItem('contactList', JSON.stringify(contactList));
            return contactList;
        },

        getList: function () {
            return contactList;

        },

        remove: function () {
            localStorage.removeItem("contactList");

        },




    };


})();


function supp() {
    contactStore.remove();
    displayContactList();
}

function displayContactList() {
    const contactListString = localStorage.getItem('contactList'); // ici on va récupérer la liste en forme de chaine de caractère (string)
    const contactList = contactListString ? JSON.parse(contactListString) : [];
    // document.querySelector("table tbody").innerHTML +=
    //   ` <tr>  
    //     <td>${n}</td>  
    //     <td>${p}</td>  
    //     <td>${toutedate}</td>
    //     <td>${maill}</td>
    //     <td>${m}</td>
    //   </tr>  
    //     `

    document.querySelector("table tbody").innerHTML = "";
    for (const contact of contactList) {
        document.querySelector("table tbody").innerHTML +=
            ` <tr>  
          <td>${contact.name}</td>  
          <td>${contact.firstname}</td>  
          <td>${contact.date}</td>
          <td>${contact.mail}</td>
          <td>${contact.adress}</td>
        </tr>  
          `;

    }
}

function test() {
    var n = document.querySelector("#nom").value;
    var p = document.querySelector("#prénom").value;
    var m = document.querySelector("#Adresse").value;
    let e = validateEmail(document.querySelector("#mail").value);
    var ma = new Date(document.querySelector("#Datee").value);
    var myModal = new bootstrap.Modal(document.querySelector("#myModal"));

    let date = testDate();
    var mois = ma.getMonth() + 1;
    var maill = document.querySelector("#mail").value;
    var toutedate = `${ma.getDate()}/${mois}/${ma.getFullYear()}`;
    if (n.length <= 5 || p.length <= 5 || m.length <= 5 || e == false || date == false) {


        document.querySelector(".modal-title").textContent = "Erreur formulaire ou moins de 5 caractere";
        document.querySelector(".modal-body").innerHTML = "Tous les champs sont obligatoires  ";
        myModal.show();

    } else {
        contactStore.add(n, p, maill, m, toutedate);
        displayContactList();


    }



}

displayContactList();

