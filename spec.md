# Netflix UI Clone

## Current State
New project with no existing application files.

## Requested Changes (Diff)

### Add
- Profile selection screen (Who's Watching) with 4 animated profile avatars
- Main app with bottom tab navigation: Home, New & Hot, Games, Search, Downloads
- Home screen: hero featured content (Oppenheimer) with Play/Info buttons, transparent gradient nav bar with Netflix logo + profile avatar, scrollable movie rows (Today's Top Picks, Top 10, New on Netflix, Familiar TV Favorites, Mobile Games)
- Top 10 row with numbered overlapping poster cards
- Movie detail modal: poster, title, year, rating, duration, description, cast, Play/Download/Like/Dislike/Share buttons
- New & Hot screen: upcoming events list with expandable cards (Jake Paul vs Tyson, The Madness, Focus, etc.)
- Games screen: grid of game thumbnails
- Search screen: search input + category grid + results
- Downloads screen: empty state with download icon

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Set up data files: movies.json, users.json, new.json with full data from GitHub repo
2. Build ProfileSelect screen with staggered animation
3. Build main layout with bottom tab bar (Home, New & Hot, Games, Search, Downloads icons)
4. Build Home screen with hero banner + gradient overlay + play/info buttons + scrollable category rows
5. Build Top10Row component with ranking numbers
6. Build GameList component with grid layout
7. Build MovieModal for detail view
8. Build NewAndHot screen with events cards
9. Build Search screen with category grid
10. Build Downloads screen
