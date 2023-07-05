function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validadionTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("O Código deve ser preenchido");
    return false;
  }
  if (validadionTitle == "") {
    alert("O título deve ser preenchido");
    return false;
  }
  if (validationDirector == "") {
    alert("O nome do diretor deve ser preenchido");
    return false;
  }
  if (validationDate == "") {
    alert("A Data deve ser preenchida");
    return false;
  }
  if (validationRadio == "") {
    alert("O Gênero deve ser preenchido");
    return false;
  }
  alert("A Validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert = window.document.getElementById("insertRow").innerHTML;
  insert =`
  <th scope='row'>${cod}</th>
  <td>${title}</td>
  <td>${director}</td>
  <td>${date}</td> 
  <td>${radio}</td>`;

}
