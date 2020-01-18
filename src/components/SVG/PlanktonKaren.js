import React from 'react';
import SVG from 'react-inlinesvg';

export default function PlanktonKaren(){
    return (
        <SVG
            baseURL="/home"
            cacheRequests={true}
            description="Mr Plankton and Karen"
            loader={() => <span>Loading...</span>}
            onError={error => console.log(error.message)}
            onLoad={(src, hasCache) => console.log(src, hasCache)}
            preProcessor={code => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
            src="/images/plankton-karen.svg"
            title="Mr Plankton and wife Karen"
            uniqueHash="a1f8d1"
            uniquifyIDs={true}
        />
    )
};