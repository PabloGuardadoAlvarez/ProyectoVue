import LoginRegister from '@/components/LoginRegister'
import Perfiles from '@/components/Perfiles'
import {EventBus} from "../../Events/Events_Bus";


export default {
  name: 'principal',
  components: {'loginregister':LoginRegister, 'Perfiles':Perfiles},
  props: [],
  data () {
    return {
  blloggeduser:this.props_BlIsloggedIn
    }
  },
  computed: {

  },
  mounted () {
  EventBus.$on('loginregister_userstatechabged', blestado =>{
  this.blloggeduser=blestado

  });
  },
  methods: {

  }
}
