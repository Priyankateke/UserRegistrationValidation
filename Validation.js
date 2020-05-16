/**
 * match name with regex pattern
 */
exports.validateName = function (name,namePattern) {
    if(name.match(namePattern))
        return true;
};