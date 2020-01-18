import React from 'react';
import SVG from 'react-inlinesvg';

export default function MrPlankton(){
    return (
        <SVG
            baseURL="/home"
            cacheRequests={true}
            description="Mr Plankton"
            loader={() => <span>Loading...</span>}
            onError={error => console.log(error.message)}
            onLoad={(src, hasCache) => console.log(src, hasCache)}
            preProcessor={code => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
            src="/images/mrplankton.svg"
            title="Mr Plankton"
            uniqueHash="a1f8d1"
            uniquifyIDs={true}
        />
    )
};