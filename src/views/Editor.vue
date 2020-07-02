<template>
  <div class = "editor">
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

export default {
  data() {
    return {
      content: "<p>這是vue-quill-editor 的內容！</p>", //雙向數據綁定數據
      editorOption: {} //編輯器配置項
    };
  },
  methods: {
    onEditorBlur() {}, // 失去焦點觸發事件
    onEditorFocus() {}, // 獲得焦點觸發事件
    onEditorChange() {
      console.log(this.content);
    } // 內容改變觸發事件
  },
  components: {
    quillEditor
  }
};
</script>


