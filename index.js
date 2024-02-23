//Pegando o form, a div esconder e a div hide
const form = document.getElementById("form");
const hiddenDiv = document.getElementById("esconder");
const hidediv = document.getElementById("hide");

//Validando os campos do form
$("#form").validate({
  rules: {
    nomeinput: "required",
    emailinput: {
      required: true,
      email: true,
    },
    senhainput: "required",
  },
  messages: {
    nomeinput: "Por favor, digite seu nome!",
    emailinput: {
      required: "Por favor, digite seu email!",
      email: "Por favor, digite um email valido, ex: email@gmail.com",
    },
    senhainput: "Por favor, digite sua senha!",
  },
  submitHandler: function (form, event) {
    //Instanciando formData passando como parametro o form e executando a funcao de esconder o form
    const formData = new FormData(form);
    showHide();

    //Criando objeto usuario e passando os dados do formData para o usuario
    const usuario = {};
    for (const [key, value] of formData) {
      usuario[key] = value;
    }
    console.log(usuario);

    //Prevenindo o submit do form
    event.preventDefault();
  },
});

function showHide() {
  if (form.style.display === "none") {
    hidediv.style.display = "block";
  } else {
    hidediv.style.display = "none";
    hiddenDiv.style.display = "block";
  }
}
