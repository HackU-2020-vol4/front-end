import React from 'react';
import Count from '../coutParts/count';


class Step4Vote extends React.Component {

    render() {
        const solutionList = ["解決策1", "解決策2", "解決策3"]
        return (
            <div>
                {solutionList.map((element) => (
                    <div>
                        <p>{element}</p>
                        <Count />
                    </div>
                ))}
            </div>
        )
    }
}

export default Step4Vote;