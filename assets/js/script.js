$(function(){                               //declare fonction
    $(document).ready(function(){
        //au passage de la souris ...
        $('.color').hover(function() {
            $('#text').css('color', $(this).attr('id'));    //change la couleur en fonction de l'id de la div survolé
        },function() {                                      //quand la souris ne survole aucune dive
            $('#text').css('color', 'black');               //application de la couleur par défaut
        });
    });
});
