/**
 * Dictionary class
 *
 * @private
 * @hidden
 */
var TemporaryDictionary = /** @class */ (function () {
    function TemporaryDictionary() {
        /**
         * @hidden
         * @private
         */
        this.mKeys = [];
        /**
         * @hidden
         * @private
         */
        this.mValues = [];
    }
    /**
     * @returns {number} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.size = function () {
        return this.mKeys.length;
    };
    /**
     * @template K
     * @template V
     * @param {K} key .
     * @param {V} value .
     * @returns {void} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.add = function (key, value) {
        if (key === undefined || key === null || value === undefined || value === null) {
            throw new ReferenceError('Provided key or value is not valid.');
        }
        var index = this.mKeys.indexOf(key);
        if (index < 0) {
            this.mKeys.push(key);
            this.mValues.push(value);
            return 1;
        }
        else {
            throw new RangeError('An item with the same key has already been added.');
        }
    };
    /**
     * @template K
     * @returns {K[]} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.keys = function () {
        return this.mKeys;
    };
    /**
     * @template V
     * @returns {V[]} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.values = function () {
        return this.mValues;
    };
    /**
     * @template K
     * @template V
     * @param {K} key .
     * @returns {V} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.getValue = function (key) {
        if (key === undefined || key === null) {
            throw new ReferenceError('Provided key is not valid.');
        }
        var index = this.mKeys.indexOf(key);
        if (index < 0) {
            throw new RangeError('No item with the specified key has been added.');
        }
        else {
            return this.mValues[index];
        }
    };
    /**
     * @template K
     * @template V
     * @param {K} key .
     * @param {V} value .
     * @returns {void} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.setValue = function (key, value) {
        if (key === undefined || key === null) {
            throw new ReferenceError('Provided key is not valid.');
        }
        var index = this.mKeys.indexOf(key);
        if (index < 0) {
            this.mKeys.push(key);
            this.mValues.push(value);
        }
        else {
            this.mValues[index] = value;
        }
    };
    /**
     * @template K
     * @param {K} key .
     * @returns {boolean} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.remove = function (key) {
        if (key === undefined || key === null) {
            throw new ReferenceError('Provided key is not valid.');
        }
        var index = this.mKeys.indexOf(key);
        if (index < 0) {
            throw new RangeError('No item with the specified key has been added.');
        }
        else {
            this.mKeys.splice(index, 1);
            this.mValues.splice(index, 1);
            return true;
        }
    };
    /**
     * @template K
     * @param {K} key .
     * @returns {boolean} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.containsKey = function (key) {
        if (key === undefined || key === null) {
            throw new ReferenceError('Provided key is not valid.');
        }
        var index = this.mKeys.indexOf(key);
        if (index < 0) {
            return false;
        }
        return true;
    };
    /**
     * @returns {void} .
     * @hidden
     * @private
     */
    TemporaryDictionary.prototype.clear = function () {
        this.mKeys = [];
        this.mValues = [];
    };
    return TemporaryDictionary;
}());
export { TemporaryDictionary };
