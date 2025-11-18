let temas = ["T1","T2","T3","T4","T5"];
//o forEach faz com que seja possivel percorrer os varios ids adicionados
temas.forEach(id =>{
    document.getElementById(id).addEventListener("click",function funcao() {
        //this.id mostra o id que foi escolhido entre o vários selecionados
        if (this.id=="T1"){
            document.body.style.backgroundColor = "#7634C7";
        }else if (this.id=="T2"){
            document.body.style.backgroundColor ="#C7347B";
        }else if (this.id=="T3"){
            document.body.style.backgroundColor ="#8E70E6";
        }else if (this.id=="T4"){
                document.body.style.backgroundColor ="#82D63C";
        }else if (this.id=="T5"){
                document.body.style.backgroundColor ="#000000";
            };
    });
});