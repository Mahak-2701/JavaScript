// it is next level 
async function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = "Async data";
        resolve(data);
      }, 2000);
    });
  }
  
async function main() {
  console.log("Start of program");
  try {
    const result = await fetchData();
    console.log("Fetched data:", result);
  } catch (error) {
    console.error("An error occurred:", error);
  }

  console.log("End of program");
}
main();
  
// New
class Functions extends Error{
  perfection = ["Ruby", "JSX", "TSX"];
  salary = 0;
  display();
  constructor(salary, perfection){
    this.salary += salary*12;
    this.perfection.push += perfection;
  }

  display(){
    return `My Salary is ${this.salary}\n Perfection: ${this.perfection}`;
  }
}

