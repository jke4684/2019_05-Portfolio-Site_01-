function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 }
 
 
 function replay(){
                     draw(50, '.pie-chart1', '#3232FF');
                     draw(50, '.pie-chart2', '#66EC66');
                     draw(50, '.pie-chart3','#FF91C8');
                     draw(50, '.pie-chart4','#FFC31E');
                     draw(50, '.pie-chart5','#FF6A6A');
                     draw(90, '.pie-chart6','#BC50BC');
 }
