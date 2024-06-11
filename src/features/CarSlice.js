import { createSlice } from '@reduxjs/toolkit';
import Pure from "../images/configurateur/modele/selection/pure.png"
import Legende from "../images/configurateur/modele/selection/legende.png"
import AlipineBlue from "../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg"
import AlipineNoir from "../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg"
import AlipineWhite from "../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg"

import AlpineLegendBlue from "../images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg"
import AlpineLegendBlack from "../images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg"
import AlpineLegendWhite from "../images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg"
// JANTES A110PURE



const initialState = {
    cars: [
        {
            nameCar: "A110 Pure",
            photo: Pure,
            prix: 54700,
            color: [
                { option: "Teinte spéciale Bleu Alpine", prix: 1800 , photoColor: AlipineBlue },
                { option: "Teinte métalisée Noir Plafond", prix: 840 , photoColor: AlipineNoir},
                { option: "Peinture opaque Blanc Glacier", prix: 0 , photoColor: AlipineWhite }
            ],
            jantes: [
                { option: "Standard", prix: 0 },
                { option: "Serac", prix: 1000 },
                { option: "Légende", prix: 0 }
            ],
            sellerie: [
                { option: "Sièges Confort en cuir noir", prix: 0 },
                { option: "Sièges baquets en cuir noir et Dinamica", prix: 0 },
                { option: "Sièges Confort en cuir noir perforé", prix: 0 },
                { option: "Sièges Confort en cuir Brun", prix: 0 }
            ],
            equipement: [
                { option: "Perso. intérieur", prix: 300 },
                { option: "Perso. extérieure", prix: 400 },
                { option: "Design", prix: 500 },
                { option: "Media et navigation", prix: 700 },
                { option: "Confort", prix: 600 },
                { option: "Conduite", prix: 800 },
                { option: "Sécurité", prix: 900 }
            ],
            accessoires: [
                { option: "Extérieur", prix: 200 },
                { option: "Intérieur", prix: 150 },
                { option: "Transport et protection", prix: 250 },
                { option: "Multimédia", prix: 300 },
                { option: "Matériel de garage", prix: 100 }
            ],
            recapitulatif: [
                { option: "Affichage des différentes sélections et prix total", prix: 0 }, 
                { option: "Matériel de garage", prix: 100 }
            ]
        },
        {
            nameCar: "A110 Légende",
            photo: Legende,
            prix: 58500,
            color: [
                { option: "Teinte spéciale Bleu Alpine", prix: 1500 , photoColor: AlpineLegendBlue },
                { option: "Teinte métalisée Noir Plafond", prix: 840 , photoColor: AlpineLegendBlack},
                { option: "Peinture opaque Blanc Glacier", prix: 0 , photoColor: AlpineLegendWhite }
            ],
            jantes: [
                { option: "Légende", prix: 800 },
                { option: "Standard", prix: 600 },
                { option: "Serac", prix: 1000 }
            ],
            sellerie: [
                { option: "Sièges Confort en cuir noir", prix: 1200 },
                { option: "Sièges baquets en cuir noir et Dinamica", prix: 1500 },
                { option: "Sièges Confort en cuir noir perforé", prix: 1300 },
                { option: "Sièges Confort en cuir Brun", prix: 1400 }
            ],
            equipement: [
                { option: "Perso. intérieur", prix: 300 },
                { option: "Perso. extérieure", prix: 400 },
                { option: "Design", prix: 500 },
                { option: "Media et navigation", prix: 700 },
                { option: "Confort", prix: 600 },
                { option: "Conduite", prix: 800 },
                { option: "Sécurité", prix: 900 }
            ],
            accessoires: [
                { option: "Extérieur", prix: 200 },
                { option: "Intérieur", prix: 150 },
                { option: "Transport et protection", prix: 250 },
                { option: "Multimédia", prix: 300 },
                { option: "Matériel de garage", prix: 100 }
            ],
            recapitulatif: [
                { option: "Affichage des différentes sélections et prix total", prix: 0 }, 
                { option: "Matériel de garage", prix: 100 }
            ]
        }
    ],
    carDefinitif: {
            nameCar: "A110 Pure",
            photo: Pure,
            prix: 54700,
            color: [
                { option: "Teinte spéciale Bleu Alpine", prix: 1800 , photoColor: AlipineBlue },
                { option: "Teinte métalisée Noir Plafond", prix: 840 , photoColor: AlipineNoir},
                { option: "Peinture opaque Blanc Glacier", prix: 0 , photoColor: AlipineWhite }
            ],
            jantes: [
                { option: "Standard", prix: 0 },
                { option: "Serac", prix: 1000 },
                { option: "Légende", prix: 0 }
            ],
            sellerie: [
                { option: "Sièges Confort en cuir noir", prix: 0 },
                { option: "Sièges baquets en cuir noir et Dinamica", prix: 0 },
                { option: "Sièges Confort en cuir noir perforé", prix: 0 },
                { option: "Sièges Confort en cuir Brun", prix: 0 }
            ],
            equipement: [
                { option: "Perso. intérieur", prix: 300 },
                { option: "Perso. extérieure", prix: 400 },
                { option: "Design", prix: 500 },
                { option: "Media et navigation", prix: 700 },
                { option: "Confort", prix: 600 },
                { option: "Conduite", prix: 800 },
                { option: "Sécurité", prix: 900 }
            ],
            accessoires: [
                { option: "Extérieur", prix: 200 },
                { option: "Intérieur", prix: 150 },
                { option: "Transport et protection", prix: 250 },
                { option: "Multimédia", prix: 300 },
                { option: "Matériel de garage", prix: 100 }
            ],
            recapitulatif: [
                { option: "Affichage des différentes sélections et prix total", prix: 0 }, 
                { option: "Matériel de garage", prix: 100 }
            ]
        }
};

export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        nameVoiture: (state, action) => {
           switch (action.payload) {
            case 0:
                state.carDefinitif = state.cars[0]
                break;
            case 1:
                state.carDefinitif = state.cars[1]
                break;
            default:
                break;
           } 
        },
        // Couleurs
        ColorCarBlue: (state, action) => {
            const carIndex = action.payload.carIndex
            const colorIndex = action.payload.colorIndex
            if (state.cars[carIndex]) {
                state.carDefinitif.color[0] = state.cars[carIndex].color[colorIndex]
                state.carDefinitif.photo = state.cars[carIndex].color[colorIndex].photoColor
            }
        },
        // ChangeJante: (state,action) => {
        //     const carIndex = action.payload.carIndex
        //     const janteIndex = action.payload.janteIndex
        //     if (state.cars[carIndex]) {
        //         state.carDefinitif.jantes[0] = state.cars[carIndex].jantes[janteIndex]
        //         state.carDefinitif.
        //     }

        // }


    }
});

export const { changeColor , nameVoiture , price , ColorCarBlue } = carSlice.actions;
export default carSlice.reducer;
