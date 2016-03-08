angular.module('webApp')
    .filter('levenstain', function() {

        var levenshtein = (function() {

            var row2 = [];
            return function(s1, s2) {
                if (s1 === s2) {
                    return 0;
                } else {
                    var s1_len = s1.length, s2_len = s2.length;
                    if (s1_len && s2_len) {
                        var i1 = 0, i2 = 0, a, b, c, c2, row = row2;
                        while (i1 < s1_len)
                            row[i1] = ++i1;
                        while (i2 < s2_len) {
                            c2 = s2.charCodeAt(i2);
                            a = i2;
                            ++i2;
                            b = i2;
                            for (i1 = 0; i1 < s1_len; ++i1) {
                                c = a + (s1.charCodeAt(i1) === c2 ? 0 : 1);
                                a = row[i1];
                                b = b < a ? (b < c ? b + 1 : c) : (a < c ? a + 1 : c);
                                row[i1] = b;
                            }
                        }
                        return b;
                    } else {
                        return s1_len + s2_len;
                    }
                }
            };
        })();



        return function(input, key, searchInput) {
            var res = [];
            var key = key;

            if(searchInput) {

                for (var i = 0; i < input.length; i++) {
                    var obj = input[i];

                    var words = obj[key].split(' ');

                    var min = 100;

                    for (var j = 0; j < words.length; j++) {
                        var word = words[j];

                        var l = levenshtein(word.toUpperCase(), searchInput.toUpperCase())

                        var p = Math.abs((l/word.length)*100); // percent of error

                        min = p < min ? p : min;

                        console.log(word, p, min, '%');

                    }




                    if (min < 40) {

                        console.log( 'dis you mean ' + obj[key], min);


                        res.push(obj);
                    }


                }
            }

            return res.length ? res : [];
        };
    });