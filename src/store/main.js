import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () =>({
    name: '超级管理员'
  }),
   // getters
   getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data){
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    }
  },
})
