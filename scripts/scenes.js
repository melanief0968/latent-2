import * as fb from "./firebase.js";

export function setFirstScene() {
    this.sentTime = this.getTime();
    const didascalie = `Acte I, scène I`;
    const base = this.getBaseMsg();
    const didMessage = {
      ...base,
      messageType: "did",
      sentTime: this.sentTime,
      didascalie,
      // didType:this.didType
    };

    this.sendMessage(didMessage);
    //   let chatID = this.$getters.currentChatID()
    //   let conversation = this.$getters.listenConversation(chatID)
    //   const messages = [];
    //   if (conversation && conversation.messages) {
    //   Object.keys(conversation.messages).forEach((messageId) => {
    //    const message = this.$getters.listenMessage(messageId);
    //     if(message.messageType == "msg"){
    //      return
    //     }
    //   });
    // }else{
    //   //send didascalie Acte I scene I
    // }
  }
  function setScenes() {
    //prettier-ignore
    let scenes = ["scène I","scène II","scène III","scène IV","scène V","scène VI","scène VII","scène VIII","scène IX","scène X"];
    //prettier-ignore
    let acts = ["Acte I","Acte II","Acte III","Acte IV","Acte V","Acte VI","Acte VII","Acte VIII","Acte IX","Acte X"];
    let chatID = this.$getters.currentChatID();
    let currentSceneIndex =
      this.$getters.listenConversation(chatID).sceneStage;
    let currentActIndex = this.$getters.listenConversation(chatID).actStage;
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
  changeScene(time) {
    if (this.setScenes().hasChanged == true) {
      // console.log("it was true");
      let chatID = this.$getters.currentChatID();
      fb.setValue(
        `/conversations/${chatID}/sceneStage/`,
        this.setScenes().newSceneIndex
      );
      fb.setValue(
        `/conversations/${chatID}/actStage/`,
        this.setScenes().newActIndex
      );
      this.sentTime = this.getTime();
      console.log("time of scene: " + this.sentTime)
      const didascalie = `${this.setScenes().setAct}, ${
        this.setScenes().setScene
      }`;
      let timeBetweenMessages = this.getEllapseTime();
      let timeData = this.getTimeDatas(timeBetweenMessages);
      const didascalieTime = `${timeData} passent.`;

      const sceneSentence = this.getSceneSentence();
      
      const base = this.getBaseMsg();
    
      const didMessage = {
        ...base,
        messageType: "did",
        sentTime: time,
        didascalie,
        // didType:this.didType
      };
      // console.log(sceneSentence)
      const didTimeMessage = {
        ...base,
        messageType: "didTime",
        sentTime: time+1,
        didascalieTime,
        // didType:this.didType
      };
              // console.log(sceneSentence)

      this.sendMessage(didMessage);
      this.sendMessage(didTimeMessage);

      // console.log(
      //   this.$getters.listenConversation(chatID).sceneStage,
      //   this.$getters.listenConversation(chatID).actStage
      // );
    } else {
      return;
    }
  }
  getSceneSentence(){
    let pushScene = null;
    const indexNbr = did["initScenes"]["scene"].length;
    const index = Math.floor(Math.random() * indexNbr)
    pushScene = did["initScenes"]["scene"][index]({
        time: "3 minutes",
      })
      // console.log(pushScene);
    return pushScene
  }