$(function(){
        let input = $('#input');
        let button = $('#add');
        let list = $('#list');

        button.click(function () {
            addtask();
        });

        function addtask(){
            let value = input.val();
            input.val("");
            list.append(
                $("<li>").append($('<span>')
                    .text(value).append($("<input type='checkbox'>").click(function () {
                        $(this).parent().parent().toggleClass("base");
                    }))).append($("<button>").text("X").click(function () {
                    $(this).parent().remove();
                })).append($("<button>").text("⬆").click(function () {
                    let current = $(this).closest('li');
                    current.prev().before(current);
                })).append($("<button>").text("⬇").click(function () {
                    let current = $(this).closest('li');
                    current.next().after(current);
                }))
            )
        }

    input.keypress(function (e) {
    if(e.which === 13){
        addtask();
    }
    });
        $('#del').click(
            ()=>{
                $('.base').remove();
            }
        )
});
