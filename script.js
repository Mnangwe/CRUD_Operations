let carList = document.getElementById('cars');
let cars = ['Abarth', 'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Buick', 'Chevrolet', 'Ferrari', 'Ford', 'GMC', 'Jaguar', 'Mercedes-Benz', 'Toyota'];
  
countCars = data => {
  let count = document.getElementById('counter');

  if (data) {
    count.innerHTML = `We have ${data} cars in total`;
  } else {
    count.innerHTML = 'No cars found, try next time';
    document.getElementById('name').style.display = 'none';
  }
};

countCars(cars.length);

//Display the List of Cars
  getCars = () => {
    let data = '';
    if (cars.length > 0) {
      for (i = 0; i < cars.length; i++) {
        data += `<tr>
        <td> ${cars[i]} </td>\
         <td><button onclick="editCar( ${i} )">Edit</button></td>\
         <td><button onclick="deleteCar( ${i} )">Delete</button></td>\
         </tr>`;
      }
    }
  
  return carList.innerHTML = data;
};
// Create: POST
addCar = () => {
  let carAdded = document.getElementById('add-name');
  // Get the value
  let car = carAdded.value;

  if (car) {
    // addCar the new value
    cars.push(car.trim());
    // Reset input value
    carAdded.value = '';
    // Dislay the new list
    getCars();
  }
};
// Update: PUT
editCar = item => {
  let editCar = document.getElementById('edit-name');
  // Display value in the field
  editCar.value = cars[item];
  // Display fields
  document.getElementById('editForm').style.display = 'block';

  document.getElementById('saveEdit').onsubmit = () => {
    // Get value
    let car = editCar.value;
    if (car) {
      // editCar value
      cars.splice(item, 1, car.trim());
      // Display the new list
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
  getCars();
};

getCars();

closeInput = () => {
  document.getElementById('editForm').style.display = 'none';
}

