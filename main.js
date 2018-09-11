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

function evaluateExpression(str)
{
    let tmp = eval(str);
    if (typeof(tmp) == 'number')
        return tmp;
    return 'ERROR';
}

function addEventListeners()
{
    sc = document.querySelector('.screen-text');

    bc = document.querySelector('#bc')
    bc.addEventListener('click', () => {sc.textContent = "";})

    bdel = document.querySelector('#bdel')
    bdel.addEventListener('click', () => {
        sc.textContent = sc.textContent.slice(0,-1);});
    
    beq = document.querySelector('#beq')
    beq.addEventListener('click', () => {
            sc.textContent = evaluateExpression(sc.textContent);})  
            
    bts = ['#bdiv','#bmul','#bsub','#badd','#blp','#brp','#bdot'];
    for (let i = 0; i <= 9; i++)
        bts.push('#b'+i.toString());
    
    for (let i = 0; i < bts.length; i++)
    {
        let id = bts[i];
        let el = document.querySelector(id);
        el.addEventListener('click',() => {
            sc.textContent += el.textContent;
        })
    }
}





addEventListeners();