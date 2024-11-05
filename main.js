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


// Filter out "cape"
console.table(
    provinces.filter(province => {
        return !(province.toLowerCase().includes("cape"));
    })
);


// Finding "S"
// ** brief unclear -> Array.protoype.some() returns a single Boolean. Brief requests a boolean Array.
// ** use of .some() ignored.
console.table(
    names.map(name => {
        return name.includes("S");
    })
);


// Reduce into object
console.table(
    names.reduce((obj, name, index) => {
        obj[name] = provinces[index];
        return obj;
    }, new Object())
);




// --------- ADVANCED ----------------

// Log product names
console.log(
    products.map(product => product.product)
);


// Filter names longer than 5
console.log(
    products.filter(product => {
        return product.product.length < 6;
    })
);


// Price manipulation
console.log(
    products
    .filter(product => {
        return product.price > 0;       // truthy testing -> coercion to numbers
    })
    .map(product => {
        return Number.parseInt(product.price);
    })
    .reduce(
        (sum, value) => sum += value,   // Adding function
        0                               // Initial Value
    )
);


// Concat product names
console.log(
    products.reduce((finalString, product) => finalString += product.product, "")
);


// Find highest and lowest priced products
console.log(
    `Highest: ${
    products
    .filter(product => {                // Ignore non-priced items
        return product.price > 0;       // truthy testing -> coercion to numbers
    })
    .toSorted((a, b)=> {
        // The default sorting algorithm, modified for these specific objects
        return Number.parseInt(a.price) - Number.parseInt(b.price)
    })
    .pop().product                      // pop to get the highest

}. Lowest: ${                           // Just repeat the method
    products
    .filter(product => {
        return product.price > 0;
    })
    .toSorted((a, b)=> {
        return Number.parseInt(a.price) - Number.parseInt(b.price)
    })
    .shift().product                    // Shift to get the lowest
}.`
);