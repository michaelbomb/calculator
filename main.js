function add(a, b)
{
    return a + b;
}
function subtract(a, b)
{
    return a - b;
}
function multiply(a, b)
{
    return a * b;
}
function divide(a, b)
{
    return a / b;
}
function operate(operator, a, b)
{
    let f;
    switch (operator)
    {
        case '+':
            f = add;
            break;
        case '-':
            f = subtract;
            break;
        case '*':
            f = multiply;
            break;
        case '/':
            f = divide;
            break;
    }
    return f(a, b);
}



function addEventListeners()
{
    sc = document.querySelector('.screen-text');

    bc = document.querySelector('#bc')
    bc.addEventListener('click', () => {sc.textContent = "";})

    bdel = document.querySelector('#bdel')
    bdel.addEventListener('click', () => {tmp = sc.textContent; sc.textContent = tmp.slice(0,-1);})
    
}





addEventListeners();