import Vuex, {createStore, StoreOptions} from "vuex";
import authModule from "@/store/modules/auth";
import {RootState} from "@/store/types/types";

const store: StoreOptions<RootState> = createStore({
    state: {
        helloMessage: 'kukun'
    },

    modules: {
        authModule,
    }
})

export default new Vuex.Store<RootState>(store)