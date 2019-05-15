const state = {
    memos: [],
    currentMemo: {},
}

const getters = {}

const actions = {
    async fetchMemos ({ commit }) {
        const memosString = localStorage.getItem("memos")
        if (memosString === undefined || memosString === null) {
            return
        }
        const memos = JSON.parse(memosString)
        commit('setMemos', memos)
    },
    async fetchMemo ({ commit }, id) {
        const memosString = localStorage.getItem("memos")
        if (memosString === undefined || memosString === null) {
            return
        }
        const memos = JSON.parse(memosString)
        commit('setMemos', memos)

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
        localStorage.setItem('memos', JSON.stringify(memos))
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