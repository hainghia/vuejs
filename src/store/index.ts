import Vuex from 'vuex'

const storeData = {
    state: {
        todos: [
            {
                id: 1,
                title: 'Job 1',
                completed: false
            },
            {
                id: 2,
                title: 'Job 2',
                completed: false
            },
            {
                id: 3,
                title: 'Job 3',
                completed: false
            }
        ],
        auth: {
            isAuthenticated: true
        }
    }
}

const store = new Vuex.Store(storeData)

export default store