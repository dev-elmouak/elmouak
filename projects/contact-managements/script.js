const form = document.querySelector(".add-section");
function showForm(){
  form.style.display = "flex";
}
function hideForm(){
  form.style.display = "none";
}

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const city = document.querySelector("#city");
const btnAdd = document.querySelector("#btnAdd");
const message_add = document.querySelector(".message_add");
let contacts;
if (localStorage.list_contacts != null) {
  contacts = JSON.parse(localStorage.list_contacts)
}
else{
  contacts = [];
}
function add_contact() {
  if (name.value !== "") {
    let contact_info = {
      name: name.value.toLowerCase(),
      email: email.value,
      phone: phone.value,
      city: city.value,
    }
    contacts.push(contact_info);
    localStorage.setItem("list_contacts", JSON.stringify(contacts));
    message_add.classList.add("active-message");
    setTimeout(() => {
      message_add.classList.remove("active-message");
    }, 1500);
    show_contacts()
    emptyInputs()
    length_contacts()
  }
}
btnAdd.addEventListener("click", add_contact);
function show_contacts(){
  let card = "";
  for (let i = 0; i < contacts.length; i++) {
    card += `
        <div class="card">
            <div class="left-card">
              <p>${contacts[i].name.charAt(0)}</p>
              <p>${contacts[i].name}</p>
            </div>
            <div class="items">
              <p onclick="show_more(${i})">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"/></svg>
              </p>
              <p onclick="deleteContact(${i})">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"/></svg>
                <span>delete</span>
              </p>
            </div>
          </div>
    `;
    }
  document.querySelector(".cards").innerHTML = card;
}
show_contacts()

function emptyInputs(){
  name.value = "";
  email.value = "";
  phone.value = "";
  city.value = "";
}

function deleteContact(i){
  contacts.splice(i , 1);
  localStorage.list_contacts = JSON.stringify(contacts);
  show_contacts()
  length_contacts()
}
// search
const search = document.querySelector("#search");
search.addEventListener("keyup", search_contacts);
function search_contacts(){
  let card = '';
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name.includes(search.value)) {
      card += `
        <div class="card">
          <div class="left-card">
            <p>${contacts[i].name.charAt(0)}</p>
            <p>${contacts[i].name}</p>
          </div>
          <div class="items">
            <p onclick="show_more(0)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
              </p>
            <p onclick="deleteContact(${i})">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"/></svg>
              <span>delete</span>
            </p>
          </div>
        </div>
      `;
    }
    document.querySelector(".cards").innerHTML = card;
  }
}

// contacts length
function length_contacts(){
  for (let i = 0; i < contacts.length; i++) {
    document.querySelector(".contact_length").innerHTML = i+1;
  }
}
length_contacts()



// show more
function show_more(i){
  document.querySelector(".more_info").style.display = 'flex';
  let more_card = "";
  for (let j = 0; j < contacts.length; j++) {
    more_card = `
    <div class="info-card">
            <div class="person">
            <svg class="closeMore" onclick="hide_more()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"/></svg>
              <span>${contacts[i].name.charAt(0)}</span>
            </div>
            <div class="details">
              <p>name : <span>${contacts[i].name}</span></p>
              <p>phone :<span>${contacts[i].phone}</span></p>
              <p>emial :<span>${contacts[i].email}</span></p>
              <p>city :<span>${contacts[i].city}</span></p>
            </div>
          </div>
    `; 
  }
  document.querySelector('.more_info').innerHTML = more_card;
}
function hide_more(){
  document.querySelector('.more_info').style.display = 'none';
}