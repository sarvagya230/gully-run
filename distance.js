class distance
{
    constructor()
    {
    }
    getDistance()
    {
    var distanceRef  = database.ref('player1');
    distanceRef.on("value",function(data){(
    Distance = data.val()
    )}}
    ;
    
    
    

    writeDistance(value)
    {
        
        database.ref('/').update({
      
            player1: value
          });
        
          
    }
