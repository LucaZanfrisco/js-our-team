"use strict";

// FUNZIONI

// Funzione che stampa in console i dati dell'array di oggetti
function stampaArray(team) {
  for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    for (let key in teamMember) {
      console.log(`Membro ${i + 1}: ${teamMember[key]}`);
    }
  }
}

// Funzione che crea la struttua e la salva in un frammento
function creaStruttura(team) {
  const frammento = document.createDocumentFragment();
  for (let i = 0; i < team.length; i++) {
    const card = document.createElement("div");
    const boxImage = document.createElement("div");
    const image = document.createElement("img");
    const boxInfo = document.createElement("div");
    const boxName = document.createElement("div");
    const boxJob = document.createElement("div");
    card.classList.add("card");
    boxImage.classList.add("box-image");
    boxInfo.classList.add("box-info");
    image.src = `img/${team[i].foto}`;
    boxName.innerText = team[i].nome;
    boxJob.innerText = team[i].ruolo;
    boxName.classList.add("nome");
    boxJob.classList.add("ruolo");
    card.append(boxImage);
    card.append(boxInfo);
    boxImage.append(image);
    boxInfo.append(boxName);
    boxInfo.append(boxJob);
    frammento.append(card);
  }
  return frammento;
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
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

// Chiamata alla funzione che stampa l'array di oggetti nella console
stampaArray(team);

// Chiamata alla funzione che crea il frammento
const struttura = creaStruttura(team);

// Selezione dell'elemento HTML dove appendere il frammento
const listaMembri = document.querySelector(".container");

// Inserimento del frammento nell'HTML
listaMembri.append(struttura);
