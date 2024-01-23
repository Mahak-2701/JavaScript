const OuterClass = class {
    constructor() {
        this.outerProperty = "Outer Property";
    };

    InnerClass = class {
        constructor() {
            this.innerProperty = "Inner Property";
        }

        innerMethod() {
            console.log("Inner Method");
        }
    };
};

