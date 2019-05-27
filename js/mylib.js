    /* $_GET as in PHP*/
    function getGET(){
        var $_GET = {};
        document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
            function decode(s) {
                return decodeURIComponent(s.split("+").join(" "));
            }
            $_GET[decode(arguments[1])] = decode(arguments[2]);
        });
        return ($_GET);
    }
    
    /*Set Cookies*/
    function setCookie (name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    }
    
    /*Get Cookies*/
    function getCookie(name) {
        var cookie = " " + document.cookie;
        var search = " " + name + "=";
        var setStr = null;
        var offset = 0;
        var end = 0;
        if (cookie.length > 0) {
            offset = cookie.indexOf(search);
            if (offset != -1) {
                offset += search.length;
                end = cookie.indexOf(";", offset)
                if (end == -1) {
                    end = cookie.length;
                }
                setStr = unescape(cookie.substring(offset, end));
            }
        }
        return(setStr);
    }
    
    /*Delete Cookies*/
    function deleteCookie(name) {
      setCookie(name, "", {
        expires: -100
      })
    }
    
    /* As print_r from PHP*/
    function print_r(arr, level) {
        var print_red_text = "";
        if(!level) level = 0;
        var level_padding = "";
        for(var j=0; j<level+1; j++) level_padding += "    ";
        if(typeof(arr) == 'object') {
            for(var item in arr) {
                var value = arr[item];
                if(typeof(value) == 'object') {
                    print_red_text += level_padding + "'" + item + "' :\n";
                    print_red_text += print_r(value,level+1);
                } 
                else 
                print_red_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        } 
        else  print_red_text = "===>"+arr+"<===("+typeof(arr)+")";
        return print_red_text;
    }
    
/* add zeros to string */
    function zeros(str,lng) {
        var factlength = str.length;
        if (factlength < lng) {
            for (var i = 0;i<(lng-factlength);i++){
                str = '0' + str;
            }
        }
        return str;
    }

    /* SNILS (RUSSIA) */
    function snils() {
        var rand1 = zeros(String(Math.floor((Math.random() * 998) + 2)),3);
        var rand2 = zeros(String(Math.floor((Math.random() * 999) + 1)),3);
        var rand3 = zeros(String(Math.floor((Math.random() * 999) + 1)),3);
        var rezult = rand1 + rand2 + rand3;
        var kontr = String(9*rezult[0] + 8*rezult[1] + 7*rezult[2] +
                                6*rezult[3] + 5*rezult[4] + 4*rezult[5] +
                                3*rezult[6] + 2*rezult[7] + 1*rezult[8]);
        if (kontr < 100) {
            kontr = kontr;
        }
        else if (kontr > 101) {
            kontr = String(kontr % 101);
            kontr = zeros(kontr,2);
            if (kontr > 99) {
                    kontr = '00';
            }
        }
        else {
            kontr = '00';
        }
        rezult = rand1 +' '+ rand2 +' '+ rand3 +' '+kontr;
        
        return rezult;
    }
    /* OMS (RUSSIA) */
    /*
        ------------------------------+--------+------------------+-------
        ¦ 1 ¦2 ¦  3  ¦4 ¦ 5¦ 6 ¦ 7¦ 8 ¦ 9  ¦ 10¦ 11 ¦12¦ 13¦14¦ 15¦  16  ¦
        +---+--+-----+--+--+---+--+---+----+---+----+--+---+--+---+------+
        ¦ Т ¦Т ¦  Д  ¦Г ¦ Г¦ Г ¦ Г¦ М ¦ М  ¦ Д ¦ Д  ¦N ¦ N ¦N ¦ N ¦  К   ¦
        +---+--+-----+--+--+---+--+---+----+---+----+--+---+--+---+------+
        ¦код   ¦номер¦год рождения¦ месяц  ¦ число  ¦  условный   ¦контр.¦
        ¦терри-¦дубля¦            ¦рождения¦рождения¦ порядковый  ¦разряд¦
        ¦тории ¦     ¦            ¦        ¦        ¦    номер    ¦      ¦
        -------+-----+------------+--------+--------+-------------+-------
        01..84	0..5	1980..1999	01..12	01..28		0001..9999

        Г.2 Алгоритм расчета контрольного числа единого номера полиса ОМС
        К - контрольный разряд единого номера полиса обязательного медицинского страхования,
                вычисляется арифметически в соответствии с методикой расчета, описанной в международном стандарте ISO/HL7 27931:2009 (алгоритм Mod10):
        а) Выбираются цифры, стоящие в нечетных позициях, по порядку, начиная справа, записываются в виде числа.
                Полученное число умножается на 2.
        б) Выбираются цифры, стоящие в четных позициях, по порядку, начиная справа, записываются в виде числа.
                Полученное число приписывается слева от числа, полученного в пункте а).
        в) Складываются все цифры полученного в пункте б) числа.
        г) Полученное в пункте в) число вычитается из ближайшего большего или равного числа, кратного 10.
                В результате получается искомая контрольная цифра

        0 1 2 3 4 5 6 7 8 9 1011121314
        Н Ч Н Ч Н Ч Н Ч Н Ч Н Ч Н Ч Н
        8 4 5 1 9 9 9 1 2 2 8 9 9 9 9
        А) 99829958*2
        Б) 9921914

        9921914199659916
        9+9+2+1+9+1+4+1+9+9+6+5+9+9+1+6 = 90
        90-90 = 0

        Alhorythm mod10: https://meganorm.ru/Data2/1/4293751/4293751663.pdf
    */
    function oms() {
        var rand1 = zeros(String(Math.floor((Math.random() * 83) + 1)),2);		/* 01..84*/
        var rand2 = zeros(String(Math.floor((Math.random() * 6))),1);			/* 0..5*/
        var rand3 = zeros(String(Math.floor((Math.random() * 20) + 1980)),4);	/* 1980..1999*/
        var rand4 = zeros(String(Math.floor((Math.random() * 12) + 1)),2);		/* 01..12*/
        var rand5 = zeros(String(Math.floor((Math.random() * 28) + 1)),2);		/* 01..28*/
        var rand6 = zeros(String(Math.floor((Math.random() * 9999) + 1)),4);	/* 0001..9999*/
        var rezult = rand1 + rand2 + rand3 + rand4 + rand5 + rand6;

        var kontrA = '';
        var i = rezult.length;
        while (i>0) {
            kontrA += rezult.substring(i-1,i);
            i -= 2;
        }
        kontrA *= 2;

        var kontrB = '';
        var i = rezult.length-1;
        while (i>0) {
            kontrB += rezult.substring(i-1,i);
            i -= 2;
        }
        kontrB = kontrB + kontrA;

        var kontrC = 0;
        var i = 1;
        while (i<=kontrB.length) {
            kontrC += Math.floor(kontrB.substring(i-1,i));
            i += 1;
        }

        var kontrD = 10 - (kontrC % 10);
        if (kontrD == 10) {kontrD = 0};
        rezult = rezult + kontrD;
        return rezult;
    }
    $(document).ready(function () {
        $("div").last().remove();
    });