import { useEffect, useState } from "react";
export function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(function calculateWindowWidth() {
        // PART 1: THE ACTION (What the effect does)
        const handleResize = () => {
            console.log("Window resized!");
            setWindowWidth(window.innerWidth);
        };

        // We reach outside React to touch the browser's DOM API
        window.addEventListener("resize", handleResize);

        // PART 3: THE CLEANUP FUNCTION
        // If this component is removed from the screen, we MUST remove the listener.
        // Otherwise, we create a massive memory leak.
        return () => {
            console.log("Cleaning up the listener!");
            window.removeEventListener("resize", handleResize);
        };
    }, []); // PART 2: THE DEPENDENCY ARRAY (The Triggers)

    return (
        <div className="text-xl font-bold">Window Width: {windowWidth}px</div>
    );
}

{/*
5 === 5
const [trigger, setTrigger] = useState(0);

// An object created inside the component
const userConfig = { role: 'admin' };

useEffect(() => {
  console.log("Effect ran! Sending config to analytics...");
}, [userConfig.role]); // We put an object in the dependency array



// THE "VIBE CODING" DATA FETCH
useEffect(() => {
  let isMounted = true;

  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      if (isMounted) setData(data);
    });

  return () => { isMounted = false };
}, []);
*/}