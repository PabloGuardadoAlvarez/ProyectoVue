export default {
  name: 'login-register',
  components: {},
  props: [],
  data () {
    return {
        bllogin:true
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
      btnRegistrar1: function(event){
          this.bllogin=false
        },
      btncancelar: function(event) {
          this.bllogin=true
        }
  }
}
