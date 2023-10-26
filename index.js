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

function newFreelance(){
  let selectedTable = document.getElementsByTag("table")
  let selectedRow = selectedTable.createElement("tr")
  selected.innerHTML = `Hello`
}

freelancersForumInit()
newFreelance()