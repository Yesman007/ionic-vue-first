import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                  id: "m1",
                  image:
                    "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
                  title: "m1 - A trip into the mountains",
                  description: "It was a good trip",
                },
                {
                  id: "m2",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mavericks_Surf_Contest_2010b.jpg",
                  title: "m2 - Surfing in Cape Town",
                  description: "I can't surf",
                },
                {
                  id: "m3",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/0/06/Sabi_sabi_game_drive.jpg",
                  title: "m3 - Safari in Tanzania",
                  description: "It is beautiful",
                },
              ],
        };
    },
    getters: {
        memories(state){
            return state.memories;
        }
    }
})

export default store;