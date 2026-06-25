// Usuario de prueba

const correo = "admin@alkewallet.com";
const contrasena = "1234";

// Buscar el formulario

const formulario = document.getElementById("loginForm");

// Verificación

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === correo && password === contrasena) {

            alert("Bienvenido a Alke Wallet");

            window.location.href = "menu.html";

        } else {

            alert("Correo o contraseña incorrectos");

        }

    });

}
// Depósitos

const formularioDeposito = document.getElementById("depositForm");

if (formularioDeposito) {

    formularioDeposito.addEventListener("submit", function (event) {

        event.preventDefault();

        let monto = document.getElementById("monto").value;

        let mensaje = document.getElementById("mensaje");

        if (monto > 0) {

            mensaje.textContent = "Depósito realizado por $" + monto;

            $("#mensaje").fadeIn();

        } else {

            mensaje.textContent = "Monto insuficiente.";

        }

    });

}
// transferencias

const formularioTransferencia = document.getElementById("transferForm");

if (formularioTransferencia) {

    formularioTransferencia.addEventListener("submit", function (event) {

        event.preventDefault();

        let contacto = document.getElementById("contacto").value;

        let monto = document.getElementById("montoTransferencia").value;

        let mensaje = document.getElementById("mensajeTransferencia");

        if (contacto !== "" && monto > 0) {

            mensaje.textContent = "Se enviaron $" + monto + " a " + contacto + ".";

            $("#mensajeTransferencia").fadeIn();

        } else {

            mensaje.textContent = "Complete todos los campos.";

        }

    });

}

// Transacciones realizadas

const tabla = document.getElementById("tablaTransacciones");

if (tabla) {

    let transacciones = [

        {
            fecha: "20/06/2026",
            tipo: "Depósito",
            monto: "$100.000"
        },

        {
            fecha: "22/06/2026",
            tipo: "Transferencia",
            monto: "$25.000"
        },

        {
            fecha: "24/06/2026",
            tipo: "Depósito",
            monto: "$50.000"
        }

    ];

    for (let i = 0; i < transacciones.length; i++) {

        tabla.innerHTML +=
            "<tr>" +
            "<td>" + transacciones[i].fecha + "</td>" +
            "<td>" + transacciones[i].tipo + "</td>" +
            "<td>" + transacciones[i].monto + "</td>" +
            "</tr>";

    }

}
// jQuery

$(document).ready(function () {

    $("#mensaje").hide();

    $("#mensajeTransferencia").hide();

});

$(document).ready(function(){

    $("#monto").on("input", function(){

        $("#mensaje").hide();

    });

    $("#contacto, #montoTransferencia").on("input", function(){

        $("#mensajeTransferencia").hide();

    });

});