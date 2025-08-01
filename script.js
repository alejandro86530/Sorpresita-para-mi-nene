'use strict';

// Espera a que todo el contenido del HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- ESTRUCTURA DE DATOS DE LA MALLA ---
    // Se define cada ramo con un 'id' único, su nombre y un array con los 'id' de sus requisitos.
    const mallaData = [
        {
            semestre: "Semestre 1",
            ramos: [
                { id: 'matematica', nombre: 'Matemática', requisitos: [] },
                { id: 'intro-ciencias-farmaceuticas', nombre: 'Introducción a las Ciencias Farmaceuticas', requisitos: [] },
                { id: 'psicologia-general', nombre: 'Psicologia General', requisitos: [] },
                { id: 'quimica-general', nombre: 'Química General', requisitos: [] },
                { id: 'lab-quimica-general', nombre: 'Laboratorio de Quimica General', requisitos: [] },
                { id: 'biologia-celular', nombre: 'Biologia Celular', requisitos: [] },
            ]
        },
        {
            semestre: "Semestre 2",
            ramos: [
                { id: 'anatomia-humana', nombre: 'Anatomía Humana', requisitos: [] },
                { id: 'estadistica', nombre: 'Estadística', requisitos: ['matematica'] },
                { id: 'intro-fisica', nombre: 'Introducción a la Física', requisitos: ['matematica'] },
                { id: 'quimica-organica', nombre: 'Química Orgánica', requisitos: ['quimica-general', 'lab-quimica-general'] },
                { id: 'lab-quimica-organica', nombre: 'Laboratorio de Química Orgánica', requisitos: ['quimica-general', 'lab-quimica-general'] },
                { id: 'quimica-inorganica', nombre: 'Química Inorgánica', requisitos: ['quimica-general', 'lab-quimica-general'] },
                { id: 'lab-quimica-inorganica', nombre: 'Laboratorio de Química Inorgánica', requisitos: ['quimica-general', 'lab-quimica-general'] },
            ]
        },
        {
            semestre: "Semestre 3",
            ramos: [
                { id: 'calculo', nombre: 'Calculo', requisitos: ['matematica'] },
                { id: 'fisiologia-humana', nombre: 'Fisiologia Humana', requisitos: ['biologia-celular', 'anatomia-humana'] },
                { id: 'quimica-analitica', nombre: 'Quimica Analitica Cuanti-Cualitativa', requisitos: ['quimica-inorganica', 'lab-quimica-inorganica'] },
                { id: 'lab-quimica-analitica', nombre: 'Laboratorio de Quimica Analitica Cuanti-Cualitativa', requisitos: ['quimica-inorganica', 'lab-quimica-inorganica'] },
                { id: 'quimica-organica-avanzada', nombre: 'Quimica Organica Avanzada', requisitos: ['quimica-organica', 'lab-quimica-organica'] },
                { id: 'lab-quimica-organica-avanzada', nombre: 'Laboratorio de Quimica Organica Avanzada', requisitos: ['quimica-organica', 'lab-quimica-organica'] },
                { id: 'epidemiologia', nombre: 'Epidemiologia y Salud Pública', requisitos: ['estadistica'] },
                { id: 'formacion-integral-1', nombre: 'Formación Integral', requisitos: [] },
            ]
        },
        {
            semestre: "Semestre 4",
            ramos: [
                { id: 'fisiopatologia', nombre: 'Fisiopatología', requisitos: ['fisiologia-humana'] },
                { id: 'fisicoquimica', nombre: 'Fisicoquímica', requisitos: ['intro-fisica', 'calculo', 'quimica-inorganica', 'lab-quimica-inorganica'] },
                { id: 'lab-fisicoquimica', nombre: 'Laboratorio de Fisicoquímica', requisitos: ['intro-fisica', 'calculo', 'quimica-inorganica', 'lab-quimica-inorganica'] },
                { id: 'analisis-instrumental', nombre: 'Analisis Químico Instrumental', requisitos: ['quimica-analitica', 'lab-quimica-analitica'] },
                { id: 'lab-analisis-instrumental', nombre: 'Laboratorio de Analisis Químico Instrumental', requisitos: ['quimica-analitica', 'lab-quimica-analitica'] },
                { id: 'farmacognosia', nombre: 'Farmacognosia y Fitoterapia', requisitos: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
                { id: 'microbiologia-general', nombre: 'Microbiología General', requisitos: ['biologia-celular', 'quimica-organica', 'lab-quimica-organica'] },
                { id: 'formacion-integral-2', nombre: 'Formación Integral 2', requisitos: [] },
            ]
        },
        {
            semestre: "Semestre 5",
            ramos: [
                { id: 'farmacologia-1', nombre: 'Farmacología 1', requisitos: ['fisiopatologia', 'microbiologia-general'] },
                { id: 'bioquimica-general', nombre: 'Bioquímica General', requisitos: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
                { id: 'lab-bioquimica-general', nombre: 'Laboratorio de Bioquímica General', requisitos: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
                { id: 'tecnologia-farmaceutica-1', nombre: 'Tecnologia Farmaceutica 1', requisitos: ['fisicoquimica', 'lab-fisicoquimica', 'analisis-instrumental', 'lab-analisis-instrumental'] },
                { id: 'farmacoquimica-1', nombre: 'Farmaco química 1', requisitos: ['farmacognosia', 'fisiopatologia', 'analisis-instrumental', 'lab-analisis-instrumental'] },
                { id: 'analisis-evidencia-1', nombre: 'Analisis de la Evidencia Cientifica 1', requisitos: ['farmacognosia', 'fisiopatologia'] },
                { id: 'formacion-integral-3', nombre: 'Formación Integral 3', requisitos: [] },
            ]
        },
        {
            semestre: "Semestre 6",
            ramos: [
                { id: 'farmacologia-2', nombre: 'Farmacología 2', requisitos: ['farmacologia-1'] },
                { id: 'tecnologia-farmaceutica-2', nombre: 'Tecnologia Farmaceutica 2', requisitos: ['tecnologia-farmaceutica-1'] },
                { id: 'farmacoquimica-2', nombre: 'Farmacoquímica 2', requisitos: ['farmacoquimica-1'] },
                { id: 'analisis-evidencia-2', nombre: 'Analisis de la Evidencia Cientifica 2', requisitos: ['analisis-evidencia-1'] },
                { id: 'bioquimica-clinica', nombre: 'Bioquímica Clínica', requisitos: ['microbiologia-general', 'bioquimica-general', 'lab-bioquimica-general'] },
            ]
        },
        {
            semestre: "Semestre Verano 1",
            ramos: [
                { id: 'practica-primaria', nombre: 'Práctica Atención Primaria', requisitos: ['farmacologia-2', 'farmacognosia', 'analisis-evidencia-2'] },
            ]
        },
        {
            semestre: "Semestre 7",
            ramos: [
                { id: 'farmacocinetica-clinica', nombre: 'Farmacocinetica Clínica', requisitos: ['farmacologia-2', 'bioquimica-clinica'] },
                { id: 'nutricion-clinica', nombre: 'Nutrición Clinica', requisitos: ['farmacologia-2', 'bioquimica-clinica'] },
                { id: 'tecnologia-cosmetica', nombre: 'Tecnologia Cosmética', requisitos: ['tecnologia-farmaceutica-2'] },
                { id: 'toxicologia', nombre: 'Toxicología', requisitos: ['farmacologia-2', 'bioquimica-clinica'] },
                { id: 'farmacia-clinica-1', nombre: 'Farmacia Clínica 1', requisitos: ['farmacologia-2', 'bioquimica-clinica'] },
            ]
        },
        {
            semestre: "Semestre 8",
            ramos: [
                { id: 'farmacia-asistencial', nombre: 'Farmacia Asistencial', requisitos: ['farmacologia-2', 'analisis-evidencia-2'] },
                { id: 'bioequivalencia', nombre: 'Bioequivalencia', requisitos: ['farmacocinetica-clinica', 'tecnologia-cosmetica'] },
                { id: 'control-calidad-procesos', nombre: 'Control de Calidad y Procesos', requisitos: ['tecnologia-cosmetica'] },
                { id: 'admin-gestion-farmaceutica', nombre: 'Administración y Gestión Farmaceutica', requisitos: ['practica-primaria'] },
                { id: 'farmacia-clinica-2', nombre: 'Farmacia Clínica 2', requisitos: ['nutricion-clinica', 'farmacia-clinica-1'] },
            ],
            hito: { id: 'licenciatura', nombre: 'Obtención Licenciatura en Ciencias Farmacéuticas' }
        },
        {
            semestre: "Semestre Verano 2",
            ramos: [
                { id: 'practica-comunitaria', nombre: 'Práctica Farmacia Comunitaria', requisitos: ['farmacoquimica-2', 'admin-gestion-farmaceutica', 'toxicologia'] },
            ]
        },
        {
            semestre: "Semestre 9",
            ramos: [
                { id: 'internado-asistencial', nombre: 'Internado en Farmacia Asistencial', requisitos: ['licenciatura'] },
                { id: 'aseguramiento-calidad', nombre: 'Aseguramiento y Gestión de Calidad', requisitos: ['control-calidad-procesos'] },
                { id: 'farmacovigilancia', nombre: 'Farmacovigilancia y Atención Farmacéutica', requisitos: ['toxicologia', 'farmacia-clinica-2'] },
                { id: 'legislacion-farmaceutica', nombre: 'Legislación Farmacéutica y Bioética', requisitos: ['practica-comunitaria'] },
                { id: 'seminario-titulo-1', nombre: 'Seminario de Título', requisitos: ['licenciatura'] },
            ]
        },
        {
            semestre: "Semestre 10",
            ramos: [
                { id: 'internado-final', nombre: 'Internado: Farmacía Clínica o Industria', requisitos: ['licenciatura'] },
                { id: 'seminario-titulo-2', nombre: 'Seminario de Título', requisitos: ['licenciatura'] },
            ],
            hito: { id: 'titulo-profesional', nombre: 'Obtención de Título Profesional de Química Farmacéutica' }
        }
    ];
    
    // Lista de mensajes motivadores que aparecerán al azar
    const mensajesMotivadores = [
        "¡Sigue así!",
        "¡Felicidades, cada vez más cerca!",
        "¡Eres increíble bb!",
        "¡Cada día te superas más!",
        "¡Ya falta menos para la meta!",
        "¡Lo estás haciendo supergenial!",
        "Que orgulloso estoy mi bb"
    ];

    // --- ELEMENTOS DEL DOM ---
    const mallaContainer = document.getElementById('malla');
    const notificacionEl = document.getElementById('notificacion');
    const resetButton = document.getElementById('reset-button');
    
    // --- LÓGICA PRINCIPAL ---

    // Obtiene la lista de ramos aprobados desde el localStorage. Si no hay nada, devuelve un array vacío.
    const getAprobados = () => {
        const aprobados = localStorage.getItem('ramosAprobados');
        return aprobados ? JSON.parse(aprobados) : [];
    };

    // Guarda la lista actualizada de ramos aprobados en el localStorage.
    const saveAprobados = (aprobados) => {
        localStorage.setItem('ramosAprobados', JSON.stringify(aprobados));
    };

    // Función para renderizar toda la malla curricular en la página.
    const renderMalla = () => {
        mallaContainer.innerHTML = ''; // Limpia el contenedor antes de dibujar
        
        mallaData.forEach(semestreData => {
            // Crea el div para el semestre
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';
            
            // Crea el título del semestre
            const semestreTitulo = document.createElement('h2');
            semestreTitulo.textContent = semestreData.semestre;
            semestreDiv.appendChild(semestreTitulo);

            // Crea las tarjetas para cada ramo
            semestreData.ramos.forEach(ramoData => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.textContent = ramoData.nombre;
                ramoDiv.dataset.id = ramoData.id; // Asigna el id del ramo como 'data-id'
                
                ramoDiv.addEventListener('click', () => handleRamoClick(ramoData));
                
                semestreDiv.appendChild(ramoDiv);
            });
            
            // Si el semestre tiene un hito (Licenciatura/Título), lo añade
            if (semestreData.hito) {
                const hitoDiv = document.createElement('div');
                hitoDiv.className = 'hito';
                hitoDiv.id = semestreData.hito.id;
                hitoDiv.textContent = semestreData.hito.nombre;
                semestreDiv.appendChild(hitoDiv);
            }

            mallaContainer.appendChild(semestreDiv);
        });

        updateRamosStatus();
    };

    // Maneja el evento de clic en un ramo.
    const handleRamoClick = (ramoData) => {
        let aprobados = getAprobados();
        
        if (aprobados.includes(ramoData.id)) {
            // Si el ramo ya está aprobado, se desmarca (elimina de la lista).
            aprobados = aprobados.filter(id => id !== ramoData.id);
        } else {
            // Si el ramo no está aprobado, se verifica si se puede aprobar.
            const { puedeAprobar, requisitosFaltantes } = checkRequisitos(ramoData, aprobados);
            if (puedeAprobar) {
                aprobados.push(ramoData.id);
                // Muestra un mensaje motivador al azar el 40% de las veces
                if(Math.random() < 0.4) {
                    const mensaje = mensajesMotivadores[Math.floor(Math.random() * mensajesMotivadores.length)];
                    mostrarNotificacion(mensaje, 'exito');
                }
            } else {
                // Si faltan requisitos, muestra una notificación de error.
                const nombresRamosFaltantes = requisitosFaltantes.map(id => findRamoById(id).nombre).join(', ');
                mostrarNotificacion(`Requisitos pendientes: ${nombresRamosFaltantes}`, 'error');
                return;
            }
        }
        
        saveAprobados(aprobados);
        updateRamosStatus();
    };
    
    // Verifica si un ramo puede ser aprobado, revisando sus requisitos.
    const checkRequisitos = (ramoData, aprobados) => {
        if (ramoData.requisitos.length === 0) {
            return { puedeAprobar: true, requisitosFaltantes: [] };
        }
        
        // Manejo especial para el requisito de 'licenciatura'
        if (ramoData.requisitos.includes('licenciatura')) {
             if (!checkLicenciatura(aprobados)) {
                 return { puedeAprobar: false, requisitosFaltantes: ['Licenciatura'] };
             }
        }

        const requisitosFaltantes = ramoData.requisitos.filter(reqId => !aprobados.includes(reqId) && reqId !== 'licenciatura');
        
        return {
            puedeAprobar: requisitosFaltantes.length === 0,
            requisitosFaltantes: requisitosFaltantes
        };
    };

    // Actualiza el estado visual de todos los ramos (aprobado, bloqueado, disponible).
    const updateRamosStatus = () => {
        const aprobados = getAprobados();
        const todosLosRamos = document.querySelectorAll('.ramo');

        todosLosRamos.forEach(ramoDiv => {
            const ramoId = ramoDiv.dataset.id;
            const ramoData = findRamoById(ramoId);

            ramoDiv.classList.remove('aprobado', 'bloqueado');

            if (aprobados.includes(ramoId)) {
                ramoDiv.classList.add('aprobado');
            } else {
                const { puedeAprobar } = checkRequisitos(ramoData, aprobados);
                if (!puedeAprobar) {
                    ramoDiv.classList.add('bloqueado');
                }
            }
        });
        
        // Actualiza el estado de los hitos
        updateHitosStatus(aprobados);
    };
    
    // Revisa y actualiza el estado de los hitos (Licenciatura y Título)
    const updateHitosStatus = (aprobados) => {
        const licenciaturaHito = document.getElementById('licenciatura');
        const tituloHito = document.getElementById('titulo-profesional');
        
        // Chequeo Licenciatura
        if (licenciaturaHito) {
            licenciaturaHito.classList.remove('obtenido');
            if (checkLicenciatura(aprobados)) {
                licenciaturaHito.classList.add('obtenido');
            }
        }
        
        // Chequeo Título Profesional
        if (tituloHito) {
            tituloHito.classList.remove('obtenido');
            const totalRamos = mallaData.flatMap(s => s.ramos).length;
            if (aprobados.length === totalRamos) {
                tituloHito.classList.add('obtenido');
            }
        }
    };
    
    // Lógica específica para verificar si se cumplen los requisitos para la licenciatura
    const checkLicenciatura = (aprobados) => {
        const ramosHastaSemestre8 = mallaData
            .slice(0, mallaData.findIndex(s => s.hito && s.hito.id === 'licenciatura') + 1)
            .flatMap(s => s.ramos)
            .map(r => r.id);
            
        return ramosHastaSemestre8.every(id => aprobados.includes(id));
    };
    
    // Muestra una notificación en pantalla por 3 segundos.
    let notificationTimeout;
    const mostrarNotificacion = (mensaje, tipo) => {
        clearTimeout(notificationTimeout); // Limpia cualquier notificación anterior
        
        notificacionEl.textContent = mensaje;
        notificacionEl.className = `notificacion ${tipo} visible`;

        notificationTimeout = setTimeout(() => {
            notificacionEl.className = 'notificacion oculto';
        }, 3000);
    };
    
    // Busca los datos de un ramo por su 'id'.
    const findRamoById = (id) => {
        for (const semestre of mallaData) {
            const ramo = semestre.ramos.find(r => r.id === id);
            if (ramo) return ramo;
        }
        // Retorna un objeto dummy si es un requisito especial como 'Licenciatura'
        if (id === 'Licenciatura') return { nombre: 'Licenciatura' };
        return null;
    };
    
    // Lógica del botón de reinicio
    resetButton.addEventListener('click', () => {
        if(confirm('¿Estás segura de que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) {
            localStorage.removeItem('ramosAprobados');
            renderMalla(); // Vuelve a renderizar la malla desde cero
        }
    });

    // --- INICIALIZACIÓN ---
    renderMalla(); // Llama a la función principal para construir la página al cargar.
});
