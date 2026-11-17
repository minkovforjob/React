
import './App.css'
import Greeting from './components/Greeting';
import ShoppingList from './components/ShoppingList';
import OrderList from './components/OrdersList';

const ListForShop = ['apple', 'milk', 'kiwi', 'meat'];
// const ListForShop = [];

const Orders = [{ orderId: 123, status: "в пути" },
{ orderId: 124, status: "обработан" },
{ orderId: 125, status: "доставлен" },
{ orderId: 126, status: "обработан" },
{ orderId: 127, status: "в пути" }
];

function App() {
  return (
    <div>
      <Greeting name={'Max'}></Greeting>
      <h2>List For Shop:</h2>
      <ShoppingList DataForShop={ListForShop} />
      <h2>Orders:</h2>
      <OrderList OrdersData={Orders} />
    </div>
  );
}

export default App


// Создайте функциональный компонент с именем Greeting
// Этот компонент должен принимать проп name, 
// после чего выводить приветственное сообщение в формате: "Привет, [name]!", 
// где [name] — это значение переданного пропа.
// Импортируйте компонент в App для его отображения.
// Запустите программу, проверьте работоспособность. 

// Задание 2
// Компонент Списка Покупок
//     В компоненте App определите массив, содержащий названия любых товаров.
//     Создайте компонент ShoppingList.
//     Компонент должен принимать массив с названиями товаров через проп items.
//     Также ShoppingList должен отображать каждый элемент из массива 
//     в виде <li> элемента <ul> списка.
//     Если массив пуст, должно отображаться сообщение: "Список покупок пуст".
//     Импортируйте ShoppingList в App, запустите приложение.
//     Проверьте, выводится ли сообщение, если список покупок пуст.


//     Задание 3 *
// Компонент Статуса Заказș
//     В компоненте App определите массив, 
//     содержащий информацию о заказах в формате [{orderId: 123, status: ‘в пути’}].
//     Создайте компонент OrderStatus который принимает два пропа: 
//     orderId (номер заказа) и status (статус заказа, например, "обработан", "в пути", "доставлен").
//     Компонент должен отображать информацию в следующем формате: "Заказ #[orderId]: [status]".
//     Импортируйте компонент в App, проверьте его работоспособ