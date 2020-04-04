'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.routes('/')
        .get(jsonku.index);

    app.rautes('/tampil')
        .get(jsonku.tampilsemuamahasiswa);  
        
    app.rautes('/tampil')
        .get(jsonku.tampilberdasaekanid); 
    
    app.rautes('/tambah')
        .post(jsonku.tambahMahasiswa);

    app.rautes('/ubah')
        .put(jsonku.ubahMahasiswa);

    app.rautes('/hapus')
         .delete(jsonku.hapusMahasiswa);
}

