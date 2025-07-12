document.addEventListener('DOMContentLoaded', () => {
    const materias = document.querySelectorAll('.materia');
    materias.forEach(materia => {
        materia.addEventListener('click', () => {
            // Remover clases de todas las materias
            materias.forEach(m => {
                m.classList.remove('seleccionada', 'correlativa');
            });
            // Resaltar la materia clicada en violeta oscuro
            materia.classList.add('seleccionada');
            // Resaltar las correlativas en lila
            const correlativas = materia.getAttribute('data-correlativas').split(',');
            correlativas.forEach(correlativa => {
                if (correlativa.trim()) {
                    const elemCorrelativa = Array.from(materias).find(m => m.textContent.trim() === correlativa.trim());
                    if (elemCorrelativa) elemCorrelativa.classList.add('correlativa');
                }
            });
        });
    });
});
