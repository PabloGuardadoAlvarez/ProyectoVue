import firebase from 'firebase'
import {EventBus} from "../../Events/Events_Bus";


export default {
  name: 'login-register',
  components: {},
  props: [],
  data () {
    return {
        bllogin:true,

        remail: "",
        rpsw: "",
        rnick:"",
        rfdn:"",
        rnombre:"",

        lemail: "",
        lpsw: "",
    }
  },
  created: function(){

    firebase.auth().onAuthStateChanged((user) =>{
      if (user){
        var that=this
        this.props_BlIsloggedIn = true
        var docRef = firebase.firestore().collection("PerfilesWeb").doc(user.uid+"");
        docRef.get().then(function(doc) {
          if (doc.exists) {
            //console.log("Document data:", doc.data());
            that.SetPerfil(doc.id,doc.data())
          } else {
            // doc.data() will be undefined in this case
            console.log("No Existe ese Perfil!");
          }
        }).catch(function(error) {
          console.log("Error getting document:", error);
        });
      }else{
        this.props_BlIsloggedIn = false
      }
      EventBus.$emit('loginregister_userstatechabged', this.props_BlIsloggedIn)
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
        var that=this
      firebase.auth().createUserWithEmailAndPassword(this.remail, this.rpsw).then(
      function(user){
        var docRef = firebase.firestore().collection("PerfilesWeb")
        docRef.doc(user.uid+"").set({Nombre:that.rnombre,Nick:that.rnick,FechaDeNacimiento:that.rfdn})
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
    Logout : function(event) {

        firebase.auth().signOut()
    },
  }
}
