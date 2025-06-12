function formValidation()
{
    var fname = document.registration.firstname;
    var lname = document.registration.lastname;
    var inputtxt = document.registration.passid;
    var uemail = document.registration.email;
    var pnum = document.registration.num;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    
    
    
    if(firstname(fname))
    {
    if(lastname(lname))
    {
    if(passid_validation(inputtxt,7,12))
    { 
    if(ValidateEmail(uemail))
    {
    if(allnumeric(pnum))
    {
    if(address(uadd))
    {
    if(countryselect(ucountry))
    {
    }
    }
    }
    } 
    }
    }
    }
    
    return false;
    }
function firstname(fname)
    { 
    var letters = /^[A-Za-z]+$/;
    if(fname.value.match(letters))
    {
    return true;
    }
    else
    {
    alert('First name must have alphabet characters only');
    fname.focus();
    return false;
    }
    }
function lastname(lname)
    { 
    var letters = /^[A-Za-z]+$/;
    if(lname.value.match(letters))
    {
    return true;
    }
    else
    {
    alert('Last name must have alphabet characters only');
    lname.focus();
    return false;
    }
    }
function passid_validation(inputtxt,mx,my)
{ 
    var paswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{8}$/;
    if(inputtxt.value.match(paswd)) 
    { 
    return true;
    }
    else
    { 
    alert('the password must start with uppercase character,must include 8 characters no more no less,must include one digit at least,must include one special character like - , _ , #,&, and * and No white spaces allowed in the password.')
    return false;
    }
    }  
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function allnumeric(pnum)
{ 
var numbers = /^[0-9]+$/;
if(pnum.value.match(numbers))
{
return true;
}
else
{
alert('Phone number must have numeric characters only');
pnum.focus();
return false;
}
}
function address()
{
var a = document.registration.address.value;
if(a=="")
{
alert("Please Enter Your Adrdess Here");
document.registration.address.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
window.open('index.html', '_blank');
return true;
}
}
