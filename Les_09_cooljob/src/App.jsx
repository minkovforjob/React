import "./App.css";
import Home from "./pages/home";


import cooljobLogo from "./assets/icons/cooljob.svg";
import cooljobLogo2 from "./assets/icons/cooljob.svg";
import cooljobLogo3 from "./assets/icons/cooljob.svg";
const vacansies = [
  { id: 1, title: "manager", icon: cooljobLogo },
  { id: 2, title: "admin", icon: cooljobLogo2 },
  { id: 3, title: "it", icon: cooljobLogo3 },
];
function App() {
  return (
    <div >
      {/* className={styles.mainCont} */}
      <Home />

      {/* {vacansies.map((vacancy) => {
        return (
          <div key={vacancy.id}>
            <h3>{vacancy.title}</h3>
            <img src={vacancy.icon} alt="icon" />
          </div>
        );
      })} */}
    </div>
  );
}
export default App;


// https://www.figma.com/file/AQyzKCXwWfISBhYYslRSWT/povtor?type=design&node-id=1%3A2&mode=design&t=BRFfwUFnVTWa5fGv-1


