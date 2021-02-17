# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

https://lapitioza.github.io/frontend-voor-designers-2021/opdracht1/opdracht.1/

# Project titel

Plaatjes op kleur generator

## interface

Principle 4: Keep users in control
Door de titel weten de gebruikers wat hen verwacht wordt. Wanneer ze de kleuren kiezen, wordt het knopje 'klikbaar' tentoongesteld. Hierdoor weet de gebruiker dat de input die ze gegeven hebben correct was, en dat ze daarom dus op het knopje kunnen klikken. Ook op de button staat er wat men kan verwachten wanneer hij/zei erop klikt.

Principle 11: Strong visual hierarchies work best
De gebruikers lezen van boven naar beneden, wat ook de bedoeling is. Wanneer ze hebben gelezen hoeveel kleuren ze mogen kiezen, deze kleuren gekozen hebben en op het knopje gedrukt hebben, zien ze pas de plaatjes onderaan. De gebruikers weten op welke volgorde ze moeten kijken.

## code

Met HTML heb ik de plaatjes toegevoegd die de kleurencirkel vormen. Deze heb ik met CSS gepositioneerd met margin, en met JavaScript heb ik de plaatjes grijs gemaakt wanneer je erop klikt. De plaatjes staan in een Array, en de grijze plaatjes staan op volgorde van 1 tot 6. Door middel van de array kon ik de grijze plaatjes koppelen aan de gekleurde plaatjes. Na het klikken van 3 plaatjes, veranderd de CSS van het knopje. Wanneer men de kleuren gekozen heeft, kan hij/zij op het knopje drukken. Dan verschijnen er allemaal plaatjes. Deze plaatjes zitten in 1 img, het is een screenshot voor het gemak. Ze hebben een classnaam 'hidden' gekregen. Met JavaScript heb ik de class laten verwijderen.
