import React, { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  SelectPlaylist,
  SelectVideo,
  LikeVideo,
  dislikesVideo,
} from "./reducers/PlaylistActions";
import { useNavigate } from "react-router-dom";

export default function Template() {
  const Playlists = useSelector((state) => state.playlists);
  const selectedPlaylist = useSelector((state) => state.selectedPlaylist);
  const selectedVideo = useSelector((state) => state.selectedVideo);
  const [active, SetActive] = useState();
  const [activeVideo, SetActiveVideo] = useState();
  const [comment, setComment] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandlePlaylist = (idPlaylist) => {
    dispatch(SelectPlaylist(idPlaylist));
    SetActive(idPlaylist);
    // console.log(idPlaylist);
  };

  const HandleVideo = (idVideo) => {
    dispatch(SelectVideo(idVideo));

    SetActiveVideo(idVideo);
    // console.log(idVideo);
  };

  const HandleLike = (idVideo) => {
    dispatch(LikeVideo(idVideo));
  };

  const HandleDisLike = (idVideo) => {
    dispatch(dislikesVideo(idVideo));
  };

  useEffect(() => {
    console.log(selectedPlaylist);
    // console.log(selectedVideo);
  }, [selectedPlaylist]);
  useEffect(() => {
    // console.log(selectedPlaylist);
    console.log(selectedVideo);
  }, [selectedVideo]);

  return (
    <div className="p-4 min-h-screen w-full max-w-full bg-gray-900 flex flex-col justify-center items-center overflow-x-hidden">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="w-full rounded-lg p-3 border border-gray-100 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all my-4"
      >
        Return
      </button>
      <div className="grid grid-cols-[1.5fr_2fr_1.5fr] gap-3 m-4 rounded-lg w-full h-auto ">
        {/* section playlist */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg">
          <h1 className="text-2xl font-bold text-gray-100 text-center py-2">
            Playlistes
          </h1>
          <ul className="text-gray-100 text-center flex flex-col gap-2">
            {Playlists.map((plst) => (
              <li
                className={`cursor-pointer rounded-lg p-3 border border-gray-100 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg hover:bg-red-600 duration-300 transition-all  ${
                  active === plst.idPlaylist ? "bg-red-700" : ""
                }`}
                key={plst.idPlaylist}
                onClick={() => HandlePlaylist(plst.idPlaylist)}
              >
                {plst.titre}{" "}
              </li>
            ))}
          </ul>
        </div>
        {/* section video */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg">
          <div className="w-full h-auto border border-gray-100 rounded-lg p-4 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg">
            {selectedVideo ? (
              (() => {
                const playlist = Playlists.find(
                  (plst) => plst.idPlaylist === selectedPlaylist
                );
                const video = playlist?.videos.find(
                  (video) => video.id === selectedVideo
                );

                if (video) {
                  const videoId = new URL(video.lien).searchParams.get("v"); // Récupérer l'ID de la vidéo YouTube
                  const embedUrl = `https://www.youtube.com/embed/${videoId}`; // Construire le bon lien pour iframe

                  return (
                    <>
                      <iframe
                        className="w-full"
                        height="315"
                        src={embedUrl}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                      {/* buttons */}
                      <div className="flex justify-center gap-10 my-4">
                        <button
                          onClick={() => HandleLike(video.id)}
                          className="text-blue-900 hover:text-green-300 duration-300 transition-all text-3xl flex items-center gap-1"
                        >
                          <BiSolidLike />
                          <span className="text-xl font-bold">
                            {video.likes}{" "}
                          </span>
                        </button>
                        <button
                          onClick={() => HandleDisLike(video.id)}
                          className="text-blue-900 hover:text-red-500 duration-300 transition-all text-3xl flex items-center gap-1"
                        >
                          <BiSolidDislike />
                          <span className="text-xl font-bold">
                            {video.dislikes}{" "}
                          </span>
                        </button>
                      </div>
                      {/* comments */}
                      <div
                        onClick={() => setComment(!comment)}
                        className="flex items-center gap-4 my-4 text-gray-100 text-2xl text-left px-3 duration-300 transition-all cursor-pointer"
                      >
                        les commentaires{" "}
                        {comment ? <FaChevronDown /> : <FaChevronUp />}
                      </div>
                      <div className="flex flex-col gap-2">
                        {comment && (
                          <ul className="flex flex-col gap-2">
                            {video.commentaires.map((comment, index) => (
                              <li
                                key={index}
                                className="text-gray-100 text-lg text-left border border-gray-100 p-2 rounded-lg"
                              >
                                {comment}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </>
                  );
                } else {
                  return (
                    <p className="text-white text-center">
                      Selectionne un video
                    </p>
                  );
                }
              })()
            ) : (
              <h1 className="text-gray-100 text-center text-3xl font-bold my-2">
                Aucun vidéo sélectionné
              </h1>
            )}
          </div>
        </div>
        {/* section playlist videos */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg">
          <h1 className="text-gray-100 text-center text-2xl font-bold my-2">
            Videos
          </h1>
          <ul className="text-gray-100 text-center flex flex-col gap-2">
            {Playlists.map((plst) =>
              plst.idPlaylist === selectedPlaylist
                ? plst.videos.map((video) => {
                    const videoId2 = new URL(video.lien).searchParams.get("v"); // Récupérer l'ID de la vidéo YouTube
                    const embedUrl = `https://img.youtube.com/vi/${videoId2}/hqdefault.jpg`;
                    return (
                      <li
                        className={`flex items-center justify-start gap-3 cursor-pointer border border-gray-100 rounded-lg p-2 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg duration-300 transition-all hover:bg-red-600 ${
                          activeVideo === video.id ? "bg-red-700" : ""
                        }`}
                        key={video.id}
                        onClick={() => HandleVideo(video.id)}
                      >
                        <img
                          src={embedUrl}
                          className="w-12 h-10 rounded-lg"
                          alt=""
                        />
                        <div className="text-left flex flex-col gap-1">
                          <h5 className="text-lg">{video.titre}</h5>{" "}
                          <div className="flex gap-2 items-center">
                            <img
                              className="w-10 h-6 rounded-md"
                              src={video.auteur.photo}
                              alt="Auteur"
                            />
                            <p className="font-bold">
                              {video.auteur.nom}
                              {""}
                              {video.auteur.prenom}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })
                : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
