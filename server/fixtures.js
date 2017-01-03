Meteor.startup(function(){
    let num = Stocks.find().count();
    if(num === 0) {
        let fixtures = [
            {
                symbol: 'GOOG',
                price: 728.32,
                change: 1,
            },
            {
                symbol: 'AAPL',
                price: 116.77,
                change: -1,
            }
        ];

        fixtures.forEach(function(element){
            Stocks.insert(element);
        })
    }
}); 