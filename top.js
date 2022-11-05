//ボタンを押すごとに画面が切り替わる関数
$(function () {
    $(".test_btn").on("click", function () {
        //test_btnクラスをクリック後の関数処理
        $(this).closest("div").css("display", "none");
        //質問画面の親要素divをdisplay:none;にする
        id = $(this).attr("href");
        //次の質問hrefをidに格納
        $(id).addClass("fit").fadeIn("slow").show();
        //次の質問にfitをつけて出力。
    });

    // 「TOPへ戻る」を押すとスタート画面に戻る




    // 回答をクリックした時に、それぞれ1カウントする
    let q1 = 0;
    let q2 = 0;
    let q3 = 0;
    let q4 = 0;
    let q5 = 0;

    $("#test1").on("click", function () {
        q1++;
        console.log("Q1=YES");
    });

    $("#test2").on("click", function () {
        q2++;
        console.log("Q2=YES");
    });

    $("#test3").on("click", function () {
        q3++;
        console.log("Q3=YES");
    });

    $("#test4").on("click", function () {
        q4++;
        console.log("Q4=YES");
    });

    $("#test5").on("click", function () {
        q5++;
        console.log("Q5=YES");
    });



    // 最後の質問(.test_btn_end)ボタンを押すと質問回答の結果に対応した結果が表示される
    $('.test_btn_end').on('click', function () {
        if (q1 == 0 && q2 == 0 && q3 == 0 && q4 == 0 && q5 == 0) {
            $("#answer_pattern1").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 0 && q4 == 0 && q5 == 0) {
            $("#answer_pattern2").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 0 && q4 == 0 && q5 == 0) {
            $("#answer_pattern3").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 1 && q4 == 0 && q5 == 0) {
            $("#answer_pattern4").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 0 && q4 == 1 && q5 == 0) {
            $("#answer_pattern5").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 0 && q4 == 0 && q5 == 1) {
            $("#answer_pattern6").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 0 && q5 == 0) {
            $("#answer_pattern7").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 0 && q4 == 1 && q5 == 0) {
            $("#answer_pattern8").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 0 && q4 == 0 && q5 == 1) {
            $("#answer_pattern9").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 1 && q4 == 1 && q5 == 0) {
            $("#answer_pattern10").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 1 && q4 == 0 && q5 == 1) {
            $("#answer_pattern11").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 0 && q4 == 1 && q5 == 1) {
            $("#answer_pattern12").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 1 && q5 == 0) {
            $("#answer_pattern13").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 0 && q5 == 1) {
            $("#answer_pattern14").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 0 && q4 == 1 && q5 == 1) {
            $("#answer_pattern15").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 1 && q4 == 1 && q5 == 1) {
            $("#answer_pattern16").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 1 && q5 == 1) {
            $("#answer_pattern17").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 0 && q5 == 0) {
            $("#answer_pattern18").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 1 && q4 == 0 && q5 == 0) {
            $("#answer_pattern19").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 1 && q5 == 0) {
            $("#answer_pattern20").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 0 && q5 == 1) {
            $("#answer_pattern21").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 1 && q4 == 1 && q5 == 0) {
            $("#answer_pattern22").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 1 && q4 == 0 && q5 == 1) {
            $("#answer_pattern23").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 1 && q5 == 1) {
            $("#answer_pattern24").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 1 && q4 == 1 && q5 == 1) {
            $("#answer_pattern25").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 1 && q4 == 0 && q5 == 0) {
            $("#answer_pattern26").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 1 && q4 == 1 && q5 == 0) {
            $("#answer_pattern27").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 1 && q4 == 0 && q5 == 1) {
            $("#answer_pattern28").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 1 && q4 == 1 && q5 == 1) {
            $("#answer_pattern29").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 0 && q4 == 1 && q5 == 0) {
            $("#answer_pattern30").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 0 && q4 == 1 && q5 == 1) {
            $("#answer_pattern31").css("display", "");
            $("#testbox5").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 0 && q4 == 0 && q5 == 1) {
            $("#answer_pattern32").css("display", "");
            $("#testbox5").css("display", "none");
        }

    });

});