const fs = require("fs")

fs.writeFile("employees.json", '[{"name": "Employee 1 Name", "salary": 2000},', "utf-8", (err) => {
    if (err) console.log(err)
    console.log("Dosya Oluşturuldu!")
})

let empData = fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(err)
    console.log(data)
})

fs.appendFile("employees.json", '\n {"name": "Can", "age": 23}]', (err) => {
    if (err) console.log(err)
    console.log("Dosya Güncellendi!")
})

fs.unlink("employees.json", (err) => {
    if (err) console.log(err)
    console.log("Dosya Silindi!")
})