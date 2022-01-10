let carList = document.getElementById('cars');
//let cars = ['Abarth', 'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Buick', 'Chevrolet', 'Ferrari', 'Ford', 'GMC', 'Jaguar', 'Mercedes-Benz', 'Toyota'];

let cars = [
    {
    name: 'Abarth',
    founder: 'Carlo Abarth',
    year: 1949 
    },
    {
        name: 'Acura',
        founder: 'Soichiro Honda',
        year: 1986  
    },
    {
        name: 'Alfa Romeo',
        founder: 'Nicola Romeo',
        year: 1910  
    },
    {
        name: 'Aston Martin',
        founder: 'Lionel Martin',
        year: 1913  
    },
    {
        name: 'Audi',
        founder: 'August Horch',
        year: 1909 
    },
    {
        name: 'BMW',
        founder: 'Gustav Otto',
        year: 1916 
    },
    {
        name: 'Jaguar',
        founder: 'William Lyons',
        year: 1922 
    },
    {
        name: 'Mercedes-Benz',
        founder: 'Karl Benz',
        year: 1926 
    },
    {
        name: 'Toyota',
        founder: 'Kiichiro Toyoda',
        year: 1937 
    }
]

countCars = data => {
  let count = document.getElementById('counter');

  if (data) {
    count.innerHTML = `<h4>We have ${data} cars in total</h4>`;
  } else {
    count.innerHTML = '<h4>No cars found, try next time</h4> ';
    document.getElementById('name').style.display = 'none';
  }
};



//Display the List of Cars
  getCars = () => {
    let data = '';
    if (cars.length > 0) {
      for (i = 0; i < cars.length; i++) {
        data += `<tr id="myList">
        <td>${i+1}. ${ cars[i].name } </td>
        <td> ${cars[i].founder} </td>
        <td> ${cars[i].year} </td>
         <td><button onclick="editCar( ${i} )">Edit</button></td>
         <td><button onclick="deleteCar( ${i} )">Delete</button></td>
         </tr>`;
      }
    }
    countCars(cars.length);
  return carList.innerHTML = data;
};
// Create: POST
addCar = () => {
  let nameAdd = document.getElementById('add-name');
  let founderAdd = document.getElementById('add-founder');
  let yearAdd = document.getElementById('add-year');

   

  // Get the value
  let name = nameAdd.value;
  let founder = founderAdd.value;
  let year = yearAdd.value;

   // Object
   let car = {
    name: name,
    founder:founder,
    year: year
  }

  if (name && founder && year) {
    // addCar the new value
    cars.push(car);
    console.log(cars)
    // Reset input value
    nameAdd.value = '';
    founderAdd.value = '';
    yearAdd.value = '';
    // Dislay the new list
    getCars();
  }else {
      confirm('Fill in all the spaces')
  }
};


// Update: PUT
editCar = item => {
  let editName = document.getElementById('edit-name');
  let editFounder = document.getElementById('edit-founder');
  let editYear = document.getElementById('edit-year');
  // Display value in the field

  editName.value = cars[item].name;
  editFounder.value = cars[item].founder;
  editYear.value = cars[item].year;

  // Display fields
  document.getElementById('editForm').style.display = 'block';

  document.getElementById('saveEdit').onsubmit = () => {
    // Get value
    let name = editName.value;
    let founder = editFounder.value;
    let year = editYear.value;

    //Object
    let car = {
        name:name, 
        founder:founder, 
        year:year
    }

    if (name && founder && year) {
      // editCar value
      cars.splice(item, 1, car);
      // Display the new list
      console.log(cars)
      getCars();
      // Hide fields
      closeInput();
    }
  }
};
// Delete: Delete
deleteCar = item => {
  // deleteCar the current row
  cars.splice(item, 1);
  // Display the new list
  console.log(cars)
  getCars();
};

getCars();

closeInput = () => {
  document.getElementById('editForm').style.display = 'none';
}

// Search Function
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }



