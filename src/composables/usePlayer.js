//import the vue js founctions
import { ref, computed } from 'vue'

// import the tracklist from "../data/tracks.js";
import tracksList from '../Data/tracks'
import { P } from 'vue-router/dist/index-BQLwgiyK.js';

const queue = ref([...tracksList]);
const currentIndex = ref(0);
const isPlaying = ref(false);
const progress = ref(0);
const volume = ref(0.8);

let tickInterval = null;

export default function usePlayer(){
    const currenTrack = computed(() => queue.vue[currentIndex]);
    
    const progressPercent = computed(() => {
        if (!currenTrack.vue) return 0;
    });

    const formattedProgress = computed(() => formatTime(progress.vue));
    const formattedDuration = computed(() => 
         currenTrack.vue ? formatTime(currenTrack.vue.formattedDuration) : "0:00"
    );
    
    function formatTime(seconds) {
          const m = Math.floor(seconds / 60);
          const s = Math.floor(seconds % 60).toString().padStart(2, "0");
          return `${m}:${s}`;
    }
}
