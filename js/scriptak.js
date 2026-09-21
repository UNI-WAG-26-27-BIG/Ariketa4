// Erabiltzaileari pertsonaiaren izena eskatzen diogu
const izenSarrera = prompt("Sartu zure pertsonaiaren izena:");

// Pertsonaia objektua definitu
const pertsonaia = {
  izena: izenSarrera || "Izengabea",
  biziPuntuak: 100,
  "ezpata dauka": true
};

function idatziPantailan(testua) {
  document.getElementById("pantaila").textContent = testua;
}

 //Dinamikoki gehitzeko propietatea
function gehituPropietatea() {
  const gakoa = prompt("Zer propietate gehituko diozu pertsonaiari?");
  
  if (gakoa) {
    const balioa = prompt(`Sartu '${gakoa}' propietatearen balioa:`);
    
    // propietatea gehitu objektuari
    pertsonaia[gakoa] = balioa;
    
    idatziPantailan(`Propietatea gehituta:\npertsonaia["${gakoa}"] = "${balioa}"`);
  }
}

//propietatea erakutsi
function erakutsiPropietatea() {
  const propietatea = prompt("Zein propietate ikusi nahi duzu?");
  
  if (propietatea in pertsonaia) {
    const balioa = pertsonaia[propietatea];
    idatziPantailan(`Propietatea: ${propietatea}\nBalioa: ${balioa}`);
  } else {
    idatziPantailan(`Errorea: '${propietatea}' propietatea ez da existitzen pertsonaian.`);
  }
}

function aldatuEzpata() {
  pertsonaia["ezpata dauka"] = !pertsonaia["ezpata dauka"];
  
  idatziPantailan(`'ezpata dauka' egoera berria: ${pertsonaia["ezpata dauka"]}`);
}

function aldatuBiziPuntuak() {
  const aldaketa = prompt("Zenbat bizi-puntu gehitu edo kendu nahi dituzu?");
  const zenbakia = parseInt(aldaketa);

  if (!isNaN(zenbakia)) {
    pertsonaia.biziPuntuak += zenbakia;
    idatziPantailan(`Bizi-puntu berriak: ${pertsonaia.biziPuntuak}`);
  } else {
    alert("Mesedez, sartu zenbaki baliodun bat.");
  }
}

function ikusiPertsonaia() {
  let edukia = "--- PERTSONAIAREN DATU GUZTIAK ---\n";
  for (let gakoa in pertsonaia) {
    edukia += `${gakoa}: ${pertsonaia[gakoa]}\n`;
  }
  
  idatziPantailan(edukia);
}