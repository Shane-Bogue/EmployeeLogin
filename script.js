list = document.querySelector('ul')
form = document.querySelector('form')

document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault()
    let trait = [];
    for (let i=0; i < form.elements.length; i++)
    trait.push(form.elements[i].value)
    let x = new Details(trait[0],trait[1],trait[2],trait[3],trait[4],trait[5],trait[6],trait[7],trait[8],trait[9],trait[10],trait[11])
    x.Textify()
  });

class Employee {
    constructor(fName, lName, age, address, zipcode, city, state, country) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.address = address;
        this.zipcode = zipcode;
        this.city = city;
        this.state = state;
        this.country = country;
    }

}

class Details extends Employee {
     constructor(fName, lName, age, address, zipcode, city, state, country, title, dept, salary, years) {
        super(fName, lName, age, address, zipcode, city, state, country);
        this.title = title;
        this.dept = dept;
        this.salary = salary;
        this.years = years;
     }

     
    Textify() {
        let listItem = document.createElement('li')
        listItem.innerHTML = `<h3>-${this.fName||'John'}, ${this.lName||'Doe'}-</h3>A ${this.age||'50'} year old. Who lives at ${this.address||'9444 El Dorado St.'} (${this.zipcode||'11372'}) ${this.city||'Jackson Heights'}, ${this.state||'NY'}, ${this.country||'USA'}. Title: ${this.title||'HR Manager'} Department: ${this.dept||'HR'} Salary: ${this.salary||'$100,000'} Years Working: ${this.years||'10'}`
        list.append(listItem)
    }
}

