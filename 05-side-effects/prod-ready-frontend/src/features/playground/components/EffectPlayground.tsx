import { useState, useEffect } from 'react';
import { WindowTracker } from '../../../components/WindowTracker';
export function EffectPlayground() {
  const [count, setCount] = useState(0);

  // This is a Side Effect: Modifying the browser's document title
  useEffect(() => {
    console.log("3. Effect: The Effect runs!");
    document.title = `Count is ${count}`;
  });

  console.log("1. Render: The Component Function runs!");

  return (
    <div className="p-8">
      {console.log("2. Paint: The UI is being painted!")}
      <h1 className="text-2xl mb-4">Check your console!</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Trigger Re-render
      </button>
      <div className='mt-5 p-4 border-2 border-pink-600 rounded'>
        <WindowTracker />
      </div>

    </div>
  );
}