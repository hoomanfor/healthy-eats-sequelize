$(function() {
    $("select").change(function() {
        $("select").each(function() {
            if ($(this).val()) {
            let id = $(this).data("id");
            $(".consume[data-id='" + id + "']").css("background-color", "#007bff");
            } else {
                let id = $(this).data("id");
                $(".consume[data-id='" + id + "']").css("background-color", "grey");
            }
        });
    })
    $("[type='submit']").on("click", function(event) {
        event.preventDefault(); 
        const eat = $("[name='eat']").val().trim();
        const newEat = {
            "eat": eat
        }
        if (eat === "") {
            $(".error").html("Please enter a food item.");
        } else {
            $.ajax({
                url: "/api/eats",
                type: "POST",
                data: newEat
            }).then(() => {
                console.log("food item added!")
                location.reload(); 
            })
        }
    });
    $(".consume").on("click", function(event) {
        let id = $(this).data("id");
        let selection = $(".moment-" + id).val();
        if (selection) {
        const eaten = {
            "consumed": true
        };
        $.ajax({
            url: "/api/eats/" + id,
            type: "PUT",
            data: eaten
        }).then(() => {
            console.log("food item has been eaten!")
            location.reload(); 
        })
    }
    })
});