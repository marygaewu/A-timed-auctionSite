##### A timed auction site the winner is the highest bidder. This is built with reach and react
Note: words in brackets correspond to variable/const names in the program code.
This auction platform has two kinds of actors, the Auctioneer and the Bidders.
•	The Auctioner starts initiates the auction, by setting the Starting bid ( staringBid )and the duration of auction (deadline).
•	The Auctioneer also inputs the Id of the item being auctioned representing the token for the Item.
•	Each bidder can is given a chance to place a bid for every placed bid, the system determines the highest (highestBid) Bid and releases the outcome;
•	Then open the window for bids to be placed again by each bidder.
•	This continues in a cycle until the duratio of the auction is has been exhausted.
##### After this,
•	The winning bidder, performs a transaction,
•	Transfering funds equal to the Winning bid he/she placed,to the actioneer,
•	And the auctioneer also Transfers the Id of the auctioned Item to the winning Bidder.
##### Installation process
Node.js must be installed in your system.
After cloning the project with $ git clone https://github.com/itublockchain/Nft-With-Auction-System.git
$ cd Nft-With-Auction-System
use $ npm install package.json to install dependencies
You need a copy of reach to get the devnet running. If you don't have one already
$ cd src/
$ curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach
After that running $ REACH_CONNECTOR_MODE=ALGO ./reach devnet (which runs the ALGORAND devnet inside the terminal)
go to the parent directory and start the React app $ cd .. ; npm run start
This will run the web-app in the localhost:3000

