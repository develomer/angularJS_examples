it('should change the binding when user enters text', function () {
    expect(binding('name')).toEqual('Peoples');
    input('name').enter('angular');
    expect(binding('name')).toEqual('angular');
});