import { products, provinces, names } from "./scripts.js";

// --------- BASICS ----------------

// forEach
provinces.forEach(province => {
    console.log(province);
});

names.forEach(name => {
    console.log(name);
});

names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`)
});