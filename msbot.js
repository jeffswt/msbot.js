var Queue2D = function() {
    this.length = 0;
    this.arr_x = [];
    this.arr_y = [];
    this.includes = function(x, y) {
        for (var i = 0; i < this.length; i++)
            if (x == this.arr_x[i] && y == this.arr_y[i])
                return true;
        return false;
    }
    this.push = function(x, y) {
        if (this.includes(x, y))
            return ;
        this.arr_x.push(x);
        this.arr_y.push(y);
        this.length += 1;
        return ;
    };
    this.pop = function(x, y) {
        if (this.length <= 0)
            return [undefined, undefined];
        var a = this.arr_x,
            b = this.arr_y;
        var c = a.splice(1),
            d = b.splice(1);
        this.arr_x = c;
        this.arr_y = d;
        this.length -= 1;
        return [a[0], b[0]];
    };
    this.empty = function() {
        return this.length <= 0;
    };
    return this;
};


var msbot = {
    entry : appController.minesweeper,
    cell : {
        // 0: bomb, 10: covered;
        // 1~8: numbers, 9: empty space;
        get : function(x, y) {
            var ret = parseInt(msbot.entry.playGrid.get(x, y));
            if (isNaN(ret))
                return 11;
            return ret;
        },
        random : function() {
            var x = parseInt(Math.random() * 62 + 2),
                y = parseInt(Math.random() * 62 + 2);
            return [x, y];
        },
        is : {
            mine : function(x, y) {
                return msbot.cell.get(x, y) == 0;
            },
            number : function(x, y) {
                var tmp = msbot.cell.get(x, y);
                return tmp >= 1 && tmp <= 8;
            },
            empty : function(x, y) {
                return msbot.cell.get(x, y) == 9;
            },
            covered : function(x, y) {
                return msbot.cell.get(x, y) == 10;
            },
            flag : function(x, y) {
                return msbot.cell.get(x, y) > 11;
            }
        },
        flag : function(x, y) {
            return msbot.entry.placeFlag(x, y);
        },
        reveal : function(x, y) {
            return msbot.entry.revealCell(x, y);
        }
    }
};
