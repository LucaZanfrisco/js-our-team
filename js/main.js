"use strict";

// FUNZIONI

function stampaArray(team){
    for(let i = 0; i < team.length; i++){
        console.log(`Nome: ${team[i].nome}`);
        console.log(`Ruolo: ${team[i].ruolo}`);
        console.log(`Foto: ${team[i].foto}`);
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

