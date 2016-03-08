"use strict";

describe("Utils factory", function () {
    var UtilsFactory;

    beforeEach(module("webApp"));

    beforeEach(inject(function (_UtilsFactory_) {
        UtilsFactory = _UtilsFactory_;
    }));

    it("should do have objectFindByKey function", function () {
        expect(typeof UtilsFactory.objectFindByKey).toEqual('function');
    });

    it("objectFindByKey should return specyfic value", function () {
        var find = {
            id: 1,
            desc: 'test'
        }
        var search = [
            find,
            {
                id: 2,
                desc: 'test2'
            }
        ];
        expect(UtilsFactory.objectFindByKey(search, 'id', 1)).toEqual(find);
    });

    it("objectFindByKey should return null for wrong key value", function () {
        var wrongIdValue = 5 //1 and 2 are valid
        var find = {
            id: 1,
            dewsc: 'test'
        }
        var search = [
            find,
            {
                id: 2,
                dewsc: 'test2'
            }
        ];

        expect(UtilsFactory.objectFindByKey(search, 'id', 5)).toEqual(null);
    });

});