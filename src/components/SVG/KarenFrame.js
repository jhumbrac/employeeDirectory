import React from 'react';
import SVG from 'react-inlinesvg';

export default function KarenFrame(){
    return (
        <SVG
            baseURL="/home"
            cacheRequests={true}
            description="Karen foreground image"
            loader={() => <span>Loading...</span>}
            onError={error => console.log(error.message)}
            onLoad={(src, hasCache) => console.log(src, hasCache)}
            preProcessor={code => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
            src="images/karen-frame.svg"
            title="Karen"
            uniqueHash="a1f8d1"
            uniquifyIDs={true}
        />
    )
};