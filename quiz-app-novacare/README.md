Oppgave: Lag en app som henter data fra contentful api og viser det frem i et brukergrensesnitt.

Fremgangsmåte:

1. Lag skjelett for prosjektet med "hello world"

2. Finn ut hvordan dataen som skal hentes ser ut:

   - For å gjøre dette brukte jeg funksjonen som var gitt i oppgavebeskrivelsen:

     - const response = await contentfulClient.getEntries({
       content_type: "accordion",
       include: 2,
       });

3. Lag en query som henter ut ønsket data

   - Gå til grapghql test-nettsiden: https://graphql.contentful.com/content/v1/spaces/<...>/environments/<...>/explore?access_token=<...>
   - Her så jeg typene for dataen og lagde egne typer i prosjektet: AccordionItem og AccordionItemCollection var de typene jeg fant relevante for oppgaven

4. Rediger frontend slik at det ser bra ut og at dataen som er hentet vises korrekt i brukergrensesnittet.

   - Inkluder håndtering av loading- og error-state
