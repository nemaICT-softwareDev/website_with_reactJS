export default {
    formatCurrency: function(num){
        return  Number(num.toFixed(2)).toLocaleString() + ' ';
    },

    changeBackgroundColorLabel: function(ckbx) {

        let d = ckbx.id;
        if(ckbx.checked)
        {
            document.getElementById(d).style.color = "Grey";
        }
       else {
            document.getElementById(d).style.color = "blue";
        }
       return d.color;
    }
}


