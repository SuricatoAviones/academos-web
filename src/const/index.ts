import type { ImageMetadata } from "astro";

export interface Curso {
  bgColor: string;
  titulo: string;
  texto: string;
  icono: ImageMetadata;
}

// ── Cursos para adultos ─────────────────────────────────────────────
import pythonImg from "../assets/img/python.png";
import jsImg from "../assets/img/js.png";
import excelImg from "../assets/img/excel.png";
import djangoImg from "../assets/img/django.png";
import reactImg from "../assets/img/react.png";
import fibraImg from "../assets/img/fibra optica.png";
import redesImg from "../assets/img/redes mikrotik.png";
import dbImg from "../assets/img/base de datos.png";
import tailwindImg from "../assets/img/tailwind.png";
import htmlImg from "../assets/img/html y css.png";
import logicaImg from "../assets/img/logica formal y algoritmos.png";
import gitImg from "../assets/img/git.png";
import robotImg from "../assets/img/robot.png";
import canvaImg from "../assets/img/canva.png";
import domoticaImg from "../assets/img/domotica.png";
import inglesImg from "../assets/img/ingles adultos.png";
import ofimaticaImg from "../assets/img/ofimatica.png";

export const cursosAdultos: Curso[] = [
  { bgColor: "#ffd523", titulo: "Python Básico",              texto: "Aprende a programar con Python desde cero",                                               icono: pythonImg },
  { bgColor: "#004aad", titulo: "JavaScript Básico",          texto: "Aprende a programar desde cero con este curso básico",                                    icono: jsImg },
  { bgColor: "#7ed957", titulo: "Excel Básico",               texto: "Aprende a crear, usar y gestionar hojas de cálculo",                                      icono: excelImg },
  { bgColor: "#175e39", titulo: "Excel Avanzado",             texto: "Domina las herramientas y funciones más poderosas de Excel",                              icono: excelImg },
  { bgColor: "#004aad", titulo: "JavaScript Avanzado",        texto: "Domina React y construye aplicaciones web modernas",                                      icono: reactImg },
  { bgColor: "#ffd523", titulo: "Python Avanzado",            texto: "Curso avanzado de programación en Python usando el framework Django",                     icono: djangoImg },
  { bgColor: "#ff4500", titulo: "Fibra Óptica",               texto: "Domina el diseño, instalación y mantenimiento de redes de fibra óptica",                  icono: fibraImg },
  { bgColor: "#7b9db6", titulo: "Redes con Mikrotik",         texto: "Diseña, configura y administra redes robustas",                                           icono: redesImg },
  { bgColor: "#3f198a", titulo: "Base de Datos",              texto: "Aprende a estructurar y consultar información de manera eficiente y profesional",         icono: dbImg },
  { bgColor: "#20aabb", titulo: "Tailwind CSS",               texto: "Aprende a diseñar componentes web escalables y adaptables",                               icono: tailwindImg },
  { bgColor: "#ffd51e", titulo: "HTML y CSS",                 texto: "Domina la estructura y el estilo para crear sitios web profesionales desde cero",         icono: htmlImg },
  { bgColor: "#2b2b2b", titulo: "Lógica y Algoritmos",        texto: "Resolución de problemas mediante pensamiento lógico y algorítmico",                       icono: logicaImg },
  { bgColor: "#e8e8e8", titulo: "Git",                        texto: "Gestiona versiones y cambios de tu código de forma profesional",                          icono: gitImg },
  { bgColor: "#38b6ff", titulo: "Robótica",                   texto: "Domina el desarrollo de prototipos inteligentes con electrónica y microcontroladores",    icono: robotImg },
  { bgColor: "#0cc0df", titulo: "Diseño Gráfico con Canva",   texto: "Crea contenido visual de alto impacto para marcas y negocios de forma ágil",              icono: canvaImg },
  { bgColor: "#1a237e", titulo: "Domótica",                   texto: "Domina la integración de sensores, actuadores y redes para crear hogares inteligentes",   icono: domoticaImg },
  { bgColor: "#c0392b", titulo: "Inglés Adultos",             texto: "Inglés práctico y profesional para la comunicación en el mundo actual",                   icono: inglesImg },
  { bgColor: "#e67e22", titulo: "Ofimática",                  texto: "Automatiza tareas y organiza información con herramientas de oficina",                    icono: ofimaticaImg },
];

// ── Cursos para niños y jóvenes ─────────────────────────────────────
import scratchImg from "../assets/img/scratch.png";
import mangaImg from "../assets/img/dibujo manga.png";
import inglesNinosImg from "../assets/img/english niños.png";

export const cursosJovenes: Curso[] = [
  { bgColor: "#0cc0df", titulo: "Scratch",       texto: "Domina los fundamentos de la lógica de programación de forma visual y divertida",           icono: scratchImg },
  { bgColor: "#38b6ff", titulo: "Robótica",      texto: "Introducción a la ingeniería y programación de robots para pequeños inventores",            icono: robotImg },
  { bgColor: "#ffe784", titulo: "Dibujo Manga",  texto: "Aprende las técnicas esenciales para dar vida a tus propios personajes y paneles de manga", icono: mangaImg },
  { bgColor: "#2b2b2b", titulo: "Inglés Niños",  texto: "Explora el idioma mediante actividades dinámicas que despiertan la curiosidad",              icono: inglesNinosImg },
];

// ── Diplomados ───────────────────────────────────────────────────────
export const diplomados: Curso[] = [
  { bgColor: "#ffd523", titulo: "Diplomado Backend",  texto: "Especialízate en el desarrollo de arquitecturas robustas y lógica de servidor escalable.",          icono: pythonImg },
  { bgColor: "#004aad", titulo: "Diplomado Frontend", texto: "Especialízate en la creación de interfaces interactivas y experiencias de usuario de alto nivel.",  icono: jsImg },
];

export interface ErrorInfo {
  code: number;
  title: string;
  message: string;
}

export const errorPages: ErrorInfo[] = [
  { code: 400, title: "Solicitud invalida", message: "La solicitud enviada no es valida." },
  { code: 401, title: "No autorizado", message: "Debes iniciar sesion para acceder a este recurso." },
  { code: 402, title: "Pago requerido", message: "Se requiere un pago para completar la solicitud." },
  { code: 403, title: "Acceso denegado", message: "No tienes permisos para ver esta pagina." },
  { code: 404, title: "Pagina no encontrada", message: "La pagina que intentas visitar no existe o fue movida." },
  { code: 405, title: "Metodo no permitido", message: "El metodo HTTP usado no esta permitido en esta ruta." },
  { code: 406, title: "No aceptable", message: "No se encontro un formato de respuesta aceptable." },
  { code: 407, title: "Autenticacion de proxy requerida", message: "Se requiere autenticacion en el proxy para continuar." },
  { code: 408, title: "Tiempo de espera agotado", message: "La solicitud tardo demasiado y fue cancelada." },
  { code: 409, title: "Conflicto", message: "La solicitud entra en conflicto con el estado actual del recurso." },
  { code: 410, title: "Recurso no disponible", message: "Este recurso ya no esta disponible de forma permanente." },
  { code: 411, title: "Longitud requerida", message: "Falta la cabecera Content-Length en la solicitud." },
  { code: 412, title: "Precondicion fallida", message: "No se cumplieron las condiciones previas para procesar la solicitud." },
  { code: 413, title: "Contenido demasiado grande", message: "El contenido enviado supera el limite permitido." },
  { code: 414, title: "URI demasiado larga", message: "La direccion solicitada es demasiado larga." },
  { code: 415, title: "Tipo de medio no soportado", message: "El formato del contenido enviado no esta soportado." },
  { code: 416, title: "Rango no satisfacible", message: "El rango solicitado no puede ser procesado." },
  { code: 417, title: "Fallo de expectativa", message: "No se pudo cumplir la expectativa enviada en la solicitud." },
  { code: 418, title: "Soy una tetera", message: "Esta respuesta indica que el servidor no puede preparar cafe." },
  { code: 421, title: "Solicitud mal dirigida", message: "La solicitud fue dirigida a un servidor incorrecto." },
  { code: 422, title: "Contenido no procesable", message: "La solicitud es valida pero contiene datos invalidos." },
  { code: 423, title: "Recurso bloqueado", message: "El recurso solicitado esta bloqueado temporalmente." },
  { code: 424, title: "Dependencia fallida", message: "Una dependencia necesaria fallo y no se pudo completar la accion." },
  { code: 425, title: "Demasiado pronto", message: "El servidor no quiere procesar esta solicitud aun." },
  { code: 426, title: "Actualizacion requerida", message: "Debes actualizar el protocolo para continuar." },
  { code: 428, title: "Precondicion requerida", message: "Se requiere una precondicion para procesar la solicitud." },
  { code: 429, title: "Demasiadas solicitudes", message: "Has excedido el limite de solicitudes. Intenta mas tarde." },
  { code: 431, title: "Cabeceras demasiado grandes", message: "Las cabeceras enviadas son demasiado grandes." },
  { code: 451, title: "No disponible por razones legales", message: "Este recurso no esta disponible por motivos legales." },
  { code: 500, title: "Error interno del servidor", message: "Ocurrio un error inesperado en el servidor." },
  { code: 501, title: "No implementado", message: "El servidor no soporta esta funcionalidad." },
  { code: 502, title: "Puerta de enlace incorrecta", message: "Se recibio una respuesta invalida del servidor superior." },
  { code: 503, title: "Servicio no disponible", message: "El servicio no esta disponible temporalmente." },
  { code: 504, title: "Tiempo de espera de puerta de enlace", message: "El servidor no recibio respuesta a tiempo." },
  { code: 505, title: "Version HTTP no soportada", message: "La version de HTTP usada no esta soportada." },
  { code: 506, title: "Variante tambien negocia", message: "El servidor encontro un problema de negociacion interna." },
  { code: 507, title: "Almacenamiento insuficiente", message: "No hay espacio suficiente para completar la solicitud." },
  { code: 508, title: "Bucle detectado", message: "El servidor detecto un bucle infinito al procesar la solicitud." },
  { code: 510, title: "No extendido", message: "Se requieren extensiones adicionales para completar la solicitud." },
  { code: 511, title: "Autenticacion de red requerida", message: "Debes autenticarte en la red para acceder al recurso." },
];
