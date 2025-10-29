import React from "react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          UI Components Test
        </h1>

        {/* ImageWithFallback Test */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
            ImageWithFallback Component
          </h2>
          <div className="flex gap-4">
            <div>
              <p className="mb-2">Valid Image:</p>
              <ImageWithFallback
                src="https://via.placeholder.com/150"
                alt="Valid image"
                className="w-32 h-32 border"
              />
            </div>
            <div>
              <p className="mb-2">Invalid Image (shows fallback):</p>
              <ImageWithFallback
                src="https://invalid-image-url.com/image.jpg"
                alt="Invalid image"
                className="w-32 h-32 border"
              />
            </div>
          </div>
        </div>

        {/* Accordion Test */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Accordion Component</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components' aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;
