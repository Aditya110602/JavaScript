
function Expense(id, name, amount, description, reason, date) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.description = description;
    this.reason = reason;
    this.date = date;
}

// Function to generate random expenses array
function generateRandomExpenses(numExpenses) {
    const expenses = [{
        id: 1,
        name: "Groceries",
        amount: 50,
        description: "Weekly groceries shopping",
        reason: "Necessity",
        date: new Date("2024-05-01")
    },
    {
        id: 2,
        name: "Utilities",
        amount: 100,
        description: "Electricity bill",
        reason: "Necessity",
        date: new Date("2024-05-02")
    },
    {
        id: 3,
        name: "Dining",
        amount: 30,
        description: "Lunch with friends",
        reason: "Personal",
        date: new Date("2024-05-03")
    },
    {
        id: 4,
        name: "Transportation",
        amount: 20,
        description: "Fuel for the car",
        reason: "Necessity",
        date: new Date("2024-05-04")
    },
    {
        id: 5,
        name: "Entertainment",
        amount: 60,
        description: "Movie night",
        reason: "Personal",
        date: new Date("2024-05-05")
    }
];
    const categories = ["Groceries", "Utilities", "Transportation", "Entertainment", "Dining", "Healthcare"];
    const reasons = ["Necessity", "Emergency", "Luxury", "Personal", "Gift", "Investment"];

    for (let i = 0; i < numExpenses; i++) {
        const id = i + 1;
        const name = categories[Math.floor(Math.random() * categories.length)];
        const amount = Math.floor(Math.random() * 1000) + 1; // Random amount between 1 and 1000
        const description = `Expense ${id}`;
        const reason = reasons[Math.floor(Math.random() * reasons.length)];
        const date = new Date(); // Current date

        expenses.push(new Expense(id, name, amount, description, reason, date));
    }

    return expenses;
}

const randomExpenses = generateRandomExpenses; 
console.log(randomExpenses(2));

