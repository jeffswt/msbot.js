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
};
