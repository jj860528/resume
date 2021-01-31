import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVpJe2882o24RSqPZiulPRXxwKiDTss-c",
  authDomain: "blog-b8466.firebaseapp.com",
  databaseURL: "https://blog-b8466.firebaseio.com",
  projectId: "blog-b8466",
  storageBucket: "blog-b8466.appspot.com",
  messagingSenderId: "519041697145",
  appId: "1:519041697145:web:4fcbb6e87ff9695aef1ba8",
  measurementId: "G-5NB5LGHTP6"
};

/*const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");*/


//初始化
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//獲取初始資料
const projectRef = db.collection("projects")
const project = []
//所有子集合
//projects
projectRef.get().then((data) => {
  data.forEach((doc) => {
    project.push(doc.data())
  })
})

//articles
const articlesRef = db.collection("articles")
const articles = []
articlesRef.get().then((data) => {
  data.forEach((doc) => {
    const article = doc.data()
    article["id"] = doc.id
    articles.push(article)
  })
})

export function setArticle(sort, data) {
  const Ref = db.collection(sort).doc();
  console.log(data)
  let setSf = Ref.set(data)
  .then(function () {
    alert("Document successfully written!");
  })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}
/*function setproject() {
  const Ref = db.collection("projects").doc();
  let data = {}
  data["name"] = "2048小遊戲"
  data["ID"] = "project03"
  data["img"] = "https://i.imgur.com/apVFMh2.png"
  data["Date"] = new Date()
  data["url"] = "https://jj860528.github.io/2048/"
  data["introduction"] = "各種觸控方式的應用"
  data["skills"] = [
    {"skill":"Vue"},
    {"skill":"滑鼠觸控"},
    {"skill":"手指觸控"},
    {"skill":"鍵盤控制"},
  ]
  let setSf = Ref.set(data)
  .then(function () {
    alert("Document successfully written!");
  })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}
setproject()
*/
//匯出至store
export default { db, project, articles };