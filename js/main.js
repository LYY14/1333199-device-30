const writeUs  = document.querySelector(".link--contacts");
const writeUsPopup = document.querySelector(".modal-write-us");
const modalClose = writeUsPopup.querySelector(".modal-close");
const writeUsForm = writeUsPopup.querySelector(".write-us-form");
const userName = writeUsPopup.querySelector(".name-user");
const userEmail = writeUsPopup.querySelector(".email-user");
const userMassage = writeUsPopup.querySelector(".massage-user");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
  }

  userName.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  // writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
  writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMassage.value) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-show");
    }
  }
});

