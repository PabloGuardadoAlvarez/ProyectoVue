import firebase from 'firebase'

export default {
  name: 'login-register',
  components: {},
  props: [],
  data () {
    return {
        bllogin:true,

        remail: "",
        rpsw: "",

        lemail: "",
        lpsw: "",
    }
  },
  beforeCreated: function(){

    firebase.auth().onAuthStateChanged((user) =>{
      if (user){
        this.props_BlIsloggedIn = true
      }else{
        this.props_BlIsloggedIn = false
      }
    });
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
        },

      btnaceptarregistro: function(event) {

      firebase.auth().createUserWithEmailAndPassword(this.remail, this.rpsw).then(
      function(user){

          alert("Te has registraste con exito");
        }

);
},

        btnaceptarlogin: function(event) {
          firebase.auth().signInWithEmailAndPassword(this.lemail,this.lpsw).then(
            function(user) {

            alert("Te has logeado con exito");
          }

);
},
  }
}
