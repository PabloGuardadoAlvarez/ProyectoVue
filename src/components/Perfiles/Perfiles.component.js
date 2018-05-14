import firebase from 'firebase';
import {EventBus} from "../../Events/Events_Bus";

class Perfil {
  constructor(id ,datos){
    this.id = id
    this.marca = datos.marca
    this.modelo = datos.modelo
    this.fechaCompra = datos.fechaCompra
    this.foto = datos.foto
    this.categoria = datos.categoria
    this.nombre = datos.nombre
    this.precio = datos.precio
    this.review = datos.review

    console.log("Nomobre marca:"+ this.marca)
  }
}

export default {
  name: 'perfiles',
  components: {},
  props: [],
  data () {
    return {
      Perfiles:[]
    }
  },

  created: function(){


  },
  computed: {

  },
  mounted () {
    EventBus.$on('loginregister_userstatechabged', blestado => {
      if(blestado){
      this.DescargarPerfiles();

      }

    });
  },
  methods: {
    DescargarPerfiles:function(){
      var that=this
      firebase.firestore().collection("reviews").onSnapshot(function(querySnapshot) {
        that.Perfiles=[]
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          that.Perfiles.push(new Perfil(doc.id,doc.data()))
        });
      });

    }
  }
}
