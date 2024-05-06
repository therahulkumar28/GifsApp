import  { createContext, ReactNode } from "react";

// Define the type for the context value
interface GifContextType {
    // Define your context properties here
}

// Create the context
const Gifcontext = createContext<GifContextType | undefined>(undefined);

// Define the type for the props of GifProvider
interface GifProviderProps {
    children: ReactNode; // ReactNode represents any valid React child: JSX, string, null, etc.
}

// Create the GifProvider component
const GifProvider = ({ children }: GifProviderProps) => {
    // Define your context value here
    const gifContextValue: GifContextType = {
        // Initialize your context properties here
    };

    return <Gifcontext.Provider value={gifContextValue}>{children}</Gifcontext.Provider>;
};

export default GifProvider;
