let player = {
    name: "Player",
    health: 2,
    isHit: false,
    // Other player properties...
  };
  
  // Function to handle when the player gets hit
  function handleHit() {
    // Check if the player is already hit
    if (!player.isHit) {
      // Change player properties to represent the new character
      player.name = "New Character";
      player.health = 1;
      // Update any other properties accordingly
  
      player.isHit = true; // Mark the player as hit to prevent multiple transformations
    }
  }
  
  // Example usage
  console.log("Before hit:", player);
  handleHit();
  console.log("After hit:", player);
  