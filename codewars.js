

const n = "123";
const array = [];
let R = 0;

// Remplir le tableau avec les chiffres de la chaîne
for (let j = 0; j < n.length; j++) {
  array.push(Number(n[j])); // Convertir chaque caractère en nombre
}
// Calculer la somme pondérée
for (let i = 0; i < array.length; i++) {
  R += array[i] * array.length;
}
console.log("Résultat :", R);
