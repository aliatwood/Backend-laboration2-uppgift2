# CV Webbplats

En frontend-webbapplikation som konsumerar ett REST API för att visa och hantera arbetserfarenheter.

## Sidor

- **index.html** - Visar alla arbetserfarenheter hämtade från API:et
- **add.html** - Formulär för att lägga till en ny arbetserfarenhet
- **about.html** - Information om webbplatsen och dess syfte

## Funktionalitet

Webbplatsen använder Fetch API för att kommunicera med backend-API:et. GET hämtar alla poster, POST lägger till nya och DELETE tar bort befintliga poster. Datan valideras i JavaScript innan POST-anrop skickas.

## API

Webbplatsen kommunicerar med detta API:
https://backend-laboration2-uppgift1-production.up.railway.app/api/workexperience

## Tekniker

HTML, CSS och JavaScript med Vite som utvecklingsmiljö.

## Publicerad webbplats
Webbplatsen publiceras automatiskt via **GitHub Pages**.
[Länk till den publicerade webbplatsen](https://aliatwood.github.io/Typescript-laboration1/)
