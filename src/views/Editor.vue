<template>
  <div class="editor">
    <div>
      <form>
        <label>主題名:</label>
        <input v-model="name" placeholder="主題名" />

        <label>屬性</label>
        <input v-model="type" placeholder="可能的標籤" />

        <label>圖片地址</label>
        <input v-model="img" placeholder="略縮圖地址" />

        <label>id</label>
        <input v-model="id" placeholder="ex:01,02" />

        <label>介紹</label>
        <input v-model="introduction" placeholder="ex:介紹一下 通常複製前言貼上就好" />
      </form>
    </div>
    <button @click="setFirebase">確認</button>
    <quillEditor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quillEditor>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import {setArticle,db} from "@/firebase"
export default {
  data() {
    return {
      name: "",
      type: "",
      img: "",
      id: "",
      introduction:"",
      date: new Date(),
      content: "<p>多寫一點</p>", //雙向數據綁定數據
      editorOption: {} //編輯器配置項
    };
  },
  methods: {
    onEditorBlur() {}, // 失去焦點觸發事件
    onEditorFocus() {}, // 獲得焦點觸發事件
    onEditorChange() {
      console.log(this.content);
    }, // 內容改變觸發事件
    setFirebase: function(){
      const article = {}
      article["name"] = this.name
      article["type"] = this.type
      article["img"] = this.img
      article["id"] = this.id
      article["date"] = this.date
      article["content"] = this.content
      article["introduction"] = this.introduction
      setArticle(this.id, article)
    }
  },
  components: {
    quillEditor
  }
};
</script>


