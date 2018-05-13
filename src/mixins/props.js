class Perfil {
  constructor(id ,datos){
    this.id = id
    this.marca = datos.marca
    this.modelo = datos.modelo
    this.año = datos.año
    this.foto = datos.foto

    console.log("Nomobre marca:"+ this.marca)
  }
}

export default{
  computed:{
      SetPerfil(id, datosPerfil) {
        this.props_docPerfil = new Perfil(id,datosPerfil)
      }

  },
  data(){

return{

  props_BlIsloggedIn:false,
  props_docPerfil:{}
}
}
}
