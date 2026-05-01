export interface Curso {
  bgColor: string;
  titulo: string;
  texto: string;
  icono: string;
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
  { bgColor: "#ffd523", titulo: "Python Básico",              texto: "Aprende a programar con Python desde cero",                                               icono: pythonImg.src },
  { bgColor: "#004aad", titulo: "JavaScript Básico",          texto: "Aprende a programar desde cero con este curso básico",                                    icono: jsImg.src },
  { bgColor: "#7ed957", titulo: "Excel Básico",               texto: "Aprende a crear, usar y gestionar hojas de cálculo",                                      icono: excelImg.src },
  { bgColor: "#175e39", titulo: "Excel Avanzado",             texto: "Domina las herramientas y funciones más poderosas de Excel",                              icono: excelImg.src },
  { bgColor: "#004aad", titulo: "JavaScript Avanzado",        texto: "Domina React y construye aplicaciones web modernas",                                      icono: reactImg.src },
  { bgColor: "#ffd523", titulo: "Python Avanzado",            texto: "Curso avanzado de programación en Python usando el framework Django",                     icono: djangoImg.src },
  { bgColor: "#ff4500", titulo: "Fibra Óptica",               texto: "Domina el diseño, instalación y mantenimiento de redes de fibra óptica",                  icono: fibraImg.src },
  { bgColor: "#7b9db6", titulo: "Redes con Mikrotik",         texto: "Diseña, configura y administra redes robustas",                                           icono: redesImg.src },
  { bgColor: "#3f198a", titulo: "Base de Datos",              texto: "Aprende a estructurar y consultar información de manera eficiente y profesional",         icono: dbImg.src },
  { bgColor: "#20aabb", titulo: "Tailwind CSS",               texto: "Aprende a diseñar componentes web escalables y adaptables",                               icono: tailwindImg.src },
  { bgColor: "#ffd51e", titulo: "HTML y CSS",                 texto: "Domina la estructura y el estilo para crear sitios web profesionales desde cero",         icono: htmlImg.src },
  { bgColor: "#2b2b2b", titulo: "Lógica y Algoritmos",        texto: "Resolución de problemas mediante pensamiento lógico y algorítmico",                       icono: logicaImg.src },
  { bgColor: "#e8e8e8", titulo: "Git",                        texto: "Gestiona versiones y cambios de tu código de forma profesional",                          icono: gitImg.src },
  { bgColor: "#38b6ff", titulo: "Robótica",                   texto: "Domina el desarrollo de prototipos inteligentes con electrónica y microcontroladores",    icono: robotImg.src },
  { bgColor: "#0cc0df", titulo: "Diseño Gráfico con Canva",   texto: "Crea contenido visual de alto impacto para marcas y negocios de forma ágil",              icono: canvaImg.src },
  { bgColor: "#1a237e", titulo: "Domótica",                   texto: "Domina la integración de sensores, actuadores y redes para crear hogares inteligentes",   icono: domoticaImg.src },
  { bgColor: "#c0392b", titulo: "Inglés Adultos",             texto: "Inglés práctico y profesional para la comunicación en el mundo actual",                   icono: inglesImg.src },
  { bgColor: "#e67e22", titulo: "Ofimática",                  texto: "Automatiza tareas y organiza información con herramientas de oficina",                    icono: ofimaticaImg.src },
];

// ── Cursos para niños y jóvenes ─────────────────────────────────────
import scratchImg from "../assets/img/scratch.png";
import mangaImg from "../assets/img/dibujo manga.png";
import inglesNinosImg from "../assets/img/english niños.png";

export const cursosJovenes: Curso[] = [
  { bgColor: "#0cc0df", titulo: "Scratch",       texto: "Domina los fundamentos de la lógica de programación de forma visual y divertida",           icono: scratchImg.src },
  { bgColor: "#38b6ff", titulo: "Robótica",      texto: "Introducción a la ingeniería y programación de robots para pequeños inventores",            icono: robotImg.src },
  { bgColor: "#ffe784", titulo: "Dibujo Manga",  texto: "Aprende las técnicas esenciales para dar vida a tus propios personajes y paneles de manga", icono: mangaImg.src },
  { bgColor: "#2b2b2b", titulo: "Inglés Niños",  texto: "Explora el idioma mediante actividades dinámicas que despiertan la curiosidad",              icono: inglesNinosImg.src },
];

// ── Diplomados ───────────────────────────────────────────────────────
export const diplomados: Curso[] = [
  { bgColor: "#ffd523", titulo: "Diplomado Backend",  texto: "Especialízate en el desarrollo de arquitecturas robustas y lógica de servidor escalable.",          icono: pythonImg.src },
  { bgColor: "#004aad", titulo: "Diplomado Frontend", texto: "Especialízate en la creación de interfaces interactivas y experiencias de usuario de alto nivel.",  icono: jsImg.src },
];
