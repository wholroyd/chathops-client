/**
 * Created by William.Holroyd on 7/5/2015.
 */

describe('Index', function(){

    beforeEach(module('chathopsApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
        var scope = {},
            ctrl = $controller('Index', {$scope:scope});

        expect(scope.phones.length).toBe(3);
    }));
});