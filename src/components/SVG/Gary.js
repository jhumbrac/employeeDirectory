import React from 'react';
import SVG from 'react-inlinesvg';

export default function Gary(){
    return (
        <SVG
            baseURL="/home"
            cacheRequests={true}
            description="Gary"
            loader={() => <span>Loading...</span>}
            onError={error => console.log(error.message)}
            onLoad={(src, hasCache) => console.log(src, hasCache)}
            preProcessor={code => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
            src="images/gary.svg"
            title="Gary"
            uniqueHash="a1f8d1"
            uniquifyIDs={true}
        />
    )
};