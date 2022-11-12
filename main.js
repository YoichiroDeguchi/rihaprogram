/* -----------------
    質問ページ
-----------------*/

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
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 0 && q4 == 0 && q5 == 0) {
            $("#answer_pattern2").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 0 && q4 == 0 && q5 == 0) {
            $("#answer_pattern3").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 1 && q4 == 0 && q5 == 0) {
            $("#answer_pattern4").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 0 && q4 == 1 && q5 == 0) {
            $("#answer_pattern5").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 0 && q4 == 0 && q5 == 1) {
            $("#answer_pattern6").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 0 && q5 == 0) {
            $("#answer_pattern7").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 0 && q4 == 1 && q5 == 0) {
            $("#answer_pattern8").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 0 && q4 == 0 && q5 == 1) {
            $("#answer_pattern9").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 1 && q4 == 1 && q5 == 0) {
            $("#answer_pattern10").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 1 && q4 == 0 && q5 == 1) {
            $("#answer_pattern11").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 0 && q4 == 1 && q5 == 1) {
            $("#answer_pattern12").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 1 && q5 == 0) {
            $("#answer_pattern13").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 0 && q5 == 1) {
            $("#answer_pattern14").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 0 && q4 == 1 && q5 == 1) {
            $("#answer_pattern15").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 0 && q3 == 1 && q4 == 1 && q5 == 1) {
            $("#answer_pattern16").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 1 && q5 == 1) {
            $("#answer_pattern17").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 0 && q5 == 0) {
            $("#answer_pattern18").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 1 && q4 == 0 && q5 == 0) {
            $("#answer_pattern19").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 1 && q5 == 0) {
            $("#answer_pattern20").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 0 && q5 == 1) {
            $("#answer_pattern21").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 1 && q4 == 1 && q5 == 0) {
            $("#answer_pattern22").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 1 && q4 == 0 && q5 == 1) {
            $("#answer_pattern23").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 0 && q4 == 1 && q5 == 1) {
            $("#answer_pattern24").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 1 && q3 == 1 && q4 == 1 && q5 == 1) {
            $("#answer_pattern25").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 1 && q4 == 0 && q5 == 0) {
            $("#answer_pattern26").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 1 && q4 == 1 && q5 == 0) {
            $("#answer_pattern27").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 1 && q4 == 0 && q5 == 1) {
            $("#answer_pattern28").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 1 && q4 == 1 && q5 == 1) {
            $("#answer_pattern29").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 0 && q4 == 1 && q5 == 0) {
            $("#answer_pattern30").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 0 && q4 == 1 && q5 == 1) {
            $("#answer_pattern31").css("display", "");
            $(".test_wrapper").css("display", "none");
        }
        if (q1 == 0 && q2 == 0 && q3 == 0 && q4 == 0 && q5 == 1) {
            $("#answer_pattern32").css("display", "");
            $(".test_wrapper").css("display", "none");
        }

    });

});

/* ----------------------------------
  基本情報をローカルストレージへ取得
----------------------------------*/
// textbox（氏名、生年月日、主病名、好きな食べ物）
$(function () {
    $("#checkButton").click(function () {
        // テキストボックスのデータを取得
        let getDataName = $("#name").val();
        let getDataAge = $("#age").val();
        let getDataDisease = $("#disease").val();
        let getDataDetail = $("#detail").val();

        // 取得値を確認
        console.log(getDataName);
        console.log(getDataAge);
        console.log(getDataDisease);
        console.log(getDataDetail);

        // ローカルストレージへ
        localStorage.setItem("getDataName", JSON.stringify(getDataName));
        localStorage.setItem("getDataAge", JSON.stringify(getDataAge));
        localStorage.setItem("getDataDisease", JSON.stringify(getDataDisease));
        localStorage.setItem("getDataDetail", JSON.stringify(getDataDetail));

    });
})

// radioボタン（性別、介護度）
const btn = document.getElementById('checkButton');

btn.addEventListener("click", () => {
    const form = document.forms.information;
    const getDataGender = form.gender.value
    const getDataDegree = form.degree.value

    // 取得値を確認
    console.log(getDataGender);
    console.log(getDataDegree);

    // ローカルストレージへ
    localStorage.setItem("getDataGender", JSON.stringify(getDataGender));
    localStorage.setItem("getDataDegree", JSON.stringify(getDataDegree));
})


/* ---------------------------
  リハメニューの取得
---------------------------*/

// 「プロフィールシートを作成」ボタンを押したらローカルストレージへ
$('.make_menu_btn2').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu2 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）";
    localStorage.setItem("rihaMenu2", JSON.stringify(rihaMenu2));
});

$('.make_menu_btn3').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu3 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）"
    localStorage.setItem("rihaMenu3", JSON.stringify(rihaMenu3));
});

$('.make_menu_btn4').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu4 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）"
    localStorage.setItem("rihaMenu4", JSON.stringify(rihaMenu4));
});

$('.make_menu_btn5').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu5 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃嚥下おでこ体操（1セット5回）"
    localStorage.setItem("rihaMenu5", JSON.stringify(rihaMenu5));
});

$('.make_menu_btn6').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu6 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu6", JSON.stringify(rihaMenu6));
});

$('.make_menu_btn7').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu7 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）"
    localStorage.setItem("rihaMenu7", JSON.stringify(rihaMenu7));
});

$('.make_menu_btn8').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu8 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）"
    localStorage.setItem("rihaMenu8", JSON.stringify(rihaMenu8));
});

$('.make_menu_btn9').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu9 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu9", JSON.stringify(rihaMenu9));
});

$('.make_menu_btn10').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu10 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）"
    localStorage.setItem("rihaMenu10", JSON.stringify(rihaMenu10));
});

$('.make_menu_btn11').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu11 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu11", JSON.stringify(rihaMenu11));
});

$('.make_menu_btn12').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu12 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃嚥下おでこ体操（1セット5回）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu12", JSON.stringify(rihaMenu12));
});

$('.make_menu_btn13').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu13 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）"
    localStorage.setItem("rihaMenu13", JSON.stringify(rihaMenu13));
});

$('.make_menu_btn14').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu14 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu14", JSON.stringify(rihaMenu14));
});

$('.make_menu_btn15').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu15 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu15", JSON.stringify(rihaMenu15));
});

$('.make_menu_btn16').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu16 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu16", JSON.stringify(rihaMenu16));
});

$('.make_menu_btn17').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu17 = "＃簡単な計算問題（1セット10分）、＃間違い探し（1セット10分）、＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu17", JSON.stringify(rihaMenu17));
});

$('.make_menu_btn18').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu18 = "＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）"
    localStorage.setItem("rihaMenu18", JSON.stringify(rihaMenu18));
});

$('.make_menu_btn19').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu19 = "＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）"
    localStorage.setItem("rihaMenu19", JSON.stringify(rihaMenu19));
});

$('.make_menu_btn20').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu20 = "＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）"
    localStorage.setItem("rihaMenu20", JSON.stringify(rihaMenu20));
});

$('.make_menu_btn21').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu21 = "＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃ブローイング（1セット5回）、氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu21", JSON.stringify(rihaMenu21));
});

$('.make_menu_btn22').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu22 = "＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃舌の体操（5-10回～×5セット）、舌の抵抗訓練（10-15回～×3セット）、頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）"
    localStorage.setItem("rihaMenu22", JSON.stringify(rihaMenu22));
});

$('.make_menu_btn23').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu23 = "＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃舌の体操（5-10回～×5セット）、舌の抵抗訓練（10-15回～×3セット）、頬のトレーニング（10-15回～×3セット）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu23", JSON.stringify(rihaMenu23));
});

$('.make_menu_btn24').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu24 = "＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu24", JSON.stringify(rihaMenu24));
});

$('.make_menu_btn25').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu25 = "＃口唇の交互反復トレーニング（10-15回～×3セット）、＃唇の筋力トレーニング（10-15回～×3セット）、＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu25", JSON.stringify(rihaMenu25));
});

$('.make_menu_btn26').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu26 = "＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）"
    localStorage.setItem("rihaMenu26", JSON.stringify(rihaMenu26));
});

$('.make_menu_btn27').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu27 = "＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）"
    localStorage.setItem("rihaMenu27", JSON.stringify(rihaMenu27));
});

$('.make_menu_btn28').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu28 = "＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu28", JSON.stringify(rihaMenu28));
});

$('.make_menu_btn29').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu29 = "＃舌の体操（5-10回～×5セット）、＃舌の抵抗訓練（10-15回～×3セット）、＃頬のトレーニング（10-15回～×3セット）、＃嚥下おでこ体操（1セット5回）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu29", JSON.stringify(rihaMenu29));
});

$('.make_menu_btn30').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu30 = "＃嚥下おでこ体操（1セット5回）"
    localStorage.setItem("rihaMenu30", JSON.stringify(rihaMenu30));
});

$('.make_menu_btn31').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu31 = "＃嚥下おでこ体操（1セット5回）、＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu31", JSON.stringify(rihaMenu31));
});

$('.make_menu_btn32').on('click', function () {
    localStorage.removeItem("rihaMenu2");
    localStorage.removeItem("rihaMenu3");
    localStorage.removeItem("rihaMenu4");
    localStorage.removeItem("rihaMenu5");
    localStorage.removeItem("rihaMenu6");
    localStorage.removeItem("rihaMenu7");
    localStorage.removeItem("rihaMenu8");
    localStorage.removeItem("rihaMenu9");
    localStorage.removeItem("rihaMenu10");
    localStorage.removeItem("rihaMenu11");
    localStorage.removeItem("rihaMenu12");
    localStorage.removeItem("rihaMenu13");
    localStorage.removeItem("rihaMenu14");
    localStorage.removeItem("rihaMenu15");
    localStorage.removeItem("rihaMenu16");
    localStorage.removeItem("rihaMenu17");
    localStorage.removeItem("rihaMenu18");
    localStorage.removeItem("rihaMenu19");
    localStorage.removeItem("rihaMenu20");
    localStorage.removeItem("rihaMenu21");
    localStorage.removeItem("rihaMenu22");
    localStorage.removeItem("rihaMenu23");
    localStorage.removeItem("rihaMenu24");
    localStorage.removeItem("rihaMenu25");
    localStorage.removeItem("rihaMenu26");
    localStorage.removeItem("rihaMenu27");
    localStorage.removeItem("rihaMenu28");
    localStorage.removeItem("rihaMenu29");
    localStorage.removeItem("rihaMenu30");
    localStorage.removeItem("rihaMenu31");
    localStorage.removeItem("rihaMenu32");
    const rihaMenu32 = "＃ブローイング（1セット5回）、＃氷舐め→空嚥下（1セット2回）"
    localStorage.setItem("rihaMenu32", JSON.stringify(rihaMenu32));
});
