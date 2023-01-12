	
        var titulo = document.querySelector(".titulohtml");

        titulo.textContent = "Aparecida Nutrições";

        validacao()


        function calculoimc(peso,altura){
                var imc

                imc = peso / (altura * altura)

                return imc.toFixed(1);
        }

        function validacao(){
                var pacientev = document.querySelectorAll(".paciente")
                for (var i = 0; i < pacientev.length; i++){
                        
                        var peso = pacientev[i].querySelector(".info-peso").textContent
                        var altura = pacientev[i].querySelector(".info-altura").textContent
                        var validarpeso = true
                        var validaraltura = true
                        
                        if (peso <= 0 || peso >= 600){
                                pacientev[i].querySelector(".info-peso").textContent = (peso) + " É Um Peso Inválido"
                                pacientev[i].classList.add("paciente-invalido")
                                validarpeso = false
                                
                        }
                
                        if (altura <= 0 || altura >= 3){
                                pacientev[i].querySelector(".info-altura").textContent = (altura) + " É Uma Altura Inválida"
                                pacientev[i].classList.add("paciente-invalido")
                                validaraltura = false
                                
                        }
                        
                        if (validarpeso && validaraltura){
                        var contaIMC = calculoimc(peso,altura)
                        pacientev[i].querySelector(".info-imc").textContent = contaIMC
                        }
                }
                

                        return validacao
                       
                        
                        
                        
                        
                        

                        
                        
                        
                    
                
        
                        
                
                        
        

                
        }

        


