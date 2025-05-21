/* eslint-env jest */ 
import { Button } from "@/components/ui/button";
import React from 'react';
//import { render, screen } from '@testing-library/react'; 
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
// Provides custom jest matchers 
import Our from './Our'; 
// Import the component  
// Mock the Button component if needed, assuming it's a third-party or custom component 
jest.mock('@/components/ui/button', () => {
    return {
      Button: ({ children }: { children?: React.ReactNode }) => <button>{children}</button>,
    };
  });
  
   
        test('renders the love letter and button correctly', () => {   
            // Render the component  
           /* const Our = (): JSX.Element => {
                return (
                  <div>
                    <p>My love endures like the everlasting fragrance</p>
                    <button>Hello</button>
                  </div>
                );
              }; */
              const { getByText,getByRole } = render(<Our />);
              // Check if the paragraph text is in the document 
                const paragraphText = getByText(/My love endures like the everlasting fragrance/i);  
                expect(paragraphText).toBeInTheDocument();    // Check if the button with text "Hello" is in the document

                const buttonElement = getByRole('button', { name: /Hello/i });  
                expect(buttonElement).toBeInTheDocument(); }); 



