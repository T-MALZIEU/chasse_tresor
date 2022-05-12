
//PAGE POUR TESTER LA CREATION D'UN TABLEAU REMPLI DE DIV CLICKABLES
//

//Code de test pour qui se lance sur le click
function test(id) {
    console.log("Hello there !! " + id);
  }
//FONCTION DESSIN DU TABLEAU
function drawTableau(x,y,emplacement){
    let idstring=''
    let texte = '<table>'
    for(let xx = 1;xx<x+1;xx++){
        texte += '<tr>'
        for(let yy=1;yy<y+1;yy++){
            idstring=xx+"-"+yy
            texte += "<td id=" + idstring + ' class="la"   onclick="test(this.id)" >' +""+ "</td>"
        }
        texte +='</tr>'
    }
    texte += '</table>'
    document.getElementById(emplacement).innerHTML = texte

}

//FONCTION DECIDE DE LA POSITION DES TRUCS
function place(x,y){
    let idstring =''
    caseTable = document.getElementById(idstring);
    attribut=''

   
    let posX = Math.floor(Math.random() * x + 1) ;
    let posY = Math.floor(Math.random() * y + 1) ;
    idstring = posX+"-"+posY
    
    
    

    

    return(idstring)

}
//TODO :: ajouter un parametre "allignement" pour savoir si l'evenemaent est bon ou mal
function placeevent(x,y,n,alignement){
    for(let i = 1;i<=n;i++){
    
    caseTable = document.getElementById(place(x,y));
    if (alignement == 1)caseTable.setAttribute('class', 'good');
    else if (alignement == 2)caseTable.setAttribute('class', 'bad');
    else if(alignement==3)caseTable.setAttribute('class', 'mid');
    }
}



//dessine le tableau
drawTableau(10,10,'ici')
  