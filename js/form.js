var botaoadd = document.querySelector("#adicionar-paciente")

        botaoadd.addEventListener("click", function(event){
                event.preventDefault()

                var form = document.querySelector("#form-adiciona")
                

                var paciente = obtempacientedoform(form)
                
                var pacientetr = montatr(paciente)

                if (!pacientevalida(paciente)){
                    return
                }

                var tabela = document.querySelector("#tabela-pacientes")
                tabela.appendChild(pacientetr)

                validacao()

                form.reset()
        })
               
        function obtempacientedoform(form){
            var paciente = {
                nome: form.nome.value,
                peso: form.peso.value,
                altura: form.altura.value,
                gordura: form.gordura.value,
                imc: calculoimc(form.peso.value, form.altura.value)
                
            }
            
            return paciente

        }
                
        function montatr(paciente){

            var pacientetr = document.createElement("tr")
            pacientetr.classList.add("paciente")

            pacientetr.appendChild(montatd(paciente.nome, "info-nome"))
            pacientetr.appendChild(montatd(paciente.peso, "info-peso"))
            pacientetr.appendChild(montatd(paciente.altura, "info-altura"))
            pacientetr.appendChild(montatd(paciente.gordura, "info-gordura"))
            pacientetr.appendChild(montatd(paciente.imc, "info-imc"))

            return pacientetr

        }

        function montatd(dado, classe){
            var td = document.createElement("td")
            td.textContent = dado
            td.classList.add(classe)

            return td
        }

        function pacientevalida(paciente){
            if (paciente.peso <= 0 || paciente.peso >= 600 || paciente.altura <= 0 || paciente.altura >=3){
                var erro = document.createElement("h1")
                erro.id = "erro-btn"
                                
                erro.textContent = "Dados do paciente adicionado estão inválidos"
        
                document.querySelector(".erro-div").appendChild(erro)

                return false
            }else{
                return true
            }
        }
        
                

                
                
                
                
                
                
                
                
                


        