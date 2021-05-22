const pressMeBtn = document.getElementById('pressMe');

pressMeBtn.addEventListener('click', print);

function print(){
    console.log('Hello from Project-2');

    const emp1 = new Employee('Anupam', 10);
    emp1.print();
}
