# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).

# Shuffle Pokemon

In mijn project heb ik een pagina gemaakt die willekeurig een pokemon uitkiest en daarvan de data geeft. Men zou dan in werkelijkheid deze kunnen liken/ opslaan in favorieten, maar voor nu heb ik deze niet werkelijk gemaakt. Dit zijn gegevens van 10 pokemon, die allemaal op willekeurige volgorde worden getoond, er kan dus ook 2 (of meer) keer hetzelfde pokemon achter elkaar verschijnen.

## Hoofdstuk interface

## Interface design principles 04: Keep users in control

De gebruiker wil weten wat er gebeurt wanneer hij een bepaalde knop indrukt of iets dergelijks. Door middel van tekst op de knop te plaatsen, weet de gebruiker wat er dan gaat gebeuren; er komt namelijk een nieuwe pokemon. Door dit te doen wordt de gebruiker niet verrast met de uitkomst.

## Interface design principles 08: Provide a natural next step

Omdat er maar 1 interactie is, kan de gebruiker niet verward raken met wat de volgende stap zou kunnen zijn. Het is in 1 oogopslag duidelijk dat op de grote knop drukken zorgt voor nieuwe data.

## Interface design principles 09: Appearence follows behavior

Een 'like' knop zijn we tegenwoordig allemaal gewend van instagram of een ander social media platform. Doordat ik in mijn like button een hartje heb toegevoegd, herkennen mensen dit als een knopje om iets leuk te vinden. Men kan dus voorspellen wat er gebeurt wanneer hij op het knopje drukt. Voor de rest lijken de buttons ook echt op buttons; wanneer het lijkt op een knop, moet het zich ook gedragen als een knop.

## Interface design principles 11: Strong visual hierarchies work best

De gebruiker moet op de goede volgorde kijken naar je scherm om zo het beste resultaat te verkrijgen. Doordat mijn koptekst en plaatje zo opvallend en groot zijn, is dit het punt waar de gebruiker zich als eerste op focust. Daarna kijken ze naar de gegevens en tot slot naar de knoppen.

## Hoofdstuk UI events

## Blank state:

In het begin staat er alleen maar 2 knoppen. De gebruiker weet precies wat hij moet doen wanneer hij op de pagina komt, want er is niet veel meer te doen. Bij het eerste gebruik heb je ook nog geen pokemon op het scherm, daarna telkens wel.

## Ideal state:

Wanneer er een pokemon in beeld is met alle gegevens en het like knopje is ingedrukt, dan bevinden we ons in de ideal state. Dit is de volledige content van de pagina, en dus ook het maximale wat er gegeven kan worden.

## Hoofdstuk code

In het begin roep je de API aan zoals in de tutorial. Daarna vraag je data aan van de pokemon. Door middel van een /, zorg je ervoor dat er verschillende data naar voren komen. Daarna zette ik de data om naar HTML door middel van createElement. Door [''] te gebruiken, kon ik zelf bepalen wat er voor of na de data zou staan. Uiteindelijk komt er een stukje code dat ervoor zorgt dat wanneer je op de button klikt, je dus een willekeurige pokemon krijgt. Omdat de data niet op elkaar geplakt moet worden, haalt hij eerst alles weg tot hij een nieuwe pokemon laat zien. De CSS is relatief eenvoudig; een achtergrondje, paar pseudo-elementen voor de interface en voor de rest styling om het net wat mooier te maken.
