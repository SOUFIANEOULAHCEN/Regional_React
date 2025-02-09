import React, { useState, useEffect } from "react";
import { FaCaretLeft } from "react-icons/fa6";

import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";

export default function ListeStagaire() {
  const navigate = useNavigate();
  const location = useLocation();
  const [ShowDelete, SetShowDelete] = useState(false);
  const villes = ["ouarzazate", "zagora", "fes", "meknes"];
  const [showForm, SetshowForm] = useState(false);
  const [SearchDelete, SetSearchDelete] = useState("");
  const [listStagiaires, setListStagiaires] = useState([
    {
      nom: "CHAKIRI",
      prenom: "Laila",
      ville: "Fes",
      Fil: "Web et full stack",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      nom: "QUAFI",
      prenom: "Aanss",
      ville: "Tanger",
      Fil: "Web designer",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      nom: "BADRAOUI",
      prenom: "Ikram",
      ville: "Meknes",
      Fil: "Dev Mobile",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      nom: "NACIRI",
      prenom: "Hassan",
      ville: "CASABLANCA",
      Fil: "Web et full stack",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ]);
  const [FormValues, SetFormValues] = useState({
    nom: "",
    prenom: "",
    Fil: "",
    ville: "",
    photo: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      !FormValues.nom ||
      !FormValues.prenom ||
      !FormValues.Fil ||
      !FormValues.ville
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setListStagiaires([
      ...listStagiaires,
      { ...FormValues, photo: FormValues.photo },
    ]);
    SetFormValues({
      nom: "",
      prenom: "",
      Fil: "",
      ville: "",
      photo: "",
    });
    SetshowForm(!showForm);
  };
  const HandleCahnge = (e) => {
    SetFormValues({ ...FormValues, [e.target.name]: e.target.value });
  };
  const HandleFileChange = (e) => {
    const file = e.target.files[0]; // Récupère le fichier sélectionné
    if (file) {
      const reader = new FileReader(); // Crée un FileReader pour lire le fichier
      reader.onloadend = () => {
        // Met à jour l'état FormValues avec l'URL de l'image
        SetFormValues({ ...FormValues, photo: reader.result });
      };
      reader.readAsDataURL(file); // Convertit le fichier en URL de données
    }
  };

  const HandleReturn = () => {
    SetShowDelete(false);
  };
  const HandleDeleteStg = (name) => {
    if (name.trim() !== "") {
      const filterStg = listStagiaires.filter(
        (stg) => stg.nom.toLocaleLowerCase() !== name.toLocaleLowerCase()
      );
      setListStagiaires(filterStg);
      SetSearchDelete("");
      SetShowDelete(false);
    } else {
      alert("enter un nom s'il vous plait");
    }
  };
  return (
    <div>
      {!ShowDelete ? (
        <div className="bg-blue-950 py-4  flex flex-col items-start justify-center w-full min-h-screen ">
          <button
            onClick={() => navigate("/")}
            className="btn mx-5 flex items-center justify-center rounded-lg p-3 border border-gray-100 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all my-4"
          >
            <span className="text-xl">
              <FaCaretLeft />
            </span>
            <span>Home</span>
          </button>
          <div className="p-5 w-full">
            <div className="bg-gray-100 bg-opacity-30 w-full h-auto md:flex md:flex-col md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 p-4 rounded-lg sm:flex sm:flex-col sm:gap-2">
              {listStagiaires.map((stg, id) => (
                <div
                  key={id}
                  className="sm:flex items-center sm:gap-8 border border-gray-200 px-6 py-2 rounded-lg bg-gray-50 bg-opacity-25 text-gray-100"
                >
                  <img src={stg.photo} className="w-16 h-16" alt="" />
                  <div className="sm:flex gap-10 items-center ">
                    <div className="flex flex-col gap-1 font-bold text-xl">
                      <span>{stg.nom}</span>
                      <span>{stg.prenom}</span>
                    </div>
                    <div className="sm:flex sm:flex-col font-bold">
                      <span>{stg.ville}</span>
                      <span>{stg.Fil}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full">
              {showForm && (
                <div>
                  <form
                    action=""
                    onSubmit={HandleSubmit}
                    className="flex flex-col gap-3 mt-3"
                  >
                    <input
                      type="text"
                      name="nom"
                      className="border-none bg-gray-100 py-2 px-6 rounded-lg w-full placeholder:text-gray-600 text-gray-950 "
                      placeholder="entrer le nom"
                      required
                      onChange={HandleCahnge}
                      value={FormValues.nom}
                    />
                    <input
                      type="text"
                      name="prenom"
                      className="border-none bg-gray-100 py-2 px-6 rounded-lg w-full placeholder:text-gray-600 text-gray-950 "
                      placeholder="entrer le prenom"
                      required
                      onChange={HandleCahnge}
                      value={FormValues.prenom}
                    />
                    <input
                      type="text"
                      name="Fil"
                      className="border-none bg-gray-100 py-2 px-6 rounded-lg w-full placeholder:text-gray-600 text-gray-950 "
                      placeholder="entrer votre specialiste"
                      required
                      onChange={HandleCahnge}
                      value={FormValues.Fil}
                    />

                    <select
                      name="ville"
                      id="ville"
                      className="bg-gray-100 px-6 py-2 rounded-lg placeholder:text-gray-900 "
                      onChange={HandleCahnge}
                      value={FormValues.ville}
                    >
                      <option className="text-gray-900" value="">
                        choisir une ville
                      </option>
                      {villes.map((ville, index) => (
                        <option
                          className="text-gray-900 hover:bg-gray-400"
                          value={ville}
                          key={index}
                        >
                          {ville}{" "}
                        </option>
                      ))}
                    </select>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*" // Permet uniquement les fichiers image
                      onChange={HandleFileChange} // Fonction pour gérer le fichier sélectionné
                      className="border-none bg-gray-100 py-2 px-6 rounded-lg w-full placeholder:text-gray-600 text-gray-950"
                    />
                    <div className="flex gap-1 w-full">
                      <button
                        type="submit"
                        className="btn btn-success w-1/2 my-2"
                      >
                        Ajouter
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          SetshowForm(false);
                        }}
                        className="btn btn-secondary w-1/2 my-2"
                      >
                        Annuler
                      </button>
                    </div>
                  </form>
                </div>
              )}
              {!showForm && (
                <button
                  onClick={() => {
                    SetshowForm(!showForm);
                  }}
                  className="btn btn-success w-full mt-3 "
                >
                  Ajouter un etudiant
                </button>
              )}
              <button
                onClick={() => {
                  SetShowDelete(!ShowDelete);
                }}
                className="btn btn-error w-full mt-2"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-blue-950 w-full min-h-screen p-5">
          <h1 className="text-center text-xl text-gray-100 my-3">
            Entrer le Nom de stagaire que vous voulez supprimer
          </h1>
          <input
            value={SearchDelete}
            onChange={(e) => {
              SetSearchDelete(e.target.value);
            }}
            type="text"
            name="nom"
            className="border-none bg-gray-100 py-2 px-6 rounded-lg w-full placeholder:text-gray-600 text-gray-950 "
            placeholder="entrer le nom"
            required
          />
          <button
            className="btn btn-error w-full mt-2"
            onClick={() => {
              HandleDeleteStg(SearchDelete);
            }}
          >
            Supprimer
          </button>
          <button
            onClick={HandleReturn}
            className="btn btn-secondary w-full mt-2"
          >
            Retour
          </button>
        </div>
      )}
    </div>
  );
}
