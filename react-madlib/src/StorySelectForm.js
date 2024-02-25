import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from 'uuid';

function StorySelectForm({ arr, onStorySelect }) {
    const [selected, setSelected] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        onStorySelect(selected);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <select
                    name="story"
                    value={selected}
                    onChange={(e) => {
                        setSelected(e.target.value);
                    }} >
                    <option value="">--Please Choose A Story--</option>
                    {arr.map((story) => (
                        <option key={uuid()} value={story[0][0]}>{story[0][0]}</option>
                    ))}
                </select>
                <button>Select Story</button>
            </form>
        </>
    );
}

export default StorySelectForm;