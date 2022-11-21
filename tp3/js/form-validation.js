function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function testDate () {
    let msg ;

    let mtn = new Date () ;
   
    let m= new Date (document.querySelector("#Date").value);

    // if (m >mtn ) {
    //     msg=false ;
    // }else{
    //     msg=true
    // }   

    // return msg ;
    return m < mtn;
}

function test (){
    
    let n = document.querySelector("#nom").value;
    let p= document.querySelector("#prénom").value;
    let m= document.querySelector("#Adresse").value;
    let e =validateEmail(document.querySelector("#mail").value);
    let ma= new Date(document.querySelector("#Date").value);
    
    var myModal = new bootstrap.Modal(document.querySelector("#myModal"));
    let date = testDate() ;
    var mois= ma.getMonth() + 1 ;

    if(n.length<=5 || p.length<=5 || m.length<=5 || e==false || date==false ){
        
        
        document.querySelector(".modal-title").textContent = "Erreur formulaire";
        document.querySelector(".modal-body").innerHTML = "Tous les champs sont obligatoires  " ;
        myModal.show();
       
    }else 
    {
        
        document.querySelector(".modal-title").textContent = "Bienvenue " + n ;
        document.querySelector(".modal-body").innerHTML =
        `
        Vous etes nés le ${ma.getDate()}/${mois}/${ma.getFullYear()} et vous habitez : <br>
        <a href="http://maps.google.com/maps?q=${m}"><img width="300"  
        src="https://maps.googleapis.com/maps/api/staticmap?markers=${m}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>
        ` 
        myModal.show();
    
    }
     

}