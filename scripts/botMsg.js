const BOT_MSG = [
    {text:"Hello ! Bienvenue sur <i>LATENT*</i>.", delay: 400, waitForResp:false, type: "msg"},
    {text:"Tu peux converser avec tes contacts à la manière d’un chat. Ecris un message.", delay: 400, waitForResp:false, type: "msg"},
    {text:"Chaque action au sein de l’app génère des didascalies en fonction du <u>temps</u> de réponse, de la façon <u>d'écrire</u> ou du <u>lieu</u>.", delay: 400, waitForResp:false, type: "did"},
    {height:"10", delay: 400, waitForResp:false, type: "time"},
    {text:"La ligne chronologique représente le temps qui s’écoule entre les messages. Chaque point signifie qu’une heure s’est écoulée.", delay: 400, waitForResp:false, type: "did"},
    {text:'La façon dont tu rédiges le message est représentée dans le texte. Si tu te corriges, ce caractère s’affichera "–".', delay: 400, waitForResp:false, type: "msg"},
    {text:'Si un certain temps s’écoule durant la rédaction, ce caractère s’affiche "·".', delay: 400, waitForResp:false, type: "msg"},
    {height:"4", delay: 400, waitForResp:false, type: "time"},
    {text:"Moins d'une seconde passe entre les derniers messages.", delay: 400, waitForResp:false, type: "did", icone: "time"},
    {text:"L'icone de temps représente une didascalie générée en fonction du temps.", delay: 400, waitForResp:false, type: "msg"},
    {height:"4", delay: 400, waitForResp:false, type: "time"},
    {text:"Ce message contient 72 caractères et 1 correction .", delay: 400, waitForResp:false, type: "did", icone: "write"},
    {text:"L'icone d'écriture représente une didascalie générée en fonction du mode d'écriture – .", delay: 400, waitForResp:false, type: "msg"},
    {height:"4", delay: 400, waitForResp:false, type: "time"},
    {text:"LATENT* est à Lausanne.", delay: 400, waitForResp:false, type: "did", icone: "loca"},
    {text:"L'icone d'écriture représente une didascalie générée en fonction de la position, la distance et le déplacement des protagonistes.", delay: 400, waitForResp:false, type: "msg"},
    {height:"4", delay: 400, waitForResp:false, type: "time"},
    {text:"La version théâtrale du dialogue se déclanche grâce au toggle en haut à droite.", delay: 400, waitForResp:false, type: "did"},
    {text:"LATENT* t'invite à découvrir tes échanges sous une forme théâtrale, selon le temps passé et le changement de position, la pièce évolue et change de scène ou d'acte.", delay: 400, waitForResp:false, type: "did"},
    {text:"Selon le mode dans lequel tu es, le texte est interprêté différemment.", delay: 400, waitForResp:false, type: "msg"},
    {text:"tu peux maintenant créer ta propre conversation et n'oublie pas d'aller créer ton personnage dans ton profil! !", delay: 400, waitForResp:false, type: "msg"},
    
    // {text:"salut3", delay: 400, waitForResp:false, type: "msg"},
    // {text:"did4", delay: 400, waitForResp:false, type: "did"},
    // {text:"salut4", delay: 400, waitForResp:false, type: "msg"},
    // {text:"salut5", delay: 400, waitForResp:false, type: "msg"},
    // {text:"salut6", delay: 400, waitForResp:true, type: "msg"},
    // {text:"salut7", delay: 400, waitForResp:false, type: "msg"},
]
const BOT_DID =""
// = [

//     {text:"did2", delay: 400, waitForResp:false, type: "did"},
//     {text:"did3", delay: 400, waitForResp:false, type: "did"},
//     {text:"did4", delay: 400, waitForResp:false, type: "did"},
//     {text:"did5", delay: 400, waitForResp:false, type: "did"},
//     {text:"did6", delay: 400, waitForResp:true, type: "did"},
//     {text:"did7", delay: 400, waitForResp:false, type: "did"},
// ]

// export function sendBotMessage(type, botMsg, botDid, send){
//     if(type == "msg"){
//         console.log("HEEEEEEEEEEEE", type)
//           send(botMsg);
//           console.log("Delayed for 1 second.");
//       }else if (type == "did"){
//           console.log("DIIIIIIIIIIIIIIE", type)
//           send(botDid);
//       }
// }
export default {BOT_MSG, BOT_DID}