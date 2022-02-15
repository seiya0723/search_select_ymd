window.addEventListener("load" , function (){

    $("#year" ).on("input", function(){ day_change(); });
    $("#month").on("input", function(){ day_change(); });

    $("#year" ).html('<option value="">--</option>');
    $("#month").html('<option value="">--</option>');
    $("#day"  ).html('<option value="">--</option>');

    for (let i=2000;i<2030;i++){
        $("#year" ).append('<option value="' + String(i) + '">' + String(i) + '</option>');
    }
    for (let i=1;i<13;i++){
        $("#month").append('<option value="' + String(i) + '">' + String(i) + '</option>');
    }
    for (let i=1;i<=31;i++){
        $("#day"  ).append('<option value="' + String(i) + '">' + String(i) + '</option>');
    }

});

function day_change(){

    //うるう年は4の倍数。うるう年の場合は2月は29日に指定
    //月ごとの日数は下記の通り
    let day_list    = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    let year        = $("#year" ).val();
    let month       = $("#month").val();

    //うるう年かどうか判定。2月を29日に変更
    if ( year%4 == 0 ){
        day_list[1] = 29;
    }

    //dayを初期化
    $("#day").html('<option value="">--</option>');

    //指定した月の日数分だけ選択肢を作る
    for (let i=1;i<=day_list[month-1];i++){
        $("#day").append("<option value=" + String(i) + ">" + String(i) + "</option>");
    }

}
