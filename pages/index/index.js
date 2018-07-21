Page({
  data:{
    selProvince:'请选择',
    selCity:'请选择',
    selDistrict:'请选择',
    provinces: ['广东省', '北京市', '西藏'],
  },
  bindPickerChange: function(e){
    var that = this;
    that.setData({
      selProvince: that.data.provinces[e.detail.value]
    })
    console.log(that.data.provinces[e.detail.value])
  }
})