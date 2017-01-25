$(document).ready(function() {

        $(".row").show();
        var windowWidth=$(window).width();;
        console.log($( window ).width());

        if(windowWidth < 415)
            {
                $('.listBlock').show();
                $('.detailBlock').hide();


                $("a").click(function(){
                    $('.listBlock').hide();
                    $('.detailBlock').show();               
    
                });
            }

        if(windowWidth > 415)
            {
                $('.listBlock').show();
                $('.detailBlock').show();
                $('.but').hide();
            }

        $(window).on('resize', function(event){
                    location.reload();
 
        });

        $.getJSON('https://dinosaur-facts.firebaseio.com/dinosaurs.json', function(item){
 
            var a="<div> <p>"+"bruhathkayosaurus"+"</p> <p>"+"appeared : "+item.bruhathkayosaurus.appeared+"</p> <p>"+"heigth : "+item.bruhathkayosaurus.height+"</p> <p>"+"length : "+item.bruhathkayosaurus.length+"</p> <p>"+"order : "+item.bruhathkayosaurus.order+"</p> <p>"+"vanished : "+item.bruhathkayosaurus.vanished+"</p> <p>"+"weight : "+item.bruhathkayosaurus.weight+"</p> </div>";

            var b="<div> <p>"+"lambeosaurus"+"</p> <p>"+"appeared : "+item.lambeosaurus.appeared+"</p> <p>"+"heigth : "+item.lambeosaurus.height+"</p> <p>"+"length : "+item.lambeosaurus.length+"</p> <p>"+"order : "+item.lambeosaurus.order+"</p> <p>"+"vanished : "+item.lambeosaurus.vanished+"</p> <p>"+"weight : "+item.lambeosaurus.weight+"</p> </div>";

            var c="<div> <p>"+"linhenykus"+"</p> <p>"+"appeared : "+item.linhenykus.appeared+"</p> <p>"+"heigth : "+item.linhenykus.height+"</p> <p>"+"length : "+item.linhenykus.length+"</p> <p>"+"order : "+item.linhenykus.order+"</p> <p>"+"vanished : "+item.linhenykus.vanished+"</p> <p>"+"weight : "+item.linhenykus.weight+"</p> </div>";

            var d="<div> <p>"+"pterodactyl"+"</p> <p>"+"appeared : "+item.pterodactyl.appeared+"</p> <p>"+"heigth : "+item.pterodactyl.height+"</p> <p>"+"length : "+item.pterodactyl.length+"</p> <p>"+"order : "+item.pterodactyl.order+"</p> <p>"+"vanished : "+item.pterodactyl.vanished+"</p> <p>"+"weight : "+item.pterodactyl.weight+"</p> </div>";

            var e="<div> <p>"+"stegosaurus"+"</p> <p>"+"appeared : "+item.stegosaurus.appeared+"</p> <p>"+"heigth : "+item.stegosaurus.height+"</p> <p>"+"length : "+item.stegosaurus.length+"</p> <p>"+"order : "+item.stegosaurus.order+"</p> <p>"+"vanished : "+item.stegosaurus.vanished+"</p> <p>"+"weight : "+item.stegosaurus.weight+"</p> </div>";

            var f="<div> <p>"+"triceratops"+"</p> <p>"+"appeared : "+item.triceratops.appeared+"</p> <p>"+"heigth : "+item.triceratops.height+"</p> <p>"+"length : "+item.triceratops.length+"</p> <p>"+"order : "+item.triceratops.order+"</p> <p>"+"vanished : "+item.triceratops.vanished+"</p> <p>"+"weight : "+item.triceratops.weight+"</p> </div>";

            

            $('#1').click(function(){
                $(".row").empty();
                $(".row").append(a);
                //console.log(a);
                //alert("it worked a"); 
            });
            $('#2').click(function(){
                $(".row").empty();
                $(".row").append(b);
                //console.log(b);
                //alert("it worked b"); 
            });
            $('#3').click(function(){
                $(".row").empty();
                $(".row").append(c);
                //console.log(c);
                //alert("it worked c"); 
            });
            $('#4').click(function(){
                $(".row").empty();
                $(".row").append(d);
                //console.log(d); 
                //alert("it worked d");
            });
            $('#5').click(function(){
                $(".row").empty();
                $(".row").append(e); 
                //console.log(e);
                //alert("it worked e");
            });
            $('#6').click(function(){
                $(".row").empty();
                $(".row").append(f); 
                //console.log(f);
                //alert("it worked f");
            }); 

        });

    
   

        $(".but").click(function(){
            $('.listBlock').show();
            $('.detailBlock').hide();
        });

  });


