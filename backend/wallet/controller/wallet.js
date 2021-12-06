const express = require('express')
const fixer = require("fixer-api");
fixer.baseUrl = "http://data.fixer.io/api/"

exports.wallet = function (req, res) {
  
            const start = async  function(aconvert,conv) {
        fixer.set({ accessKey: "263b9d3fae2ecf482440398e" });
        await fixer.set({ accessKey: "263b9d3fae2ecf482440398e" }).latest();
        const data = await fixer.latest();
        //console.log(data.rates['AED']);
        var aconvert ;
        var qte=25;
        var conv;
        var a;
        var b;
        var resultat
        var d;

        a=data.rates[aconvert];
        b=data.rates[conv];
        d=qte/a;
        resultat=d*b;
        console.log(resultat);
        
    
  }
start('UGX','USD');
        console.log("Hello");
        
        res.json();
 }