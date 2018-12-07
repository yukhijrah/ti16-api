/**
 * NilaiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    cekNilai: function(req, res) {
        Mahasiswa.find(function(err, mahasiswa) {
            return res.json({
                title: "Teknik Informatika",
                year: 2016,
                data: mahasiswa
            });
        });
    }

};

