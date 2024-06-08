const shuffleDeck = (cards) => {
    cards.sort(() => Math.random() - 0.5);
}

export { shuffleDeck }
  
  