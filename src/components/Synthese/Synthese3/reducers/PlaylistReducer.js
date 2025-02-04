import {
  SELECTED_VIDEO,
  SELECTED_PLAYLIST,
  ADD_COMMENT,
  likes_VIDEO,
  dislikes_VIDEO,
} from "./PlaylistActions";
import man from "../img/man.jpeg";
const etatInitial = {
  playlists: [
    {
      idPlaylist: 1,
      titre: "Programmation Web",
      videos: [
        {
          id: 101,
          titre: "Introduction à JavaScript",
          description: "Une vidéo expliquant les bases de JavaScript.",
          miniature: "demo1.png",
          duree: "10:05",
          commentaires: [
            "Super vidéo !",
            "Très bien expliqué.",
            "Merci pour les explications !",
            "Simple et efficace.",
            "J'adore cette vidéo !",
          ],
          likes: 150,
          dislikes: 5,
          lien: "https://www.youtube.com/watch?v=01ysRUHZbJI&list=PLoMFrq1Jfnr82k8rSczHHvaf7Y_lSPbaW&index=7",
          auteur: {
            nom: "Dupont",
            prenom: "Jean",
            photo: { man },
          },
        },
        {
          id: 102,
          titre: "Les services Cloud",
          description:
            "Comprendre les différentes services cloud et les fournisseurs.",
          miniature: "annonce.png",
          duree: "12:30",
          commentaires: [
            "Merci pour cette explication!",
            "Clair et précis.",
            "Bonne pédagogie.",
            "Très utile pour les débutants.",
          ],
          likes: 200,
          dislikes: 10,
          lien: "https://www.youtube.com/watch?v=mMmiZTgOW2Q&list=PLoMFrq1Jfnr82k8rSczHHvaf7Y_lSPbaW",
          auteur: {
            nom: "GAHI",
            prenom: "Said",
            photo: { man },
          },
        },
      ],
    },
    {
      idPlaylist: 2,
      titre: "Programmation en Python",
      videos: [
        {
          id: 201,
          titre: "Introduction à Python",
          description:
            "Apprenez les bases de Python avec des exemples simples.",
          miniature: "python_intro.png",
          duree: "15:20",
          commentaires: [
            "Vidéo très claire et utile.",
            "Python est plus simple que je ne le pensais.",
            "Bien pour les débutants.",
          ],
          likes: 250,
          dislikes: 8,
          lien: "https://www.youtube.com/watch?v=GCYYkOSKj80&list=PLuXY3ddo_8nzCVqXcTFqwcM5R0gZiMRiW",
          auteur: {
            nom: "Martin",
            prenom: "Pierre",
            photo: { man },
          },
        },
        {
          id: 202,
          titre: "Les structures de données en Python",
          description:
            "Explorez les structures de données de base comme les listes, les dictionnaires, et plus.",
          miniature: "python_data.png",
          duree: "20:15",
          commentaires: [
            "Très bonne explication des structures de données.",
            "Vidéo très bien structurée.",
          ],
          likes: 180,
          dislikes: 3,
          lien: "https://www.youtube.com/watch?v=xNm6y8SYcs4&list=PLuXY3ddo_8nzCVqXcTFqwcM5R0gZiMRiW&index=2",
          auteur: {
            nom: "Dupont",
            prenom: "Jean",
            photo: { man },
          },
        },
      ],
    },
    {
      idPlaylist: 3,
      titre: "Gestion des données",
      videos: [
        {
          id: 301,
          titre: "Introduction à la gestion des bases de données",
          description:
            "Comprendre les bases de données relationnelles et non relationnelles.",
          miniature: "data_intro.png",
          duree: "13:50",
          commentaires: [
            "Très utile pour les gestionnaires de données.",
            "Bon aperçu des différents types de bases de données.",
          ],
          likes: 300,
          dislikes: 5,
          lien: "https://www.youtube.com/watch?v=6oKYY8H9LtE&list=PLKV6WevXj-lV2tqD_3ljxspt4qAFGK-M1",
          auteur: {
            nom: "Leclerc",
            prenom: "Marie",
            photo: { man },
          },
        },
        {
          id: 302,
          titre: "Optimisation des requêtes SQL",
          description:
            "Apprenez à optimiser vos requêtes SQL pour de meilleures performances.",
          miniature: "sql_optimisation.png",
          duree: "18:40",
          commentaires: [
            "Vidéo super intéressante et bien expliquée.",
            "C'est exactement ce que je cherchais pour améliorer mes requêtes.",
          ],
          likes: 220,
          dislikes: 7,
          lien: "https://www.youtube.com/watch?v=NEsOcYlbqr8&list=PLKV6WevXj-lV2tqD_3ljxspt4qAFGK-M1&index=2",
          auteur: {
            nom: "Lemoine",
            prenom: "Luc",
            photo: { man },
          },
        },
      ],
    },
    {
      idPlaylist: 4,
      titre: "Cloud Computing",
      videos: [
        {
          id: 401,
          titre: "Introduction au Cloud Computing",
          description:
            "Découvrez ce qu'est le Cloud Computing et comment il transforme l'informatique.",
          miniature: "cloud_intro.png",
          duree: "17:10",
          commentaires: [
            "Vidéo excellente pour commencer dans le Cloud.",
            "Très bien détaillé, merci !",
          ],
          likes: 350,
          dislikes: 4,
          lien: "https://www.youtube.com/watch?v=mMmiZTgOW2Q&list=PLoMFrq1Jfnr82k8rSczHHvaf7Y_lSPbaW",
          auteur: {
            nom: "Benoit",
            prenom: "Lucas",
            photo: { man },
          },
        },
        {
          id: 402,
          titre: "Les principaux fournisseurs de Cloud",
          description:
            "Un aperçu des principaux services Cloud comme AWS, Google Cloud, et Azure.",
          miniature: "cloud_providers.png",
          duree: "19:30",
          commentaires: [
            "Super présentation des fournisseurs.",
            "Cette vidéo m'a beaucoup appris sur les options Cloud.",
          ],
          likes: 280,
          dislikes: 10,
          lien: "https://www.youtube.com/watch?v=K9a1fGQilwI&list=PLoMFrq1Jfnr82k8rSczHHvaf7Y_lSPbaW&index=2",
          auteur: {
            nom: "Lemoine",
            prenom: "Clara",
            photo: { man },
          },
        },
      ],
    },
    {
      idPlaylist: 5,
      titre: "Modélisation UML",
      videos: [
        {
          id: 501,
          titre: "Introduction à la modélisation UML",
          description:
            "Découvrez les bases de la modélisation UML et ses diagrammes principaux.",
          miniature: "uml_intro.png",
          duree: "14:45",
          commentaires: [
            "Vidéo très pédagogique.",
            "Très utile pour comprendre les bases d'UML.",
          ],
          likes: 150,
          dislikes: 5,
          lien: "https://www.youtube.com/watch?v=K9a1fGQilwI&list=PLoMFrq1Jfnr82k8rSczHHvaf7Y_lSPbaW&index=2",
          auteur: {
            nom: "Durand",
            prenom: "Élise",
            photo: { man },
          },
        },
        {
          id: 502,
          titre: "Les diagrammes de classes UML",
          description:
            "Un guide pour comprendre et créer des diagrammes de classes en UML.",
          miniature: "uml_classes.png",
          duree: "22:10",
          commentaires: [
            "Très détaillé, j'ai bien compris les diagrammes de classes.",
            "Vidéo idéale pour les étudiants en génie logiciel.",
          ],
          likes: 180,
          dislikes: 8,
          lien: "https://www.youtube.com/watch?v=K9a1fGQilwI&list=PLoMFrq1Jfnr82k8rSczHHvaf7Y_lSPbaW&index=2",
          auteur: {
            nom: "Sauvage",
            prenom: "Maxime",
            photo: { man },
          },
        },
      ],
    },
  ],

  selectedVideo: null,
  selectedPlaylist: null,
};

const PlaylistReducer = (state = etatInitial, action) => {
  switch (action.type) {
    case SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
      };
    case SELECTED_PLAYLIST:
      return {
        ...state,
        // selectedPlaylist:state.selectedPlaylist = action.payload,
        selectedPlaylist: action.payload,
      };
    case likes_VIDEO:
      return {
        ...state,
        playlists: state.playlists.map((plst) => ({
          ...plst,
          videos: plst.videos.map((video) =>
            video.id == action.payload
              ? { ...video, likes: video.likes + 1 }
              : video
          ),
        })),
      };
    case dislikes_VIDEO:
      return {
        ...state,
        playlists: state.playlists.map((plst) => ({
          ...plst,
          videos: plst.videos.map((video) =>
            video.id == action.payload
              ? { ...video, dislikes: video.dislikes + 1 }
              : video
          ),
        })),
      };
    case ADD_COMMENT:
      return {
        ...state,
        playlists: state.playlists.map((plst) => ({
          ...plst,
          videos: plst.videos.map((video) =>
            video.id === action.payload.idVideo
              ? {
                  ...video,
                  commentaires: [...video.commentaires, action.payload.comment],
                }
              : video
          ),
        })),
      };
    default:
      return state;
  }
};
export default PlaylistReducer;
