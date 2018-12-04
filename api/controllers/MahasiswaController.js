/**
 * MahasiswaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    mahasiswas: function(req, res) {
        Mahasiswa.find(function(err, mahasiswa) {
            return res.json({
                title: "Teknik Informatika",
                year: 2016,
                data: mahasiswa
            });
        });
    }

    // bulk: function(req, res) {
    //     var students = [
    //         {name: 'Rizky Hidayat Panjaitan', nim: '0110216028'},
    //         {name: 'Arfian Mulya Pasha', nim: '0110216044'},
    //         {name: 'Haya Rasikhah', nim: '0110216065'},
    //         {name: 'Vindi Pop Ardinoto', nim: '0110216002'},
    //         {name: 'Kuati Septiani', nim: '0110216011'},
    //         {name: 'Umair', nim: '0110216061'},
    //         {name: 'Faiz Khoiron', nim: '0110216056'},
    //         {name: 'Cartridge Ryan', nim: '0110216036'},
    //         {name: 'Rizki Aji', nim: '0110216024'},
    //         {name: 'Muhammad Alwi', nim: '0110216018'},
    //         {name: 'Akhmad Arip', nim: '0110216074'},
    //         {name: 'Muhammad Fadhil Hilmi', nim: '0110216037'},
    //         {name: 'Satria Suryanegara', nim: '0110216031'},
    //         {name: 'Isham Dienurrahman', nim: '0110216048'},
    //         {name: 'Muhammad Rifki Chairil', nim: '0110216058'},
    //         {name: 'Annisa Tahira', nim: '0110216019'},
    //         {name: 'Arif Ariyanto', nim: '0110216046'},
    //         {name: 'Rakha Diasry', nim: '0110216075'},
    //         {name: 'Anifatul Aufah', nim: '0110216010'},
    //         {name: 'Iqbal Ajie Wahyudin', nim: '0110216057'},
    //         {name: 'Syifa Tazkiy Fauziah', nim: '0110216070'},
    //         {name: 'Arius Wanimbo', nim: '0'},
    //         {name: 'Sukmo Afri Ardi Saputro', nim: '0110216060'},
    //         {name: 'Arisy Basyiruddin', nim: '0110216068'},
    //         {name: 'Wahab', nim: '0110216017'},
    //         {name: 'Fahmi Hafidzulhaq', nim: '0110216003'},
    //         {name: 'Adittya Wicaksono', nim: '0110216022'},
    //         {name: 'Uliin Nuha A', nim: '0110214036'}
    //     ];

    //     await Mahasiswa.createEach(students);
    // }
};

