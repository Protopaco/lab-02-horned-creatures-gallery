const filterData = [
    // the JSONs that handle filter creation
    {
        // title: menu label
        title: '# of horns',
        // key: the image key app should search in
        key: "horns",
        // passed function for filter parameters
        optionFunction:
            function (images) {
                let tempArray = ['any'];
                for (let image of images) {
                    if (!tempArray.includes(image[this.key])) {
                        tempArray.push(image[this.key])
                    }
                }
                return tempArray
            },
    },
    {
        title: "keyword",
        key: "keyword",
        optionFunction:
            function (images) {
                let tempArray = ['any'];
                for (let image of images) {
                    if (!tempArray.includes(image[this.key])) {
                        tempArray.push(image[this.key])
                    }
                }
                return tempArray

            },
    },
    {
        title: "title",
        key: "title",
        optionFunction:
            function (images) {
                let tempArray = ['any'];
                for (let image of images) {
                    if (!tempArray.includes(image[this.key])) {
                        tempArray.push(image[this.key])
                    }
                }
                return tempArray

            },
    },
    {
        title: "description ends with:",
        key: "description",
        optionFunction:
            function (images) {
                let tempArray = ['any'];
                for (let image of images) {
                    let wordArray = image[this.key].split(' ');
                    if (!tempArray.includes(wordArray[wordArray.length - 1])) {
                        tempArray.push(wordArray[wordArray.length - 1])
                    }
                }
                return tempArray

            },
    },
    {
        title: "description starts with:",
        key: "description",
        optionFunction:
            function (images) {
                let tempArray = ['any'];
                for (let image of images) {
                    if (!tempArray.includes(image[this.key].split(' ')[0])) {
                        tempArray.push(image[this.key].split(' ')[0])
                    }
                }
                return tempArray

            },
    },
    {
        title: "middle 5 letters of title:",
        key: "title",
        optionFunction:
            function (images) {
                let tempArray = ['any'];
                for (let image of images) {
                    let titleLength = image[this.key].length;
                    let middle = Math.floor(titleLength / 2);
                    let lowerBound = middle - 2;
                    let upperBound = middle + 2;
                    let searchParam = (image[this.key].slice(lowerBound, upperBound))
                    if (!tempArray.includes(searchParam)) {
                        tempArray.push(searchParam)
                    }
                }
                return tempArray

            },
    },
    {
        title: "first four letters of title:",
        key: "title",
        optionFunction:
            function (images) {
                let tempArray = ['any'];
                for (let image of images) {
                    if (!tempArray.includes(image[this.key].slice(0, 4))) {
                        tempArray.push(image[this.key].slice(0, 4))
                    }
                }
                return tempArray

            },
    },





]


export default filterData;