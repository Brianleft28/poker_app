export interface Deck {
  success: boolean;
  deck_id: string;
  remaining: number;
  shuffled: boolean;
}
interface Card {
  code: string;
  image: string;
  images: {
    png: string;
    svg: string;
  };
  suit: string;
  value: string;
}

export interface Hand {
  cards: Card[];
  deck_id: string;
  remaing: number;
  success: boolean;
}
