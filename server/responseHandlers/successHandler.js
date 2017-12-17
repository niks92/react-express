'use strict';

/** @class SuccessHandler */

class SuccessHandler {
    constructor(data={}, count=0, total=0) {
        this.data = data;
        this.count = count;
        this.total = total;
    }

    toJSON() {
        return {
            count: this.count,
            total: this.total,
            data: this._serialize(this.data)
        };
    }

    _serialize(object) {
        return (object.toJSON && object.toJSON() || object.toObject && object.toObject() || object);
    }
}

module.exports = SuccessHandler;