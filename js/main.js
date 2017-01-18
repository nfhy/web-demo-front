/**
 * Created by wangll on 2017/1/17.
 */
'use strict';

$(document).ready(function() {
    $('#dic_form_sub')
        .bind('click',
            function() {
                var req_data = {'dicCode' : 'DT', 'params' : ''};
                req_data.t = new Date().getTime();
                $.ajax({
                    url: 'http://localhost:8080/expose/cache/DT.do',
                    method: 'POST',
                    dataType: 'JSON',
                    contentType:'application/json;charset=UTF-8',//关键是要加上这行
                    data: JSON.stringify(req_data),
                    success: function () {
                        $.session.get('testSA');
                    }
                });
            }
        );
});
