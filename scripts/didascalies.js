// // https://stackoverflow.com/questions/19075461/generate-one-random-index-from-an-array-but-exclude-one-javascript
// const SEXE = "m";
// const TYPE = "char";
// const ACTION = "fait";
// const RESULT = "neutral";
// const INDEX = 0;
// const OPTIONS = {
//   name: "Mélanie",
// };

// didascalies[TYPE][ACTION][RESULT][INDEX][SEXE](OPTIONS);
// const did = "hi didascalie";
// export default did;

// export function chooseDidascalies({ type, action, result }) {
//   return didascalies[type][action][result];
// }

 const didascalies = {
  msg:{
    char: {
      level1: {
        positive: {
          case1: [{
            m: (e) => `${e.name} condense ses dires en ${e.outputValue} lettres.`,
            f: (e) => `${e.name} condense ses dires en ${e.outputValue} lettres.`,
            n: (e) => `${e.name} condense ses dires en ${e.outputValue} lettres.`,
          },{
            m: (e) => `Le message de ${e.name} comporte ${e.outputValue} caractères.`,
            f: (e) => `Le message de ${e.name} comporte ${e.outputValue} caractères.`,
            n: (e) => `Le message de ${e.name} comporte ${e.outputValue} caractères.`,
          },{
            m: (e) => `${e.name} répond en ${e.outputValue} caractères.`,
            f: (e) => `${e.name} répond en ${e.outputValue} caractères.`,
            n: (e) => `${e.name} répond en ${e.outputValue} caractères.`,
          },{
            m: (e) => `${e.outputValue} signes plus tard, ${e.name} renvoie un message..`,
            f: (e) => `${e.outputValue} signes plus tard, ${e.name} renvoie un message..`,
            n: (e) => `${e.outputValue} signes plus tard, ${e.name} renvoie un message..`,
          }, {
            m: (e) => `Le message de ${e.name} mesure ${e.outputValue} signes.`,
            f: (e) => `Le message de ${e.name} mesure ${e.outputValue} signes.`,
            n: (e) => `Le message de ${e.name} mesure ${e.outputValue} signes.`,
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          //jamais de negative
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level2: {
        positive: {
          case1: [{
            m: (e) => `${e.name} est peu bavard.`,
            f: (e) => `${e.name} est peu bavarde.`,
            n:(e) => `${e.name} est peu bavardx.`,
          }],
          case2: [{
            m: (e) => `${e.name} est peu causant.`,
            f: (e) => `${e.name} est peu causante.`,
            n: (e) => `${e.name} est peu causantx.`,
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
            m: (e) => `${e.name} est très bavard.`,
            f: (e) => `${e.name} est très bavarde.`,
            n: (e) => `${e.name} est très bavardx.`,
          },{ 
            m: (e) => `${e.name} est très causant.`,
            f: (e) => `${e.name} est très causante.`,
            n: (e) => `${e.name} est très causantx.`,
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level3: {
        positive: {
          case1: [{
            m: (e) => `${e.name} est peut être timide ${e.outputValue}.`,
            f: (e) => `${e.name} est peut être timide ${e.outputValue}.`,
            n:(e) => `${e.name} est peut être timidex ${e.outputValue}.`,
          },{
            m: (e) => `${e.name} est peut être malade.`,
            f: (e) => `${e.name} est peut être malade.`,
            n: (e) => `${e.name} est peut être maladex.`,
          },{
            m: (e) => `${e.name} semble être fatigué`,
            f: (e) => `${e.name} semble être fatiguée`,
            n: (e) => `${e.name} semble être fatiguéx`,
          },{
            m: (e) => `Le manque de détails dans la réponse de ${e.name} est intriguant. Est-ce qu'il est réellement intéressé ?`,
            f: (e) => `Le manque de détails dans la réponse de ${e.name} est intriguant. Est-ce qu'elle est réellement intéressée ?`,
            n: (e) => `Le manque de détails dans la réponse de ${e.name} est intriguant. Est-ce qu'iel est réellement intéresséx ?`,
          }],
          case2: [{
            m: (e) => `L’attention sans cesse accaparée, ${e.name} semble distrait par la scène qui se déroule devant ses yeux et répond abruptement.`,
            f: (e) => `L’attention sans cesse accaparée, ${e.name} semble distraite par la scène qui se déroule devant ses yeux et répond abruptement`,
            n: (e) => `L’attention sans cesse accaparée, ${e.name} semble distraitx par la scène qui se déroule devant ses yeux et répond abruptement`,
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
            m: (e) => `${e.name} semble vouloir partager ses profondes pensées${e.outputValue}.`,
            f: (e) => `${e.name} semble vouloir partager ses profondes pensées${e.outputValue}.`,
            n: (e) => `${e.name} semble vouloir partager ses profondes pensées${e.outputValue}.`,
          }],
          case2: [{
            m: (e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`,
            f: (e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`,
            n: (e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`,
          }],
          case3: [{
          }],
        },
      },
      level4: {
        positive: {
          case1: [{
            m: (e) => `La conversation n’ayant pas grand intérêt, ${e.name} se contente de s’exprimer de manière synthétique.`,
            f: (e) => `La conversation n’ayant pas grand intérêt, ${e.name} se contente de s’exprimer de manière synthétique.`,
            n:(e) => `La conversation n’ayant pas grand intérêt, ${e.name} se contente de s’exprimer de manière synthétique.`,
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
            m: (e) => `D’excellente humeur, ${e.name} s’emballe pour décrire sa journée.`,
            f: (e) => `D’excellente humeur, ${e.name} s’emballe pour décrire sa journée.`,
            n:(e) => `D’excellente humeur, ${e.name} s’emballe pour décrire sa journée.`,
          },{
            m: (e) => `Plus que concentré, ${e.name} prend le temps de rédiger des messages consistants.`,
            f: (e) => `Plus que concentrée, ${e.name} prend le temps de rédiger des messages consistants.`,
            n:(e) => `Plus que concentréx, ${e.name} prend le temps de rédiger des messages consistants.`,
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
    },
    erase:{
      level1: {
        positive: {
          case1: [{
            m: (e) => `${e.name} semble vouloir partager ses profondes pensées${e.outputValue}.`,
            f: (e) => `${e.name} semble vouloir partager ses profondes pensées${e.outputValue}.`,
            n: (e) => `${e.name} semble vouloir partager ses profondes pensées${e.outputValue}.`,
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          //jamais de negative
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level2: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level3: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level4: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
    },
    time:{
      level1: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          //jamais de negative
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level2: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level3: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level4: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
    },
    speed:{
      level1: {
        positive: {
          case1: [{
            m: (e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
            f: (e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
            n:(e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
          },{
            m: (e) => `${e.name} rédige son message à une allure de ${e.outputValue} mots par minute.`,
            f: (e) => `${e.name} rédige son message à une allure de ${e.outputValue} mots par minute.`,
            n:(e) => `${e.name} rédige son message à une allure de ${e.outputValue} mots par minute.`,
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          //jamais de negative
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level2: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
            m: (e) => `${e.name} prend soin de choisir ses mots, cette discussion doit lui tenir à coeur.`,
            f: (e) => `${e.name} prend soin de choisir ses mots, cette discussion doit lui tenir à coeur.`,
            n:(e) => `${e.name} prend soin de choisir ses mots, cette discussion doit lui tenir à coeur.`,
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level3: {
        positive: {
          case1: [{
            m: (e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
            f: (e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
            n:(e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
          }],
          case2: [{
            m: (e) => `Plus rien autour n’a l’air d’importer, ${e.name} a l’air tout emoustillé par la conversation.`,
            f: (e) => `Plus rien autour n’a l’air d’importer, ${e.name} a l’air tout emoustillé par la conversation.`,
            n:(e) => `Plus rien autour n’a l’air d’importer, ${e.name} a l’air tout emoustillé par la conversation.`,
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
      level4: {
        positive: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
          }],
          case2: [{
          }],
          case3: [{
          }],
        },
      },
    }
  },

};
export default didascalies;