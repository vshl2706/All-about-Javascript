// Immediately Invoked Function Expressions (IIFE)
// IIFE are used to avoid global scope pollution from global scope variable or declarations
// These functions also execute immediately

// Named IIFE
(function chai(){
    console.log("Database connected")
})();

// Unnamed IIFE
( (name) => {
    console.log(`DB Connected Two ${name}`);
} )("Vishal")