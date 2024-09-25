interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Jose",
    lastName: "Martinez",
    age: 25,
    location: "Canada",
};

const student2: Student = {
    firstName: "Benito",
    lastName: "Martinez",
    age: 30,
    location: "Puerto Rico",
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

const thead: HTMLTableSectionElement = document.createElement('thead');
thead.innerHTML = '<tr><th>firstName</th><th>location</th></tr>';
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tbody);

for (let i: number = 0; i < studentsList.length; i++) {
    const row: HTMLTableRowElement = document.createElement('tr');
    const td1: HTMLTableCellElement = document.createElement('td');
    const td2: HTMLTableCellElement = document.createElement('td');
    td1.innerHTML = studentsList[i].firstName;
    td2.innerHTML = studentsList[i].location;
    row.appendChild(td1);
    row.appendChild(td2);

    tbody.appendChild(row);
}
