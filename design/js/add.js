$(document).ready(function(){
$ship=0;
    $summ=0;
    $trans=0;
    $('.k-Charge').click(function(){
        $('.selectItems').slideToggle()
        $( ".air , .standar" ).css( "display","none" );
        $( ".naval , .standar" ).css( "display","none" );
        if($ship == 0)
            $ship=$ship+1;
        else
            $ship=$ship-1;
        if($trans == 0)
        {
        if($summ==1 && $ship==1)
            {
                $( ".sumandship" ).css( "display","none" );
                $( ".dcases" ).css( "display","block" );
                $( ".astk" ).css( "display","none" );
            }
        else
            {
                $( ".astk" ).css( "display","block" );
                $( ".sumandship" ).css( "display","flex" );
               // $( ".dcases" ).css( "display","none" );
            }
        }
        else{
        if($trans == 1 && $ship == 1)
        {
            $( ".astk" ).css( "display","none" );
            $( ".sumandship" ).css( "display","none" );
            $( ".dcases2" ).css( "display","block" );
            //$(".standar3" ).css( "display","none" );

        }
            
        else
            {
                $( ".sumandship" ).css( "display","block" );
                $( ".astk" ).css( "display","block" );
                $( ".dcases2" ).css( "display","none" );
            }
        }
        

    })
    $('.k-Summarization').click(function(){
        $('.selectItems2').slideToggle()
        $( ".summAir , .standar2" ).css( "display","none" );
        $( ".summNaval , .standar2" ).css( "display","none" );
        if($summ == 0)
            $summ=$summ+1;
        else
            $summ=$summ-1;  
        if($summ==1 && $ship==1)
        {
            $( ".astk" ).css( "display","none" );
            $( ".sumandship" ).css( "display","none" );
            $( ".dcases" ).css( "display","block" );

        }
        
        else
            {
                $( ".sumandship" ).css( "display","flex" );
                $( ".astk" ).css( "display","flex" );
                $( ".dcases" ).css( "display","none" );
            }

    });
    
        $('.k-transport').click(function(){
        $('.selectItems3').slideToggle();
        $( ".transportingAir , .standar3" ).css( "display","none" );
        $( ".transportNaval , .standar3" ).css( "display","none" );
        if($trans == 0)
            $trans=$trans+1;
        else
            $trans=$trans-1;  
        if($trans==1 && $ship==1)
        {
            $( ".astk" ).css( "display","none" );
            $( ".sumandship" ).css( "display","none" );
            $( ".dcases2" ).css( "display","flex" );
        }
            
        else
            {
                $( ".sumandship" ).css( "display","block" );
                $( ".astk" ).css( "display","block" );
                $( ".dcases2" ).css( "display","none" );
            }
        
});


    /////////////////////////////////// naval shepping
        $("#creat").click(function(){
        $kind=$('.tes option:selected').val();
        $kindCounter=$('#kindCounter').val();
        $counter =1;
            $(".appendHere").append('<tr><td>مسح</td><td>'+ $kindCounter +'</td><td>'+ $kind +'</td><th scope="row">'+ $counter +'</th></tr>');
        $counter =$counter+1;

        })

            $("#countarBtnRemove").click(function(){
                 $('.counterRmove').remove();
                $('#countarValue').val(0);
            })
    /////////////////////////////////// end naval
        /////////////////////////////////// naval summrization
        $("#creatnew").click(function(){
            $kind=$('.newadd option:selected').val();
            $kindCounter=$('#kindCounterNew').val();
            $counter =1;
                $(".appendHereNew").append('<tr><td>مسح</td><td>'+ $kindCounter +'</td><td>'+ $kind +'</td><th scope="row">'+ $counter +'</th></tr>');
            $counter =$counter+1;
            })
    
                $("#countarBtnRemove").click(function(){
                     $('.counterRmove').remove();
                    $('#countarValue').val(0);
                })
        /////////////////////////////////// end naval
        /////////////////////////////////// naval transporting
            $("#creatnewT").click(function(){
                $kind=$('.kindtrans option:selected').val();
                $kindCounter=$('#kindCounterT').val();
                $counter =1;
                $(".appendHereT").append('<tr><td>مسح</td><td>'+ $kindCounter +'</td><td>'+ $kind +'</td><th scope="row">'+ $counter +'</th></tr>');
                $counter =$counter+1;})
                $("#countarBtnRemove").click(function(){
                $('.counterRmove').remove();
                $('#countarValue').val(0);})
        /////////////////////////////////// end naval
        
    
        /////////////////////////////////// air sheping
        $("#creat2").click(function(){
        $var=$('#to').val();
        $var1=$('#wedth').val();
        $var2=$('#height').val();
        $var3=$('#netweight').val();
        $var4=$('#grossweight').val();
        $var5=$('.counterair2').val();

        $counter =1;
            $(".appendHere").append('<tr><td>مسح</td><td>'+ $var5 +'</td><td>'+ $var4 +'</td><td>'+ $var3 +'</td><td>'+ $var +'</td><td>'+ $var1 +'</td><td>'+ $var2 +'</td><th scope="row">'+ $counter +'</th></tr>');
        $counter =$counter+1;

        })

            $("#countarBtnRemove").click(function(){
                 $('.counterRmove').remove();
                $('#countarValue').val(0);
            })
    /////////////////////////////////// end air
    /////////////////////////////////// air summr
    $("#creatair1").click(function(){
        $var=$('#to1').val();
        $var1=$('#wedth1').val();
        $var2=$('#height1').val();
        $var3=$('#netweight1').val();
        $var4=$('#grossweight1').val();
        $var5=$('.counterair1').val();

        $counter =1;
            $(".appendHereAir1").append('<tr><td>مسح</td><td>'+ $var5 +'</td><td>'+ $var4 +'</td><td>'+ $var3 +'</td><td>'+ $var +'</td><td>'+ $var1 +'</td><td>'+ $var2 +'</td><th scope="row">'+ $counter +'</th></tr>');
        $counter =$counter+1;

        })

            $("#countarBtnRemove").click(function(){
                 $('.counterRmove').remove();
                $('#countarValue').val(0);
            })
    /////////////////////////////////// end air
    /////////////////////////////////// air trans
    $("#creatair2").click(function(){
        $var=$('#to2').val();
        $var1=$('#wedth2').val();
        $var2=$('#height2').val();
        $var3=$('#netweight2').val();
        $var4=$('#grossweight2').val();
        $var5=$('.counterair').val();
        $counter =1;
            $(".appendHereAir2").append('<tr><td>مسح</td><td>'+ $var5 +'</td><td>'+ $var4 +'</td><td>'+ $var3 +'</td><td>'+ $var +'</td><td>'+ $var1 +'</td><td>'+ $var2 +'</td><th scope="row">'+ $counter +'</th></tr>');
        $counter =$counter+1;

        })

            $("#countarBtnRemove").click(function(){
                 $('.counterRmove').remove();
                $('#countarValue').val(0);
            })
    /////////////////////////////////// end air

    $("#countarBtn").click(function(){
        $counter=$('#countarValue').val();
        var i;
        for (i = 0; i < $counter; i++) { 
            $("#countars").append('<div class="col-md-12 mb-3 selectItems counterRmove" style="display:block" id=""><label for="exampleSelect1">نوع الحاوية</label><select class="form-control" id="exampleSelect1"><option disabled selected>اختار نوع الحاوية</option> <option class="k-NavalPort">وارد بحري</option><option>وارد جوي</option><option>صادر بحري</option><option>صادر جوي</option>        </select></div>');
        };
        })

            $("#countarBtnRemove").click(function(){
                 $('.counterRmove').remove();
                $('#countarValue').val(0);
            })
    ///////////////////////////////////////////////////
        
    $("#countarBtn2").click(function(){
        $counter=$('#countarValue2').val();
        var i;
        for (i = 0; i < $counter; i++) { 
            $("#countars2").append('<div class="col-md-12 mb-3 selectItems counterRmove2" style="display:block" id=""><label for="exampleSelect1">نوع الحاوية</label><select class="form-control" id="exampleSelect1"><option disabled selected>اختار نوع الحاوية</option> <option class="k-NavalPort">وارد بحري</option><option>وارد جوي</option><option>صادر بحري</option><option>صادر جوي</option>        </select></div>');
        };
        })

            $("#countarBtnRemove2").click(function(){
                 $('.counterRmove2').remove();
                $('#countarValue2').val(0);
            })
    
    /////////////////////////////////////
    
        $("#countarBtn3").click(function(){
        $counter=$('#countarValue3').val();
        var i;
        for (i = 0; i < $counter; i++) { 
            $("#countars3").append('<div class="col-md-12 mb-3 selectItems counterRmove2" style="display:block" id=""><label for="exampleSelect1">نوع الحاوية</label><select class="form-control" id="exampleSelect1"><option disabled selected>اختار نوع الحاوية</option> <option class="k-NavalPort">وارد بحري</option><option>وارد جوي</option><option>صادر بحري</option><option>صادر جوي</option>        </select></div>');
        };
        })

            $("#countarBtnRemove3").click(function(){
                 $('.counterRmove2').remove();
                $('#countarValue3').val(0);
            })
    
    /////////////////////////////////////
        
        
        $("#countarBtnAir").click(function(){
            $counterAir=$('#countarValueAir').val();
            var j;
            for (j = 0; j < $counterAir; j++) { 
                $("#countarsAir").append('<div class="col-md-4 col-sm-12 mb-3 counterRmoveAirstyle" style="display:block"><label for="validationServer01">ارتفاع</label><input type="text" class="form-control is-valid" id="validationServer01"   required><div class="valid-feedback">Looks good!</div></div><div class="col-md-4 col-sm-12 mb-3 counterRmoveAirstyle" style="display:block"><label for="validationServer02">عرض</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class=" counterRmoveAirstyle col-md-4 col-sm-12 mb-3" style="display:block"><label for="validationServer02">طول</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class=" counterRmoveAirstyle col-md-6 col-sm-12 mb-3" style="display:block"><label for="validationServer02">netweight</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class="counterRmoveAirstyle col-md-6 col-sm-12 mb-3" style="display:block"><label for="validationServer02"> grossweight</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div>');
            };
            
    })
         $("#countarBtnRemoveAir").click(function(){
                     $('.counterRmoveAirstyle').remove();
                    $('#countarValueAir').val(0);
                })
    //////////////////////////////////////////////////////
            
        
        $("#countarBtnAir3").click(function(){
            $counterAir=$('#countarValueAir3').val();
            var j;
            for (j = 0; j < $counterAir; j++) { 
                $("#countarsAir3").append('<div class="col-md-4 col-sm-12 mb-3 counterRmoveAirstyle" style="display:block"><label for="validationServer01">ارتفاع</label><input type="text" class="form-control is-valid" id="validationServer01"   required><div class="valid-feedback">Looks good!</div></div><div class="col-md-4 col-sm-12 mb-3 counterRmoveAirstyle" style="display:block"><label for="validationServer02">عرض</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class=" counterRmoveAirstyle col-md-4 col-sm-12 mb-3" style="display:block"><label for="validationServer02">طول</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class=" counterRmoveAirstyle col-md-6 col-sm-12 mb-3" style="display:block"><label for="validationServer02">netweight</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class="counterRmoveAirstyle col-md-6 col-sm-12 mb-3" style="display:block"><label for="validationServer02"> grossweight</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div>');
            };
            
    })
         $("#countarBtnRemoveAir3").click(function(){
                     $('.counterRmoveAirstyle').remove();
                    $('#countarValueAir3').val(0);
                })
    //////////////////////////////////////////////////////
    $("#countarBtnAir2").click(function(){
            $counterAir=$('#countarValueAir2').val();
            var j;
            for (j = 0; j < $counterAir; j++) { 
                $("#countarsAir2").append('<div class="col-md-4 col-sm-12 mb-3 counterRmoveAirstyle2" style="display:block"><label for="validationServer01">ارتفاع</label><input type="text" class="form-control is-valid" id="validationServer01"   required><div class="valid-feedback">Looks good!</div></div><div class="col-md-4 col-sm-12 mb-3 counterRmoveAirstyle2" style="display:block"><label for="validationServer02">عرض</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class=" counterRmoveAirstyle2 col-md-4 col-sm-12 mb-3" style="display:block"><label for="validationServer02">طول</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class=" counterRmoveAirstyle2 col-md-6 col-sm-12 mb-3" style="display:block"><label for="validationServer02">netweight</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div><div class="counterRmoveAirstyle2 col-md-6 col-sm-12 mb-3" style="display:block"><label for="validationServer02"> grossweight</label><input type="text" class="form-control is-valid" id="validationServer02"  required><div class="valid-feedback">Looks good!</div></div>');
            };
            
    })
         $("#countarBtnRemoveAir2").click(function(){
                     $('.counterRmoveAirstyle2').remove();
                    $('#countarValueAir2').val(0);
                })



})
function reload() {
    location.reload();
    //or
    //$(':input').val('');

}

$('#k-selected').change(function() {
  $str = "";
  $( "#k-selected option:selected" ).each(function() {
    $str += $( this ).text() + " ";
  });
  if($str === 'وارد بحري ' || $str === 'صادر بحري ')
  {
    $( ".air , .standar" ).css( "display","none" );
  $( ".naval , .standar" ).css( "display","block" );
  }
  if($str === 'وارد جوي ' || $str === 'صادر جوي ')
  {
    $( ".naval , .standar" ).css( "display","none" );
    $( ".air , .standar" ).css( "display","block" );


  }


})
.trigger( "change" );
$('#k-selected2' )
.change(function() {
  $str = "";
  $( "#k-selected2 option:selected" ).each(function() {
    $str += $( this ).text() + " ";
  });
  if($str === 'استخلاص بحري ' )
  {
    $( ".summAir , .standar2" ).css( "display","none" );
  $( ".summNaval , .standar2" ).css( "display","block" );
  }
  if($str === 'استخلاص جوي ' )
  {
    $( ".summNaval , .standar2" ).css( "display","none" );
    $( ".summAir , .standar2" ).css( "display","block" );


  }


})
.trigger( "change" );

$('#k-selected3' )
.change(function() {
  $str = "";
  $( "#k-selected3 option:selected" ).each(function() {
    $str += $( this ).text() + " ";
  });
  if($str === 'نقل بحري ' )
  {
    $( ".transportingAir , .standar3" ).css( "display","none" );
    $( ".transportNaval , .standar3" ).css( "display","block" );
  }
  if($str === 'نقل جوي ' )
  {
    $( ".transportNaval , .standar3" ).css( "display","none" );
    $( ".transportingAir , .standar3" ).css( "display","block" );


  }


})
.trigger( "change" );
