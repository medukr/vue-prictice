export default {
    install(Vue, options){
        Vue.prototype.$message = function (html){
            //M.toast({html:html})
            M.toast({html}) //тоже самое
        }

        Vue.prototype.$error = function (html){
            M.toast({html:`[Ощибка]: ${html}`})
        }
    }
}