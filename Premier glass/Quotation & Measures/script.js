// Joelech
// JavaScript
// 9/10/2024
function add_Panel(){
    const original_Row = document.getElementById('panel_Input');
    const duplicated_Row = original_Row.cloneNode(true);
    const inputs = duplicated_Row.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    document.getElementById('panel_Display').appendChild(duplicated_Row);
}