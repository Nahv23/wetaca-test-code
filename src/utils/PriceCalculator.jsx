
export const transformPrice = (price) => {
    let stringPrice = price.toString()
    let result = stringPrice.slice(0, stringPrice.length - 2) + ',' + stringPrice.slice(stringPrice.length - 2).concat(' €')
    return result;
}

