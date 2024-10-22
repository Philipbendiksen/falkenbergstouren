"use client";

import emailjs from "emailjs-com";
import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null); // Ändra till string | null

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Förhindra att sidan laddas om
    setIsSubmitting(true); // Visa att vi skickar e-post

    // Typkonvertera e.target till HTMLFormElement
    const form = e.target as HTMLFormElement;

    // Kontrollera att alla miljövariabler är definierade
    const serviceId = process.env.REACT_APP_SERVICE_ID; // Ditt serviceId
    const templateId = process.env.REACT_APP_TEMPLATE_ID; // Din mall
    const publicKey = process.env.REACT_APP_PUBLIC_KEY; // Din offentliga nyckel

    if (!serviceId || !templateId || !publicKey) {
      setStateMessage("Konfiguration saknas. Kontrollera dina miljövariabler.");
      setIsSubmitting(false);
      return;
    }

    // Skicka e-post med emailjs
    emailjs
      .sendForm(serviceId, templateId, form, publicKey) // Använd den typade form-variabeln här
      .then(
        (result) => {
          setStateMessage("Meddelandet har skickats!"); // Meddelande vid framgång
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Dölja meddelandet efter 5 sekunder
        },
        (error) => {
          console.error("Fel vid e-postskick:", error);
          setStateMessage("Något gick fel, försök igen senare"); // Meddelande vid fel
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    // Återställ formuläret
    form.reset();
  };

  return (
    <section className="mt-10">
      <div className="bg-secondary p-6 rounded-lg h-80 text-center flex items-center justify-center">
        <form
          className="flex justify-center items-center rounded-xl h-full w-full md:w-2/3 bg-accent p-6 space-x-4 hover:scale-110 transition-transform duration-300 ease-in-out"
          onSubmit={sendEmail} // Lägg till onSubmit-hanterare
        >
          <div className="flex flex-col space-y-4 w-1/2">
            <div className="w-full">
              <label className="block text-sm text-gray-700"></label>
              <input
                type="text"
                className="mt-1 text-sm sm:text-lg text-primary p-2 border border-gray-300 rounded-md w-full"
                placeholder="Ditt namn"
                name="user_name" // Ge fältet ett namn för emailjs
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-georgia text-gray-700"></label>
              <input
                type="email"
                className="mt-1 text-sm sm:text-lg font-georgia text-primary p-2 border border-gray-300 rounded-md w-full"
                placeholder="Din email"
                name="user_email" // Ge fältet ett namn för emailjs
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-georgia p-2 rounded-md w-full bg-primary hover:bg-secondary"
              disabled={isSubmitting} // Disabla knappen medan vi skickar
            >
              {isSubmitting ? "Skickar..." : "Skicka"}
            </button>
          </div>
          <div className="w-1/2 ">
            <textarea
              className="mt-1 text-sm sm:text-lg p-2 font-georgia text-primary rounded-md w-full h-40"
              placeholder="Kontakta oss? skriv här!"
              name="message" // Ge fältet ett namn för emailjs
              required
            ></textarea>
          </div>
        </form>
      </div>
      {stateMessage && (
        <p className="mt-4 text-center text-red-500">{stateMessage}</p> // Visa meddelande
      )}
    </section>
  );
};

export default ContactForm;
