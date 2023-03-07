"use strict";

// FUNZIONI

// Funzione che stampa in console i dati dell'array di oggetti
function stampaArray(team){
    for(let i = 0; i < team.length; i++){
        const teamMember = team[i];
        for(let key in teamMember){
            console.log(`Membro ${i+1}: ${teamMember[key]}`)
        }
    }
}

function creaLista(listaMembri,team){
    for(let i = 0; i < team.length; i++){
        const elementoLista = document.createElement('li');
        elementoLista.innerText = `Nome: ${team[i].nome}, Ruolo: ${team[i].ruolo}, Foto: ${team[i].foto}`;
        listaMembri.append(elementoLista);
    }
}



// MAIN

// Array con all'interno 6 oggetti
const team = [
  {
    nome: "Wayne Barett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo:  'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
];

stampaArray(team);
console.log(Object.keys(team).length);

const listaMembri = document.querySelector('.lista-membri');

creaLista(listaMembri,team);
