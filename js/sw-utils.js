
//guardar en cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res){
    if (res) {
        return caches.open(dynamicCache).then(cache =>{
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}