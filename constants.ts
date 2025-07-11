
import { Topic } from './types';

export const TOPICS: Topic[] = [
  {
    id: 'hp_aida',
    title: 'HP AIDA: Gestión Integral de Turnos Hospitalarios',
    details: `
- Conceptos Clave: ¿Qué es HP AIDA? Es una aplicación de gestión de turnos para personal de enfermería. ¿Para qué se utiliza? Para la gestión integral de los turnos de trabajo del personal.
- Funcionalidades Principales: Visualización de horarios, gestión de incidencias (diarias/horarias), asignación de turnos (simple/múltiple), intercambio de turnos, gestión de guardias.
- Datos Maestros: Diferencia entre datos maestros generales (Categorías, Centros, Unidades de Enfermería, Servicios) y datos específicos de turnos (Colectivos, Jornadas, Tipos de Personal).
- Integración: Con HP HIS (sistema de información hospitalaria), con nóminas, con aplicaciones de cuidados de enfermería.
- Beneficios: Comparativa de jornada (teórica, planificada, real), registro de incidencias ilimitadas, rastreador de personal de guardia, generación de informes personalizados.
    `
  },
  {
    id: 'personal_sanitario',
    title: 'El Personal Sanitario en Sacyl: Contratación y Gestión',
    details: `
- Tipos de Contratación: Descripción del personal estatutario temporal (interino, eventual), y la necesidad de contratación temporal en sanidad para cubrir ausencias o acumulación de tareas.
- Gestión de Personal en AIDA: Ficha del empleado con datos personales, contractuales, y fotografía.
- Asignación de Personal: Roles de titular, sustituto, y refuerzo dentro de la herramienta AIDA.
- Gestión de Personal en Tránsito: Manejo de profesionales que se mueven entre unidades o centros.
- Movilidad y Adscripciones: Posibilidad de adscripción temporal a otros colectivos de trabajo.
- Colectivos Especiales: Gestión de colectivos de correturnos, personal que rota por diferentes unidades.
    `
  },
  {
    id: 'permisos_licencias',
    title: 'Permisos y Licencias para Profesionales de la Salud',
    details: `
- Tipos Comunes: Días adicionales por antigüedad (canosos), días por matrimonio, traslado de domicilio, exámenes oficiales, consultas médicas propias o de familiares, exámenes prenatales y técnicas de preparación al parto.
- Permisos de Conciliación: Permiso de lactancia, permiso para el cuidado de menores afectados por cáncer u otra enfermedad grave, reducción de jornada por cuidado de hijo.
- Exenciones: Exención de atención continuada (guardias) para embarazadas, mayores de 55 años, y trabajadores con reducción de jornada por cuidado de hijo.
- Procedimientos: Necesidad de solicitud y justificación documental de los permisos.
- Herramientas de Gestión: Se indica la necesidad de una aplicación informática para registrar licencias y permisos desagregados por sexo y categoría profesional.
    `
  },
  {
    id: 'innovacion_formacion',
    title: 'Innovación y Formación en la Sanidad de CyL',
    details: `
- Portal Gestion@FC: Es un portal para la gestión de la formación continuada. Permite al usuario registrar datos, detectar necesidades formativas, realizar solicitudes y consultar su historial formativo.
- Formación de Nuevos Trabajadores: La guía de acogida busca proporcionar información institucional y sociolaboral, enseñar el uso de herramientas informáticas (como Jimena, Gacela, AIDA), y facilitar la integración.
- Formación en Nuevas Tecnologías: Existen experiencias de enfermeras referentes que forman a sus compañeros en el uso de nuevas tecnologías.
- Investigación en Enfermería: Se fomenta la investigación desde la Dirección de Enfermería, destacando la importancia de difundir los resultados.
- Tecnologías Avanzadas en CAULE: Se menciona la implementación y uso de equipos como PET-TAC y el Acelerador Lineal Truebeam, que requieren formación específica para su operación.
    `
  },
  {
    id: 'igualdad_genero',
    title: 'Compromiso con la Igualdad de Género en Sanidad',
    details: `
- Diagnóstico y Necesidad de Datos: Se subraya la urgencia de actualizar el diagnóstico de situación con datos desagregados por sexo para identificar desigualdades, por ejemplo, en las formas de provisión de puestos.
- Medidas Propuestas: Incorporar la perspectiva de género en normas y manuales de gestión. Generalizar el uso de las TIC para la formación en igualdad. Incluir indicadores de género en solicitudes y adjudicación de cursos de formación.
- Herramientas Informáticas: Diseñar una aplicación específica para registrar el uso de licencias y permisos de forma desagregada por sexo. Garantizar que las herramientas de gestión permitan la explotación de datos desagregados por sexo en las retribuciones.
    `
  }
];
