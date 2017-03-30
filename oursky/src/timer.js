
function startTimer(h, m, s)
    {

        var a=new Date();
        var ah = a.getHours();
        var am = a.getMinutes();
        var as = a.getSeconds();

        h_ = ah-h;
        m_ = am-m;
        s_ = as-s;

        if(s_<0) {
            m++;
            s_ = 60+s_;
        }
        if(m_<0) {
            h++;
            m_ = 60+m_;
        }
    

        document.getElementById("disp").innerHTML=h_ + ":" + m_ + ":" + s_ ;

        t=setTimeout(function(){startTimer(h, m, s)},1000);
}

