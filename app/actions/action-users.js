/**
 * Created by Katherine on 11/30/17.
 */
import env_variables from '../components/environment.js';
import actionFunctions from './actionFunctions';

const startUserFetch=()=>{
    return {
        type:'START_CURRENTUSER_FETCH',
        payload:{}
    }
};

const completeUserFetch=(user)=>{
    return {
        type:'COMPLETE_CURRENTUSER_FETCH',
        payload:user
    }
};

export const fetchUser=(userId)=>{
    return (dispatch)=>{
        dispatch(startUserFetch());
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + '/rest/user?userId='+userId,
            success: function (res) {
                dispatch(completeUserFetch(res));
                // localStorage.setItem("user", res);
                $("#profileUsername").val(res.userName);
                $("#profilePhone").val(res.phoneNumber);
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
};

export const modifyUser=(userInfo)=>{

    return (dispatch)=>{
        console.log(userInfo);
        $.ajax({
            type:'PUT',
            url:env_variables.apiEndpoint+'/rest/user?userId='+userInfo.userId,
            data: JSON.stringify(userInfo),
            contentType: "application/json",
            dataType: 'text',
            success: function(data) {
                console.log("Put success",data);
                localStorage.setItem("user", data);
                $("#profileBeforeEdit").css("display","block");
                $("#profileAfterEdit").css("display","none");
                $("#editUserBtn").css("display","block");
                var dataObj=JSON.parse(data);
                dispatch(completeUserFetch(dataObj));
                $("#profileUsername").val(dataObj.userName);
                $("#profilePhone").val(dataObj.phoneNumber);
            },
            error:function(err){
                console.log("Put error",err);
            }
        });
    }
};

export const logoutUser=()=>{
    localStorage.removeItem("user");
    var isLoggedIn=env_variables.isLoggedIn();
    if(isLoggedIn==="false"){
        window.location.hash="#/login/";
    }
    return (dispatch)=>{
        dispatch(completeUserFetch({}));
    }
};

