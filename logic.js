function onClick(element) {
  document.getElementById("#btn").src = element.src;
  document.getElementById("").style.display = "block";
}


/* Someone without A or B is called O. So the bloodtypes are O+, O-, A+, A-, B+, B-, AB+, AB- .

TYPE            Can give to                     Can receive from
O+                      O+,A+,B+,AB+            O-,O+
O-                      all                                     O-
A+                      A+,AB+                          O+,O-,A+,A-
A-                      A+,A-,AB+,AB-           A-,O-
B+                      B+,AB+                          O+,O-,B+,B-
B-                      B+,B-,AB+,AB-           B-,O-
AB+                     AB+                                     all
AB-                     AB+,AB-                         O-,A-,B-
*/