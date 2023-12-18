import './App.css'
import Navbar from './components/Navbar'
import CardForm from './components/CardForm'
import Example from './components/Example'

import { useSelector } from "react-redux";

import Footer from './components/Footer'
import Space from './components/Space'
import Cover from './components/Cover'
import CardItem from './components/CardItem'
import Index from './components/Index'






/*
function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return { name: '', email: '' };
    default:
      return state;
  }
}
*/

function App() {
  const cities = useSelector((state) => state.cities.value);
  /*const [count, setCount] = useState(0);

  const [formState, dispatchFormState] = useReducer(formReducer, { name: '', email: '' })

  const handleFieldChange = (field, value) => {
    dispatchFormState({ type: "CHANGE_FIELD", field, value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormState({ type: "RESET_FORM" });
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const addCity = (city) => {
    setCities([...cities, city]);
  };


  const [cities, setCities] = useState([
    {
      id: 0,
      name: "Tokyo",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reprehenderit.",
      imgURL: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRva3lvfGVufDB8fDB8fHww",
      isVisited: false,
    },
    {
      id: 1,
      name: "New York",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reprehenderit.",
      imgURL: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
      isVisited: false,
    },
    {
      id: 2,
      name: "Rome",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reprehenderit.",
      imgURL: "https://plus.unsplash.com/premium_photo-1661962551246-49ffac5cff8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJvbWV8ZW58MHx8MHx8fDA%3D",
      isVisited: true,
    },
    {
      id: 3,
      name: "Paris",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reprehenderit.",
      imgURL: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHx8MHx8fDA%3D",
      isVisited: true,
    },
  ])





  <div className='grid grid-cols-4 gap-5'>
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.name}
            isVisited={city.isVisited}
            imgURL={city.imgURL}>
            {city.description}
          </Card>
        ))}
      </div>
 */

  return (
    <>
      <Navbar></Navbar>
      <Cover></Cover>
      <Space></Space>
      <Index></Index>
      <Space></Space>
      <Footer></Footer>
    </>
  )

}

export default App;
