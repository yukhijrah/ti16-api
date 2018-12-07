/**
 * NilaiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    cekNilai: function(req, res) {
        var mhsNim = req.param('nim');
        var mahasiswa = null;
        Mahasiswa.findOne({nim: mhsNim}).exec(function (err, mhs) {
            if (mhs != null) {
                var mhsId = mhs.id;
                mahasiswa = mhs;
                Nilai.find({mhs_id: mhsId}).exec(function(err, nilai) {
                    res.json({
                        status: 200,
                        course: nilai,
                        student: mahasiswa
                    });
                });
            } else {
                res.json({
                    status: 404,
                });
            }
        });
    }

};

