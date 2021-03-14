
//Buat sebuah handleSubmit fuction

function handleSubmit(event){

    //prevent reload page
    event.preventDefault()

    //default username & password
    var def_email = "fadliselaz@gmail.com"
    var def_pass = "1qazxsw2"

    //kita tangkap value dari input user
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    // console.log(email, password)

    //compare def email dan pass dengan input user
    if(def_email === email && def_pass === password){
        alert('Login berhasil..')
        window.location.href = 'home.html'
    }else{
        alert('silakan check data anda..')
    }
    
}