'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi Rest Api ku berjalan!",res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res)
        }

    });  
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasaekanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?',[id],
         function(error, rows, fileds){
             if(error){
                 console.log(error);
             }else {
                 response.ok(rows, res);
             }
         });
};
//menampilkan data mahasiswa 
exports.tambahMahasiswa = function (req,res) {
    var nim = req.body.nim;
    var nama =req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VaLUES(?,?,?)',
    [nim,nama,jurusan],
    function (error, rows, fileds) {
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

//mengubah data berdasarkan id
exports.ubahMahasiswa = function(req,res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama =req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=?',[nim,nama,jurusan],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}
