import { useEffect, useState } from 'react';

type UseSharedReturnType<T> = [
  T,
  (newState: T | ((prevState: T) => T)) => void,
];
export function useSharedState<T = any>(
  initialState: T,
): UseSharedReturnType<T> {
  const [state, setState] = useState<T>(initialState);

  const broadcastChannel = new BroadcastChannel('messageChannel');

  const setSharedState = (newState: T | ((prevState: T) => T)): void => {
    setState((prevState: T): T => {
      const updatedState =
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        typeof newState === 'function' ? newState(prevState) : newState;

      broadcastChannel.postMessage(JSON.stringify(updatedState));

      return updatedState;
    });
  };

  const handleMessage = (event: MessageEvent) => {
    const newState: T = JSON.parse(event.data);
    setState(newState);
  };

  useEffect(() => {
    broadcastChannel.addEventListener('message', handleMessage);

    return () => {
      broadcastChannel.removeEventListener('message', handleMessage);
    };
  }, []);

  return [state, setSharedState];
}
