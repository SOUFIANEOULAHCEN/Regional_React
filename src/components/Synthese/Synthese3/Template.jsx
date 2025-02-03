import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectPlaylist } from "./reducers/PlaylistActions";
export default function Template() {
  const Playlists = useSelector((state) => state.playlists);
  const selectedPlaylist = useSelector((state) => state.selectedPlaylist);
  console.log("Playlists:", Playlists ? Playlists : "Pas de données");
  const [active, SetActive] = useState();
  const dispatch = useDispatch();

  const HandlePlaylist = (idPlaylist) => {
    dispatch(SelectPlaylist(idPlaylist));
    SetActive(idPlaylist);
    console.log(selectedPlaylist)
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-3 m-4 rounded-lg w-full h-auto ">
        {/* section playlist */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg">
          <h1 className="text-2xl font-bold text-gray-100 text-center py-2">
            Playliste
          </h1>
          <ul className="text-gray-100 text-center flex flex-col gap-2">
            {Playlists.map((plst) => (
              <li
                className={` rounded-lg p-3 border border-gray-100 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg hover:bg-red-600 duration-300 transition-all  ${
                  active === plst.idPlaylist ? "bg-red-700" : ""
                }`}
                key={plst.idPlaylist}
                onClick={()=>HandlePlaylist(plst.idPlaylist)}
              >
                {plst.titre}{" "}
              </li>
            ))}
          </ul>
        </div>
        {/* section video */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg">
          <div className="w-full h-auto border border-gray-100 rounded-lg p-4 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg">
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/mMmiZTgOW2Q"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* section playlist videos */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg">
          <ul className="text-gray-100 text-center flex flex-col gap-2">
            {Playlists.map((plst) =>
              plst.videos.map((video) => (
                <li
                  className={`border border-gray-100 rounded-lg p-2 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg duration-300 transition-all hover:bg-red-600`}
                  key={video.id}
                >
                  {video.titre}{" "}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
