class Employee{

    name; 
    id;

    constructor(name, id){
        this.name  = name;
        this.id = id;
    }

    print(){
        console.log(this.name + ' :: ' + this.id);
    }
}