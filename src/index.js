function commitSearch(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let getCity = document.querySelector("#city");
  getCity.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", commitSearch);
