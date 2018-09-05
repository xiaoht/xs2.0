/*
* 频道专场下面分类查询假数据
* */
makerApp.factory('goodsListServices', ['$http', 'UrlService', function ($http, UrlService) {

  return {
    getGoodsList: function (param) {
      // if(!param.categoryId){
      //   param.categoryId = '';
      // }
      // if(!param.storeProcategoryId){
      //   param.storeProcategoryId = '';
      // }
      // if(!param.minPrice){
      //   param.minPrice = '';
      // }
      // if(!param.maxPrice){
      //   param.maxPrice = '';
      // }
      // console.log('获取商品列表  request = ' + JSON.stringify(param));

      //得到一级列表参数写在地址栏后面
      return $http.post(UrlService.urls.select_goods_list_url, param).then(function (object) {
        return object.data;
      });
    },
    //通过店铺分类取得商品一览.
    getStoreGoodsList:function(param){
      return $http.post(UrlService.urls.select_goods_list_by_category, param).then(function (object) {
        return object.data;
      });
    }
  };
}]);
