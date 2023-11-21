const signIn = () => {
    let getData = JSON.parse(localStorage.getItem("AllStudents"));
    // console.log(getData);

    getData.find((item, i) => {
        console.log(item.Gmail);
        let getEmail = item.Gmail;
        let getPassword = item.Password;

        if(signInEmail.value == getEmail && signInPassword.value == getPassword){
            alert("Sign-in successful!")
            input.value =""
            // window.location.href='index.html'
        }else{
            alert("Invalid email or password. Please try again.")
        }
    })
}