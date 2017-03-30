angular.module('ploufplouf').factory('PloufResource', function($resource){
    var resource = $resource('rest/ploufs/:PloufId',{PloufId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});