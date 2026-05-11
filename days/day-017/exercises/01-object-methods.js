const employee = {
    name: "Budi Santoso",
    age: 28,
    salary: 8500000,
    department: "engineering",
    yearsOfService: 3,
    isActive: true
};

//TUGAS 1
const properties = Object.keys(employee);
console.log(properties);

//TUGAS 2
const numberEntries = Object.entries(employee).filter(function(entry){
    return typeof entry[1] === "number";
})

console.log(numberEntries);

//Ditampilkan
numberEntries.forEach(function(item){
    console.log(item[0] + ": " + item[1]);
});

//TUGAS 3
const stringValues = Object.values(employee).filter(function(value){
    return typeof value === "string";
})

console.log(stringValues);