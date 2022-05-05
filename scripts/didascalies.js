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
export const did = "hi didascalie";

// export function chooseDidascalies({ type, action, result }) {
//   return didascalies[type][action][result];
// }

export const didascalies = {
  char: {
    supposition: {
      positive: {
        case1: [{
          m: [(e) => `${e.name} est peut être timide ${e.time}.`],
          f: [(e) => `${e.name} est peut être timide ${e.time}.`],
          n: [(e) => `${e.name} est peut être timide ${e.time}.`],
        }]
        [{
          m: [(e) => `${e.name} est peut être malade.`],
          f: [(e) => `${e.name} est peut être malade.`],
          n: [(e) => `${e.name} est peut être malade.`],
        }],
        case2: [{
          m: [(e) => `${e.name} semble être fatigué`],
          f: [(e) => `${e.name} semble être fatiguée`],
          n: [(e) => `${e.name} semble être fatiguéx`],
        }],
      },
      negative: {
        case1: [{
          m: [(e) => `${e.name} semble vouloir partager ses profondes pensées.`],
          f: [(e) => `${e.name} semble vouloir partager ses profondes pensées.`],
          n: [(e) => `${e.name} semble vouloir partager ses profondes pensées.`],
        }],
        case2: [{
          m: [(e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`],
          f: [(e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`],
          n: [(e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`],
        }],
      },
    },
      // fait: {
      //   neutral: [
      //     {
      //       m: ["${this.name} condense ses dires en ${result} lettres."],
      //       f: ["${this.name} condense ses diresff en ${result} lettres."],
      //       n: ["${this.name} condense ses dires en 3 lettres."],
      //     },
      //     {
      //       m: {},
      //       f: {},
      //       n: {},
      //     },
      //   ],
      // },
  
    // constat: {
    //   positive: {
    //     case1: {
    //       m: ["${this.name} est peu bavard.", "${this.name} est peu causant."],
    //       f: ["${this.name} est peu bavarde.", "${this.name} est peu causante."],
    //       n: ["${this.name} est peu bavardx.", "${this.name} est peu causantx."],
    //     },
    //   },
    //   negative: {
    //     case1: {
    //       m: ["${this.name} est très bavard.", "${this.name} est très causant."],
    //       f: [
    //         "${this.name} est très bavarde.",
    //         "${this.name} est très causante.",
    //       ],
    //       n: [
    //         "${this.name} est très bavardx.",
    //         "${this.name} est très causantx.",
    //       ],
    //     },
    //   },
    // },
    // interpretation: {
    //   positive: {
    //     case1: {
    //       m: [
    //         "La conversation n’ayant pas grand intérêt, ${this.name} se contente de s’exprimer de manière synthétique.",
    //       ],
    //       f: [
    //         "La conversation n’ayant pas grand intérêt, ${this.name} se contente de s’exprimer de manière synthétique.",
    //       ],
    //       n: [
    //         "La conversation n’ayant pas grand intérêt, ${this.name} se contente de s’exprimer de manière synthétique.",
    //       ],
    //     },
    //   },
    //   negative: {
    //     case1: {
    //       m: [
    //         "D’excellente humeur, ${this.name} s’emballe pour décrire sa journée.",
    //       ],
    //       f: [
    //         "D’excellente humeur, ${this.name} s’emballe pour décrire sa journée.",
    //       ],
    //       n: [
    //         "D’excellente humeur, ${this.name} s’emballe pour décrire sa journée.",
    //       ],
    //     },
    //   },
    // },
  },
  // erase: {},
};
