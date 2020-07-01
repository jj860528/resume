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

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
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
const articlesRef= db.collection("articles")
const articles = []
articlesRef.get().then((data) => {
  data.forEach((doc) => {
    articles.push(doc.data())
  })
})

/*新增資料
const citiesRef = db.collection('//文件名//');

let setSf = citiesRef.doc("//放入文件名+id//").set({
  //放入data
});*/

//匯出至store
export default { project , articles};