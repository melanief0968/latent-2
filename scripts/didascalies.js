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
            m: (e) => `${e.name} condense ses dires en ${e.result} lettres.`,
            f: (e) => `${e.name} condense ses dires en ${e.result} lettres.`,
            n:(e) => `${e.name} condense ses dires en ${e.result} lettres.`,
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
            m: (e) => `${e.name} est peut être timide ${e.time}.`,
            f: (e) => `${e.name} est peut être timide ${e.time}.`,
            n:(e) => `${e.name} est peut être timidex ${e.time}.`,
          },{
            m: (e) => `${e.name} est peut être malade.`,
            f: (e) => `${e.name} est peut être malade.`,
            n: (e) => `${e.name} est peut être maladex.`,
          }],
          case2: [{
            m: (e) => `${e.name} semble être fatigué`,
            f: (e) => `${e.name} semble être fatiguée`,
            n: (e) => `${e.name} semble être fatiguéx`,
          }],
          case3: [{
          }],
        },
        negative: {
          case1: [{
            m: (e) => `${e.name} semble vouloir partager ses profondes pensées.`,
            f: (e) => `${e.name} semble vouloir partager ses profondes pensées.`,
            n: (e) => `${e.name} semble vouloir partager ses profondes pensées.`,
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
    }
  },

};
export default didascalies;