export const didascalies = {
  char: {
    fait: {
      neutral: {
        case1: {
          m: ["${this.name} condense ses dires en ${result} lettres."],
          f: ["${this.name} condense ses diresff en ${result} lettres."],
          n: ["${this.name} condense ses dires en 3 lettres."],
        },
      },
      case2: {
        m: {},
        f: {},
        n: {},
      },
    },
  },
  constat: {
    positive: {
      case1: {
        m: ["${this.name} est peu bavard.", "${this.name} est peu causant."],
        f: ["${this.name} est peu bavarde.", "${this.name} est peu causante."],
        n: ["${this.name} est peu bavardx.", "${this.name} est peu causantx."],
      },
    },
    negative: {
      case1: {
        m: ["${this.name} est très bavard.", "${this.name} est très causant."],
        f: [
          "${this.name} est très bavarde.",
          "${this.name} est très causante.",
        ],
        n: [
          "${this.name} est très bavardx.",
          "${this.name} est très causantx.",
        ],
      },
    },
  },
  supposition: {
    positive: {
      case1: {
        m: ["${this.name} est peut être timide."],
        f: ["${this.name} est peut être timide."],
        n: ["${this.name} est peut être timide."],
      },
    },
    negative: {
      case2: {
        m: ["${this.name} n’a pas l’air d’avoir la langue dans sa poche."],
        f: ["${this.name} n’a pas l’air d’avoir la langue dans sa poche."],
        n: ["${this.name} n’a pas l’air d’avoir la langue dans sa poche."],
      },
    },
  },
  interpretation: {
    positive: {
      case1: {
        m: [
          "La conversation n’ayant pas grand intérêt, ${this.name} se contente de s’exprimer de manière synthétique.",
        ],
        f: [
          "La conversation n’ayant pas grand intérêt, ${this.name} se contente de s’exprimer de manière synthétique.",
        ],
        n: [
          "La conversation n’ayant pas grand intérêt, ${this.name} se contente de s’exprimer de manière synthétique.",
        ],
      },
    },
    negative: {
      case1: {
        m: [
          "D’excellente humeur, ${this.name} s’emballe pour décrire sa journée.",
        ],
        f: [
          "D’excellente humeur, ${this.name} s’emballe pour décrire sa journée.",
        ],
        n: [
          "D’excellente humeur, ${this.name} s’emballe pour décrire sa journée.",
        ],
      },
    },
  },
  erase: {},
};
