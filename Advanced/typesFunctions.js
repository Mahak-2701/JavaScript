const one = (params) => {
    console.log(`Simple const Arrow Function.`);
}

const two = (params) => console.log(`Small Arrow Function.`);

function third (params) {
    console.log(`Traditional Function Expr.`);
}

(() => {
    console.log(`Anonymous Function Without params.`);
})();

( async (params) => {
    console.log(`Anonymous async Function With params.`);
})();