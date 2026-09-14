

let orders = [
    {
        customerName: "Ali",
        productName: "Laptop",
        quantity: 2,
        price: 80000,
        status: ["Pending", "Shipped", "Delivered"]
    },
    {
        customerName: "Ahmed",
        productName: "Mouse",
        quantity: 3,
        price: 2000,
        status: ["Pending", "Shipped", "Delivered"]
    },
    {
        customerName: "Usman",
        productName: "Keyboard",
        quantity: 2,
        price: 5000,
        status: ["Pending", "Shipped", "Delivered"]
    }
];

// 1. Calculate Order Total for a single order
let calcOrderTotal = (order) => {
    return order.quantity * order.price;
};

// Loop through ALL orders and show their totals
let showAllOrderTotals = (listOrders) => {
    for (let i = 0; i < listOrders.length; i++) {
        let total = calcOrderTotal(listOrders[i]);
        console.log(listOrders[i].customerName + "'s order (" + listOrders[i].productName + "): Rs. " + total);
    }
};


// 2. Find Customer Spending
let findCustomerSpending = (customerName) => {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].customerName === customerName) {
            total += calcOrderTotal(orders[i]);
        }
    }
    return total;
};

let filterOrders = (statusToFind) => {
    let filtered = [];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].status.includes(statusToFind)) {
            filtered.push(orders[i]);
        }
    }
    return filtered;
};

// 5. Apply Discount
let applyDiscount = (order) => {
    let total = calcOrderTotal(order);
    if (total > 10000) {
        total = total - (total * 0.10);
    }
    return total;
};

// 6. Find Highest Order
let findHighestOrder = (listOrders) => {
    let highestCustomer = "";
    let highestAmount = 0;

    for (let i = 0; i < listOrders.length; i++) {
        let finalAmount = applyDiscount(listOrders[i]);

        if (finalAmount > highestAmount) {
            highestAmount = finalAmount;
            highestCustomer = listOrders[i].customerName;
        }
    }

    return { customerName: highestCustomer, finalAmount: highestAmount };
};

// 7. Display Summary
let displaySummary = (listOrders) => {
    for (let i = 0; i < listOrders.length; i++) {
        let order = listOrders[i];
        let originalTotal = calcOrderTotal(order);
        let finalAmount = applyDiscount(order);
        let discount = originalTotal - finalAmount;

        console.log("Customer: " + order.customerName);
        console.log("Product: " + order.productName);
        console.log("Original Total: Rs. " + originalTotal);
        console.log("Discount: Rs. " + discount);
        console.log("Final Amount: Rs. " + finalAmount);
        console.log("-----------------------------");
    }
};

