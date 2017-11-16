/**
 * Created by Katherine on 11/11/17.
 */
import env_variables from '../components/environment.js';

var actionFunctions = {
    ajaxGetFetch: function (dispatch, fetchType, fetchPath) {
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + fetchPath,
            success: function (res) {
                dispatch(fetchType(res))
            },
            error: function (err) {
                console.log(err)
            }
        });
    },
    ajaxPostObj:function(obj,fetchPath){
        $.ajax({
            type:'POST',
            url:env_variables.apiEndpoint+fetchPath,
            data: JSON.stringify(obj),
            contentType: "application/json",
            dataType: 'text',
            success: function(data) {
                console.log("Post success",data)
            },
            error:function(err){
                console.log("Post error",err);
            }
        });
    },
    ajaxDeleteObj:function(dispatch, fetchType,fetchPath){
        $.ajax({
            type:'DELETE',
            url:env_variables.apiEndpoint+fetchPath,
            contentType: "application/json",
            dataType: 'text',
            success: function(res) {
                dispatch(fetchType(res));
                console.log("DELETE success",res)
            },
            error:function(err){
                console.log("DELETE error",err);
            }
        });
    }
}
module.exports = actionFunctions;