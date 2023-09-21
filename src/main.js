import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faNoteSticky,faCalendar,faCirclePlus,faPenToSquare,faCaretLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faNoteSticky,faCalendar,faCirclePlus,faPenToSquare,faCaretLeft)

createApp(App).use(router).use(bootstrap).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
