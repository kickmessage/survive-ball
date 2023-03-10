## task list 

### (first-priority/to-do)
- scene reset instead of window reload after round completion
- draw line streak (impl position update on frame) after ball hit

### (bugs)
- if user spams click during countdown additional numbers will continue to pop up inside the 'ring'
- sometimes text result object ('home run!/out') will clip into an invisible object
    - might be fixable with changing logic from conditional opacity, to conditional visibility, due to the way react three fiber and react component unmounting works but idk

### (secondary-priority/to-do-after-first-priority)
- leaderboard submission prompt after run is completed
- code cleanup (@dev, @todo)
- settings QOL tweaks (pitch speed, cursor, hit velocity, etc.)
- increase difficulty as rounds go on
- HUD (lives, score, difficulty(???))
- type all state pulls (currently set as any for everything)


### (wants/maybes)
- rogue-lite elements?
    - can buy upgrades every 10 rounds or something
- cosmetic tweaks?
    - purchases from a shop or something, stored to your "account/username" type of thing
- strictly type EVERYTHING
    - is a want/maybe because this is obviously the ideal case for every repository but typescript can be fucky sometimes so not holding any attachment to this.
    - main objective right now is just to make the thing work!!



