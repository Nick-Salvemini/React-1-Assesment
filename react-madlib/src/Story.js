import React, { useState, useRef, useEffect } from "react";

function Story({ storyTemplate, inputValues, onReset }) {
    const normalizeKey = (key) => key.toLowerCase().replace(/ /g, '');

    const normalizedInputValues = Object.keys(inputValues).reduce((acc, key) => {
        acc[normalizeKey(key)] = inputValues[key];
        return acc;
    }, {})

    const replacePlaceholders = (template, values) => {
        return template.replace(/\$\{([^}]+)\}/g, (match, placeholder) => {
            const normalizedPlaceholder = normalizeKey(placeholder);
            return values[normalizedPlaceholder] || match;
        });
    };

    const filledStory = replacePlaceholders(storyTemplate, normalizedInputValues)

    console.log("Filled story:", filledStory); // Log the final filled story

    return (
        <>
            <p>{filledStory}</p>
            <button onClick={onReset}>Choose A New Story</button>
        </>
    );
}

export default Story;