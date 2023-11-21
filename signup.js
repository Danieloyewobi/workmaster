var allstudents = [];

if (localStorage) {
    let oldData = JSON.parse(localStorage.getItem("AllStudents"));
    allstudents = oldData || [];
}
const signup = () => {
    

    var userDetails = {
        firstname: first.value,
        lastname: last.value,
        Password: pass.value,
        phonenumber: phone.value,
        Gmail: gmail.value
    };

    allstudents.push(userDetails);
    var data = JSON.stringify(allstudents);
    localStorage.setItem("AllStudents", data);

    window.location.href = "signin.html";
};
