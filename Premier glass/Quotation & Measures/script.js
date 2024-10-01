// Joelech
// August 20, 2024
// JavaScript
var length;
var width;
var quantity;
function calculate_Area(){
    var area;
    length = document.getElementsByName('length');
    width = document.getElementsByName('width');
    quantity = document.getElementsByName('quanity');
    area = length * width * quantity;
    element = document.getElementById('area');
    element.textContent = area;
    element_2 = document.getElementById('calculate');
    element_2.click = window.alert(area);
    
}
function add_Input_Elements(){
    var new_length = document.createElement('input');
    var new_Number = document.createTextNode(0);
    new_Number.appendChild(new_length);
    var position = document.getElementsByTagName('td')[0];
    position.appendChild(new_length);
}
