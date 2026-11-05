function calcularPromedio() {
    // Obtener los valores de los inputs
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const n4 = parseFloat(document.getElementById('nota4').value);
    const n5 = parseFloat(document.getElementById('nota5').value);

    // Validar que se hayan ingresado todas las notas
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
        alert("Por favor, ingresa las 5 notas para calcular el promedio.");
        return;
    }

    // Validar rango de notas (0.0 a 5.0)
    const notas = [n1, n2, n3, n4, n5];
    const notasInvalidas = notas.some(nota => nota < 0 || nota > 5);

    if (notasInvalidas) {
        alert("Error: Las notas deben estar entre 0.0 y 5.0");
        return;
    }

    // Calcular el promedio
    const suma = n1 + n2 + n3 + n4 + n5;
    const promedio = suma / 5;

    // Mostrar el resultado formateado a 2 decimales
    const spanPromedio = document.getElementById('promedioFinal');
    const elemEstado = document.getElementById('estadoEstudiante');
    
    spanPromedio.textContent = promedio.toFixed(2);

    // Indicar si aprobó o no (asumiendo 3.0 como nota mínima de aprobación)
    if (promedio >= 3.0) {
        elemEstado.textContent = "¡Aprobado!";
        elemEstado.className = "estado aprobado";
    } else {
        elemEstado.textContent = "Reprobado";
        elemEstado.className = "estado reprobado";
    }
}

function limpiarNotas() {
    // Restablecer campos de texto
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('nota4').value = '';
    document.getElementById('nota5').value = '';

    // Restablecer el resultado
    document.getElementById('promedioFinal').textContent = '--';
    const elemEstado = document.getElementById('estadoEstudiante');
    elemEstado.textContent = '';
    elemEstado.className = 'estado';
}
