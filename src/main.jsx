import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contatti from './pages/Contatti.jsx'

import TestIngresso from './pages/TestIngresso.jsx'
import PrimiPassi from './pages/PrimiPassi.jsx'
import IscrizioneTest from './pages/IscrizioneTest.jsx'
import QATest from './pages/Q&Atest.jsx'
import BorsaDiStudio from './pages/Borsadistudio.jsx'
import Punteggi from './pages/Punteggi.jsx'
import Lezioni from './pages/Lezioni.jsx'

import University from './pages/University.jsx'
import Immatricolazione from './pages/Immatricolazione.jsx'
import ISEE from './pages/ISEE.jsx'
import Visite from './pages/Visite.jsx'
import QAUni from './pages/Q&AUni.jsx'
import Login from './pages/Login.jsx'
import Questionario from './pages/Questionario.jsx'
import Profilo from './pages/Profilo.jsx'
import Ricerca from './pages/Ricerca.jsx'
import Like from './pages/Like.jsx'
import Match from './pages/Match.jsx'

import SimulatoreTest from './pages/SimulatoreTest.jsx'
import DomandeEsami from './pages/DomandeEsami.jsx'

import Costruzione from './pages/Costruzione.jsx'
import AdminSimulatore from './pages/AdminSimulatore.jsx'

import Cards from './pages/Cards.jsx'
import Card from './pages/Card.jsx'
import CardsChildren from './pages/CardsChildren.jsx'

import store from "./redux/store";
import { Provider } from 'react-redux'







const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Test-ingresso",
    element: <TestIngresso></TestIngresso>
  },
  {
    path: "/Primi-passi",
    element: <PrimiPassi></PrimiPassi>
  },
  {
    path: "/Iscrizione-test-ingresso",
    element: <IscrizioneTest></IscrizioneTest>
  },
  {
    path: "/Q-&-A-Test",
    element: <QATest></QATest>
  },
  {
    path: "/Borsa-di-studio",
    element: <BorsaDiStudio></BorsaDiStudio>
  },
  {
    path: "/Punteggi-minimi-Sapienza",
    element: <Punteggi></Punteggi>
  },
  {
    path: "/Lezioni",
    element: <Lezioni></Lezioni>
  },
  {
    path: "/University",
    element: <University></University>
  },
  {
    path: "/Immatricolazione",
    element: <Immatricolazione></Immatricolazione>
  },
  {
    path: "/Questione-ISEE",
    element: <ISEE></ISEE>
  },
  {
    path: "/Visite-mediche",
    element: <Visite></Visite>
  },
  {
    path: "/Q-&-A-Uni",
    element: <QAUni></QAUni>
  },
  {
    path: "/In-Costruzione",
    element: <Costruzione></Costruzione>
  },
  {
    path: "/Login",
    element: <Login></Login>
  },
  {
    path: "/Questionario",
    element: <Questionario></Questionario>
  },
  {
    path: "/Profilo",
    element: <Profilo></Profilo>
  },
  {
    path: "/Ricerca",
    element: <Ricerca></Ricerca>
  },
  {
    path: "/Like",
    element: <Like></Like>
  },
  {
    path: "/Match",
    element: <Match></Match>
  },
  {
    path: "/Simulatore-Test",
    element: <SimulatoreTest></SimulatoreTest>
  },
  {
    path: "/Admin-Simulatore",
    element: <AdminSimulatore></AdminSimulatore>
  },
  {
    path: "/Domande-esami",
    element: <DomandeEsami></DomandeEsami>
  },
  {
    path: "/contatti",
    element: <Contatti></Contatti>,
  },
  {
    path: "/Utente/:cardID",
    element: <Card />,
  },
  {
    path: "/cards",
    element: <Cards></Cards>,
  },
  {
    path: "/cards/:cardID",
    element: <Card />,
  },
  
  {
    path: "/cards-children",
    element: <CardsChildren></CardsChildren>,
    children: [
      {
        path: ":cardID",
        element: <Card/>,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
