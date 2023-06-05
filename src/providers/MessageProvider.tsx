import { createContext, ReactNode, useContext } from 'react';

import { useSharedState } from '../hooks/useSharedState.tsx';

interface Message {
  id: string;
  title: string;
  message: string;
}
interface MessageContextType {
  messages: Message[];
  addMessage: (message: Message) => void;
}

const MessageContext = createContext<MessageContextType>({
  messages: [],
  addMessage: () => undefined,
});

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useSharedState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages((messages: Message[]) => [...messages, message]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
