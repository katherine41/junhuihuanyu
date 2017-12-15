/**
 * Created by Katherine on 10/22/17.
 */
var env_variables = {
    apiEndpoint: "http://82032607.ngrok.io",
    // apiEndpoint:""
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
    },
    fmtMSS:function(s){return(s-(s%=60))/60+(9<s?':':':0')+s},
    isLoggedIn:function () {
        var isLoggedIn="true";
        var localStorageUser=JSON.parse(localStorage.getItem("user"));
        if(localStorageUser===null){
            isLoggedIn="false";
        }else{
            isLoggedIn="true";
        }
        return isLoggedIn;
    },
    fetchUserRole:function () {
        if (localStorage.getItem("user") === null) {
            return null;
        }else{
            var localStorageUser=JSON.parse(localStorage.getItem("user"));
            return localStorageUser.role;
        }
    }
}
module.exports = env_variables;
