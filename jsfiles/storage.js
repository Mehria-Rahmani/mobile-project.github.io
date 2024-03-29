const data = { name: '', email: '', desc: '' };

const Fullname = document.getElementById('fullname');
const formEmail = document.getElementById('email');
const formDesc = document.getElementById('desc');

// checks if the browser supports local storage
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = 'storage_test';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

// if the user have filled the form before
// it restore that data for form elements
function restoreValues() {
  if (storageAvailable('localStorage') && localStorage.length !== 0) {
    const temp = JSON.parse(localStorage.getItem('form'));
    Fullname.value = temp.name;
    formEmail.value = temp.email;
    formDesc.innerText = temp.desc;
  }
}
restoreValues();
// whenever a user changes values in the form
// this function update the values in local storage
function updateValues() {
  data.name = Fullname.value;
  data.email = formEmail.value;
  data.desc = formDesc.value;
  localStorage.setItem('form', JSON.stringify(data));
}

// select form elements
const formInputs = document.querySelectorAll('.formin');
// add event listener for all form elements
formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (storageAvailable('localStorage')) {
      updateValues();
    }
  });
});
