const state = {
    memos: [
        {
            id: "a1",
            title: "1234",
            content: "1234567",
        },
        {
            id: "a2",
            title: "abcd",
            content: "abcd",
        },
    ],
    currentMemo: {},
}

const getters = {}

const actions = {
    async fetchMemos ({ commit }) {
        return
        const memos = localStorage.getItem("memos")
        if (memos === undefined || memos === null) {
            return
        }
        commit('setMemos', memos)
    },
    async fetchMemo ({ commit }, id) {
        //const memos = localStorage.getItem("memos")
        const memos = state.memos
        if (memos === undefined || memos === null) {
            //return
        }
        //commit('setMemos', memos)

        const memo = memos.find(tmp => tmp.id === id)
        if (memo === undefined || memo === null) {
            return
        }
        commit('setCurrentMemo', memo)
    },
    async updateMemo ({ commit }) {
        let memos = state.memos
        const max = memos.length
        if (max === 0) {
            return
        }

        for (let i = 0; i < max; i++) {
            if (memos[i].id === state.currentMemo.id) {
                memos[i] = state.currentMemo
                break
            }
        }
        commit('setMemos', memos)
        //localStorage.setItem('memos', memos)
    },
    async addMemo ({ commit }, memo) {
        let memos = state.memos
        memos.push(memo)
        commit('setMemos', memos)
        commit('setCurrentMemo', memo)
    },
}

const mutations = {
    setMemos (state, memos) {
        state.memos = memos
    },
    setCurrentMemo (state, memo) {
        state.currentMemo = memo
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}