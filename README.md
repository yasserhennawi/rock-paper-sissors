# rock-paper-sissors
Welcome to a simple app that implements Rock-Paper-Sissors.

## Get started
  ##### To run the app locally after cloning, first you need to run: 
  - `npm install`
  ##### Then to try the CLI version of the game, you can run 
  - `npm run start:cli`
  ##### Where you'd have all the instructions listed in the terminal for how to play.
  Alternatively, if you want to run the express server to exposing the APIs, you should run: 
  - `npm start`
  ##### and the app should be listening on the PORT environment var, or `3000` by default.

## APIs
 - GET `/play` should return simulated game by the CPU, with the response: 
```
{
   "success": Bool,
   "computer": 'p'|'s'|'r',
   "computer2": 'p'|'s'|'r',
   "winner": "computer" | "player" | null (indicating draw)
 }
```
 - POST `/play` should return game resutls between CPU and the player, where the body is:
```
{
  input: 'p'|'s'|'r'
}
```
 and the response: 
```
{
   "success": Bool,
   "player": 'p'|'s'|'r',
   "computer": 'p'|'s'|'r',
   "winner": "computer" | "player" | null (indicating draw)
 }
```
