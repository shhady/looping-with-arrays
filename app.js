const populations = [2000000, 4000000, 6000000,8000000];

let populationPercentages = (populations) =>{
    let percentages=[];
    for(let i=0; i < populations.length ; i++){
        percentages.push((populations[i]/79000000 * 100).toFixed(2))
    }
    return percentages;

}
console.log(populationPercentages(populations));