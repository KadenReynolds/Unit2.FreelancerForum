let freelanceArr = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30
  }
  ,
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50
  }
  ,
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70
  }
]

function getAvg(){
  let avg = 0
  freelanceArr.forEach(value => {
    avg += value.price
  })
  return Math.ceil(avg / freelanceArr.length)
}

function freelancersForumInit(){
  let mainDiv = document.getElementById("freelancediv")
  mainDiv.style.border = "2px solid black"
  mainDiv.style.textAlign = "center"
  mainDiv.style.width = "50vw"
  mainDiv.innerHTML=`<h1>Freelancer Forum</h1>
                    <h3>The Average Price is: ${getAvg()}
                    <h2><b>Available Freelancers</b><h2>
                    <table>
                      <tr>
                        <th>Name</th>
                        <th>Occupation</th>
                        <th>Price</th>
                      </tr>
                      `
}

function renderFreelance(){
  for (let i = 0; i < freelanceArr.length; i++){
    let selectedTable = document.querySelector("table")
    selectedTable.style.display = "flex"
    selectedTable.style.justifyContent = "center"
    let selectedRow = selectedTable.insertRow(-1)
    selectedRow.style.fontSize = ".75em"
    selectedRow.innerHTML = `<td>${freelanceArr[i].name}</td>
                            <td>${freelanceArr[i].occupation}</td>
                            <td>${freelanceArr[i].price}</td>`
  }
}

function addRow(newName, newOccupation, newPrice){
  freelanceArr.push({name: newName, occupation: newOccupation, price: newPrice})
  let selectedTable = document.querySelector("table")
  let selectedRow = selectedTable.insertRow(-1)
  selectedRow.style.fontSize = ".75em"
  selectedRow.innerHTML = `<td>${newName}</td>
                            <td>${newOccupation}</td>
                            <td>${newPrice}</td>`
  getAvg()
}

freelancersForumInit()
renderFreelance()
setInterval(() => {
  addRow("Kaden", "Web Dev", Math.floor(Math.random() * 50))
  getAvg()
}, 3000)