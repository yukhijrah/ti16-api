/**
 * MahasiswaTestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    mahasiswas: function(req, res) {
        MahasiswaTest.find(function(err, mahasiswa) {
            return res.json({
                title: "Teknik Informatika",
                year: 2016,
                data: mahasiswa
            });
        });
    },
    insertMahasiswa: function(req, res) {
        MahasiswaTest.create(req.body).exec(function (err, mhs) {
            return res.json({
                name: req.body.name,
                nim: req.body.nim
            });
        });
    }

};

