import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import StructureForm from "./pages/structureForm/StructureForm";
import Connexion from "./pages/connexion/Connexion";
import SignUp from "./pages/signUp/SignUp";
import Search from "./pages/search/Search";
import HomeStructureDetails from "./pages/homeStructureDetails/HomeStructureDetails";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import LegalMentions from "./pages/legalMentions/LegalMentions";
import AnimalsForm from "./pages/animalsForm/AnimalsForm";
import Protected from "./pages/protected/Protected";
import Reservation from "./pages/reservation/Reservation";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";

import profileLoader from "./handlers/loader/profile/profileLoader";
import homeStructureLoader from "./handlers/loader/homeStructure/homeStructureLoader";
import reservationLoader from "./handlers/loader/reservation/reservationLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/inscription_accueil/:id",
        element: <StructureForm />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/formulaire-animal/:id",
        element: <AnimalsForm />,
      },
      {
        path: "/inscription",
        element: <SignUp />,
      },
      {
        path: "/page-recherche",
        element: <Search />,
      },
      {
        path: "/profil/:id",
        element: <Profile />,
        loader: profileLoader,
      },
      {
        path: "/hote/:id",
        element: <HomeStructureDetails />,
        loader: homeStructureLoader,
      },
      {
        path: "/mot-de-passe-oublie",
        element: <ForgotPassword />,
      },
      {
        path: "/reinitialiser-mot-de-passe/:token",
        element: <ResetPassword />,
      },
      {
        path: "/mentions-legales",
        element: <LegalMentions />,
      },
      {
        path: "acces_refuse",
        element: <Protected />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
        loader: reservationLoader,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
