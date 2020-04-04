'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.routes('/')
        .get(jsonku.index);

    app.routes('/tampil')
        .get(jsonku.tampilsemuamahasiswa);  
        
    app.routes('/tampil')
        .get(jsonku.tampilberdasaekanid); 
    
    app.routes('/tambah')
        .post(jsonku.tambahMahasiswa);

    app.routes('/ubah')
        .put(jsonku.ubahMahasiswa);

    app.routes('/hapus')
         .delete(jsonku.hapusMahasiswa);
}

