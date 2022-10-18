const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const totalAmount = orders.map(order => order.total);
console.log(totalAmount);
console.log(orders);

const tarifa = orders.map(order => {
    return {
        ...order,
        tax: 0.19,
    }
});

console.log(tarifa);
console.log(orders);