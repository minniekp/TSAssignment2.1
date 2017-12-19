let favBike: (x:string, y:number) => string = 
     function(x:string, y:number): string { return 'x' + y;};

favBike() {
    console.log(`Here are the bike details:
       bikeName: ${x};
       bikeNumber: ${y};
       Please visit the bike page for more details.`);
};