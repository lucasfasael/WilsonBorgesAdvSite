   function redirect() {
        var selectedOption = document.getElementById("areas").value;

        if (selectedOption === "direitoFamilia") {
            window.location.href = "#direitoFamiliaSection";
        } else if (selectedOption === "direitoTrabalhista") {
            window.location.href = "#direitoTrabalhistaSection";
        }
    }



    const header = document.getElementById('main-header');
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos <= 20) {

            header.classList.remove('shrink');
        } else {
            header.classList.add('shrink');
        }

        prevScrollPos = currentScrollPos;
    };

    function enviarParaWhatsApp() {
    // Obter os valores dos campos
    var nome = document.getElementsByName("nome")[0].value;
    var telefone = document.getElementsByName("telefone")[0].value;
    var mensagem = document.getElementsByName("mensagem")[0].value;

    // Verificar se os campos obrigatórios estão preenchidos
    if (nome.trim() === "" || telefone.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Construa a mensagem
    var mensagemWhatsapp = "Nome: " + nome + "\nTelefone: " + telefone + "\nMensagem: " + mensagem;

    // URL para o WhatsApp com a mensagem codificada
    var url = "https://wa.me/5579999100201?text=" + encodeURIComponent(mensagemWhatsapp);

    // Redirecionar para a URL do WhatsApp
    window.open(url, "_blank");
}
    function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        var logo = document.querySelector('.logo');
        logo.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }
   
