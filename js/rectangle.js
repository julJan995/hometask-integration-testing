function getRectanglePerimeter(length, width) {
    if (length <= 0 || width <= 0 || !length || !width) {
        return 0;
    } 
    
    return 2 * (length + width);
};

function getRectangleArea(length, width) {
    if (length <= 0 || width <= 0 || !length || !width) {
        return 0;
    } 

    return length * width;  
};

function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);

    if (!length || !width) {
        return `Please enter valid values`;
    }  

    if (length < 0) {
        return `Please enter a valid length value`;
    } 
    
    if (width < 0) {
        return `Please enter a valid width value`;
    } 
    
    return `The perimeter of a rectangle is ${perimeter} and the area is ${area}`;
};

module.exports.getRectangleArea = getRectangleArea;
module.exports.getRectanglePerimeter = getRectanglePerimeter;
module.exports.getRectangleInfo = getRectangleInfo;
