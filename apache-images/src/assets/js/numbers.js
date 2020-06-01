$(function() {
    console.log("Loading numbers");
    function loadNumbers(){
        $.getJSON("/api/numbers/generateNumbers", function(numbers){
            console.log(numbers);
            var message = "No number";
            if(numbers.length>0){
                message = numbers[0].integer + " : " + numbers[0].floating;
            }
            $(".price").text(message);    
        });
    };
    loadNumbers();
    setInterval(loadNumbers, 2000);
});
