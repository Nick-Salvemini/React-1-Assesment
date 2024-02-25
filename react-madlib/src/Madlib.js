import React, { useState } from "react";
import StorySelectForm from "./StorySelectForm";
import InputSelectForm from "./InputSelectForm";
import Story from "./Story";
import madlibsArr from "./madlibsArr";

function Madlib() {
    const [selectedStory, setSelectedStory] = useState(null);
    const [inputValues, setInputValues] = useState({})
    const [storyComplete, setStoryComplete] = useState(false)

    const handleStorySelect = (storyName) => {
        const storyArray = madlibsArr.find(
            storyArr => storyArr[0][0] === storyName);
        setSelectedStory(storyArray);

    }

    const handleInputSelect = (inputs) => {
        setInputValues(inputs);
        setStoryComplete(true)
    }

    const reset = () => {
        setSelectedStory(null);
        setInputValues({});
        setStoryComplete(false);
    }

    return (
        <>
            <h1>Madlibs!</h1>
            {!selectedStory && <StorySelectForm arr={madlibsArr} onStorySelect={handleStorySelect} />}
            {selectedStory && !storyComplete && <InputSelectForm inputs={selectedStory[2]} onInputSelect={handleInputSelect} />}
            {storyComplete && <Story storyTemplate={selectedStory[1][0]} inputValues={inputValues} onReset={reset} />}
        </>
    );
}

export default Madlib;