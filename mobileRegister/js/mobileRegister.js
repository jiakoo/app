/**
 * 省json
 */
var sheng = [
    {
      "label": "北京",
      "value": "110000"
    },
    {
      "label": "天津",
      "value": "120000"
    },
    {
      "label": "河北省",
      "value": "130000"
    },
    {
      "label": "山西省",
      "value": "140000"
    },
    {
      "label": "内蒙古自治区",
      "value": "150000"
    },
    {
      "label": "辽宁省",
      "value": "210000"
    },
    {
      "label": "吉林省",
      "value": "220000"
    },
    {
      "label": "黑龙江省",
      "value": "230000"
    },
    {
      "label": "上海",
      "value": "310000"
    },
    {
      "label": "江苏省",
      "value": "320000"
    },
    {
      "label": "浙江省",
      "value": "330000"
    },
    {
      "label": "安徽省",
      "value": "340000"
    },
    {
      "label": "福建省",
      "value": "350000"
    },
    {
      "label": "江西省",
      "value": "360000"
    },
    {
      "label": "山东省",
      "value": "370000"
    },
    {
      "label": "河南省",
      "value": "410000"
    },
    {
      "label": "湖北省",
      "value": "420000"
    },
    {
      "label": "湖南省",
      "value": "430000"
    },
    {
      "label": "广东省",
      "value": "440000"
    },
    {
      "label": "广西壮族自治区",
      "value": "450000"
    },
    {
      "label": "海南省",
      "value": "460000"
    },
    {
      "label": "重庆",
      "value": "500000"
    },
    {
      "label": "四川省",
      "value": "510000"
    },
    {
      "label": "贵州省",
      "value": "520000"
    },
    {
      "label": "云南省",
      "value": "530000"
    },
    {
      "label": "西藏自治区",
      "value": "540000"
    },
    {
      "label": "陕西省",
      "value": "610000"
    },
    {
      "label": "甘肃省",
      "value": "620000"
    },
    {
      "label": "青海省",
      "value": "630000"
    },
    {
      "label": "宁夏回族自治区",
      "value": "640000"
    },
    {
      "label": "新疆维吾尔自治区",
      "value": "650000"
    },
    {
      "label": "台湾省",
      "value": "710000"
    },
    {
      "label": "香港特别行政区",
      "value": "810000"
    },
    {
      "label": "澳门特别行政区",
      "value": "820000"
    },
    {
      "label": "海外",
      "value": "990000"
    }
  ]

/**
 * 选择性别
 */

$('#showPicker').on('click', function () {
    weui.form.hideErrorTips(document.getElementById("sex"));
    var arr = [{label: '男',value: 0}, { label: '女',value: 1}];
    weui.picker(arr, 
    {
        defaultValue:[0],
        onChange: function (result) {
            PickerResultFn('#showPicker',arr,result,"#sex")
        },
        onConfirm: function (result) {
            PickerResultFn('#showPicker',arr,result,"#sex")
        },
        title: ''
    });
});

$('#showShengPicker').on('click', function () {
    weui.form.hideErrorTips(document.getElementById("sheng"));
    weui.picker(sheng, 
    {
        defaultValue:[0],
        onChange: function (result) {
            PickerResultFn('#showShengPicker',sheng,result,"#sheng")
        },
        onConfirm: function (result) {
            PickerResultFn('#showShengPicker',sheng,result,"#sheng")
        },
        title: ''
    });
});

/**
 * 判断是否有清除按钮
 */
$('.weui-input').on('input',function(){
    var val = $(this).val();
    if(val!=""){
        $(this).next('.weui-btn_input-clear').show();
    }else{
        $(this).next('.weui-btn_input-clear').hide();
    }
})


/**
 *  清空输入内容
 */
$('.weui-btn_reset').on('click',function(){
    $(this).prev('.weui-input').val('');
    $(this).hide();
})


// 选择处理方法
function PickerResultFn(ele,arr,result,hidden){
    var result = result.toString();
    var label;
    for(var i = 0;i<arr.length;i++){
        if(arr[i].value == result){
            label = arr[i].label;
        }
    }
    $(ele).text( label )
    $(hidden).val(result)
}
var regexp = {
    regexp: {
        email:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    }
}
// 失去焦点时检测
weui.form.checkIfBlur('#form', regexp);
document.querySelector('.registerSubmitBtn').addEventListener('click', function () {

  var formdata = $('form').serialize()
  console.log(formdata)
    weui.form.validate('#form', function (error) {
        console.log(error);
        if (!error) {
            var loading = weui.loading('提交中...');
            setTimeout(function () {
                // $.ajax({
                //     url:baseUrl+'/virexp/openRegister/!appCreate',
                //     data:formdata,
                //     success:function(res){
                //         loading.hide();
                //         if(res.code == 200){
                //             window.location.href = baseUrl+'/virexp/openRegister/!resResult?email='+res.data;
                //         }
                //     }
                // })
                loading.hide()
                window.location.href = './mobileRegisterResult.html';
            }, 1500);
        }
    }, regexp);
});