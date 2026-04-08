const orders = [
  { id: 1, customer: "Andi", total: 250000, status: "completed" },
  { id: 2, customer: "Budi", total: 75000, status: "pending" },
  { id: 3, customer: "Citra", total: 1200000, status: "completed" },
  { id: 4, customer: "Dani", total: 450000, status: "cancelled" },
  { id: 5, customer: "Eva", total: 89000, status: "completed" },
  { id: 6, customer: "Fajar", total: 320000, status: "pending" },
];

const completedOrders = orders.filter(function(order){
  return order.status === "completed";
})

console.log(completedOrders);

const bigOrders = orders.filter(function(order){
  return order.total > 200000 && order.status === "completed";
})

console.log(bigOrders);

const customerNames =  orders.map(function(order){
  return order.customer;
})

console.log(customerNames);

//Chaining
orders
.filter(function(order){
  return order.status === "completed";
})
.map(function(order){
  return {
    customer: order.customer,
    total: order.total,
    fee: order.total * 0.05
  };
})
.forEach(function(order){
  console.log(`${order.customer}, Total Rp${order.total}, fee : ${order.fee}`);
})
