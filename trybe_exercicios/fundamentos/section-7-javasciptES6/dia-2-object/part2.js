const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const endereco = Object.values(order.address);
  const menssge = `ola ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${endereco[0]}, Nº ${endereco[1]}, AP: ${endereco[2]}`
  return menssge;
};

// console.log(customerInfo(order));

const orderModifier = (order) => {
  const order2 = {
    name: 'Luiz Silva',
    payment: {
      total: 50
    }
  }

  Object.assign(order, order2);

  const pedidoPizza = Object.keys(order.order.pizza);
  const pedidoBebida = Object.values(order.order.drinks.coke)

  const message = `Olá ${order.name}, o total do seu pedido de ${pedidoPizza[0]}, ${pedidoPizza[1]} e ${pedidoBebida[0]} é R$${order.payment.total},00`
  return message;

};

console.log(orderModifier(order));