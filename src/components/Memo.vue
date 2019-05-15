<template>
  <div>
    <quill-editor v-model="memo.content" :options="editorOpt" @change="onEditorChange($event)">
      <div id="toolbar" slot="toolbar">
        <button class="ql-bold">Bold</button>
        <button class="ql-italic"></button>
        <button class="ql-underline"></button>
        <button class="ql-strike"></button>
        <select class="ql-size">
          <option value="small"></option>
          <option selected></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>
        <select class="ql-font">
          <option selected="selected"></option>
          <option value="serif"></option>
          <option value="monospace"></option>
        </select>

        <select class="ql-color">
          <option selected="selected"></option>
          <option value="#e60000"></option><option value="#ff9900"></option><option value="#ffff00"></option><option value="#008a00"></option><option value="#0066cc"></option><option value="#9933ff"></option><option value="#ffffff"></option><option value="#facccc"></option><option value="#ffebcc"></option><option value="#ffffcc"></option><option value="#cce8cc"></option><option value="#cce0f5"></option><option value="#ebd6ff"></option><option value="#bbbbbb"></option><option value="#f06666"></option><option value="#ffc266"></option><option value="#ffff66"></option><option value="#66b966"></option><option value="#66a3e0"></option><option value="#c285ff"></option><option value="#888888"></option><option value="#a10000"></option><option value="#b26b00"></option><option value="#b2b200"></option><option value="#006100"></option><option value="#0047b2"></option><option value="#6b24b2"></option><option value="#444444"></option><option value="#5c0000"></option><option value="#663d00"></option><option value="#666600"></option><option value="#003700"></option><option value="#002966"></option><option value="#3d1466"></option>
        </select>

        <select class="ql-background">
          <option value="#000000"></option><option value="#e60000"></option><option value="#ff9900"></option><option value="#ffff00"></option><option value="#008a00"></option><option value="#0066cc"></option><option value="#9933ff"></option><option selected="selected"></option><option value="#facccc"></option><option value="#ffebcc"></option><option value="#ffffcc"></option><option value="#cce8cc"></option><option value="#cce0f5"></option><option value="#ebd6ff"></option><option value="#bbbbbb"></option><option value="#f06666"></option><option value="#ffc266"></option><option value="#ffff66"></option><option value="#66b966"></option><option value="#66a3e0"></option><option value="#c285ff"></option><option value="#888888"></option><option value="#a10000"></option><option value="#b26b00"></option><option value="#b2b200"></option><option value="#006100"></option><option value="#0047b2"></option><option value="#6b24b2"></option><option value="#444444"></option><option value="#5c0000"></option><option value="#663d00"></option><option value="#666600"></option><option value="#003700"></option><option value="#002966"></option><option value="#3d1466"></option>
        </select>

        <select class="ql-align"><option selected="selected"></option><option value="center"></option><option value="right"></option><option value="justify"></option></select>

        <button @click="onClickPicture"><i class="icon-picture"></i></button>
      </div>
    </quill-editor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import Vue from 'vue'
import { quillEditor } from 'vue-quill-editor'
import { mapState } from 'vuex'
import { uuid } from 'vue-uuid'

Vue.use(uuid);

export default {
  name: 'Memo',
  components: {
      quillEditor
  },
  data () {
    return {
      editorOpt: {
        modules: {
          toolbar: '#toolbar'
        }
      },
      isNew: false,
      title: '',
    }
  },
  computed: mapState({
    memo: state => state.memos.currentMemo,
  }),
  methods: {
    init () {
      if (typeof this.$route.params.id !== "undefined") {
        this.isNew = false
        this.$store.dispatch('memos/fetchMemo', this.$route.params.id).catch((e) => {
          console.log(e)
        })
      } else {
        const memo = {
          id: uuid.v4(),
          title: '新規メモ',
          content: '',
        }
        this.$store.dispatch('memos/addMemo', memo)
      }
    },
    onClickPicture () {
    },
    onEditorChange({ quill, html, text }) {
      //setTimeout(this.updateMemo, 5000)
      this.memo.title = text.slice(0, 8).replace(/\r?\n/g, '')
      this.updateMemo()
    },
    updateMemo () {
      this.$store.dispatch('memos/updateMemo').catch((e) => {
        console.log(e)
      })
    },
  },
  created () {
      this.init()
  },
  watch: {
    '$route': function () {
      this.init()
    }
  },
}
</script>

<style>
.ql-container.ql-snow {
  border: 0px;
}

.ql-toolbar.ql-snow {
  border-top: 0px;
  border-bottom: 1px solid #eee;
  border-left: 0px;
  border-right: 0px;
}
</style>
