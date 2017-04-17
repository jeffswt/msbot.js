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
    return this;
};
