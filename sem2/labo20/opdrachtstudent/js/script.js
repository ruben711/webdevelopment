let student1 = {
    voornaam: "Jan",
    familienaam: "Janssens",
    geboorteDatum: new Date("1993-12-31"),
    adres: {
        straat: "Kerkstraat 13",
        postcode: "8500",
        gemeente: "Kortrijk"
    },
    isIngeschreven: true,
    namenVanExen: ["Sofie", "Berta", "Philip", "Albertoooo"],
    aantalAutos: 2
};

const student1JsonString = JSON.stringify(student1, null, 2);
console.log("JSON stringify (student1):");
console.log(student1JsonString);

const student2JsonString = `{
  "voornaam": "Jan",
  "familienaam": "Janssens",
  "geboorteDatum": "1993-12-31T00:00:00.000Z",
  "adres": {
    "straat": "Kerkstraat 13",
    "postcode": "8500",
    "gemeente": "Kortrijk"
  },
  "isIngeschreven": true,
  "namenVanExen": ["Sofie", "Berta", "Philip", "Albertoooo"],
  "aantalAutos": 2
}`;

const student2 = JSON.parse(student2JsonString);

console.log("JSON parse (student2):");
console.log(student2.voornaam);
console.log(student2.adres.gemeente);
console.log(student2.namenVanExen[0]);