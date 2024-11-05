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


// uppercase transform
console.table(
    provinces.map(province => {
        return province.toUpperCase();
    })
);


// name lengths
console.table(
    names.map(name => {
        return `${name} (${name.length})`;
    })
);


// Sorting
console.table(
    provinces.toSorted()    // Using toSorted instead of 'sort' to avoid mutating the orginal Array
);