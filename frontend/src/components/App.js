import React, {useState, useEffect} from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api')
        .then(response => response.json())
        .then(response => setData(response.message))
    }, []);

    return (
        <p>
            {
                !data ? "Loading..." : data
            }
        </p>
    )
}

export default App;