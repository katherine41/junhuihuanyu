/**
 * Created by Katherine on 10/22/17.
 */
var env_variables = {
    apiEndpoint: "http://6c10e38c.ngrok.io",
    formatDate:function (date){
        var dd = date.getDate();
        var mm = date.getMonth()+1; //January is 0!
        if (dd < 10){
            dd = "0"+dd;
        }
        if (mm < 10){
            mm = "0"+mm;
        }
        var yyyy = date.getFullYear();
        var hh=date.getHours();
        var min=date.getMinutes();
        var ss=date.getSeconds();
        if(min>=0&&min<10){
            min="0"+min;
        }
        if(ss>=0&&ss<10){
            ss="0"+ss;
        }
        return yyyy+"-"+mm+"-"+dd+" "+hh+":"+min+":"+ss;
        // return yyyy+"-"+mm+"-"+dd;
    }
    // apiEndpoint:""
}
module.exports = env_variables;
