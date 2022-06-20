const BOT_MSG = [
    {text:"Hello ! Bienvenue sur <i>LATENT*</i>.", usr: "bot", delay: 400, waitForResp:false, type: "msg", time: ""},
    {height:"2", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"Tu peux converser avec tes contacts à la manière d’un chat. Ecris un message.", usr: "bot", delay: 400, waitForResp:false, type: "msg", time: "1sec"},
    {height:"2", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"Hello !", usr: "person", delay: 400, waitForResp:false, type: "msg", time: "1min"},
    {height:"4", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"Chaque action au sein de l’app génère des didascalies en fonction du <u>temps</u> de réponse, de la façon <u>d'écrire</u> ou du <u>lieu</u>.", usr: "bot", delay: 400, waitForResp:false, type: "did"},
    {height:"10", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"La ligne chronologique représente le temps qui s’écoule entre les messages. Chaque point signifie qu’une heure s’est écoulée.", usr: "bot", delay: 400, waitForResp:false, type: "did"},
    {text:'La façon dont tu rédiges le message est représentée dans le texte. Si tu te corriges, ce caractère s’affichera "–".', usr: "bot", delay: 400, waitForResp:false, type: "msg", time: "2min"},
    {height:"2", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:'Si un certain temps s’écoule durant la rédaction, ce caractère s’affiche "·".', usr: "bot", delay: 400, waitForResp:false, type: "msg", time: "4sec"},
    {height:"4", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"Moins d'une seconde passe entre les derniers messages.", usr: "bot", delay: 400, waitForResp:false, type: "did", icone: "time"},
    {text:"L'icone de temps représente une didascalie générée en fonction du temps.", usr: "bot", delay: 400, waitForResp:false, type: "msg", time: "1sec"},
    {height:"4", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"Ce message contient 72 caractères et 1 correction .", usr: "bot", delay: 400, waitForResp:false, type: "did", icone: "msg"},
    {text:"L'icone d'écriture représente une didascalie générée en fonction du mode d'écriture – .", usr: "bot", delay: 400, waitForResp:false, type: "msg", time: "4sec"},
    {height:"4", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"LATENT* est à Lausanne.", usr: "bot", delay: 400, waitForResp:false, type: "did", icone: "loca"},
    {text:"L'icone d'écriture représente une didascalie générée en fonction de la position, la distance et le déplacement des protagonistes.", usr: "bot", delay: 400, waitForResp:false, type: "msg", time: "4sec"},
    {height:"4", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"La version théâtrale du dialogue se déclanche grâce au toggle en haut à droite.", usr: "bot", delay: 400, waitForResp:false, type: "did"},
    {text:"LATENT* t'invite à découvrir tes échanges sous une forme théâtrale, selon le temps passé et le changement de position, la pièce évolue et change de scène ou d'acte.", usr: "bot", delay: 400, waitForResp:false, type: "did"},
    {text:"Selon le mode dans lequel tu es, le texte est interprêté différemment.", usr: "bot", delay: 400, waitForResp:false, type: "msg", time: "6sec"},
    {height:"2", usr: "bot", delay: 400, waitForResp:false, type: "time"},
    {text:"Tu peux maintenant créer ta propre conversation et n'oublie pas d'aller créer ton personnage dans ton profil! !", usr: "bot", delay: 400, waitForResp:false, type: "msg", time: "4sec"},
    
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