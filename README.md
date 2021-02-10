# Welcome to the Hallowed Grounds :crossed_swords:
#
### About it

This repository is a Marketplace Project signed to me by Yoyo Sensei from Japan.

The main goal is creating a card game with marketplace format, making it possible to trade, draw and discard cards, show hand, build decks, score and eventually chat.

The rules for this project are:

- Only HTML, CSS and JavaScript are allowed;
- It is not allowed Frameworks;
- Bootstrap is allowed.

This same project shall be individually made using Vue.js framework in the near future as part of a programming Yoyo Sensei class.
##

#### The first commit

The first commit is an open repository only with this _README_ file.
##

### Game rules
**Hallowed Grounds** is a card game that involves two or three players who are engaged in a battle of land domination. Each player has their own deck, either one previously constructed or made from a limited pool of cards for the event. All the players start the game with the _Castle_ card on the board, which have 30 as their "_life total_" and loses the game when their life total is reduced to zero. A player can also lose if they must draw from an empty deck.

#### Cards in Hallowed Grounds
There are three types of cards:
- _Castle_
- _Ground_
- _Brave_

The _Castle_ type is the life total of a player, the very first card on the board and it has 30 of life in a total, called _Defense_. This card has two attributes, _Defense_ and _Area_.

The _Ground_ type is the land where the braves battle. This card has four attributes, _Defense_, _Area_, _Capacity_ and _Cost_.

The _Brave_ type is the soldier-like, that can attack or protect. This card has three attributes, _Defense_, _Attack_ and _Cost_.

#### Attributes

There are five card attributes:
- _Attack_
- _Defense_
- _Area_
- _Capacity_
- _Cost_

Basicaly, the _Defense_ attribute is the capabillity to defend an attack. The card is removed from the game when the _Attack_ is greater than the _Defense_. Thus, the card that received the "damage" is discarded to the "discard pile". If the card is defending a castle from a direct attack to it, the card is not discarded because the attack was made against the _Castle_.

The _Area_ attribute is how many _Brave_ cards can be stack over it. Only the Castle and Ground have this attribute. On the other hand the _Cost_ is how much from _Area_ the card take from.

For instance, whether a Ground card has Area of 5, the player only can stack a total of 5 on the card, for example two card with cost of 2 and one with cost of 1.

Lastly, the _Capacity_ attribute is how many cards of that type the player can put on the board. Whether there are two cards in game with Capacity of 2, another one only can be placed on the board if one of these cards is discarded.

#### Attacks

Attacks can be executed against any type of card. If an attack is directed against a Ground card and there are Braves on it, the Braves shall defend the Ground with their Defense attribute. If the Ground is hit by an attack greater than the sum of defenses, the Ground is discarded and the Braves stay inactives until another Ground is put in game under them. In this case, the Braves can receive attacks and cannot be moved to Castle neither to another Ground.

#### Turns

The turns are basicaly when the player of the turn can draw the card and execute movements. The movements can be attacks or movement of troops going from a Ground to another one or to the Castle. The player can place in game as many cards as needed in this moment.

#### Decks and number of cards

There are three types of decks:
- <span style="color:purple">_Dread cards_ (purple)</span>
- <span style="color:darkgreen">_Holy cards_ (green)</span>
- <span style="color:darkred">_Bloody cards_ (red)</span>

The players can choose their deck cards freely, respecting the limit of 50 cards. _(The Castle is not counted for the number of deck cards.)_

Mixed decks are for adventurers. When a mixed deck is created, only the cards with their respective card colours can be place on the _Ground_ card, Brave cards in purple with Ground cards in purple and so on.

To start the match, players need to shuffle the decks and draw 7 cards, each Castle is placed on the board and the player who starts the turn is decided by agreement between the players.




### Copyright

This repository is only for front-end and back-end practices, and it is for non-commercial purposes.