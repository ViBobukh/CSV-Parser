function tableMaker (allInfo) {
    if(allInfo[3]) {
        let captions = allInfo[0];
        let info = {};

        for (let i = 1; i < captions.length; ++i) {
            info.captions[i-1] = allInfo[i][i];
            console.log(info.captions[i-1])
        }

        console.log(captions)
    }
}

export default tableMaker;