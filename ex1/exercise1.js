// Tạo 1 mảng rỗng và lưu trữ các tên
// Tạo nút button và input để lấy dữ liệu khi click và button thì push tên lấy từ input vào trong mảng

// tạo mảng rỗng lưu trữ tên
const arrNames = [];

const inputElement = document.querySelector("#input");
const btnSubmit = document.querySelector("#btn");
const radioElement = document.querySelectorAll('input[type="radio"]');
const selectElement = document.querySelector("#selectElement");
const checkboxElement = document.querySelectorAll('input[type="checkbox"]');

let genderValue = "Nam";
const hobbies = [];
/**
 * Hàm nhập dữ liệu
 * @param {*} value
 * @param {*} arr
 */
const handleAddName = (value, arr) => {
  arr.push(value);
};
/**
 * Hàm đọc dữ liệu, hiển thị danh sách tên
 */
const loadData = () => {
  console.log(arrNames);
  console.log(genderValue);
  console.log(hobbies);
};
checkboxElement.forEach((element) => {
  // kiểm tra checkbox nào dc checked thì sẽ lấy giá trị của nó
  element.addEventListener("change", (event) => {
    if (event.target.checked) {
      hobbies.push(event.target.value);
    } else {
      let index = hobbies.indexOf(event.target.value);
      // xoá phần tử k tìm thấy ở mảng
      if (index !== -1) {
        hobbies.splice(index, 1);
      }
      console.log(index);
    }
  });
});

btnSubmit.addEventListener("click", () => {
  const inputValue = inputElement.value.trim();
  // lấy giá trị từ radio
  radioElement.forEach((element) => {
    // kiểm tra radio nào dc checked thì sẽ lấy giá trị của nó
    if (element.checked) {
      genderValue = element.value;
    }
  });

  selectElement.addEventListener("change", (event) => {
    console.log(event.target.value);
  });

  handleAddName(inputValue, arrNames);

  //sau khi submit thì focus vào input
  inputElement.focus();

  inputElement.value = " "; // reset giá trị về rỗng

  loadData();
});
