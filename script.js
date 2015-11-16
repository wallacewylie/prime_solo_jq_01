
function Employee(firstName, lastName, empNumber, eTitle, review, salary) {
       
         this.firstName = firstName;
         this.lastName = lastName;
         this.empNumber = empNumber;
         this.eTitle = eTitle;
         this.review = review;
         this.salary = salary;
};

var employeeArray = [];






$(function() {
$("form").on("submit", function(event) {
  event.preventDefault();
  var employee = $(this).serializeArray();
  var newEmployee = new Employee(employee[0].value, employee[1].value, 
  	employee[2].value, employee[4].value, employee[4].value, 
  	employee[5].value);
  createEmployee(newEmployee);
  console.log(newEmployee);
  $("form")[0].reset();
});
});



function createEmployee(employee) {
	     var $button =$("<button>");
         var $ul = $("<ul>");
         $ul.append($("<li>").text("First Name: " + employee.firstName));
         $ul.append($("<li>").text("Last Name: " + employee.lastName));
         $ul.append($("<li>").text("Employee Number: " + employee.empNumber));
         $ul.append($("<li>").text("Title: " + employee.eTitle));
         $ul.append($("<li>").text("Review Rating: " + employee.review));
         $ul.append($("<li>").text("Salary: " + employee.salary));
         $("#output").append($ul);
};






// function myFunction() {
// var x = document.getElementById("myForm");
// var txt = "";
// var i;
// for (i = 0; i < x.length; i++) {
//     txt = txt + x.elements[i].value + "<br>";
// }
// document.getElementById("output").innerHTML = txt;
// }

