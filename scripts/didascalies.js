
 const didascalies = {
  msg:{
    char: {
      level1: {
        positive: {
          case3: [{
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
            m: (e) => `${e.outputValue} signes plus tard, ${e.name} renvoie un message.`,
            f: (e) => `${e.outputValue} signes plus tard, ${e.name} renvoie un message.`,
            n: (e) => `${e.outputValue} signes plus tard, ${e.name} renvoie un message.`,
          }, {
            m: (e) => `Le message de ${e.name} mesure ${e.outputValue} signes.`,
            f: (e) => `Le message de ${e.name} mesure ${e.outputValue} signes.`,
            n: (e) => `Le message de ${e.name} mesure ${e.outputValue} signes.`,
          }, {
            m: (e) => `${e.outputValue} signes plus tard, ${e.name} répond.`,
            f: (e) => `${e.outputValue} signes plus tard, ${e.name} répond.`,
            n: (e) => `${e.outputValue} signes plus tard, ${e.name} répond.`,
          },],
          case4: [],
          case5: [],
        },
        negative: {
          case1: [],
          case2: [],
          case3: [],
          case4: [],
          case5: [],
        },
      },
      level2: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} est peu bavard.`,
            f: (e) => `${e.name} est peu bavarde.`,
            n:(e) => `${e.name} est peu bavardx.`,
          },{
            m: (e) => `${e.name} est peu causant.`,
            f: (e) => `${e.name} est peu causante.`,
            n: (e) => `${e.name} est peu causantx.`,
          },{
            m: (e) => `Toujours bien organisé, ${e.name} ne se laisse par distraire par les subtilités du langage.`,
            f: (e) => `Toujours bien organisée, ${e.name} ne se laisse par distraire par les subtilités du langage.`,
            n: (e) => `Toujours bien organiséx, ${e.name} ne se laisse par distraire par les subtilités du langage.`,
          },{
            m: (e) => `${e.name} réplique de façon succincte, il n’y a pas besoin d’en dire plus.`,
            f: (e) => `${e.name} réplique de façon succincte, il n’y a pas besoin d’en dire plus.`,
            n: (e) => `${e.name} réplique de façon succincte, il n’y a pas besoin d’en dire plus.`,
          },{
            m: (e) => `Il est inutile de s’attendre à de grandes déclarations, ${e.name} a mieux à faire et fait preuve de limpidité.`,
            f: (e) => `Il est inutile de s’attendre à de grandes déclarations, ${e.name} a mieux à faire et fait preuve de limpidité.`,
            n: (e) => `Il est inutile de s’attendre à de grandes déclarations, ${e.name} a mieux à faire et fait preuve de limpidité.`,
          }, {
            m: (e) => `${e.outputValue} lettres, c'est exactement ce qu'il faut à ${e.name} pour exprimer ce qu'il a sur le coeur.`,
            f: (e) => `${e.outputValue} lettres, c'est exactement ce qu'il faut à ${e.name} pour exprimer ce qu'elle a sur le coeur.`,
            n: (e) => `${e.outputValue} lettres, c'est exactement ce qu'il faut à ${e.name} pour exprimer ce qu'iel a sur le coeur.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} est très bavard.`,
            f: (e) => `${e.name} est très bavarde.`,
            n: (e) => `${e.name} est très bavardx.`,
          },{ 
            m: (e) => `${e.name} est très causant.`,
            f: (e) => `${e.name} est très causante.`,
            n: (e) => `${e.name} est très causantx.`,
          },{
            m: (e) => `Fidèle à lui même, ${e.name} sait se montrer exhaustif dans ses propos.`,
            f: (e) => `Fidèle à elle même, ${e.name} sait se montrer exhaustive dans ses propos.`,
            n: (e) => `Fidèle à ellui même, ${e.name} sait se montrer exhaustifx dans ses propos.`,
          },{
            m: (e) => `${e.name} semble vouloir commencer un débat.`,
            f: (e) => `${e.name} semble vouloir commencer un débat.`,
            n: (e) => `${e.name} semble vouloir commencer un débat.`,
          },{
            m: (e) => `${e.name} résume sa pensée en ${e.outputValue} caractères.`,
            f: (e) => `${e.name} résume sa pensée en ${e.outputValue} caractères.`,
            n: (e) => `${e.name} résume sa pensée en ${e.outputValue} caractères.`,
          },{
            m: (e) => `Plus que concentré, ${e.name} prend le temps de rédiger des messages consistants.`,
            f: (e) => `Plus que concentrée, ${e.name} prend le temps de rédiger des messages consistants.`,
            n: (e) => `Plus que concentréx, ${e.name} prend le temps de rédiger des messages consistants.`,
          },{
            m: (e) => `La manière d’écrire de ${e.name} laisse transparaître une certaine admiration pour ${e.contact}.`,
            f: (e) => `La manière d’écrire de ${e.name} laisse transparaître une certaine admiration pour ${e.contact}.`,
            n: (e) => `La manière d’écrire de ${e.name} laisse transparaître une certaine admiration pour ${e.contact}.`,
          },{
            m: (e) => `${e.name} semble avoir une affinité particulière pour ${e.contact}.`,
            f: (e) => `${e.name} semble avoir une affinité particulière pour ${e.contact}.`,
            n: (e) => `${e.name} semble avoir une affinité particulière pour ${e.contact}.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
      },
      //to do
      level3: {
        positive: {
          case1: [{
            m: (e) => `Manquant probablement de louper son train, ${e.name} paraît nerveux.`,
            f: (e) => `Manquant probablement de louper son train, ${e.name} paraît nerveuse.`,
            n: (e) => `Manquant probablement de louper son train, ${e.name} paraît nerveux.`,
          },{
            m: (e) => `Simple et concis, ${e.name} souhaite aller droit au but tandis qu’il sauve un chiot de la noyade.`,
            f: (e) => `Simple et concise, ${e.name} souhaite aller droit au but tandis qu’elle sauve un chiot de la noyade.`,
            n: (e) => `Simple et concisx, ${e.name} souhaite aller droit au but tandis qu’iel sauve un chiot de la noyade.`,
          },{
            m: (e) => `${e.name} est probablement en train de courir après son bus.`,
            f: (e) => `${e.name} est probablement en train de courir après son bus.`,
            n: (e) => `${e.name} est probablement en train de courir après son bus.`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} se montre extrêmement concis et se contente de ${e.outputValue} lettres.`,
            f: (e) => `${e.name} se montre extrêmement concise et se contente de ${e.outputValue} lettres..`,
            n: (e) => `${e.name} se montre extrêmement concisex et se contente de ${e.outputValue} lettres..`,
          },{
            m: (e) => `${e.name} est peut être timide.`,
            f: (e) => `${e.name} est peut être timide.`,
            n:(e) => `${e.name} est peut être timidex.`,
          },{
            m: (e) => `${e.name} est peut être malade.`,
            f: (e) => `${e.name} est peut être malade.`,
            n: (e) => `${e.name} est peut être maladex.`,
          },{
            m: (e) => `${e.name} semble être fatigué.`,
            f: (e) => `${e.name} semble être fatiguée.`,
            n: (e) => `${e.name} semble être fatiguéx.`,
          },{
            m: (e) => `Le manque de détails dans la réponse de ${e.name} est intriguant. Est-il réellement intéressé ?`,
            f: (e) => `Le manque de détails dans la réponse de ${e.name} est intriguant. Est-elle est réellement intéressée ?`,
            n: (e) => `Le manque de détails dans la réponse de ${e.name} est intriguant. Est-iel est réellement intéresséx ?`,
          },{
            m: (e) => `Peu attentif, ${e.name} semble avoir son attention accaparée par la scène qui se déroule devant lui.`,
            f: (e) => `Peu attentive, ${e.name} semble avoir son attention accaparée par la scène qui se déroule devant elle.`,
            n: (e) => `Peu attentifx, ${e.name} semble avoir son attention accaparée par la scène qui se déroule devant iel.`,
          },{
            m: (e) => `Simple et efficace, ${e.name} reste fidèle à lui-même se contentant d’aller droit à l’essentiel.`,
            f: (e) => `Simple et efficace, ${e.name} reste fidèle à elle-même se contentant d’aller droit à l’essentiel.`,
            n: (e) => `Simple et efficace, ${e.name} reste fidèle à ellui-même se contentant d’aller droit à l’essentiel.`,
          },{
            m: (e) => `${e.name} est probablement facturé au nombre de symboles, ce qui explique sa réponse succincte.`,
            f: (e) => `${e.name} est probablement facturée au nombre de symboles, ce qui explique sa réponse succincte.`,
            n: (e) => `${e.name} est probablement facturéx au nombre de symboles, ce qui explique sa réponse succincte.`,
          },{
            m: (e) => `${e.name} communique de manière expéditive.  Aurait-il une préférence pour les télégrammes ?`,
            f: (e) => `${e.name} communique de manière expéditive.  Aurait-elle une préférence pour les télégrammes ?`,
            n: (e) => `${e.name} communique de manière expéditive.  Aurait-iel une préférence pour les télégrammes ?`,
          },{
            m: (e) => `D’excellente humeur, ${e.name}, s’emballe pour décrire sa journée.`,
            f: (e) => `D’excellente humeur, ${e.name}, s’emballe pour décrire sa journée.`,
            n: (e) => `D’excellente humeur, ${e.name}, s’emballe pour décrire sa journée.`,
          },{
            m: (e) => `${e.name} s’exprime de manière limpide, semblant savoir ce qu'il veut. Une assurance non dissimulée.`,
            f: (e) => `${e.name} s’exprime de manière limpide, semblant savoir ce qu’elle veut. Une assurance non dissimulée.`,
            n: (e) => `${e.name} s’exprime de manière limpide, semblant savoir ce qu’iel veut. Une assurance non dissimulée.`,
          },{
            m: (e) => `${e.name} est à un évènement important est paraît nerveux.`,
            f: (e) => `${e.name} est à un évènement important est paraît nerveuse.`,
            n: (e) => `${e.name} est à un évènement important est paraît nerveuxex.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} souhaite apparemment partager les nombreux événements de sa journée dans le plus grand des détails.`,
            f: (e) => `${e.name} souhaite apparemment partager les nombreux événements de sa journée dans le plus grand des détails.`,
            n: (e) => `${e.name} souhaite apparemment partager les nombreux événements de sa journée dans le plus grand des détails.`,
          },{
            m: (e) => `En quête de précision, ${e.name} ne se prive pas d’écrire tout un roman.`,
            f: (e) => `En quête de précision, ${e.name} ne se prive pas d’écrire tout un roman.`,
            n: (e) => `En quête de précision, ${e.name} ne se prive pas d’écrire tout un roman.`,
          },{
            m: (e) => `Malgré le fait qu'il soit au travail, cela ne semble pas empêcher ${e.name} d'écrire le roman de sa vie.`,
            f: (e) => `Malgré le fait qu'elle soit au travail, cela ne semble pas empêcher ${e.name} d'écrire le roman de sa vie.`,
            n: (e) => `Malgré le fait qu'iel soit au travail, cela ne semble pas empêcher ${e.name} d'écrire le roman de sa vie.`,
          },{
            m: (e) => `${e.name} semble vouloir partager ses profondes pensées.`,
            f: (e) => `${e.name} semble vouloir partager ses profondes pensées.`,
            n: (e) => `${e.name} semble vouloir partager ses profondes pensées.`,
          },{
            m: (e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`,
            f: (e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`,
            n: (e) => `${e.name} n’a pas l’air d’avoir la langue dans sa poche.`,
          },{
            m: (e) => `Bravant cette journée difficile ${e.name} ressent le besoin d'exprimer ses sentiments.`,
            f: (e) => `Bravant cette journée difficile ${e.name} ressent le besoin d'exprimer ses sentiments.`,
            n: (e) => `Bravant cette journée difficile ${e.name} ressent le besoin d'exprimer ses sentiments.`,
          },{
            m: (e) => `La conversation paraît confuse et ${e.name} se justifie en donnant de nombreux détails.`,
            f: (e) => `La conversation paraît confuse et ${e.name} se justifie en donnant de nombreux détails.`,
            n: (e) => `La conversation paraît confuse et ${e.name} se justifie en donnant de nombreux détails.`,
          },{
            m: (e) => `Frustré par ce qui vient d’arriver, ${e.name} décrit avec précision ce qu’il a sur le coeur.`,
            f: (e) => `Frustrée par ce qui vient d’arriver, ${e.name} décrit avec précision ce qu’elle a sur le coeur.`,
            n: (e) => `Frustréx par ce qui vient d’arriver, ${e.name} décrit avec précision ce qu’iel a sur le coeur.`,
          },{
            m: (e) => `À la recherche des bons mots, ${e.name} continue cette discussion qui lui tient à coeur.`,
            f: (e) => `À la recherche des bons mots, ${e.name} continue cette discussion qui lui tient à coeur.`,
            n: (e) => `À la recherche des bons mots, ${e.name} continue cette discussion qui lui tient à coeur.`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
      },
      level4: {
        positive: {
          case1: [{
            m: (e) => `${e.name} souhaite-il écourter la discussion ? Son bref message laisse planer le doute… Il s'apprête à sauter en parachute.`,
            f: (e) => `${e.name} souhaite-elle écourter la discussion ? Son bref message laisse planer le doute… Elle s'apprête à sauter en parachute.`,
            n: (e) => `${e.name} souhaite-iel écourter la discussion ? Son bref message laisse planer le doute… Iel s'apprête à sauter en parachute.`,
          },{
            m: (e) => `${e.name} doit probablement être en train de conduire et reste bref.`,
            f: (e) => `${e.name} doit probablement être en train de conduire et reste brève.`,
            n: (e) => `${e.name} doit probablement être en train de conduire et reste brefx.`,
          },{
            m: (e) => `Voici une réplique bien fugace de ${e.name}, il est inutile de tergiverser quand il faut secourir une vielle dame se faisant voler son sac.`,
            f: (e) => `Voici une réplique bien fugace de ${e.name}, il est inutile de tergiverser quand il faut secourir une vielle dame se faisant voler son sac.`,
            n: (e) => `Voici une réplique bien fugace de ${e.name}, il est inutile de tergiverser quand il faut secourir une vielle dame se faisant voler son sac.`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `Sans tergiverser, ${e.name} répond succinctement. Il est parfois compliqué d'être à l'heure quand on est en vacances... ou presque.`,
            f: (e) => `Sans tergiverser, ${e.name} répond succinctement. Il est parfois compliqué d'être à l'heure quand on est en vacances... ou presque.`,
            n: (e) => `Sans tergiverser, ${e.name} répond succinctement. Il est parfois compliqué d'être à l'heure quand on est en vacances... ou presque.`,
          },{
            m: (e) => `${e.name} n’a probablement pas beaucoup de temps à dédier à cette conversation, il doit réserver ses billets pour Bali.`,
            f: (e) => `${e.name} n’a probablement pas beaucoup de temps à dédier à cette conversation, elle doit réserver ses billets pour Bali.`,
            n: (e) => `${e.name} n’a probablement pas beaucoup de temps à dédier à cette conversation, iel doit réserver ses billets pour Bali.`,
          },{
            m: (e) => `À court de batterie, ${e.name} communique de manière synthétique.`,
            f: (e) => `À court de batterie, ${e.name} communique de manière synthétique.`,
            n: (e) => `À court de batterie, ${e.name} communique de manière synthétique.`,
          },{
            m: (e) => `La réponse de ${e.name} semble abrégée, serait-t-il encore au téléphone avec sa belle mère ?`,
            f: (e) => `La réponse de ${e.name} semble abrégée, serait-t-elle encore au téléphone avec sa belle mère ?`,
            n: (e) => `La réponse de ${e.name} semble abrégée, serait-t-iel encore au téléphone avec sa belle mère ?`,
          },{
            m: (e) => `Le pauvre vocabulaire utilisé par ${e.name} est décevant, est-il en manque d’inspiration ?`,
            f: (e) => `Le pauvre vocabulaire utilisé par ${e.name} est décevant, est-elle en manque d’inspiration ?`,
            n: (e) => `Le pauvre vocabulaire utilisé par ${e.name} est décevant, est-iel en manque d’inspiration ?`,
          },{
            m: (e) => `Cette simple réponse laisse transparaitre un manque d’éloquence de la part de ${e.name}.`,
            f: (e) => `Cette simple réponse laisse transparaitre un manque d’éloquence de la part de ${e.name}.`,
            n: (e) => `Cette simple réponse laisse transparaitre un manque d’éloquence de la part de ${e.name}.`,
          },{
            m: (e) => `Voici une réplique bien fugace de ${e.name}, il est inutile de tergiverser quand quelqu'un regarde au-dessus de son épaule.`,
            f: (e) => `Voici une réplique bien fugace de ${e.name}, il est inutile de tergiverser quand quelqu'un regarde au-dessus de son épaule.`,
            n: (e) => `Voici une réplique bien fugace de ${e.name}, il est inutile de tergiverser quand quelqu'un regarde au-dessus de son épaule.`,
          },{
            m: (e) => `${e.name} reste brève, il n’a pas de temps à perdre face à la tonne de notifications Instagram qui l'appellent.`,
            f: (e) => `${e.name} reste brève, elle n’a pas de temps à perdre face à la tonne de notifications Instagram qui l'appellent.`,
            n: (e) => `${e.name} reste brève, iel n'a pas de temps à perdre face à la tonne de notifications Instagram qui l'appellent.`,
          },{
            m: (e) => `${e.name} souhaite-il écourter la discussion ? Son bref message laisse planer le doute… Il pense à son prochain saut en parachute.`,
            f: (e) => `${e.name} souhaite-elle écourter la discussion ? Son bref message laisse planer le doute… Elle pense à son prochain saut en parachute.`,
            n: (e) => `${e.name} souhaite-iel écourter la discussion ? Son bref message laisse planer le doute… Iel pense à son prochain saut en parachute.`,
          },{
            m: (e) => `La conversation n’ayant pas grand intérêt, ${e.name} se contente de s’exprimer de manière synthétique.`,
            f: (e) => `La conversation n’ayant pas grand intérêt, ${e.name} se contente de s’exprimer de manière synthétique.`,
            n: (e) => `La conversation n’ayant pas grand intérêt, ${e.name} se contente de s’exprimer de manière synthétique.`,
          },{
            m: (e) => `Expéditif dans ses dires tandis qu’il pense à la tonne de vaisselle qui l'attend, ${e.name} répond abruptement.`,
            f: (e) => `Expéditive dans ses dires tandis qu’elle pense à la tonne de vaisselle qui l'attend, ${e.name} répond abruptement.`,
            n: (e) => `Expéditivex dans ses dires tandis qu’iel pense à la tonne de vaisselle qui l'attend, ${e.name} répond abruptement.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `Expéditive dans ses dires tandis qu’il fait la vaisselle, ${e.name} répond abruptement.`,
            f: (e) => `Expéditive dans ses dires tandis qu’elle fait la vaisselle, ${e.name} répond abruptement.`,
            n: (e) => `Expéditive dans ses dires tandis qu’il fait la vaisselle, ${e.name} répond abruptement.`,
          }],
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `Plus que concentré, ${e.name} prend le temps de rédiger des messages consistants.`,
            f: (e) => `Plus que concentrée, ${e.name} prend le temps de rédiger des messages consistants.`,
            n: (e) => `Plus que concentréx, ${e.name} prend le temps de rédiger des messages consistants.`,
          },{
            m: (e) => `D’excellente humeur, ${e.name} s’emballe pour décrire sa journée.`,
            f: (e) => `D’excellente humeur, ${e.name} s’emballe pour décrire sa journée.`,
            n: (e) => `D’excellente humeur, ${e.name} s’emballe pour décrire sa journée.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
      },
    },
    erase:{
      level1: {
        positive: {
          case1: [],
          case2: [],
          case3: [{
            m: (e) => `${e.name} répond après avoir corrigé son texte ${e.outputValue} fois.`,
            f: (e) => `${e.name} répond après avoir corrigé son texte ${e.outputValue} fois.`,
            n: (e) => `${e.name} répond après avoir corrigé son texte ${e.outputValue} fois.`,
          },{
            m: (e) => `L’échange se poursuit après ${e.outputValue} corrections.`,
            f: (e) => `L’échange se poursuit après ${e.outputValue} corrections.`,
            n: (e) => `L’échange se poursuit après ${e.outputValue} corrections.`,
          },{
            m: (e) => `Cette fois-ci, ${e.name} effectue ${e.outputValue} changements avant d’envoyer son message.`,
            f: (e) => `Cette fois-ci, ${e.name} effectue ${e.outputValue} changements avant d’envoyer son message.`,
            n: (e) => `Cette fois-ci, ${e.name} effectue ${e.outputValue} changements avant d’envoyer son message.`,
          },{
            m: (e) => `${e.name} utilise la touche delete ${e.outputValue} fois pour poursuivre la discussion.`,
            f: (e) => `${e.name} utilise la touche delete ${e.outputValue} fois pour poursuivre la discussion.`,
            n: (e) => `${e.name} utilise la touche delete ${e.outputValue} fois pour poursuivre la discussion.`,
          },{
            m: (e) => `Avant de faire parvenir sa réponse, ${e.name} efface ${e.outputValue} caractères.`,
            f: (e) => `Avant de faire parvenir sa réponse, ${e.name} efface ${e.outputValue} caractères.`,
            n: (e) => `Avant de faire parvenir sa réponse, ${e.name} efface ${e.outputValue} caractères.`,
          },{
            m: (e) => `L’échange continue, ${e.outputValue} corrections plus tard.`,
            f: (e) => `L’échange continue, ${e.outputValue} corrections plus tard.`,
            n: (e) => `L’échange continue, ${e.outputValue} corrections plus tard.`,
          },{
            m: (e) => `${e.outputValue} modifications plus tard, ${e.name} donne une réponse.`,
            f: (e) => `${e.outputValue} modifications plus tard, ${e.name} donne une réponse.`,
            n: (e) => `${e.outputValue} modifications plus tard, ${e.name} donne une réponse.`,
          },{
            m: (e) => `${e.name} envoie son message, après avoir recouru ${e.outputValue} fois à la touche delete.`,
            f: (e) => `${e.name} envoie son message, après avoir recouru ${e.outputValue} fois à la touche delete.`,
            n: (e) => `${e.name} envoie son message, après avoir recouru ${e.outputValue} fois à la touche delete.`,
          },{
            m: (e) => `${e.name} effectue quelques corrections avant de faire parvenir sa réponse.`,
            f: (e) => `${e.name} effectue quelques corrections avant de faire parvenir sa réponse.`,
            n: (e) => `${e.name} effectue quelques corrections avant de faire parvenir sa réponse.`,
          },{
            m: (e) => `${e.name} supprime ${e.outputValue} caractères.`,
            f: (e) => `${e.name} supprime ${e.outputValue} caractères.`,
            n: (e) => `${e.name} supprime ${e.outputValue} caractères.`,
          },{
            m: (e) => `${e.name} revient sur son texte ${e.outputValue} fois.`,
            f: (e) => `${e.name} revient sur son texte ${e.outputValue} fois.`,
            n: (e) => `${e.name} revient sur son texte ${e.outputValue} fois.`,
          }],
          case4: [],
          case5: [],
        },
        negative: {
          case1: [],
          case2: [],
          case3: [],
          case4: [],
          case5: [],
        },
      },
      level2: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} montre une véritable dextérité en commettant peu d’erreur.`,
            f: (e) => `${e.name} montre une véritable dextérité en commettant peu d’erreur.`,
            n: (e) => `${e.name} montre une véritable dextérité en commettant peu d’erreur.`,
          },{
            m: (e) => `La justesse du message de ${e.name} est surprenante. Le smoothie detox qu’il a consommé doit le maintenir bien éveillé.`,
            f: (e) => `La justesse du message de ${e.name} est surprenante. Le smoothie detox qu’elle a consommé doit la maintenir bien éveillée.`,
            n: (e) => `La justesse du message de ${e.name} est surprenante. Le smoothie detox qu’iel a consommé doit lea maintenir bien éveilléx.`,
          },{
            m: (e) => `Le jogging de ce matin permet à ${e.name} d’avoir l'esprit frais et dispo, ne commettant presque aucune erreur.`,
            f: (e) => `Le jogging de ce matin permet à ${e.name} d’avoir l'esprit frais et dispo, ne commettant presque aucune erreur.`,
            n: (e) => `Le jogging de ce matin permet à ${e.name} d’avoir l'esprit frais et dispo, ne commettant presque aucune erreur.`,
          },{
            m: (e) => `L’auto-correcteur est le meilleur ami de ${e.name}, ce qui limite les erreurs.`,
            f: (e) => `L’auto-correcteur est le meilleur ami de ${e.name}, ce qui limite les erreurs.`,
            n: (e) => `L’auto-correcteur est le meilleur ami de ${e.name}, ce qui limite les erreurs.`,
          },{
            m: (e) => `${e.name} revient sur ses dires ${e.outputValue} fois.`,
            f: (e) => `${e.name} revient sur ses dires ${e.outputValue} fois.`,
            n: (e) => `${e.name} revient sur ses dires ${e.outputValue} fois.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [],
          case3: [{
            m: (e) => `${e.name} apprécie ce moment et se donne du mal pour s’exprimer clairement.`,
            f: (e) => `${e.name} apprécie ce moment et se donne du mal pour s’exprimer clairement.`,
            n: (e) => `${e.name} apprécie ce moment et se donne du mal pour s’exprimer clairement.`,
          },{
            m: (e) => `${e.name} prend la peine de bien choisir ses mots et n’hésite pas à revenir plusieurs fois sur ses dires.`,
            f: (e) => `${e.name} prend la peine de bien choisir ses mots et n’hésite pas à revenir plusieurs fois sur ses dires.`,
            n: (e) => `${e.name} prend la peine de bien choisir ses mots et n’hésite pas à revenir plusieurs fois sur ses dires.`,
          },{
            m: (e) => `L'hésitation s'empare de ${e.name}.`,
            f: (e) => `L'hésitation s'empare de ${e.name}.`,
            n: (e) => `L'hésitation s'empare de ${e.name}.`,
          },{
            m: (e) => `Après avoir enfin trouvé ses mots, ${e.name} trouve le courage de s'exprimer.`,
            f: (e) => `Après avoir enfin trouvé ses mots, ${e.name} trouve le courage de s'exprimer.`,
            n: (e) => `Après avoir enfin trouvé ses mots, ${e.name} trouve le courage de s'exprimer.`,
          }],
          case4: [ {
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
      },
      level3: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          },{
            m: (e) => `${e.name} semble n’apporter que peu d’importance à la syntaxe de sa phrase, est-ce par ce froid ambiant qui congèle ses mains ?`,
            f: (e) => `${e.name} semble n’apporter que peu d’importance à la syntaxe de sa phrase, est-ce par ce froid ambiant qui congèle ses mains ?`,
            n: (e) => `${e.name} semble n’apporter que peu d’importance à la syntaxe de sa phrase, est-ce par ce froid ambiant qui congèle ses mains ?`,
        }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} semble vouloir partager ses pensées les plus profondes.`,
            f: (e) => `${e.name} semble vouloir partager ses pensées les plus profondes.`,
            n: (e) => `${e.name} semble vouloir partager ses pensées les plus profondes.`,
          },{
            m: (e) => `${e.name} semble n’apporter que peu d’importance à la syntaxe de sa phrase, est-ce par cette chaleur ambiante qui fait suer ses mains ?`,
            f: (e) => `${e.name} semble n’apporter que peu d’importance à la syntaxe de sa phrase, est-ce par cette chaleur ambiante qui fait suer ses mains ?`,
            n: (e) => `${e.name} semble n’apporter que peu d’importance à la syntaxe de sa phrase, est-ce par cette chaleur ambiante qui fait suer ses mains ?`,
          },{
            m: (e) => `${e.name} envoie son texte d’une traite, sans presque aucune correction, sa coupe de cheveux lui donne probablement de l’assurance.`,
            f: (e) => `${e.name} envoie son texte d’une traite, sans presque aucune correction, sa coupe de cheveux lui donne probablement de l’assurance.`,
            n: (e) => `${e.name} envoie son texte d’une traite, sans presque aucune correction, sa coupe de cheveux lui donne probablement de l’assurance.`,
          },{
            m: (e) => `Le peu d’erreurs commises par ${e.name} laissent transparaître une précision minutieuse, une bonne nuit de sommeil est toujours réparatrice.`,
            f: (e) => `Le peu d’erreurs commises par ${e.name} laissent transparaître une précision minutieuse, une bonne nuit de sommeil est toujours réparatrice.`,
            n: (e) => `Le peu d’erreurs commises par ${e.name} laissent transparaître une précision minutieuse, une bonne nuit de sommeil est toujours réparatrice.`,
          },{
            m: (e) => `Une flemme assez probable habite ${e.name}, qui ne revient pas sur son message avant de l'envoyer.`,
            f: (e) => `Une flemme assez probable habite ${e.name}, qui ne revient pas sur son message avant de l'envoyer.`,
            n: (e) => `Une flemme assez probable habite ${e.name}, qui ne revient pas sur son message avant de l'envoyer.`,
          },],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} se montre hésitant et a l’air troublé.`,
            f: (e) => `${e.name} se montre hésitante et a l’air troublée.`,
            n: (e) => `${e.name} se montre hésitantx et a l’air troubléx.`,
          },{
            m: (e) => `${e.name} paraît indécis et change sans cesse d’avis. La conversation avec ${e.contact} semble lui faire de l’effet.`,
            f: (e) => `${e.name} paraît indécise et change sans cesse d’avis. La conversation avec ${e.contact} semble lui faire de l’effet.`,
            n: (e) => `${e.name} paraît indécisx et change sans cesse d’avis. La conversation avec ${e.contact} semble lui faire de l’effet.`,
          },{
            m: (e) => `${e.name} peine à écrire, la cuite d’hier continue d’embrouiller ses pensées.`,
            f: (e) => `${e.name} peine à écrire, la cuite d’hier continue d’embrouiller ses pensées.`,
            n: (e) => `${e.name} peine à écrire, la cuite d’hier continue d’embrouiller ses pensées.`,
          },{
            m: (e) => `${e.name} ne voit plus son écran, le verre de trop doit lui monter à la tête.`,
            f: (e) => `${e.name} ne voit plus son écran, le verre de trop doit lui monter à la tête.`,
            n: (e) => `${e.name} ne voit plus son écran, le verre de trop doit lui monter à la tête.`,
          },{
            m: (e) => `${e.name} manque de précision. Probablement à cause de la fissure qui traverse son écran.`,
            f: (e) => `${e.name} manque de précision. Probablement à cause de la fissure qui traverse son écran.`,
            n: (e) => `${e.name} manque de précision. Probablement à cause de la fissure qui traverse son écran.`,
          },{
            m: (e) => `Par cette pluie, trempé, l’écran de ${e.name} ne réagit plus très bien.`,
            f: (e) => `Par cette pluie, trempé, l’écran de ${e.name} ne réagit plus très bien.`,
            n: (e) => `Par cette pluie, trempé, l’écran de ${e.name} ne réagit plus très bien.`,
          },{
            m: (e) => `${e.name} ne paraît par vraiment concentré, il est sûrement en train de s'activer à une autre tâche plus importante.`,
            f: (e) => `${e.name} ne paraît par vraiment concentrée, elle est sûrement en train de s'activer à une autre tâche plus importante.`,
            n: (e) => `${e.name} ne paraît par vraiment concentréx, iel est sûrement en train de s'activer à une autre tâche plus importante.`,
          },{
            m: (e) => `${e.name} paraît hésitant et semble avoir des difficultés à exprimer ses sentiments.`,
            f: (e) => `${e.name} paraît hésitante et semble avoir des difficultés à exprimer ses sentiments.`,
            n: (e) => `${e.name} paraît hésitantx et semble avoir des difficultés à exprimer ses sentiments.`,
          },{
            m: (e) => `${e.name} semble frustré par les évènements du jour et répond de manière confuse.`,
            f: (e) => `${e.name} semble frustrée par les évènements du jour et répond de manière confuse.`,
            n: (e) => `${e.name} semble frustréx par les évènements du jour et répond de manière confuse.`,
          },{
            m: (e) => `${e.name} hésite, et semble déçu par la dernière réplique.`,
            f: (e) => `${e.name} hésite, et semble déçue par la dernière réplique.`,
            n: (e) => `${e.name} hésite, et semble déçux par la dernière réplique.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
      },
      level4: {
        positive: {
          case1: [{
            m: (e) => `Sans faire attention à son orthographe, ${e.name} doit s’empresser de secourir un chaton coincé en hauteur.`,
            f: (e) => `Sans faire attention à son orthographe, ${e.name} doit s’empresser de secourir un chaton coincé en hauteur.`,
            n: (e) => `Sans faire attention à son orthographe, ${e.name} doit s’empresser de secourir un chaton coincé en hauteur.`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} se montre confiant et a très sûr de lui.`,
            f: (e) => `${e.name} se montre confiante et a très sure d'elle.`,
            n: (e) => `${e.name} se montre confiantx et a très sur d'elui.`,
          },{
            m: (e) => `${e.name} paraît déterminé et se montre précis dans ses propos.`,
            f: (e) => `${e.name} paraît déterminée et se montre précise dans ses propos.`,
            n: (e) => `${e.name} paraît déterminéx et se montre précisex dans ses propos.`,
          },{
            m: (e) => `${e.name} paraît guilleret, enfin remis de sa cuite du weekend dernier.`,
            f: (e) => `${e.name} paraît guillerette, enfin remis de sa cuite du weekend dernier.`,
            n: (e) => `${e.name} paraît guilleretx, enfin remis de sa cuite du weekend dernier.`,
          },{
            m: (e) => `${e.name} a finalement réparé son écran et peu à nouveau s'exprimer de manière exacte.`,
            f: (e) => `${e.name} a finalement réparé son écran et peu à nouveau s'exprimer de manière exacte.`,
            n: (e) => `${e.name} a finalement réparé son écran et peu à nouveau s'exprimer de manière exacte.`,
          },{
            m: (e) => `L'excitation se fait ressentir chez ${e.name}. Il montre une habileté sans faille.`,
            f: (e) => `L'excitation se fait ressentir chez ${e.name}. Elle montre une habileté sans faille.`,
            n: (e) => `L'excitation se fait ressentir chez ${e.name}. Iel montre une habileté sans faille.`,
          },{
            m: (e) => `${e.name} paraît concentré, il est sûrement en train de réfléchir au sens profond de la relation qu'il entretient avec ${e.contact}.`,
            f: (e) => `${e.name} paraît concentrée, elle est sûrement en train de réfléchir au sens profond de la relation qu'elle entretient avec ${e.contact}.`,
            n: (e) => `${e.name} paraît concentréx, iel est sûrement en train de réfléchir au sens profond de la relation qu'iel entretient avec ${e.contact}.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [  {
            m: (e) => `Le doute prend ${e.name} qui s'empresse de se reprendre.`,
            f: (e) => `Le doute prend ${e.name} qui s'empresse de se reprendre.`,
            n: (e) => `Le doute prend ${e.name} qui s'empresse de se reprendre.`,
          },{
            m: (e) => `L’échange continue, même si ${e.name} semble peu sûr de lui.`,
            f: (e) => `L’échange continue, même si ${e.name} semble peu sure d'elle.`,
            n: (e) => `L’échange continue, même si ${e.name} semble peu sûr d'ellui.`,
          },{
            m: (e) => `Une fois son message envoyé, ${e.name} a soudainement besoin de s'aérer l'esprit.`,
            f: (e) => `Une fois son message envoyé, ${e.name} a soudainement besoin de s'aérer l'esprit.`,
            n: (e) => `Une fois son message envoyé, ${e.name} a soudainement besoin de s'aérer l'esprit.`,
            },{
            m: (e) => `${e.name} semble fatigué et se montre indécis.`,
            f: (e) => `${e.name} semble fatigué et se montre indécise.`,
            n: (e) => `${e.name} semble fatigué et se montre indécisx.`,
            },{
            m: (e) => `L'excitation se fait ressentir chez ${e.name}. Il n'est pas capable de s'exprimer sans bafouiller.`,
            f: (e) => `L'excitation se fait ressentir chez ${e.name}. Il n'est pas capable de s'exprimer sans bafouiller.`,
            n: (e) => `L'excitation se fait ressentir chez ${e.name}. Il n'est pas capable de s'exprimer sans bafouiller.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
      },
    },
    time:{
      level1: {
        positive: {
          case1: [],
          case2: [],
          case3: [{
            m: (e) => `${e.name} répond en ${e.outputValue}.`,
            f: (e) => `${e.name} répond en ${e.outputValue}.`,
            n: (e) => `${e.name} répond en ${e.outputValue}.`,
          },{
            m: (e) => `${e.outputValue} passent entre les deux derniers messages.`,
            f: (e) => `${e.outputValue} passent entre les deux derniers messages.`,
            n: (e) => `${e.outputValue} passent entre les deux derniers messages.`,
          },{
            m: (e) => `${e.outputValue} s’écoulent avant de poursuivre l’échange.`,
            f: (e) => `${e.outputValue} s’écoulent avant de poursuivre l’échange.`,
            n: (e) => `${e.outputValue} s’écoulent avant de poursuivre l’échange.`,
          },{
            m: (e) => `La réplique parvient ${e.outputValue} plus tard.`,
            f: (e) => `La réplique parvient ${e.outputValue} plus tard.`,
            n: (e) => `La réplique parvient ${e.outputValue} plus tard.`,
          },{
            m: (e) => `${e.outputValue} plus tard, ${e.name} poursuit la conversation.`,
            f: (e) => `${e.outputValue} plus tard, ${e.name} poursuit la conversation.`,
            n: (e) => `${e.outputValue} plus tard, ${e.name} poursuit la conversation.`,
          },{
            m: (e) => `L’échange continue ${e.outputValue} plus tard.`,
            f: (e) => `L’échange continue ${e.outputValue} plus tard.`,
            n: (e) => `L’échange continue ${e.outputValue} plus tard.`,
          },{
            m: (e) => `${e.name} se manifeste ${e.outputValue} après.`,
            f: (e) => `${e.name} se manifeste ${e.outputValue} après.`,
            n: (e) => `${e.name} se manifeste ${e.outputValue} après.`,
          },{
            m: (e) => `${e.name} communique sa réaction ${e.outputValue} après la dernière réplique`,
            f: (e) => `${e.name} communique sa réaction ${e.outputValue} après la dernière réplique.`,
            n: (e) => `${e.name} communique sa réaction ${e.outputValue} après la dernière réplique`,
          },{
            m: (e) => `La discussion se poursuit ${e.outputValue} plus tard.`,
            f: (e) => `La discussion se poursuit ${e.outputValue} plus tard.`,
            n: (e) => `La discussion se poursuit ${e.outputValue} plus tard.`,
          },{
            m: (e) => `${e.name} réplique après ${e.outputValue}.`,
            f: (e) => `${e.name} réplique après ${e.outputValue}.`,
            n: (e) => `${e.name} réplique après ${e.outputValue}.`,
          },{
            m: (e) => `Après ${e.outputValue}, ${e.name} continue la discussion.`,
            f: (e) => `Après ${e.outputValue}, ${e.name} continue la discussion.`,
            n: (e) => `Après ${e.outputValue}, ${e.name} continue la discussion.`,
          },{
            m: (e) => `Durant ${e.outputValue}, l’échange s’interrompt, avant que ${e.name} ne réponde.`,
            f: (e) => `Durant ${e.outputValue}, l’échange s’interrompt, avant que ${e.name} ne réponde.`,
            n: (e) => `Durant ${e.outputValue}, l’échange s’interrompt, avant que ${e.name} ne réponde.`,
          },{
            m: (e) => `Au bout de ${e.outputValue}, ${e.name} renvoie un nouveau propos.`,
            f: (e) => `Au bout de ${e.outputValue}, ${e.name} renvoie un nouveau propos.`,
            n: (e) => `Au bout de ${e.outputValue}, ${e.name} renvoie un nouveau propos.`,
          }],
          case4:[],
          case5:[]
        },
        negative: {
          //jamais de negative
          case1: [],
          case2: [],
          case3: [],
          case4: [],
          case5: []
        },
      },
      level2: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `L’attention de ${e.name} semble entièrement focalisé sur l’échange, il répond hâtivement.`,
            f: (e) => `L’attention de ${e.name} semble entièrement focalisée sur l’échange, elle répond hâtivement.`,
            n: (e) => `L’attention de ${e.name} semble entièrement focaliséx sur l’échange, iel répond hâtivement.`,
          },{
            m: (e) => `${e.name} attend seulement ${e.outputValue} avant de répliquer`,
            f: (e) => `${e.name} attend seulement ${e.outputValue} avant de répliquer`,
            n: (e) => `${e.name} attend seulement ${e.outputValue} avant de répliquer`,
          },{
            m: (e) => `Durant ${e.outputValue}, l’échange s’interrompt, avant que ${e.name} ne réponde.`,
            f: (e) => `Durant ${e.outputValue}, l’échange s’interrompt, avant que ${e.name} ne réponde.`,
            n: (e) => `Durant ${e.outputValue}, l’échange s’interrompt, avant que ${e.name} ne réponde.`,
          },{
            m: (e) => `${e.name} a l'air de se dandiner sur place.`,
            f: (e) => `${e.name} a l'air de se dandiner sur place.`,
            n: (e) => `${e.name} a l'air de se dandiner sur place.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [ {
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          } ],
          case3: [{
            m: (e) => `${e.name} semble avoir eu une coupure de réseau.`,
            f: (e) => `${e.name} semble avoir eu une coupure de réseau.`,
            n: (e) => `${e.name} semble avoir eu une coupure de réseau.`,
          },{
            m: (e) => `${e.name} paraît manquer de réseau. S’agit-il d’un abonnement bon marché ?`,
            f: (e) => `${e.name} paraît manquer de réseau. S’agit-il d’un abonnement bon marché ?`,
            n: (e) => `${e.name} paraît manquer de réseau. S’agit-il d’un abonnement bon marché ?`,
          },{
            m: (e) => `La sieste de ${e.name} a du se prolonger.`,
            f: (e) => `La sieste de ${e.name} a du se prolonger.`,
            n: (e) => `La sieste de ${e.name} a du se prolonger.`,
          },{
            m: (e) => `Overbooké, ${e.name} passe son temps avec ses amis.`,
            f: (e) => `Overbookée, ${e.name} passe son temps avec ses amis.`,
            n: (e) => `Overbookéx, ${e.name} passe son temps avec ses amis.`,
          },{
            m: (e) => `${e.name} s’est peut être fait voler son téléphone. Il en a un nouveau.`,
            f: (e) => `${e.name} s’est peut être fait voler son téléphone. Elle en a un nouveau.`,
            n: (e) => `${e.name} s’est peut être fait voler son téléphone. Iel en a un nouveau.`,
          },{
            m: (e) => `${e.name} se montre timide mais rassemble finalement son courage pour écrire.`,
            f: (e) => `${e.name} se montre timide mais rassemble finalement son courage pour écrire.`,
            n: (e) => `${e.name} se montre timide mais rassemble finalement son courage pour écrire.`,
          },{
            m: (e) => `${e.name} prend son temps pour répondre. Y a-t-il un message entre les lignes à faire passer à ${e.contact} ?`,
            f: (e) => `${e.name} prend son temps pour répondre. Y a-t-il un message entre les lignes à faire passer à ${e.contact} ?`,
            n: (e) => `${e.name} prend son temps pour répondre. Y a-t-il un message entre les lignes à faire passer à ${e.contact} ?`,
          },{
            m: (e) => `${e.name} prend le temps de relire tous ses mots avant d'envoyer.`,
            f: (e) => `${e.name} prend le temps de relire tous ses mots avant d'envoyer.`,
            n: (e) => `${e.name} prend le temps de relire tous ses mots avant d'envoyer.`,
          },{
            m: (e) => `Malgré sa vie bien remplie, ${e.name} prend le temps de répondre.`,
            f: (e) => `Malgré sa vie bien remplie, ${e.name} prend le temps de répondre.`,
            n: (e) => `Malgré sa vie bien remplie, ${e.name} prend le temps de répondre.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
      },
      level3: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `Probablement ennuyé par son trajet, ${e.name} s’échappe grâce aux merveilleuses choses qu’il échange avec ${e.contact}.`,
            f: (e) => `Probablement ennuyé par son trajet, ${e.name} s’échappe grâce aux merveilleuses choses qu’elle échange avec ${e.contact}.`,
            n: (e) => `Probablement ennuyé par son trajet, ${e.name} s’échappe grâce aux merveilleuses choses qu’iel échange avec ${e.contact}.`,
          }],
          case3: [{
            m: (e) => `Les messages s’enchaînent en peu de temps, ${e.name} doit apprécier cet échange !`,
            f: (e) => `Les messages s’enchaînent en peu de temps, ${e.name} doit apprécier cet échange !`,
            n: (e) => `Les messages s’enchaînent en peu de temps, ${e.name} doit apprécier cet échange !`,
          },{
            m: (e) => `${e.name} et ${e.contact} semblent bien s’entendre, les messages fusent.`,
            f: (e) => `${e.name} et ${e.contact} semblent bien s’entendre, les messages fusent.`,
            n: (e) => `${e.name} et ${e.contact} semblent bien s’entendre, les messages fusent.`,
          },{
            m: (e) => `Rapide et efficace, ${e.name} a plein de choses à faire aujourd’hui et enchaîne les tâches.`,
            f: (e) => `Rapide et efficace, ${e.name} a plein de choses à faire aujourd’hui et enchaîne les tâches.`,
            n: (e) => `Rapide et efficace, ${e.name} a plein de choses à faire aujourd’hui et enchaîne les tâches.`,
          },{
            m: (e) => `${e.name} cherche une distraction en s’attachant à la discussion.`,
            f: (e) => `${e.name} cherche une distraction en s’attachant à la discussion.`,
            n: (e) => `${e.name} cherche une distraction en s’attachant à la discussion.`,
          },{
            m: (e) => `${e.name} se réfugie sur son téléphone pour évacuer le stress qu’il éprouve dans son entourage bruyant.`,
            f: (e) => `${e.name} se réfugie sur son téléphone pour évacuer le stress qu’elle éprouve dans son entourage bruyant.`,
            n: (e) => `${e.name} se réfugie sur son téléphone pour évacuer le stress qu’iel éprouve dans son entourage bruyant.`,
          },{
            m: (e) => `Le temps déprimant du jour conduit ${e.name} à se réfugier dans la conversation.`,
            f: (e) => `Le temps déprimant du jour conduit ${e.name} à se réfugier dans la conversation.`,
            n: (e) => `Le temps déprimant du jour conduit ${e.name} à se réfugier dans la conversation.`,
          },{
            m: (e) => `Empressé, ${e.name} semble excité par l’échange.`,
            f: (e) => `Empressée, ${e.name} semble excitée par l’échange.`,
            n: (e) => `Empresséx, ${e.name} semble excitéx par l’échange.`,
          },{
            m: (e) => `La conversation paraît fluide, ${e.name} semble trouver un sens à sa journée.`,
            f: (e) => `La conversation paraît fluide, ${e.name} semble trouver un sens à sa journée.`,
            n: (e) => `La conversation paraît fluide, ${e.name} semble trouver un sens à sa journée.`,
          },{
            m: (e) => `${e.name} répond à la vitesse de l’éclair, il parait réellement passer du bon temps.`,
            f: (e) => `${e.name} répond à la vitesse de l’éclair, elle parait réellement passer du bon temps.`,
            n: (e) => `${e.name} répond à la vitesse de l’éclair, iel parait réellement passer du bon temps.`,
          },{
            m: (e) => `La passion de l’échange se constate, ${e.name} s’empresse de répliquer.`,
            f: (e) => `La passion de l’échange se constate, ${e.name} s’empresse de répliquer.`,
            n: (e) => `La passion de l’échange se constate, ${e.name} s’empresse de répliquer.`,
          },{
            m: (e) => `Rien ne semble l’interrompre, ${e.name} a l’air de rayonner lorsqu’il écrit.`,
            f: (e) => `Rien ne semble l’interrompre, ${e.name} a l’air de rayonner lorsqu’elle écrit.`,
            n: (e) => `Rien ne semble l’interrompre, ${e.name} a l’air de rayonner lorsqu’iel écrit.`,
          },{
            m: (e) => `${e.name} a l’air de passer du bon temps, il ne lâche plus son téléphone !`,
            f: (e) => `${e.name} a l’air de passer du bon temps, elle ne lâche plus son téléphone !`,
            n: (e) => `${e.name} a l’air de passer du bon temps, iel ne lâche plus son téléphone !`,
          },{
            m: (e) => `${e.name} se réjouit de l'échange, il attend probablement une réponse croustillante !`,
            f: (e) => `${e.name} se réjouit de l'échange, elle attend probablement une réponse croustillante !`,
            n: (e) => `${e.name} se réjouit de l'échange, iel attend probablement une réponse croustillante !`,
          },{
            m: (e) => `Puisque ${e.name} s'ennuie, un soudain entrain le prend lorsqu'il discute avec ${e.contact}.`,
            f: (e) => `Puisque ${e.name} s'ennuie, un soudain entrain le prend lorsqu'elle discute avec ${e.contact}.`,
            n: (e) => `Puisque ${e.name} s'ennuie, un soudain entrain le prend lorsqu'iel discute avec ${e.contact}.`,
          }],
          case4:[,{
            m: (e) => `Probablement au fond de son canapé, ${e.name} a l’air de s’ennuyer et profite de passer du temps sur cette conversation.`,
            f: (e) => `Probablement au fond de son canapé, ${e.name} a l’air de s’ennuyer et profite de passer du temps sur cette conversation.`,
            n: (e) => `Probablement au fond de son canapé, ${e.name} a l’air de s’ennuyer et profite de passer du temps sur cette conversation.`,
          },],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          },{
            f: (e) => `Après ${e.outputValue} de vol, l'avion de ${e.name} atterrit enfin. Il peut finalement réactiver ses données cellulaires.`,
            f: (e) => `Après ${e.outputValue} de vol, l'avion de ${e.name} atterrit enfin. elle peut finalement réactiver ses données cellulaires.`,
            n: (e) => `Après ${e.outputValue} de vol, l'avion de ${e.name} atterrit enfin. Iel peut finalement réactiver ses données cellulaires.`,
            }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} doit se remettre de sa cuite d'hier avant d’enfin répondre.`,
            f: (e) => `${e.name} doit se remettre de sa cuite d'hier avant d’enfin répondre.`,
            n: (e) => `${e.name} doit se remettre de sa cuite d'hier avant d’enfin répondre.`,
          },{
            m: (e) => `${e.name} a plein de choses à faire et profite d’un moment pour répondre. Il a probablement enfin terminé la dernière saison de Game of Thrones.`,
            f: (e) => `${e.name} a plein de choses à faire et profite d’un moment pour répondre. Elle a probablement enfin terminé la dernière saison de Game of Thrones.`,
            n: (e) => `${e.name} a plein de choses à faire et profite d’un moment pour répondre. Iel a probablement enfin terminé la dernière saison de Game of Thrones.`,
          },{
            m: (e) => `Après avoir remis en question le sens de la vie, ${e.name} se décide à envoyer un message.`,
            f: (e) => `Après avoir remis en question le sens de la vie, ${e.name} se décide à envoyer un message.`,
            n: (e) => `Après avoir remis en question le sens de la vie, ${e.name} se décide à envoyer un message.`,
          },  {
            m: (e) => `Faisant une pause dans sa lecture, ${e.name} attrape son téléphone.`,
            f: (e) => `Faisant une pause dans sa lecture, ${e.name} attrape son téléphone.`,
            n: (e) => `Faisant une pause dans sa lecture, ${e.name} attrape son téléphone.`,
          },{
            m: (e) => `La conversation ne plaît peut-être pas tant à ${e.name}.`,
            f: (e) => `La conversation ne plaît peut-être pas tant à ${e.name}.`,
            n: (e) => `La conversation ne plaît peut-être pas tant à ${e.name}.`,
          },{
            m: (e) => `${e.name} se manifeste finalement ${e.outputValue} plus tard.`,
            f: (e) => `${e.name} se manifeste finalement ${e.outputValue} plus tard.`,
            n: (e) => `${e.name} se manifeste finalement ${e.outputValue} plus tard.`,
          },{
            m: (e) => `${e.name} aperçoit un papillon et hésite à lui courir après, mais il se tourne finalement vers ${e.contact}.`,
            f: (e) => `${e.name} aperçoit un papillon et hésite à lui courir après, mais elle se tourne finalement vers ${e.contact}.`,
            n: (e) => `${e.name} aperçoit un papillon et hésite à lui courir après, mais iel se tourne finalement vers ${e.contact}.`,
            }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
      },
      level4: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [  {
            m: (e) => `${e.name} ne veut pas laisser le temps à ${e.contact} de répondre.`,
            f: (e) => `${e.name} ne veut pas laisser le temps à ${e.contact} de répondre.`,
            n: (e) => `${e.name} ne veut pas laisser le temps à ${e.contact} de répondre.`,
          },{
            m: (e) => `${e.name} se synchronise à l’échange, y a-t-il des sentiments dans l’air?`,
            f: (e) => `${e.name} se synchronise à l’échange, y a-t-il des sentiments dans l’air?`,
            n: (e) => `${e.name} se synchronise à l’échange, y a-t-il des sentiments dans l’air?`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [  {
            m: (e) => `Maintenant que ${e.name} a fini de bouder, il se décide à répondre.`,
            f: (e) => `Maintenant que ${e.name} a fini de bouder, elle se décide à répondre.`,
            n: (e) => `Maintenant que ${e.name} a fini de bouder, iel se décide à répondre.`,
          },{
            m: (e) => `Une crise existentielle prend ${e.name} aux tripes.`,
            f: (e) => `Une crise existentielle prend ${e.name} aux tripes.`,
            n: (e) => `Une crise existentielle prend ${e.name} aux tripes.`,
          },{
            m: (e) => `${e.name} réalise soudainement que son porte-monnaie a disparu, mais réalise aussitôt qu'il se trouve dans une petite poche de sa veste.`,
            f: (e) => `${e.name} réalise soudainement que son porte-monnaie a disparu, mais réalise aussitôt qu'il se trouve dans une petite poche de sa veste.`,
            n: (e) => `${e.name} réalise soudainement que son porte-monnaie a disparu, mais réalise aussitôt qu'il se trouve dans une petite poche de sa veste.`,
            },{
              m: (e) => `Manquant de sucre pour son café, ${e.name} va sonner chez sa vieille voisine. Il passera ${e.outputValue} à boire le thé avec elle. Il rentrera finalement chez lui, oubliant de prendre le sucre.`,
              f: (e) => `Manquant de sucre pour son café, ${e.name} va sonner chez sa vieille voisine. Elle passera ${e.outputValue} à boire le thé avec elle. Elle rentrera finalement chez lui, oubliant de prendre le sucre.`,
              n: (e) => `Manquant de sucre pour son café, ${e.name} va sonner chez sa vieille voisine. Iel passera ${e.outputValue} à boire le thé avec elle. Iel rentrera finalement chez lui, oubliant de prendre le sucre.`,
              }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
      },
    },
    speed:{
      level1: {
        positive: {
          case1: [],
          case2: [],
          case3: [{
            m: (e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
            f: (e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
            n:(e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
          },{
            m: (e) => `${e.name} rédige son message à une allure de ${e.outputValue} mots par minute.`,
            f: (e) => `${e.name} rédige son message à une allure de ${e.outputValue} mots par minute.`,
            n:(e) => `${e.name} rédige son message à une allure de ${e.outputValue} mots par minute.`,
          },{
            m: (e) => `${e.name} tape ${e.outputValue} mots en une minute.`,
            f: (e) => `${e.name} tape ${e.outputValue} mots en une minute.`,
            n: (e) => `${e.name} tape ${e.outputValue} mots en une minute.`,
          },{
            m: (e) => `La vitesse de frappe de ${e.name} se tient à ${e.outputValue} mots par minute.`,
            f: (e) => `La vitesse de frappe de ${e.name} se tient à ${e.outputValue} mots par minute.`,
            n: (e) => `La vitesse de frappe de ${e.name} se tient à ${e.outputValue} mots par minute.`,
          },{
            m: (e) => `En une minute, ${e.name} rédige en moyenne ${e.outputValue} mots.`,
            f: (e) => `En une minute, ${e.name} rédige en moyenne ${e.outputValue} mots.`,
            n: (e) => `En une minute, ${e.name} rédige en moyenne ${e.outputValue} mots.`,
          }],
          case4:[],
          case5:[]
        },
        negative: {
          //jamais de negative
          case1: [],
          case2: [],
          case3: [],
          case4: [],
          case5: []
        },
      },
      level2: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `Énervé, ${e.name} compose rapidement son message.`,
            f: (e) => `Énervée, ${e.name} compose rapidement son message.`,
            n: (e) => `Énervéx, ${e.name} compose rapidement son message.`,
          }],
          case3: [  {
            m: (e) => `Rien n'est plus rapide que les doigts de ${e.name} sur son clavier.`,
            f: (e) => `Rien n'est plus rapide que les doigts de ${e.name} sur son clavier.`,
            n: (e) => `Rien n'est plus rapide que les doigts de ${e.name} sur son clavier.`,
          },{
            m: (e) => `${e.name} manie les lettres aussi vite que court Usain Bolt.`,
            f: (e) => `${e.name} manie les lettres aussi vite que court Usain Bolt.`,
            n: (e) => `${e.name} manie les lettres aussi vite que court Usain Bolt.`,
          },{
            m: (e) => `${e.name} frappe frénétiquement sur son clavier. Après tout, le temps c’est de l’argent.`,
            f: (e) => `${e.name} frappe frénétiquement sur son clavier. Après tout, le temps c’est de l’argent.`,
            n: (e) => `${e.name} frappe frénétiquement sur son clavier. Après tout, le temps c’est de l’argent.`,
          },{
            m: (e) => `Avec un tel entraînement, le record du monde de dactylo est presque franchi par ${e.name}.`,
            f: (e) => `Avec un tel entraînement, le record du monde de dactylo est presque franchi par ${e.name}.`,
            n: (e) => `Avec un tel entraînement, le record du monde de dactylo est presque franchi par ${e.name}.`,
          },{
            m: (e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
            f: (e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
            n:(e) => `${e.name} écrit à une vitesse de ${e.outputValue} mots par minute.`,
          },{
            m: (e) => `La rapidité de ${e.name} atteste son intérêt pour la conversation.`,
            f: (e) => `La rapidité de ${e.name} atteste son intérêt pour la conversation.`,
            n: (e) => `La rapidité de ${e.name} atteste son intérêt pour la conversation.`,
          },{
            m: (e) => `${e.name} rédige son message avec une impressionnante agilité. L’assemblée se demande d’ou provient cette dextérité.`,
            f: (e) => `${e.name} rédige son message avec une impressionnante agilité. L’assemblée se demande d’ou provient cette dextérité.`,
            n: (e) => `${e.name} rédige son message avec une impressionnante agilité. L’assemblée se demande d’ou provient cette dextérité.`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
        negative: {
          case1: [{
            m: (e) => `Il fait froid aujourd'hui. Il est difficile de converser les doigts congelés.`,
            f: (e) => `Il fait froid aujourd'hui. Il est difficile de converser les doigts congelés.`,
            n: (e) => `Il fait froid aujourd'hui. Il est difficile de converser les doigts congelés.`,
          },{
            m: (e) => `Les doigts congelés par la chaleur ambiante, ${e.name} tente de d’écrire au plus vite, non sans difficultés.`,
            f: (e) => `Les doigts congelés par la chaleur ambiante, ${e.name} tente de d’écrire au plus vite, non sans difficultés.`,
            n: (e) => `Les doigts congelés par la chaleur ambiante, ${e.name} tente de d’écrire au plus vite, non sans difficultés.`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} a les mains qui tremblent.`,
            f: (e) => `${e.name} a les mains qui tremblent.`,
            n: (e) => `${e.name} a les mains qui tremblent.`,
          },{
            m: (e) => `Les doigts suintant par la chaleur ambiante, ${e.name} tente de d’écrire au plus vite, non sans difficultés.`,
            f: (e) => `Les doigts suintant par la chaleur ambiante, ${e.name} tente de d’écrire au plus vite, non sans difficultés.`,
            n: (e) => `Les doigts suintant par la chaleur ambiante, ${e.name} tente de d’écrire au plus vite, non sans difficultés.`,
          },{
            m: (e) => `En une minute, ${e.name} rédige en moyenne ${e.outputValue} mots.`,
            f: (e) => `En une minute, ${e.name} rédige en moyenne ${e.outputValue} mots.`,
            n: (e) => `En une minute, ${e.name} rédige en moyenne ${e.outputValue} mots.`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
      },
      level3: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `La rapidité avec laquelle ${e.name} rédige son message est sûrement dû à son usage intensif du smartphone.`,
            f: (e) => `La rapidité avec laquelle ${e.name} rédige son message est sûrement dû à son usage intensif du smartphone.`,
            n: (e) => `La rapidité avec laquelle ${e.name} rédige son message est sûrement dû à son usage intensif du smartphone.`,
          },{
            m: (e) => `La dextérité de ${e.name} démontre une certaine audace.`,
            f: (e) => `La dextérité de ${e.name} démontre une certaine audace.`,
            n: (e) => `La dextérité de ${e.name} démontre une certaine audace.`,
          },{
            m: (e) => `${e.name} a l’air pressé de partager sa journée intense en émotions.`,
            f: (e) => `${e.name} a l’air pressé de partager sa journée intense en émotions.`,
            n: (e) => `${e.name} a l’air pressé de partager sa journée intense en émotions.`,
          },{
            m: (e) => `Les heures passées à jouer aux jeux vidéos semblent payer, ${e.name} écrit plus vite que jamais.`,
            f: (e) => `Les heures passées à jouer aux jeux vidéos semblent payer, ${e.name} écrit plus vite que jamais.`,
            n: (e) => `Les heures passées à jouer aux jeux vidéos semblent payer, ${e.name} écrit plus vite que jamais.`,
          },{
            m: (e) => `${e.name} écrit rapidement, mais ne fait peut être pas réellement attention à son orthographe.`,
            f: (e) => `${e.name} écrit rapidement, mais ne fait peut être pas réellement attention à son orthographe.`,
            n: (e) => `${e.name} écrit rapidement, mais ne fait peut être pas réellement attention à son orthographe.`,
          },{
            m: (e) => `${e.name} doit probablement s’ennuyer. À passer trop de temps sur son téléphone, il écrit aussi vite que l’éclair.`,
            f: (e) => `${e.name} doit probablement s’ennuyer. À passer trop de temps sur son téléphone, elle écrit aussi vite que l’éclair.`,
            n: (e) => `${e.name} doit probablement s’ennuyer. À passer trop de temps sur son téléphone, iel écrit aussi vite que l’éclair.`,
          },{
            m: (e) => `Il semble que ${e.name} veut mettre un terme à la conversation. Sa réponse parait hâtive.`,
            f: (e) => `Il semble que ${e.name} veut mettre un terme à la conversation. Sa réponse parait hâtive.`,
            n: (e) => `Il semble que ${e.name} veut mettre un terme à la conversation. Sa réponse parait hâtive.`,
          },{
            m: (e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
            f: (e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
            n:(e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
          },{
            m: (e) => `Plus rien autour n’a l’air d’importer, ${e.name} a l’air tout emoustillé par la conversation.`,
            f: (e) => `Plus rien autour n’a l’air d’importer, ${e.name} a l’air tout emoustillé par la conversation.`,
            n:(e) => `Plus rien autour n’a l’air d’importer, ${e.name} a l’air tout emoustillé par la conversation.`,
          },{
            m: (e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
            f: (e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
            n: (e) => `Cette fréquence de frappe doit certainement signifier que la conversation plaît à ${e.name}.`,
          },{
            m: (e) => `${e.name} semble montrer une grande assurance, ses doigts parcourent la clavier à grande vitesse.`,
            f: (e) => `${e.name} semble montrer une grande assurance, ses doigts parcourent la clavier à grande vitesse.`,
            n: (e) => `${e.name} semble montrer une grande assurance, ses doigts parcourent la clavier à grande vitesse.`,
          },{
            m: (e) => `Limpide, ${e.name} a l’air de parvenir rapidement à trouver les bons mots. Il a du se lever du bon pied.`,
            f: (e) => `Limpide, ${e.name} a l’air de parvenir rapidement à trouver les bons mots. Elle a du se lever du bon pied.`,
            n: (e) => `Limpide, ${e.name} a l’air de parvenir rapidement à trouver les bons mots. Iel a du se lever du bon pied.`,
          },{
            m: (e) => `${e.name} a bien besoin d’une sieste, mais l’excitation de la conversation semble le garder alerte.`,
            f: (e) => `${e.name} a bien besoin d’une sieste, mais l’excitation de la conversation semble la garder alerte.`,
            n: (e) => `${e.name} a bien besoin d’une sieste, mais l’excitation de la conversation semble iel garder alerte.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
        negative: {
          case1: [{
            m: (e) => `${e.name} semble époustouflé par le paysage qui s’offre à lui et prend son temps pour écrire.`,
            f: (e) => `${e.name} semble époustouflée par le paysage qui s’offre à elle et prend son temps pour écrire.`,
            n: (e) => `${e.name} semble époustoufléx par le paysage qui s’offre à ellui et prend son temps pour écrire.`,
          },{
            m: (e) => `Dans l’étreinte de la foule qui le bouscule, ${e.name} a des difficultés à écrire.`,
            f: (e) => `Dans l’étreinte de la foule qui la bouscule, ${e.name} a des difficultés à écrire.`,
            n: (e) => `Dans l’étreinte de la foule qui lea bouscule, ${e.name} a des difficultés à écrire.`,
          },{
            m: (e) => `Encerclé et oppressée dans le métro, ${e.name} prend son temps pour rédiger son message.`,
            f: (e) => `Encerclée et oppressée dans le métro, ${e.name} prend son temps pour rédiger son message.`,
            n: (e) => `Encercléx et oppressée dans le métro, ${e.name} prend son temps pour rédiger son message.`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `${e.name} paraît constamment dérangé par le brouhaha autour et peine à se concentrer pour écrire.`,
            f: (e) => `${e.name} paraît constamment dérangée par le brouhaha autour et peine à se concentrer pour écrire.`,
            n: (e) => `${e.name} paraît constamment dérangéx par le brouhaha autour et peine à se concentrer pour écrire.`,
          },{
            m: (e) => `Déconcentrée par le brouhaha qui l’entoure, ${e.name} semble avoir de la peine à aligner ses mots.`,
            f: (e) => `Déconcentrée par le brouhaha qui l’entoure, ${e.name} semble avoir de la peine à aligner ses mots.`,
            n: (e) => `Déconcentrée par le brouhaha qui l’entoure, ${e.name} semble avoir de la peine à aligner ses mots.`,
          },{
            m: (e) => `À cette heure, L’alcool monte à la tête de ${e.name} et il peine à communiquer.`,
            f: (e) => `À cette heure, L’alcool monte à la tête de ${e.name} et elle peine à communiquer.`,
            n: (e) => `À cette heure, L’alcool monte à la tête de ${e.name} et iel peine à communiquer.`,
          },{
            m: (e) => `Par ce temps frigorifiant, ${e.name} tente d’écrire les doigts sûrement gelés.`,
            f: (e) => `Par ce temps frigorifiant, ${e.name} tente d’écrire les doigts sûrement gelés.`,
            n: (e) => `Par ce temps frigorifiant, ${e.name} tente d’écrire les doigts sûrement gelés.`,
          },{
            m: (e) => `Les touches se confondent devant les yeux fatigués de ${e.name}.`,
            f: (e) => `Les touches se confondent devant les yeux fatigués de ${e.name}.`,
            n: (e) => `Les touches se confondent devant les yeux fatigués de ${e.name}.`,
          },{
            m: (e) => `Probablement un peu alcoolisé, ${e.name} ne trouve plus les touches de son clavier.`,
            f: (e) => `Probablement un peu alcoolisée, ${e.name} ne trouve plus les touches de son clavier.`,
            n: (e) => `Probablement un peu alcooliséx, ${e.name} ne trouve plus les touches de son clavier.`,
          },{
            m: (e) => `Complètement ébloui par le soleil, ${e.name} ne voit pas les touches sur son écran.`,
            f: (e) => `Complètement éblouie par le soleil, ${e.name} ne voit pas les touches sur son écran.`,
            n: (e) => `Complètement éblouix par le soleil, ${e.name} ne voit pas les touches sur son écran.`,
          },{
            m: (e) => `Affalé sur son canapé, ${e.name} semble pris de somnolence.`,
            f: (e) => `Affalée sur son canapé, ${e.name} semble prise de somnolence.`,
            n: (e) => `Affaléx sur son canapé, ${e.name} semble prisx de somnolence.`,
          },{
            m: (e) => `${e.name} semble tenter de répondre et de se brosser les dents en même temps.`,
            f: (e) => `${e.name} semble tenter de répondre et de se brosser les dents en même temps.`,
            n: (e) => `${e.name} semble tenter de répondre et de se brosser les dents en même temps.`,
          },{
            m: (e) => `L'oiseau qui vient de passer par dessus ${e.name} a dû très certainement le distraire.`,
            f: (e) => `L'oiseau qui vient de passer par dessus ${e.name} a dû très certainement la distraire.`,
            n: (e) => `L'oiseau qui vient de passer par dessus ${e.name} a dû très certainement lea distraire.`,
          },{
            m: (e) => `${e.name} semble époustouflé par ce qui se déroule devant lui et prend son temps pour écrire.`,
            f: (e) => `${e.name} semble époustouflée par ce qui se déroule devant elle et prend son temps pour écrire.`,
            n: (e) => `${e.name} semble époustoufléx par ce qui se déroule devant ellui et prend son temps pour écrire.`,
          },{
            m: (e) => `Dans l’étreinte de la foule qui le bouscule, ${e.name} a des difficultés à écrire.`,
            f: (e) => `Dans l’étreinte de la foule qui la bouscule, ${e.name} a des difficultés à écrire.`,
            n: (e) => `Dans l’étreinte de la foule qui lea bouscule, ${e.name} a des difficultés à écrire.`,
          },{
            m: (e) => `${e.name} cherche ses mots et son expression semble troublée.`,
            f: (e) => `${e.name} cherche ses mots et son expression semble troublée.`,
            n: (e) => `${e.name} cherche ses mots et son expression semble troublée.`,
          },{
            m: (e) => `${e.name} prend soin de choisir ses mots, cette discussion doit lui tenir à coeur.`,
            f: (e) => `${e.name} prend soin de choisir ses mots, cette discussion doit lui tenir à coeur.`,
            n:(e) => `${e.name} prend soin de choisir ses mots, cette discussion doit lui tenir à coeur.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `${e.name} tient à répondre, même si il doit interrompre le film passionnant qu’il est en train de regarder.`,
            f: (e) => `${e.name} tient à répondre, même si elle doit interrompre le film passionnant qu’elle est en train de regarder.`,
            n: (e) => `${e.name} tient à répondre, même si iel doit interrompre le film passionnant qu’iel est en train de regarder.`,
          }]
        },
      },
      level4: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `${e.name} paraît énervé par le mauvais café qu’on lui sert, et compose rapidement son message.`,
            f: (e) => `${e.name} paraît énervée par le mauvais café qu’on lui sert, et compose rapidement son message.`,
            n: (e) => `${e.name} paraît énervéx par le mauvais café qu’on lui sert, et compose rapidement son message.`,
          }],
          case3: [{
            m: (e) => `${e.name} s’empresse d’écrire afin de mettre un terme à la conversation.`,
            f: (e) => `${e.name} s’empresse d’écrire afin de mettre un terme à la conversation.`,
            n: (e) => `${e.name} s’empresse d’écrire afin de mettre un terme à la conversation.`,
          },{
            m: (e) => `${e.name} paraît énervé par le mauvais café qu’on lui a servi ce matin, et compose rapidement son message.`,
            f: (e) => `${e.name} paraît énervée par le mauvais café qu’on lui a servi ce matin, et compose rapidement son message.`,
            n: (e) => `${e.name} paraît énervéx par le mauvais café qu’on lui a servi ce matin, et compose rapidement son message.`,
          },{
            m: (e) => `Plus rien autour n’a l’air d’importer, ${e.name} est tout émoustillé par la conversation.`,
            f: (e) => `Plus rien autour n’a l’air d’importer, ${e.name} est tout émoustillée par la conversation.`,
            n: (e) => `Plus rien autour n’a l’air d’importer, ${e.name} est tout émoustilléx par la conversation.`,
          }],
          case4: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `La coupure au doigt de ${e.name} freine sa dextérité.`,
            f: (e) => `La coupure au doigt de ${e.name} freine sa dextérité.`,
            n: (e) => `La coupure au doigt de ${e.name} freine sa dextérité.`,
          },{
            m: (e) => `Le téléphone de ${e.name} tombe dans les toilettes. Il ne peut plus d’écrire à la vitesse qu'il souhaite.`,
            f: (e) => `Le téléphone de ${e.name} tombe dans les toilettes. Elle ne peut plus d’écrire à la vitesse qu’elle souhaite.`,
            n: (e) => `Le téléphone de ${e.name} tombe dans les toilettes. Iel ne peut plus d’écrire à la vitesse qu’iel souhaite.`,
          }, {
            m: (e) => `${e.name} se tape le gros orteil contre le coin de la table. Après quelques jurons, il reprend la conversation.`,
            f: (e) => `${e.name} se tape le gros orteil contre le coin de la table. Après quelques jurons, elle reprend la conversation.`,
            n: (e) => `${e.name} se tape le gros orteil contre le coin de la table. Après quelques jurons, iel reprend la conversation.`,
          },{
            m: (e) => `La fatigue atteint ${e.name} qui tape à la vitesse d'un escargot.`,
            f: (e) => `La fatigue atteint ${e.name} qui tape à la vitesse d'un escargot.`,
            n: (e) => `La fatigue atteint ${e.name} qui tape à la vitesse d'un escargot.`,
          },{
            m: (e) => `${e.name} se met à écrire aussi vite qu'une personne en maison de retraite.`,
            f: (e) => `${e.name} se met à écrire aussi vite qu'une personne en maison de retraite.`,
            n: (e) => `${e.name} se met à écrire aussi vite qu'une personne en maison de retraite.`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `${e.name} se tape le gros orteil contre le pied du lit. Après quelques jurons, il reprend la conversation.`,
            f: (e) => `${e.name} se tape le gros orteil contre le pied du lit. Après quelques jurons, elle reprend la conversation.`,
            n: (e) => `${e.name} se tape le gros orteil contre le pied du lit. Après quelques jurons, iel reprend la conversation.`,
          }]
        },
      },
    }
  },
  ratio:{
    timeTrigger:{
      level1: {
        positive: {
          case1: [],
          case2: [],
          case3: [{
            m: (e) => `À l'instant, ${e.name} se rend sur l'échange.`,
            f: (e) => `À l'instant, ${e.name} se rend sur l'échange.`,
            n: (e) => `À l'instant, ${e.name} se rend sur l'échange.`,
          },{
            m: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
            f: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
            n: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
          },{
            m: (e) => `${e.name} est à <strong>Renens</strong> et trouve la ville sympa, mais sans plus.`,
            f: (e) => `${e.name} est à <strong>Renens</strong> et trouve la ville sympa, mais sans plus.`,
            n: (e) => `${e.name} est à <strong>Renens</strong> et trouve la ville sympa, mais sans plus.`,
          }],
          case4: [],
          case5: []
        },
        negative: {
          case1: [],
          case2: [],
          case3: [],
          case4: [],
          case5:[]
        },
      },
      level2: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `Il est passé 9h et ${e.name} ne s'est toujours pas lavé les dents.`,
            f: (e) => `Il est passé 9h et ${e.name} ne s'est toujours pas lavé les dents.`,
            n: (e) => `Il est passé 9h et ${e.name} ne s'est toujours pas lavé les dents.`,
          },{
            m: (e) => `Les oiseaux chantent, le soleil brille.`,
            f: (e) => `Les oiseaux chantent, le soleil brille.`,
            n: (e) => `Les oiseaux chantent, le soleil brille.`,
          },{
            m: (e) => `Le ciel est bleu, le ciel brille.`,
            f: (e) => `Le ciel est bleu, le ciel brille.`,
            n: (e) => `Le ciel est bleu, le ciel brille.`,
          },{
            m: (e) => `La tension est à son comble.`,
            f: (e) => `La tension est à son comble.`,
            n: (e) => `La tension est à son comble.`,
          },{
            m: (e) => `${e.name} est à <strong>ECAL</strong> et rêve d'un café supplémentaire.`,
            f: (e) => `${e.name} est à <strong>ECAL</strong> et rêve d'un café supplémentaire.`,
            n: (e) => `${e.name} est à <strong>ECAL</strong> et rêve d'un café supplémentaire.`,
          },{
            m: (e) => `${e.name} est à <strong>quelques mètres</strong> de ${e.contact}.`,
            f: (e) => `${e.name} est à <strong>quelques mètres</strong> de ${e.contact}.`,
            n: (e) => `${e.name} est à <strong>quelques mètres</strong> de ${e.contact}.`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
      },
      level3: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `Puisque ${e.name} s’ennuie à son bureau, il regarde par la fenêtre.`,
            f: (e) => `Puisque ${e.name} s’ennuie à son bureau, elle regarde par la fenêtre.`,
            n: (e) => `Puisque ${e.name} s’ennuie à son bureau, iel regarde par la fenêtre.`,
          }],
          case3: [{
            m: (e) => `${e.name} reçoit un grand nombre de notifications dernièrement, mais choisit de relire des derniers messages avec ${e.contact}.`,
            f: (e) => `${e.name} reçoit un grand nombre de notifications dernièrement, mais choisit de relire des derniers messages avec ${e.contact}.`,
            n: (e) => `${e.name} reçoit un grand nombre de notifications dernièrement, mais choisit de relire des derniers messages avec ${e.contact}.`,
          },{
            m: (e) => `${e.name} profite probablement de sa promenade dans les couloirs pour regarder sa conversation avec ${e.contact}.`,
            f: (e) => `${e.name} profite probablement de sa promenade dans les couloirs pour regarder sa conversation avec ${e.contact}.`,
            n: (e) => `${e.name} profite probablement de sa promenade dans les couloirs pour regarder sa conversation avec ${e.contact}.`,
          },{
            m: (e) => `Par cette journée tranquille, ${e.name} prend le temps d’agrémenter la conversation.`,
            f: (e) => `Par cette journée tranquille, ${e.name} prend le temps d’agrémenter la conversation.`,
            n: (e) => `Par cette journée tranquille, ${e.name} prend le temps d’agrémenter la conversation.`,
          },{
            m: (e) => `En ce jour particulier, ${e.name} souhaite partager ses pensées.`,
            f: (e) => `En ce jour particulier, ${e.name} souhaite partager ses pensées.`,
            n: (e) => `En ce jour particulier, ${e.name} souhaite partager ses pensées.`,
          },{
            m: (e) => `Rien à signaler du côté de ${e.name}, il souhaite juste relancer la conversation.`,
            f: (e) => `Rien à signaler du côté de ${e.name}, elle souhaite juste relancer la conversation.`,
            n: (e) => `Rien à signaler du côté de ${e.name}, iel souhaite juste relancer la conversation.`,
          },{
            m: (e) => `La discussion suit son court.`,
            f: (e) => `La discussion suit son court.`,
            n: (e) => `La discussion suit son court.`,
          },{
            m: (e) => `Une magnifique journée normale s’annonce et ${e.name} écrit à ${e.contact}.`,
            f: (e) => `Une magnifique journée normale s’annonce et ${e.name} écrit à ${e.contact}.`,
            n: (e) => `Une magnifique journée normale s’annonce et ${e.name} écrit à ${e.contact}.`,
          },{
            m: (e) => `Par ce jour ordinaire, ${e.name} semble prendre l’habitude d’écrire à ${e.contact}.`,
            f: (e) => `Par ce jour ordinaire, ${e.name} semble prendre l’habitude d’écrire à ${e.contact}.`,
            n: (e) => `Par ce jour ordinaire, ${e.name} semble prendre l’habitude d’écrire à ${e.contact}.`,
          },{
            m: (e) => `En ce ${e.outputValue} ${e.name} se rend sur l'échange.`,
            f: (e) => `En ce ${e.outputValue} ${e.name} se rend sur l'échange.`,
            n: (e) => `En ce ${e.outputValue} ${e.name} se rend sur l'échange.`,
          },{
            m: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
            f: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
            n: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
          },{
            m: (e) => `Puisque ${e.name} s’ennuie, il regarde par la fenêtre.`,
            f: (e) => `Puisque ${e.name} s’ennuie, elle regarde par la fenêtre.`,
            n: (e) => `Puisque ${e.name} s’ennuie, iel regarde par la fenêtre.`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
      },
      level4: {
        positive: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [  {
            m: (e) => `De la musique résonne dans les oreilles de ${e.name}.`,
            f: (e) => `De la musique résonne dans les oreilles de ${e.name}.`,
            n: (e) => `De la musique résonne dans les oreilles de ${e.name}.`,
          },{
            m: (e) => `On entend un chat qui ronronne à côté de ${e.name}.`,
            f: (e) => `On entend un chat qui ronronne à côté de ${e.name}.`,
            n: (e) => `On entend un chat qui ronronne à côté de ${e.name}.`,
          },{
            m: (e) => `À l'instant ${e.name} se rend sur l'échange.`,
            f: (e) => `À l'instant ${e.name} se rend sur l'échange.`,
            n: (e) => `À l'instant ${e.name} se rend sur l'échange.`,
          },{
            m: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
            f: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
            n: (e) => `En ce ${e.outputValue}, ${e.name} vient guigner du côté de ${e.contact}.`,
          },{
            m: (e) => `Pris d'une envie urgente, ${e.name} décide d'utiliser les toilettes publics les plus proches. Ce n'est que plus tard que ${e.name} remarquera qu'il avait du papier toilette collé à sa chaussure.`,
            f: (e) => `Prise d'une envie urgente, ${e.name} décide d'utiliser les toilettes publics les plus proches. Ce n'est que plus tard que ${e.name} remarquera qu'elle avait du papier toilette collé à sa chaussure.`,
            n: (e) => `Pris d'une envie urgente, ${e.name} décide d'utiliser les toilettes publics les plus proches. Ce n'est que plus tard que ${e.name} remarquera qu'iel avait du papier toilette collé à sa chaussure.`,
            }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
        negative: {
          case1: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case2: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case3: [{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case4:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }],
          case5:[{
            m: (e) => `to do`,
            f: (e) => `to do`,
            n: (e) => `to do`,
          }]
        },
      },
    },
  },
  dataChange:{
    city: {
      level1: {
        positive: {
          case3: [{
            m: (e) => `${e.name} est à ${e.outputValue}.`,
            f: (e) => `${e.name} est à ${e.outputValue}.`,
            n: (e) => `${e.name} est à ${e.outputValue}.`,
          }],
        }
      },
      level2: {
        positive: {
          case3: [{
            m: (e) => `${e.name} est à ${e.outputValue}.`,
            f: (e) => `${e.name} est à ${e.outputValue}.`,
            n: (e) => `${e.name} est à ${e.outputValue}.`,
          }],
        }
      },
      level3: {
        positive: {
          case3: [{
            m: (e) => `${e.name} est à ${e.outputValue}.`,
            f: (e) => `${e.name} est à ${e.outputValue}.`,
            n: (e) => `${e.name} est à ${e.outputValue}.`,
          },{
            m: (e) => `La température paraît peu clémente à ${e.outputValue}.`,
            f: (e) => `La température paraît peu clémente à ${e.outputValue}.`,
            n: (e) => `La température paraît peu clémente à ${e.outputValue}.`,
          },{
            m: (e) => `${e.name} est arrivé à ${e.outputValue}.`,
            f: (e) => `${e.name} est arrivée à ${e.outputValue}.`,
            n: (e) => `${e.name} est arrivéx à ${e.outputValue}.`,
          },{
            m: (e) => `${e.name} est à ${e.outputValue} et rêve d'un café.`,
            f: (e) => `${e.name} est à ${e.outputValue} et rêve d'un café.`,
            n: (e) => `${e.name} est à ${e.outputValue} et rêve d'un café.`,
          }
        ],
        }
      },
      level4: {
        positive: {
          case3: [{
            m: (e) => `${e.name} est à ${e.outputValue}.`,
            f: (e) => `${e.name} est à ${e.outputValue}.`,
            n: (e) => `${e.name} est à ${e.outputValue}.`,
          },{
            m: (e) => `Une visite de ${e.outputValue} s'impose pour ${e.name}.`,
            f: (e) => `Une visite de ${e.outputValue} s'impose pour ${e.name}.`,
            n: (e) => `Une visite de ${e.outputValue} s'impose pour ${e.name}.`,
          },{
            m: (e) => `Son sens de l'orientation lui faisant défaut, ${e.name} se perdra 5 fois avant d'arriver à ${e.outputValue}`,
            f: (e) => `Son sens de l'orientation lui faisant défaut, ${e.name} se perdra 5 fois avant d'arriver à ${e.outputValue}`,
            n: (e) => `Son sens de l'orientation lui faisant défaut, ${e.name} se perdra 5 fois avant d'arriver à ${e.outputValue}`,
            }],
        }
      }
    },
    distance: {
      level1: {
        positive: {
          case3: [{
            m: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
            f: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
            n: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
          }],
        }
      },
      level2: {
        positive: {
          case3: [{
            m: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
            f: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
            n: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
          }],
        }
      },
      level3: {
        positive: {
          case3: [  
            {
            m: (e) => `${e.name} semble pressé et dévore la distance entre lui et ${e.contact}.`,
            f: (e) => `${e.name} semble pressée et dévore la distance entre elle et ${e.contact}.`,
            n: (e) => `${e.name} semble presséx et dévore la distance entre ellui et ${e.contact}.`,
          },{
            m: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
            f: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
            n: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
          }],
        }
      },
      level4: {
        positive: {
          case3: [{
            m: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
            f: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
            n: (e) => `${e.name} est à ${e.outputValue} de ${e.contact}.`,
          }],
        }
      }
    },
    speedMove: {
      level1: {
        positive: {
          case3: [{
            m: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
            f: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
            n: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
          }],
        }
      },
      level2: {
        positive: {
          case3: [{
            m: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
            f: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
            n: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
          }],
        }
      },
      level3: {
        positive: {
          case3: [{
            m: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
            f: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
            n: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
          },{
            m: (e) => `${e.name} réalise qu'il manque de lait pour finir son gâteau. ${e.name} enfile une paire de claquettes et cours à l'épicerie du coin.`,
            f: (e) => `${e.name} réalise qu'elle manque de lait pour finir son gâteau. ${e.name} enfile une paire de claquettes et cours à l'épicerie du coin.`,
            n: (e) => `${e.name} réalise qu'iel manque de lait pour finir son gâteau. ${e.name} enfile une paire de claquettes et cours à l'épicerie du coin.`,
          },{
            m: (e) => `${e.name} court pour avoir son train. Malheureusement ${e.name} se trompe de quai et voit son train partir sous ses yeux.`,
            f: (e) => `${e.name} court pour avoir son train. Malheureusement ${e.name} se trompe de quai et voit son train partir sous ses yeux.`,
            n: (e) => `${e.name} court pour avoir son train. Malheureusement ${e.name} se trompe de quai et voit son train partir sous ses yeux.`,
            }],
        }
      },
      level4: {
        positive: {
          case3: [{
            m: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
            f: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
            n: (e) => `${e.name} se déplace à une vitese de ${e.outputValue}km/h.`,
          },{
            m: (e) => `Après plusieurs pintes de blonde, ${e.name} décide de rentrer à pieds chez lui en titubant.`,
            f: (e) => `Après plusieurs pintes de blonde, ${e.name} décide de rentrer à pieds chez elle en titubant.`,
            n: (e) => `Après plusieurs pintes de blonde, ${e.name} décide de rentrer à pieds chez ellui en titubant.`,
            }],
        }
      }
    },
  },
  initScenes:{
      scene: [
          (e)=>`Plateau vide, les projecteurs s’allument, les protagonistes s’avancent sur la scène.`,
          (e)=>`Les lumières sont bleues, une ambiance pesente règne.`,
          (e)=>`Dans un grand bâtiment, où une sensation d'étouffement se fait ressentir. Les oiseaux chantent au loin. ${e.name} est en quête de sa liberté.`,
          (e)=>`Le jour est levé du côté de ${e.name}. Des tables disposées de manière structurée. On entend un bourdonnement indistinct. Le bruit ne semble pas déranger ${e.name}.`,
          (e)=>`Au milieu de la scène, un fauteuil. ${e.name} se démène pour retrouver une chaussette manquante. `,
          (e)=>`Une grande pièce, il est passé 9h. ${e.name} attend.`,
          (e)=>`${e.name} s'avance d'un pas décidé et s'arrête au centre de la scène.`,
          (e)=>`Le réveil était difficile pour ${e.name}. Les yeux encore collés malgré l'heure avancée, ${e.name} se lance à la recherche d ${e.contact}.`,
          // (e)=>`Un salon. Une grande pièce carrée au centre de laquelle trône un canapé ancien. En face du canapé crépite un feu de cheminée allumé il y a maintenant quelques heures. ${e.name}, sur le canapé, laisse vagabonder son regard entre son téléphone et le feu.`,
          // (e)=>`Dans un grand parc se trouve un banc. Les oiseaux chantent autour de ${e.name}. Au loin, des cris d'enfants se font entrendre. Le soleil est haut dans le ciel mais l'air est doux. Une petite brise vient carresser les cheveux de ${e.name}.`,
          // (e)=>`La nuit tombe doucement sur ${e.name}. Une assiette à moitié vide trône sur la table aux côtés d'un verre de vin déjà bien entammé. La télévision dans la salle à côté ne produit qu'un bourdonnement indistinct. Le bruit ne semble pas déranger ${e.name}.`,
          // (e)=>`Une gare, il est 10h30. ${e.name} attend.`,
          // (e)=>`Le réveil sonne alors que ${e.name} ouvre difficilement les yeux. Un fin rayon de soleil passe au travers des volets et vient éclairer un coin de la chambre. Les habits de la veille trainent encore à côté du lit. ${e.name} tente de profiter des ses derniers instants dans son lit puis se décide enfin à poser les pieds sur le sol.`,
          // (e)=>`Des arbres, ${e.name} marche.`,
      ],
      acts:[
        (e)=>`Plateau vide, les projecteurs s’allument, les protagonistes s’avancent sur la scène.`,
        (e)=>`Changement de décor, un spot illumine le centre de la pièce, ${e.name} se etrouve seul sur scène, l'air perdu.`,
        (e)=>`Le temps passe. Au premier plan se trouve plusieurs chaises. Des bruits résonnent depuis la cours extérieur. Une fenêtre ouverte en arrière plan laisse passer un courant d'air qui soulève les photos au mur. Sur la droite, une porte s'ouvre doucement pour laisser entrer ${e.name}. ${e.name} déhambule devant les photos avant de prendre place au premier plan.`,
        (e)=>`La pluie ruisselle silencieusement sur la fenêtre de train. De discussions se font vaguement entendre dans le wagon. En dehors, des champs s'étendent à parte de vue. Des arbres se font appercevoir par ci par là. On peut distinguer quelques troupeaux parsemés au milieu des champs. La distance entre ${e.name} et ${e.contact} se fait de plus en plus ressentir.`,


      ],
      firstScene: [
        (e)=>`Plateau vide, les projecteurs s’allument, les protagonistes s’avancent sur la scène.`,
        (e)=>`La chambre de ${e.name}.`,
        (e)=>`Une lampe éclaire la pièce. ${e.name} entre.`,
        (e)=>`Plateau vide, les projecteurs s’allument, les protagonistes s’avancent sur la scène.`,
        (e)=>`Les lumières sont bleues, une ambiance pesente règne.`,
        (e)=>`Dans un grand bâtiment, où une sensation d'étouffement se fait ressentir. Les oiseaux chantent au loin. ${e.name} est en quête de sa liberté.`,
        (e)=>`Le jour est levé du côté de ${e.name}. Des tables disposées de manière structurée. On entend un bourdonnement indistinct. Le bruit ne semble pas déranger ${e.name}.`,
        (e)=>`Une grande pièce, il est passé 9h. ${e.name} attend.`,
        // (e)=>`Au milieu de la scène, un fauteuil. ${e.name} se démène pour retrouver une chaussette manquante. `,
        (e)=>`${e.name} s'avance d'un pas décidé et s'arrête au centre de la scène.`,
        (e)=>`Le réveil était difficile pour ${e.name}. Les yeux encore collés malgré l'heure avancée, ${e.name} se lance à la recherche d ${e.contact}.`,
        // (e)=>`Un salon. Une grande pièce carrée au centre de laquelle trône un canapé ancien. En face du canapé crépite un feu de cheminée allumé il y a maintenant quelques heures. ${e.name}, sur le canapé, laisse vagabonder son regard entre son téléphone et le feu.`,
        // (e)=>`Dans un grand parc se trouve un banc. Les oiseaux chantent autour de ${e.name}. Au loin, des cris d'enfants se font entrendre. Le soleil est haut dans le ciel mais l'air est doux. Une petite brise vient carresser les cheveux de ${e.name}.`,
        // (e)=>`La nuit tombe doucement sur ${e.name}. Une assiette à moitié vide trône sur la table aux côtés d'un verre de vin déjà bien entammé. La télévision dans la salle à côté ne produit qu'un bourdonnement indistinct. Le bruit ne semble pas déranger ${e.name}.`,
        // (e)=>`Une gare, il est 10h30. ${e.name} attend.`,
        // (e)=>`Le réveil sonne alors que ${e.name} ouvre difficilement les yeux. Un fin rayon de soleil passe au travers des volets et vient éclairer un coin de la chambre. Les habits de la veille trainent encore à côté du lit. ${e.name} tente de profiter des ses derniers instants dans son lit puis se décide enfin à poser les pieds sur le sol.`,
        // (e)=>`Des arbres, ${e.name} marche.`,
        // (e)=>`Le bureau de ${e.name}. Dans une pièce exigüe, un grand bureau se tient fier et droit. A gauche du bureau se trouve une bibliothèque. Elle est pleine de livres tous plus divers les uns des autres. ${e.name} entre et va choisir un livre.`,
        // (e)=>`Devant un bâtiment, un grand arbre donne de l'ombre à plusieurs bancs. Un couple rigole gentiment. Sur le banc d'à côté, ${e.name} lit <i>La mouette</i> De Tcheckov. L'attente se fait longue au fil du temps qui passe.`,
      ]
  }

};


export default didascalies;

