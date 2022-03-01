Skapa en applikation där användaren kan hantera olika betalkort. Användaren ska kunna skapa upp till max 4 kort, och måste alltid minst ha ett kort i sin e-wallet. 

Tekniker som ska användas i denna app är följande:
●  Create-react-app
●  Inherited properties ( props ) 
●  State
●  Redux
●  De-structuring
●  Array methods 
●  React Router
●  Life Cycle Hooks 
●  API calls 

Applikationen ska ha två routes :

/home
●  Högst upp ska det visas ett aktivt kort.
●  Om användaren har fler kort, ska dessa finnas listade under det aktiva kortet.
●  Det ska finnas en Add new card -knapp, som routar användaren vidare till /addcard.
●  Vid klick på kort i listan så ska den läggas som active card högst upp i vyn.

/addcard
●  Ett nytt kort ska kunna läggas till med följande information: Vendor, card number, cardholder, expire month, expire year, CCV.
●  För kortutgivare ska det hårdkodas in minst tre alternativ man kan välja mellan. Den användaren väljer ska stå på kortet uppe till höger (t.ex. Mastercard, Visa, American Express etc.).
●  Högst upp ska en förhandsvisning av kortet finnas, som uppdateras automatiskt när användare fyller i informationen.