import * as fb from "./firebase.js";

export function setScenes(chatID,currentSceneIndex,currentActIndex) {
  let scenes = [
    "scène I",
    "scène II",
    "scène III",
    "scène IV",
    "scène V",
    "scène VI",
    "scène VII",
    "scène VIII",
    "scène IX",
    "scène X",
  ];
  let acts = [
    "Acte I",
    "Acte II",
    "Acte III",
    "Acte IV",
    "Acte V",
    "Acte VI",
    "Acte VII",
    "Acte VIII",
    "Acte IX",
    "Acte X",
  ];
  // let currentSceneIndex =
  //   this.$getters.listenConversation(chatID).sceneStage;
  // let currentActIndex = this.$getters.listenConversation(chatID).actStage;
  let newSceneIndex = currentSceneIndex;
  let newActIndex = currentActIndex;
  let setScene = scenes[newSceneIndex];
  let setAct = acts[newActIndex];
  let hasChanged = false;
  let SCENES_DATA;
  //*CHANGE SCENE
  let sceneExist = this.$getters.listenConversation(chatID).sceneStage;
  // console.log(this.$getters.listenConversation(chatID).sceneStage);
  if (sceneExist != undefined) {
    // console.log("THERE IS SCENES");
    if (this.getEllapseTime() >= 1000* 60 * 60 *12 ) {
      //1000 * 60 * 60 *12 
      hasChanged = true;
      newSceneIndex = currentSceneIndex + 1;
      if (newSceneIndex == 10) {
        newSceneIndex = 0;
        newActIndex = currentActIndex + 1;
      } else {
      }
    } else if (this.getEllapseTime() >= 1000 * 60 * 60 * 24) {
      //
      hasChanged = true;
      newSceneIndex = 0;
      newActIndex = currentActIndex + 1;
    }
    setScene = scenes[newSceneIndex];
    setAct = acts[newActIndex];
    SCENES_DATA = {
      setScene,
      newSceneIndex,
      setAct,
      newActIndex,
      hasChanged,
    };
    // console.log(SCENES_DATA);
    return SCENES_DATA;
  } else if (!sceneExist) {
    // console.log("NO SCENEC");
    return (SCENES_DATA = {
      hasChanged: false,
    });
    return;
  }

  // (`/messages/${messageId}`, message)

  // if(this.getEllapseTime() >= 2000 && nbMessages >=50){
  //     scene = [0]
  //     acte = actes[i+1]
  //     return acte + scene
  // }else if (this.getEllapseTime() >=10000){
  //   scene = [0]
  //     acte = actes[i+1]
  //     return acte + scene
  // }
}